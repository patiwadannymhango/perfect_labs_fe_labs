import React, { useState , useEffect} from 'react';
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { useParams } from "react-router-dom";
import { SliptaAuditForm } from "../components/SliptaAuditForm";
import LayoutQ from "../components/LayoutQ";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { Card, CardHeader, CardContent, CardActions, Button, Collapse, Box, Paper, Grid, TextField } from '@mui/material';
import { Star } from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { setShowItems } from '../redux/sidebarSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useSelector } from 'react-redux'; 
import {  useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


function SliptaAudits(){

    const labProfile = useSelector((state) => state.labProfile);
    const { slipta_lab_profileId } = useParams();
    const [open, setOpen] = useState(false);
    const user = getUser();


    const handleToggle = () => {
      setOpen(!open);
    };
   

    const audits = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit/`,fetcher,{
        refreshInterval:1000,
    })
    
    const navigate = useNavigate();

    const handleRowClick = (params) => {
        navigate(`/slipta_audit_detail/${slipta_lab_profileId}/${params.row.id}/`);
    };

    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(setShowItems(true));
    }, [dispatch]);


    if(!user){
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          );
    }

    function getStarCount(auditTotal) {
        if (auditTotal <= 205) {
            return 0; // No Stars
        } else if (auditTotal >= 206 && auditTotal <= 240) {
            return 1; // 1 Star
        } else if (auditTotal >= 241 && auditTotal <= 277) {
            return 2; // 2 Stars
        } else if (auditTotal >= 278 && auditTotal <= 314) {
            return 3; // 3 Stars
        } else if (auditTotal >= 315 && auditTotal <= 352) {
            return 4; // 4 Stars
        } else if (auditTotal >= 353 && auditTotal <= 373) {
            return 5; // 5 Stars
        } else {
            return 0; // Default to no stars if outside expected range
        }
    }

    const columns = [
        {
            field: 'created',
            headerName: 'Created',
            width: 250,
            renderCell: (params) => format(new Date(params.value), 'yyyy-MM-dd HH:mm:ss')
        },
        { field: 'audit_total', headerName: 'Total Score', width: 100 },
        {
            field: 'star_rating', // Changed from 'id' to 'star_rating'
            headerName: 'Stars Rating',
            width: 250,
            renderCell: (params) => {
                const starCount = getStarCount(params.row.audit_total);
    
                if (starCount > 0) {
                    return (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {[...Array(starCount)].map((_, index) => (
                                <Star key={index} color="secondary" sx={{ fontSize: '1.1rem', marginTop: '10px' }} />
                            ))}
                        </div>
                    );
                } else {
                    return <div>No Stars</div>; // Handle the case for 0 stars
                }
            },
        },
        { field: 'section_1_score', headerName: 'Documents and Records', width: 200 },
        { field: 'section_2_score', headerName: 'Organisation and Leadership', width: 150 },
        { field: 'section_3_score', headerName: 'Personnel Management', width: 200 },
        { field: 'section_4_score', headerName: 'Customer Focus', width: 150 },
        { field: 'section_5_score', headerName: 'Equipment Management', width: 150 },
        { field: 'section_6_score', headerName: 'Assessment', width: 200 },
        { field: 'section_7_score', headerName: 'Inventory Management', width: 150 },
        { field: 'section_8_score', headerName: 'Process Management', width: 150 },
        { field: 'section_9_score', headerName: 'Information Management', width: 200 },
        { field: 'section_10_score', headerName: 'Nonconforming Events', width: 150 },
        { field: 'section_11_score', headerName: 'Continual Improvement', width: 150 },
        { field: 'section_12_score', headerName: 'Facilities and Safety', width: 200 },

    ];

    return (
        <LayoutQ>
        
                  
                    <Paper>

                            <Card sx={{ maxWidth: '100%', mb: 2 }}>
                                <CardHeader
                                title={ labProfile.lab_name + " | " + " " + labProfile.lab_number +  ": AUDIT SUMMARY "|| ''}
                                sx={{
                                    backgroundColor: '#ddd',
                                    borderBottom: '1px solid #e0e0e0',
                                    '& .MuiCardHeader-title': {
                                        color: 'text.secondary',
                                    }
                                }}
                                />
                                  
                                <CardContent>
                                <Box sx={{ height: 600, width: '100%' }}>
                                    <DataGrid
                                        rows={audits.data?.results || []}
                                        columns={columns}
                                        pageSize={10}
                                        rowsPerPageOptions={[10]}
                                        disableSelectionOnClick
                                        onRowClick={handleRowClick} // Attach the row click handler
                                        slots={{ toolbar: GridToolbar,}}
                                        sx={{
                                            // Border for DataGrid
                                            '& .MuiDataGrid-cell': {
                                                border: '1px solid #ddd', // Border for individual cells
                                            },
                                            '& .MuiDataGrid-columnHeaders': {
                                                borderBottom: '1px solid #ddd', // Border for column headers
                                            }
                                        }}
                                    />
                                </Box>
                                </CardContent>
                                <CardActions
                                sx={{ justifyContent: 'flex-end', backgroundColor: '#f5f5f5', borderTop: '1px solid #e0e0e0' }}
                                >
                                {/* <Button variant="contained" color="primary" onClick={onDialogOpen}>
                                    Open Dialog
                                </Button> */}
                                </CardActions>
                            </Card>
                        {/* </Box> */}
                    </Paper>
      
    </LayoutQ>
    );
}

export default SliptaAudits;