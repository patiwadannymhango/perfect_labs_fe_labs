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
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';
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

const tableCells = [
  { label: "", style: { ...cellStyle, borderBottom: "none" } },
  { label: "Availability of Section", style: cellStyle },
  { label: "Connected to DISA", style: cellStyle },
  { label: "List of Tests Performed in this section", style: cellStyle },
  { label: "List the Tests Referred by the Laboratory", style: cellStyle },
  { label: "List the Machines in Use in this Section", style: cellStyle },
  {
    label: "Are All Machines Functional / Serviceable (YES/NO)",
    style: cellStyle,
  },
  { label: "List Unfunctional / Unserviceable Machines", style: cellStyle },
  { label: "The Faulty Machines, Challenges", style: cellStyle },
  { label: "Is There Adequate Man Power in this Section", style: cellStyle },
  { label: "Refrigerator for Reagent Storage", style: cellStyle },
  { label: "Refrigerator for Sample Storage", style: cellStyle },
  { label: "Is EQA Performed in this section", style: cellStyle },
  { label: "Which EQA Program ?", style: cellStyle },
  { label: "Comment", style: cellStyle },
];

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

const lab_tier_level_options = [
  { label: "I", value: "I" },
  { label: "II", value: "II" },
  { label: "III", value: "III" },
  { label: "IV", value: "IV" },
  { label: "V", value: "V" },
  { label: "Health Center", value: "Health Center" },
  { label: "Other", value: "Other" },
];

const lab_level_options = [
  { label: "National", value: "National" },
  { label: "Reference", value: "Reference" },
  { label: "Provincial", value: "Provincial" },
  { label: "District", value: "District" },
  { label: "Zonal", value: "Zonal" },
  { label: "Field", value: "Field" },
  { label: "Other", value: "Other" },
];
const lab_types_options = [
  { label: "Public", value: "Public" },
  { label: "Private", value: "Private" },
  { label: "Faith-Based", value: "Faith-Based" },
  { label: "Military", value: "Military" },
  { label: "Research", value: "Research" },
  { label: "Other", value: "Other" },
];

const lab_adequate_options = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
  // { label : 'Insufficient Data', value: 'Insufficient_Data'}
];

const yes_no_option = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
];

