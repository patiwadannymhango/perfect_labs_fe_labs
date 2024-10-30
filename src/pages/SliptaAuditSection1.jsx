import React, { useState } from 'react';
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { useParams, useNavigate } from "react-router-dom";
import { SliptaAuditSection1Form } from "../components/SliptaAuditSection1Form";
import LayoutQ from "../components/LayoutQ";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { Card, CardHeader, CardContent, CardActions,Chip, Box, Paper } from '@mui/material';


const statusOptions = {
    true: { label: 'Attached', color: 'success' },
    false: { label: 'Not Attached', color: 'warning' },
  };
function SliptaAuditSection1(){

    const { slipta_lab_profileId } = useParams();

    const navigate = useNavigate();

    const handleRowClick = (params) => {
        navigate(`/slipta_audit_section_1_detail/${slipta_lab_profileId}/${params.row.id}/`);
    };
  
    const audits = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_1/`,fetcher,{
        refreshInterval:1000,
    })
    
    const columns = [
        {
            field: 'name',
            headerName: 'Title',
            width: 450,
        },
        {
            field: 'total_score',
            headerName: 'Total Score',
            width: 300,
        },
        {
            field: 'created',
            headerName: 'Created',
            width: 250,
            renderCell: (params) => format(new Date(params.value), 'yyyy-MM-dd HH:mm:ss')
        },
        {
            field: 'updated',
            headerName: 'Updated',
            width: 250,
            renderCell: (params) => format(new Date(params.value), 'yyyy-MM-dd HH:mm:ss')
        },
       
        {
            field: 'attached',
            headerName: 'Status',
            width: 300,
            renderCell: (params) => (
              <Chip
                label={statusOptions[params.value].label}
                color={statusOptions[params.value].color}
              />
            )
          },

      ];
  

    const user = getUser();

    if(!user){
        return <div>Loading!</div>
    }

    return (


<LayoutQ>
            
                
    <Box p={2}>
        <SliptaAuditSection1Form refresh={audits.mutate} lab_profile_id={slipta_lab_profileId} />
    </Box>
    <Paper>

            <Card
                sx={{
                    transition: 'none', // Disable all transitions
                    '&:hover': {
                    transition: 'none', // Disable hover transitions if needed
                    },
                }}>
                <CardHeader
                title="DOCUMENT AND RECORDS"
                sx={{
                    backgroundColor: '#f5f5f5',
                    borderBottom: '1px solid #e0e0e0',
                    // '& .MuiCardHeader-title': {
                    //   color: '#b0b0b0', // Light grey color for the title
                    // }
                    '& .MuiCardHeader-title': {
                        color: 'text.secondary', // Standard grey color for the title
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

export default SliptaAuditSection1;