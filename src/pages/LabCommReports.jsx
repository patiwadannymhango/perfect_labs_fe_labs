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

const Alert = styled(MuiAlert)(({ theme }) => ({
  // width: '100%',
}));

const LabCommReports = () => {
  // use form definitions
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      health_post: "",
      is_lab_receives_communication_higher: "",
      is_lab_receives_communication_higher_comment: "",
      is_lab_send_reports_higher_level: "",
      is_lab_send_reports_higher_level_comment: "",
      is_lab_com_with_district_health_office_higher: "",
      is_lab_com_with_district_health_office_higher_comment: "",
      is_lab_com_with_provincial_health_office_higher: "",
      is_lab_com_with_provincial_health_office_higher_comment: "",
      is_lab_com_with_ministry_health_office_higher: "",
      is_lab_com_with_ministry_health_office_higher_comment: "",

      health_p_is_lab_com_with_district_office_lower: "",
      health_p_is_lab_com_with_district_office_cmt_lower: "",
      health_p_is_lab_com_with_provincial_office_lower: "",
      health_p_is_lab_com_with_provincial_office_cmt_lower: "",
      health_p_is_lab_com_with_ministry_office_lower: "",
      health_p_is_lab_com_with_ministry_office_cmt_lower: "",
      health_c_is_lab_com_with_district_office_lower: "",
      health_c_is_lab_com_with_district_office_cmt_lower: "",
      health_c_is_lab_com_with_provincial_office_lower: "",
      health_c_is_lab_com_with_provincial_office_cmt_lower: "",
      health_c_is_lab_com_with_ministry_office_lower: "",
      health_c_is_lab_com_with_ministry_office_cmt_lower: "",
      f_s_is_lab_com_with_district_office_lower: "",
      f_s_is_lab_com_with_district_office_cmt_lower: "",
      f_s_is_lab_com_with_provincial_office_lower: "",
      f_s_is_lab_com_with_provincial_office_cmt_lower: "",
      f_s_is_lab_com_with_ministry_office_lower: "",
      f_s_is_lab_com_with_ministry_office_cmt_lower: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [errorPut, setErrorPut] = useState("");

  const [labName, setLabName] = useState("");

  // Watch the selected Options

  const sel_area_dedicated_lab_comment = watch("is_there_area_dedicated_lab");

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
    console.log("onSubmit");
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
      <form
        id="comms-report-lower-form"
        onSubmit={handleSubmit(onSubmit)}
        component={Paper}
        sx={{ padding: "10px" }}
      >
        <Card sx={{ maxWidth: "100%", mb: 2 }}>
          <CardHeader
            title={
              labName.toUpperCase() + " : " + "COMMUNICATIONS AND REPORTS " ||
              ""
            }
            sx={{
              backgroundColor: "#ddd",
              borderBottom: "1px solid #e0e0e0",
              "& .MuiCardHeader-title": {
                color: "text.secondary",
              },
            }}
          />
          <Table style={tableStyle}>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "40%" }}> </TableCell>
                <TableCell style={{ width: "20%" }}> </TableCell>
                <TableCell style={{ width: "40%" }}> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  COMMUNICATIONS AND REPORTS TO HIGHER LEVELS{" "}
                </TableCell>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
              </TableRow>
              {/* Health Post */}

              {field_options.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <MyRadioGroup
                      name={item.value}
                      options={enum_options}
                      control={control}
                      rules={{ required: "Please select one option" }}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      InputProps={{ readOnly: true }}
                      variant="outlined"
                      fullWidth
                      label="Challenge or Comment"
                      placeholder="Type you challenge or comment"
                      {...register(`${item.value}_comment`)}
                      type="text"
                      multiline
                      rows={2}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "10%" }}></TableCell>
                <TableCell style={{ width: "30%" }}> </TableCell>
                <TableCell style={{ width: "30%" }}> </TableCell>
                <TableCell style={{ width: "30%" }}> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ width: "25%" }}>
                  {" "}
                  COMMUNICATIONS AND REPORTS TO LOWER LEVELS{" "}
                </TableCell>
                <TableCell style={{ width: "25%" }}> </TableCell>
                <TableCell style={{ width: "25%" }}> </TableCell>
                <TableCell style={{ width: "250%" }}> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ ...cellStyle, width: "10%" }}></TableCell>
                <TableCell style={{ ...cellStyle, width: "30%" }}>
                  {" "}
                  Perfect Communication with the District Health Offices
                </TableCell>
                <TableCell style={{ ...cellStyle, width: "30%" }}>
                  {" "}
                  Perfect Communication with the Provincial Health Offices
                </TableCell>
                <TableCell style={{ ...cellStyle, width: "30%" }}>
                  {" "}
                  Perfect Communication with Ministry /Health Services
                  Department
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Health Post</TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="health_p_is_lab_com_with_district_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell align="left">
                  <MyRadioGroup
                    name="health_p_is_lab_com_with_provincial_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="health_p_is_lab_com_with_ministry_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Health Center</TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="health_c_is_lab_com_with_district_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell align="left">
                  <MyRadioGroup
                    name="health_c_is_lab_com_with_provincial_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="health_c_is_lab_com_with_ministry_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Satellite Facilities</TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="f_s_is_lab_com_with_district_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell align="left">
                  <MyRadioGroup
                    name="f_s_is_lab_com_with_provincial_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="f_s_is_lab_com_with_ministry_office_lower"
                    options={enum_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
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
            label="Comment"
            {...register("lower_level_comment")}
            type="text"
            multiline
            rows={2}
            // sx={{ marginLeft:'10px' , marginRight:'50px'}}
          />

          <br />
          <br />
        </Card>
      </form>
    </LayoutQ>
  );
};

export default LabCommReports;

const tableStyle = {
  border: "1px solid rgba(224, 224, 224, 1)",
  borderCollapse: "collapse",
};

const cellStyle = {
  border: "1px solid rgba(224, 224, 224, 1)",
  padding: "8px",
  width: "500px", // Set the width to 400px
};

const enum_options = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

const field_options = [
  {
    id: 1,
    name: "The Laboratory Receives communication",
    value: "is_lab_receives_communication_higher",
  },
  {
    id: 2,
    name: "The Laboratory Sends Reports to higher level",
    value: "is_lab_send_reports_higher_level",
  },
  {
    id: 3,
    name: "Perfect communication with the District Health Offices",
    value: "is_lab_com_with_district_health_office_higher",
  },
  {
    id: 4,
    name: "Perfect communication with the Provincial Health Offices",
    value: "is_lab_com_with_provincial_health_office_higher",
  },
  {
    id: 5,
    name: "Perfect communication with Ministry of Health/Medical Services Department",
    value: "is_lab_com_with_ministry_health_office_higher",
  },
];
