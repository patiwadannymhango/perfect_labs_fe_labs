/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";

import { Grid, TextField, FormControl } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  Button,
  Box,
} from "@mui/material";

import CardHeader from "@mui/material/CardHeader";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import LayoutQ from "../components/LayoutQ";
import MyRadioGroup from "../components/MyRadioGroup";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { setShowItems2 } from "../redux/labSidebarSlice";
import { setShowItems3 } from "../redux/sadcasASidebarSlice";

const tableStyle = {
  border: "1px solid rgba(224, 224, 224, 1)",
  borderCollapse: "collapse",
};

const Alert = styled(MuiAlert)(({ theme }) => ({
  // width: '100%',
}));

const lab_adequate_options = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

export function LabAdudit() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      does_lab_participate_in_audits: "",
      does_lab_participate_in_audits_comment: "",

      are_internal_audits_conducted: "",
      are_internal_audits_conducted_comment: "",

      any_certification_audits_conducted: "",
      any_certification_audits_conducted_comment: "",

      any_accreditation_audits_conducted: "",
      any_accreditation_audits_conducted_comment: "",
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
          sstyle={{ width: "100%" }}
        >
          <CardHeader
            title={labName.toUpperCase() + " : " + "LABORATORY AUDITS " || ""}
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
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">
                  Does the laboratory particate in audits
                  <br />
                  <br />
                  <MyRadioGroup
                    name="does_lab_participate_in_audits"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                  <br />
                  <br />
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("does_lab_participate_in_audits_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Are Internal Audits conducted.
                  <br />
                  <br />
                  <MyRadioGroup
                    name="are_internal_audits_conducted"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                  <br /> <br />
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("are_internal_audits_conducted_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Any Certification Audits/Assessments
                  <br />
                  <br />
                  <MyRadioGroup
                    name="any_certification_audits_conducted"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                  <br /> <br />
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("any_certification_audits_conducted_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Any Accreditation Audits/Assessments
                  <br />
                  <br />
                  <MyRadioGroup
                    name="any_accreditation_audits_conducted"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                  <br /> <br />
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("any_accreditation_audits_conducted_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <FormControl fullWidth>
                    <FormLabel sx={{ float: "right", mb: 1 }}>
                      Upload Audit File(s)
                    </FormLabel>
                    <Box>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          setValue("hpcz_license", file); // Set file in the form state
                        }}
                        {...register("hpcz_license")}
                      />
                    </Box>
                  </FormControl>

                  <br />
                  <br />
                  <Button
                    variant="contained"
                    color="success"
                    // startIcon={<SaveIcon />}
                  >
                    Open Document(s)
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </form>
      </div>
    </LayoutQ>
  );
}
