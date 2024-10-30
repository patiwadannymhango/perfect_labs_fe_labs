/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";

import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

import Fab from "@mui/material/Fab";

import CardHeader from "@mui/material/CardHeader";

import { useDispatch } from "react-redux";
import { setShowItems2 } from "../redux/labSidebarSlice";

import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import LayoutQ from "../components/LayoutQ";

import MyRadioGroup from "../components/MyRadioGroup";

import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const tableStyle = {
  border: "1px solid rgba(224, 224, 224, 1)",
  borderCollapse: "collapse",
};

const cellStyle = {
  border: "1px solid rgba(224, 224, 224, 1)",
  padding: "8px",
  width: "500px", // Set the width to 400px
};

const scoreCellStyle = {
  ...cellStyle, // Include any common styles
  width: "500px", // Set the width to 400px
};

const sectionCellStyle = {
  ...cellStyle, // Include any common styles
  // width: '500px', // Set the width to 400px
};

const Alert = styled(MuiAlert)(({ theme }) => ({
  // width: '100%',
}));

const FloatingActionButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  left: theme.spacing(2),
  zIndex: 1200,
}));

const lab_adequate_options = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const yes_no_option = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

export function LabLogisticSupply() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      is_there_a_system_for_scm: "",
      does_lab_have_a_store_room_reagent: "",
      is_there_logistics_officer: "",
      is_the_logistics_officer_trained: "",
      does_lab_have_refrig_reagent: "",
      logistic_general_comment: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [errorPut, setErrorPut] = useState("");

  const [labName, setLabName] = useState("");

  // Watch the selected Options

  const { lab_profileId } = useParams();
  const navigate = useNavigate();

  const { data, error } = useSWR(
    `/slipta/lab_profile/${lab_profileId}/`,
    fetcher,
    {
      refreshInterval: 10000,
    }
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    axiosService
      .delete(`/slipta/lab_profile/${lab_profileId}/`)
      .then(() => {
        navigate(`/`);
      })
      .catch((err) => {
        if (err.message) {
          setErrorPut(err.request.response);
        }
        setSnackbarOpen(true);
        setSnackbarMessage(`Error : ${errorPut}`);
      });
    setOpen(false);
  };

  const onSnackbarClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowItems2(true));

    if (data) {
      // Populate form fields from data
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          setValue(key, data[key]);
        }
      }
      setLabName(data.lab_name);
    }
  }, [data, setValue, dispatch]);

  const user = getUser();

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Failed to load data
        </Typography>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const onSubmit = (form) => {
    form = {
      ...form,
      auditor: user.id,
      lab_profile: lab_profileId,
    };

    axiosService
      .put(`/slipta/lab_profile/${lab_profileId}/`, form)
      .then(() => {
        setSnackbarOpen(true);
        setSnackbarMessage(`Laboratory Updated`);
      })
      .catch((err) => {
        if (err.message) {
          setErrorPut(err.request.response);
        }
        setSnackbarOpen(true);
        setSnackbarMessage(`Error : ${errorPut}`);
      });
  };

  return (
    <LayoutQ>
      <div>
        <form
          id="lab-profile-form"
          onSubmit={handleSubmit(onSubmit)}
          component={Paper}
          style={{ width: "100%" }}
          encType="multipart/form-data"
        >
          <CardHeader
            title={
              labName.toUpperCase() +
                " : " +
                "LABORATORY LOGISTICS AND SUPPY CHAIN MANAGEMENT " || ""
            }
            sx={{
              backgroundColor: "#ddd",
              borderBottom: "1px solid #e0e0e0",
              "& .MuiCardHeader-title": {
                color: "text.secondary",
              },
            }}
          />

          {/* <FormLabel component="legend">Laboratory Staffing Summary:</FormLabel> */}

          <Table style={tableStyle}>
            <TableHead>
              <TableRow>
                <TableCell align="left" style={{ width: "40%" }}></TableCell>
                <TableCell align="left" style={{ width: "20%" }}></TableCell>
                <TableCell align="left" style={{ width: "40%" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">
                  Is there a system for supply Chain Management, eLMIS
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="is_there_a_system_for_scm"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>

                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("is_there_a_system_for_scm_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Does the Laboratory have a store Room for reagent and
                  consumable storage
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="does_lab_have_a_store_room_reagent"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>

                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("does_lab_have_a_store_room_reagent_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">Is there a Logistics Officer</TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="is_there_logistics_officer"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>

                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("is_there_logistics_officer_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Is the Logistics Officer trained
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="is_the_logistics_officer_trained"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>

                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("is_the_logistics_officer_trained_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <p>For review of eLMIS reports for the Laboratory click.</p>{" "}
                  <a href="https://zm-elmis.org">eLMIS</a>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Does the Laboratory have Refrigerators specifically for the
                  Laboratory reagent storage?
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="does_lab_have_refrig_reagent"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>

                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("does_lab_have_refrig_reagent_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <br />
          <br />
          <TextField
            InputProps={{ readOnly: true }}
            variant="outlined"
            fullWidth
            label=" Logistics and Supply Chain Management General Comments"
            {...register("logistic_general_comment")}
            type="text"
            multiline
            rows={2}
          />
        </form>
      </div>
    </LayoutQ>
  );
}
