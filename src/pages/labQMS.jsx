/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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

const provinceCityData = {
  "Central Province": [
    "Kabwe",
    "Kapiri Mposhi",
    "Serenje",
    "Mkushi",
    "Mumbwa",
    "Chibombo",
    "Chisamba",
    "Itezhi-Tezhi",
    "Liteta",
    "Mulungushi",
  ],
  "Copperbelt Province": [
    "Ndola",
    "Kitwe",
    "Chingola",
    "Mufulira",
    "Luanshya",
    "Kalulushi",
    "Chililabombwe",
    "Lufwanyama",
    "Masaiti",
    "Mpongwe",
  ],
  "Eastern Province": [
    "Chipata",
    "Petauke",
    "Katete",
    "Lundazi",
    "Nyimba",
    "Sinda",
    "Mambwe",
    "Vubwi",
    "Chadiza",
  ],
  "Luapula Province": [
    "Mansa",
    "Samfya",
    "Kawambwa",
    "Nchelenge",
    "Mwansabombwe",
    "Mwense",
    "Chienge",
    "Chembe",
    "Milenge",
    "Chipili",
    "Lunga",
  ],
  "Lusaka Province": ["Lusaka", "Chongwe", "Kafue", "Chilanga", "Rufunsa"],
  "Muchinga Province": [
    "Chinsali",
    "Mpika",
    "Nakonde",
    "Isoka",
    "Mafinga",
    "Shiwang'andu",
    "Kanchibiya",
    "Lavushimanda",
  ],
  "Northern Province": [
    "Kasama",
    "Mbala",
    "Mpulungu",
    "Mporokoso",
    "Kaputa",
    "Luwingu",
    "Chilubi",
    "Nsama",
    "Senga Hill",
    "Lunte",
  ],
  "North-Western Province": [
    "Solwezi",
    "Kasempa",
    "Mwinilunga",
    "Zambezi",
    "Chavuma",
    "Kabompo",
    "Manyinga",
    "Kalumbila",
    "Mushindamo",
  ],
  "Southern Province": [
    "Choma",
    "Livingstone",
    "Mazabuka",
    "Monze",
    "Kalomo",
    "Namwala",
    "Siavonga",
    "Gwembe",
    "Sinazongwe",
    "Kazungula",
    "Itezhi-Tezhi",
    "Pemba",
    "Zimba",
  ],
  "Western Province": [
    "Mongu",
    "Senanga",
    "Kaoma",
    "Sesheke",
    "Kalabo",
    "Lukulu",
    "Shangombo",
    "Sioma",
    "Nalolo",
    "Mwandi",
    "Limulunga",
    "Mitete",
  ],
};

const lab_adequate_options = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

export function LabQMS() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      is_there_qms_inplace: "",
      is_there_qms_officer: "",
      is_qms_officer_trained: "",
      qms_officer_name: "",
      qms_tool_applied_at_lab: "",
      is_the_lab_enrolled_eqa: "",
      which_lab_enrolled_eqa: "",
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
          encType="multipart/form-data"
        >
          <CardHeader
            title={
              labName.toUpperCase() +
                " : " +
                "LABORATORY QUALITY MANAGEMENT SYSTEM " || ""
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
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">
                  Is there Quality Management System (QMS) in place or being put
                  in place at the Laboratory
                  <br />
                  <br />
                  <MyRadioGroup
                    name="is_there_qms_inplace"
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
                    {...register("is_there_qms_inplace_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Is there a Quality Officer at the Laboratory
                  <br />
                  <br />
                  <MyRadioGroup
                    name="is_there_qms_officer"
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
                    {...register("is_there_qms_officer_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Is the Quality Officer Trained
                  <br />
                  <br />
                  <MyRadioGroup
                    name="is_qms_officer_trained"
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
                    {...register("is_qms_officer_trained_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Name of the Quality Officer"
                    {...register("qms_officer_name")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Which tool(s) or standard(s) is being applied at the Laboratory"
                    {...register("qms_tool_applied_at_lab")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Is there internal Quality Controls in use at the Laboratory
                  <br />
                  <br />
                  <MyRadioGroup
                    name="is_qms_control_in_use"
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
                    {...register("is_qms_control_in_use_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Is the laboratory enrolled in External Quality Assessment
                  (EQA) programs
                  <br />
                  <br />
                  <MyRadioGroup
                    name="is_the_lab_enrolled_eqa"
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
                    {...register("is_the_lab_enrolled_eqa_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="The Laboratory is enrolled in which EQA programs"
                    {...register("which_lab_enrolled_eqa")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Is the laboratory enrolled in enrolled in the SLIPTA
                  Assessment program
                  <br />
                  <br />
                  <MyRadioGroup
                    name="is_lab_slipta_enrolled"
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
                    {...register("is_lab_slipta_enrolled_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell align="left">
                  Is the laboratory enrolled in the certfication/accreditation
                  program
                  <br />
                  <br />
                  <MyRadioGroup
                    name="is_lab_accreditation_enrolled"
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
                    {...register("is_lab_accreditation_enrolled_comment")}
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
