/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";

import {
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  Button,
  Box,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility"; // Import the view icon

import { Input } from "@mui/material";

import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import FormLabel from "@mui/material/FormLabel";

import { useDispatch } from "react-redux";
import { setShowItems2 } from "../redux/labSidebarSlice";

import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from "@mui/material/styles";
import MuiAlert from "@mui/material/Alert";
import LayoutQ from "../components/LayoutQ";
import { useSelector } from "react-redux";

import MyRadioGroup from "../components/MyRadioGroup";

import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import LabProfile from "./LabProfile";

const tableStyle = {
  border: "1px solid rgba(224, 224, 224, 1)",
  borderCollapse: "collapse",
};

const cellStyle = {
  border: "1px solid rgba(224, 224, 224, 1)",
  padding: "8px",
  width: "500px", // Set the width to 400px
};

const Alert = styled(MuiAlert)(({ theme }) => ({
  // width: '100%',
}));

// Function to format date to 'YYYY-MM-DD'
const formatDateToYMD = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding leading zero for months
  const day = String(date.getDate()).padStart(2, "0"); // Adding leading zero for days
  return `${year}-${month}-${day}`;
};

const lab_adequate_options = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

export function LabSpecimenRef() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      biosafety_level_of_lab: "",
      biosafety_cabinet_class_use: "",
      how_many_biosafety_cabinet_available: null,
      is_are_biosafety_cabinet_certified: "",
      biosafety_cabinet_certification_date: "",

      does_lab_have_biosafety_officer: "",
      has_biosafety_officer_trained: "",
      name_biosafety_officer: "",
      does_lab_have_controlled_access: "",
      list_mechanism_fire_ex: "",
      deos_lab_have_fire_extinguisher: "",
      deos_lab_have_spill_kits: "",

      sop_in_place_for_waste_man: "",
      access_to_a_burner: "",
      access_to_a_modern_incinerator: "",
      sending_waste_to_centralized_loc: "",

      is_safety_manual_available: "",
      is_there_a_focal_point_bio: "",
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
      const formattedDate = formatDateToYMD(
        data.biosafety_cabinet_certification_date
      );
      setValue("biosafety_cabinet_certification_date", formattedDate);
      console.log(data);
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
          encType="multipart/form-data"
        >
          <CardHeader
            title={labName.toUpperCase() + " : " + "SPECIMEN REFERRAL " || ""}
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
                <TableRow>
                  <TableCell style={{ width: "25%" }}>
                    {" "}
                    <h5>SPECIMEN REFERRAL TO OTHER LABORATORIES</h5>{" "}
                  </TableCell>
                  <TableCell style={{ width: "25%" }}> </TableCell>
                  <TableCell style={{ width: "25%" }}> </TableCell>
                  <TableCell style={{ width: "250%" }}> </TableCell>
                </TableRow>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">
                  Does the laboratory refer the specimens to other more
                  specialized laboratories
                  <br />
                  <MyRadioGroup
                    name="does_lab_ref_specimen_to_sp_lab"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="List the tests referred to other Laboratories"
                    {...register("list_tests_ref_to")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Approximation of the distance to the referral Laboratory (In Kilometers)"
                    {...register("app_dis_ref_lab_km")}
                    type="number"
                  />
                </TableCell>
              </TableRow>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: "2%" }}></TableCell>
                    <TableCell style={{ width: "40%" }}> </TableCell>
                    <TableCell style={{ width: "40%" }}> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ width: "2%" }}></TableCell>
                    <TableCell style={{ width: "40%", marginLeft: -5 }}>
                      {" "}
                      Turn Around Time (TAT) for the referred tests{" "}
                    </TableCell>
                    <TableCell style={{ width: "40%" }}> </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ ...cellStyle, width: "2%" }}>
                      {" "}
                      S/N
                    </TableCell>
                    <TableCell style={{ ...cellStyle, width: "40%" }}>
                      {" "}
                      Test
                    </TableCell>
                    <TableCell style={{ ...cellStyle, width: "40%" }}>
                      {" "}
                      TAT(Days)
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell> 1</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_for_ref_tests_1")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_for_ref_tests_1_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 2</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_for_ref_tests_2")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_for_ref_tests_2_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 2</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_for_ref_tests_3")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_for_ref_tests_3_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 4</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_for_ref_tests_4")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_for_ref_tests_4_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 5</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_for_ref_tests_5")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_for_ref_tests_5_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <TableRow>
                <TableCell align="right">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("tat_for_ref_tests_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table style={tableStyle}>
            <TableHead>
              <TableRow>
                <TableRow>
                  <TableCell style={{ width: "25%" }}>
                    {" "}
                    <h5>SPECIMEN REFERRAL FROM OTHER LABORATORIES </h5>{" "}
                  </TableCell>
                  <TableCell style={{ width: "25%" }}> </TableCell>
                  <TableCell style={{ width: "25%" }}> </TableCell>
                  <TableCell style={{ width: "250%" }}> </TableCell>
                </TableRow>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">
                  Does the laboratory receive referral specimens from other
                  laboratories
                  <br />
                  <MyRadioGroup
                    name="does_lab_recv_specimen_from"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="right">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="List the tests received from other Laboratories for testing"
                    {...register("list_tests_recv_from")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ width: "2%" }}></TableCell>
                    <TableCell style={{ width: "40%" }}> </TableCell>
                    <TableCell style={{ width: "40%" }}> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ width: "2%" }}></TableCell>
                    <TableCell style={{ width: "40%" }}>
                      {" "}
                      Turn Around Time(TAT) from the referred tests{" "}
                    </TableCell>
                    <TableCell style={{ width: "40%" }}> </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ ...cellStyle, width: "2%" }}>
                      {" "}
                      S/N
                    </TableCell>
                    <TableCell style={{ ...cellStyle, width: "40%" }}>
                      {" "}
                      Test
                    </TableCell>
                    <TableCell style={{ ...cellStyle, width: "40%" }}>
                      {" "}
                      TAT(Days)
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell> 1</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_1")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_1_days")}
                        type="text"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 2</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_2")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_2_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 3</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_3")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_3_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 4</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_4")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_4_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 5</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_5")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_5_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell> 6</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_6")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_6_days")}
                        type="text"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 7</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_7")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_7_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 8</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_8")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_8_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 9</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_9")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_9_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell> 10</TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="Test"
                        {...register("tat_from_ref_tests_10")}
                        type="text"
                      />
                    </TableCell>

                    <TableCell
                      align="left"
                      style={{ ...cellStyle, width: "30%" }}
                    >
                      <TextField
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                        label="TAT"
                        {...register("tat_from_ref_tests_10_days")}
                        type="number"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <TableRow>
                <TableCell align="right">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("tat_from_ref_tests_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </form>
      </div>
    </LayoutQ>
  );
}

const enum_options = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];