export function LabTestsHaematology() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      haematology_available: "",
      haematology_connected_disa: "",
      haematology_available_comment: "",
      haematology_connected_disa_comment: "",
      haematology_test_performed: "",
      haematology_test_referred: "",
      haematology_equipment_in_use: "",
      are_haematology_equip_fun_serv: "",
      haematology_unfun_eq_eng: "",
      haematology_unserv_eq_staff: "",
      haematology_unfun_eq_chal: "",
      haematology_unserv_eq_chal: "",
      haematology_power_adequate: "",
      haematology_refrigerator_reagent: "",
      haematology_refrigerator_sample: "",
      haematology_is_eqa_performed: "",
      haematology_eqa: "",
      haematology_comment: "",
    },
  });
  const labProfile = useSelector((state) => state.labProfile);

  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [errorPut, setErrorPut] = useState("");

  const [selectedProvince, setSelectedProvince] = useState("");
  const [cityOptions, setCityOptions] = useState([]);

  const [labName, setLabName] = useState("");

  // Watch the selected Options
  const province = watch("province");

  const selectedLabTierLevel = watch("lab_tier_level"); // Watch the selected value for lab_tier_level

  const sel_are_drivers_lab_dedicated = watch("are_drivers_lab_dedicated");
  const sel_are_degree_holders_adequate = watch("are_degree_holders_adequate");
  const sel_are_diploma_holders_adequate = watch(
    "are_diploma_holders_adequate"
  );
  const sel_are_certificate_holders_adequate = watch(
    "are_certificate_holders_adequate"
  );
  const sel_are_data_clerks_adequate = watch("are_data_clerks_adequate");
  const sel_are_phlebotomists_adequate = watch("are_phlebotomists_adequate");
  const sel_are_cleaners_adequate = watch("are_cleaners_adequate");
  const sel_are_drivers_adequate = watch("are_drivers_adequate");

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

  //   useEffect(() => {
  //     if (data) {
  //       for (const key in data) {
  //         if (data.hasOwnProperty(key)) {
  //           setValue(key, data[key]);
  //         }
  //       }

  //     }
  //   }, [data, setValue])

  const dispatch = useDispatch();

  // useEffect(() => {

  // }, [dispatch]);

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
      console.log(data);
      // Check if province exists in data and update city options accordingly
      if (data.province) {
        setCityOptions(provinceCityData[data.province] || []);
      }
    }

    // Update city options dynamically if the province changes
    if (province) {
      setCityOptions(provinceCityData[province] || []);
      setValue("city_town", ""); // Reset city selection if the province changes
    }
  }, [data, province, setValue, dispatch]);

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
      <form
        id="lab-profile-form"
        onSubmit={handleSubmit(onSubmit)}
        component={Paper}
        sx={{ padding: "10px" }}
      >
        <Card sx={{ maxWidth: "100%", mb: 2 }}>
          <CardHeader
            title={
              labName.toUpperCase() + " : " + "LABORATORY TEST MANUAL" || ""
            }
            sx={{
              backgroundColor: "#f5f5f5",
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
                <TableCell style={{ width: "20%" }}> </TableCell>
                <TableCell style={{ width: "20%" }}> </TableCell>
                <TableCell style={{ width: "60%" }}> </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <h4>HEAMATOLOGY SECTION</h4>{" "}
                </TableCell>
                <TableCell> </TableCell>
                <TableCell> </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Availability of Section</TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="haematology_available"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Availability of Section Comment"
                    {...register("haematology_available_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Connected to DISA/LIS</TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="haematology_connected_disa"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment"
                    {...register("haematology_connected_disa_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> List of Tests Performed in this section</TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Tests Performed , "
                    placeholder="Enter Tests"
                    {...register("haematology_test_performed")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {" "}
                  List the Tests Referred by the Laboratory
                </TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Tests Referred,"
                    placeholder="Enter Tests"
                    {...register("haematology_test_referred")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {" "}
                  List the Equipment in Use in this Section{" "}
                </TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Equipment in Use, "
                    placeholder="Enter machines"
                    {...register("haematology_equipment_in_use")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {" "}
                  Are All Equipment Functional / Serviceable (YES/NO){" "}
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="are_haematology_equip_fun_serv"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell> </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {" "}
                  List Unfunctional / Unserviceable Equipment
                </TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Unfunctional Equipment- One Which Requires Biomedical Engineers Attention "
                    placeholder=" Enter Equipment "
                    {...register("haematology_unfun_eq_eng")}
                    type="text"
                    multiline
                    rows={2}
                    sx={{ mb: 2 }}
                  />
                  <br />
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Unserviceable Equipment- One Which Requires Laboratory Technical Staff/Vendor Attention "
                    placeholder=" Enter Equipment "
                    {...register("haematology_unserv_eq_staff")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> The Faulty Equipment, Challenges </TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Unfunctional Equipment- What is the Challenge for each Faulty Equipment? "
                    placeholder=" Enter Equipment "
                    {...register("haematology_unfun_eq_chal")}
                    type="text"
                    multiline
                    rows={2}
                    sx={{ mb: 2 }}
                  />
                  <br />
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Unserviceable Equipment- What is the Challenge for each Unserviceable Equipment? "
                    placeholder=" Enter Equipment "
                    {...register("haematology_unserv_eq_chal")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {" "}
                  Is There Adequate Man Power in this Section{" "}
                </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="haematology_power_adequate"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell> </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Refrigerator for Reagent Storage </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="haematology_refrigerator_reagent"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell> </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Refrigerator for Sample Storage </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="haematology_refrigerator_sample"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell> </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Is EQA Performed in this section </TableCell>

                <TableCell align="left">
                  <MyRadioGroup
                    name="haematology_is_eqa_performed"
                    options={lab_adequate_options}
                    control={control}
                    rules={{ required: "Please select one option" }}
                  />
                </TableCell>
                <TableCell> </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {" "}
                  Which EQA Program is Available in this section
                </TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="EQA Program"
                    placeholder=" Enter EQA Program "
                    {...register("haematology_eqa")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell> Comment </TableCell>
                <TableCell> </TableCell>
                <TableCell align="left">
                  <TextField
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    label="Comment "
                    placeholder=" Enter Comment "
                    {...register("haematology_comment")}
                    type="text"
                    multiline
                    rows={2}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </form>
    </LayoutQ>
  );
}
