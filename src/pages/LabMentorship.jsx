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
import { setShowItems2 } from "../redux/labSidebarSlice";

import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import LayoutQ from "../components/LayoutQ";

import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const tableStyle = {
  border: "1px solid rgba(224, 224, 224, 1)",
  borderCollapse: "collapse",
};

const Alert = styled(MuiAlert)(({ theme }) => ({
  // width: '100%',
}));

export function LabMentorship() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mentorship_comment: "",
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
                "LABORATORY MENTORSHIP PROGRAM " || ""
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
          <br />
          <br />
          <Table style={tableStyle}>
            <TableHead>
              <TableRow></TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TextField
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  fullWidth
                  label=" Mentorship Program Comments"
                  {...register("logistic_general_comment")}
                  type="text"
                  multiline
                  rows={20}
                />
              </TableRow>

              <TableRow>
                <TableCell>
                  <br />
                  <Button variant="contained" color="success">
                    Open Report(s)
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
