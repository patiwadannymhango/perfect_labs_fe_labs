import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLabProfileId } from "../redux/sidebarSlice";
import { setLabProfile, resetLabProfile } from "../redux/labProfileSlice";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { LabProfileForm } from "../components/LabProfileForm";
import LayoutQ from "../components/LayoutQ";
import { setShowItems } from "../redux/sidebarSlice";
import { setShowItems2 } from "../redux/labSidebarSlice";
import { setShowItems3 } from "../redux/sadcasASidebarSlice";
import { setShowItems4 } from "../redux/sadcasBSidebarSlice";

export default function LabProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setShowItems(false));
    dispatch(setShowItems2(true)); //Temp
    dispatch(setShowItems3(false));
    dispatch(setShowItems4(false));
  }, [dispatch]);

  const lab_profiles = useSWR("/slipta/lab_profile/", fetcher, {
    refreshInterval: 1000,
  });

  const user = getUser();

  // const handleRowClick = (params) => {
  //         navigate(`/lab_profile/${params.row.id}/`);
  // };

  const handleRowClick = (params) => {
    const newProfileData = {
      id: params.row.id,
      auditor: params.row.auditor,
      lab_name: params.row.lab_name,
      lab_number: params.row.lab_number,
      lab_address: params.row.lab_address,
      lab_phone: params.row.lab_phone,
      lab_fax: params.row.lab_fax,
      lab_email: params.row.lab_email,
      lab_level: params.row.lab_level,
      lab_type: params.row.lab_type,
      lab_rep_name: params.row.lab_rep_name,
      lab_rep_tel_personal: params.row.lab_rep_tel_personal,
      lab_rep_tel_work: params.row.lab_rep_tel_work,
      lab_type_description: params.row.lab_type_description,
      full_time_degree_holders: params.row.full_time_degree_holders,
      full_time_diploma_holders: params.row.full_time_diploma_holders,
      full_time_certificate_holders: params.row.full_time_certificate_holders,
      full_time_data_clerks: params.row.full_time_data_clerks,
      full_time_phlebotomists: params.row.full_time_phlebotomists,
      full_time_cleaners: params.row.full_time_cleaners,
      are_cleaners_lab_dedicated: params.row.are_cleaners_lab_dedicated,
      full_time_drivers: params.row.full_time_drivers,
      are_drivers_lab_dedicated: params.row.are_drivers_lab_dedicated,
      are_degree_holders_adequate: params.row.are_degree_holders_adequate,
      are_diploma_holders_adequate: params.row.are_diploma_holders_adequate,
      are_certificate_holders_adequate:
        params.row.are_certificate_holders_adequate,
      are_data_clerks_adequate: params.row.are_data_clerks_adequate,
      are_phlebotomists_adequate: params.row.are_phlebotomists_adequate,
      are_cleaners_adequate: params.row.are_cleaners_adequate,
      are_cleaners_trained_safety_waste:
        params.row.are_cleaners_trained_safety_waste,
      are_drivers_adequate: params.row.are_drivers_adequate,
      are_drivers_trained_biosafety: params.row.are_drivers_trained_biosafety,
      full_time_others: params.row.full_time_others,
      are_others_adequate: params.row.are_others_adequate,
    };
    dispatch(setLabProfileId(params.row.id));
    dispatch(resetLabProfile());
    dispatch(setLabProfile(newProfileData));
    navigate(`/lab_profile/${params.row.id}/`);
    // navigate(`/slipta_lab_profile/${params.row.id}/`);
  };

  if (!user) {
    return <div>Loading!</div>;
  }

  const columns = [
    {
      field: "created",
      headerName: "Date & Time Entered",
      width: 180,
      renderCell: (params) =>
        format(new Date(params.value), "yyyy-MM-dd HH:mm:ss"),
    },
    { field: "lab_name", headerName: "Laboratory Name", width: 200 },
    { field: "lab_number", headerName: "HPCZ License No.", width: 150 },
    { field: "province", headerName: "Province", width: 190 },
    { field: "lab_city_town", headerName: "City/Town", width: 100 },
    {
      field: "lab_physical_address",
      headerName: "Physical Address",
      width: 250,
    },
    { field: "lab_phone", headerName: "Facility Phone", width: 150 },
    { field: "lab_fax", headerName: "Facility Fax", width: 150 },
    { field: "lab_email", headerName: "Facility Email Address", width: 250 },
    { field: "lab_level", headerName: "Type", width: 100 },
    { field: "lab_type", headerName: "Affiliation", width: 150 },
    {
      field: "lab_incharge_name",
      headerName: "Name of Facility Incharge",
      width: 250,
    },
    {
      field: "lab_incharge_qualification",
      headerName: "Qualification",
      width: 250,
    },
    {
      field: "lab_incharge_phone",
      headerName: "Personal Telephone",
      width: 250,
    },
    { field: "lab_incharge_email", headerName: "Email Address", width: 250 },

    // { field: 'id', headerName: 'Province', width: 150 },
    // { field: 'id', headerName: 'City/Town', width: 150 },
    // { field: 'id', headerName: 'Physical Address', width: 150 },
  ];

  return (
    <LayoutQ>
      <Paper>
        <Card sx={{ maxWidth: "100%", mb: 2 }}>
          <CardHeader
            title="LABORATORY INFORMATION"
            sx={{
              backgroundColor: "#ddd",
              borderBottom: "1px solid #e0e0e0",
              "& .MuiCardHeader-title": {
                color: "text.secondary", // Standard grey color for the title
              },
            }}
          />
          <CardContent>
            <Box sx={{ height: 900, width: "100%" }}>
              <DataGrid
                rows={lab_profiles.data?.results || []}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectionOnClick
                onRowClick={handleRowClick} // Attach the row click handler
                slots={{ toolbar: GridToolbar }}
                sx={{
                  // Border for DataGrid
                  "& .MuiDataGrid-cell": {
                    border: "1px solid #ddd", // Border for individual cells
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    borderBottom: "1px solid #ddd", // Border for column headers
                  },
                }}
              />
            </Box>
          </CardContent>
          <CardActions
            sx={{
              justifyContent: "flex-end",
              backgroundColor: "#f5f5f5",
              borderTop: "1px solid #e0e0e0",
            }}
          ></CardActions>
        </Card>
      </Paper>
    </LayoutQ>
  );
}
