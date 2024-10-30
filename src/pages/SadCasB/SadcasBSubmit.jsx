/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../helpers/axios";

import { TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell,TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';


import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import CardHeader from '@mui/material/CardHeader';
import { useDispatch } from 'react-redux';

import axiosService from "../../helpers/axios";
import { getUser } from "../../hooks/user.actions";
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import LayoutQ from '../../components/LayoutQ';
import { useSelector } from 'react-redux'; 


import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';



const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
   
  };
  

  const Alert = styled(MuiAlert)(({ theme }) => ({
    // width: '100%',
  }))


  const FloatingActionButton = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 1200,
  }));




export function SadcasBSubmit(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            general_comment:"",
            team_leader:"",
            technical_assessor:"",
        }
      });
    
      
      const sadcasb = useSelector((state) => state.sadcasb);
      const [open, setOpen] = useState(false);
      const [snackbarOpen, setSnackbarOpen] = useState(false);
      const [snackbarMessage, setSnackbarMessage] = useState('');
      const [errorPut, setErrorPut] = useState('');
      
      const [labName, setLabName] = useState('');
  
     
      const { lab_profileId} = useParams();
      const navigate = useNavigate();
  
      
      const { data, error } = useSWR(`/slipta/lab_profile/${lab_profileId}/sadcasb/${sadcasb.id}/`, fetcher, {
          refreshInterval: 10000,
        });
      
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
  
  
        const handleDelete = () => {
          axiosService
          .delete(`/slipta/lab_profile/${lab_profileId}/sadcasb/${sadcasb.id}/`)
          .then(() => {
              navigate(`/sadcas_b_summary/${lab_profileId}/`);
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
            if (reason === 'clickaway') {
            return;
            } 
            setSnackbarOpen(false);
            setSnackbarMessage('');
        }
  
      const dispatch = useDispatch();
  
      useEffect(() => {
          
          if (data) {
              console.log(data)
            // Populate form fields from data
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                setValue(key, data[key]);
              }
            }
            setLabName(data.lab_profile.lab_name)
            
          }
        
        }, [data, setValue, dispatch]);
        
        console.log(labName)
      const user = getUser();
  
      if (error) {
          return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <Typography variant="h6" color="error">
                Failed to load data
              </Typography>
            </Box>
          );
        }
      
        if (!data) {
          return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <CircularProgress />
            </Box>
          );
        }
   
      const onSubmit = form => {
          
          form = {
              ...form,
              auditor: user.id,
              lab_profile: lab_profileId, 
              is_submitted:true,
          };
      
          axiosService
          .put(`/slipta/lab_profile/${lab_profileId}/sadcasb/${sadcasb.id}/`,form)
          .then(() => {
            setSnackbarOpen(true);
            setSnackbarMessage(`SADCAS:F134 B  Submitted`);
            navigate(`/sadcas_b_summary/${lab_profileId}/`);
            
          })
          .catch((err) => {
              if (err.message) {
                  setErrorPut(err.request.response);
              }
              setSnackbarOpen(true);
              setSnackbarMessage(`Error : ${errorPut}`);
  
          });
  
          
        };
  

    return(
        <LayoutQ>
         
                        <Box sx={{ mb: 2, textAlign: 'left' }}>
                            <img src="/Sadcas_a.jpg" alt="Logo" style={{ width: '200px', height: '65px' }} />
                        </Box>
                <div>
                    <form id="lab-profile-form" onSubmit={handleSubmit(onSubmit)} component={Paper} style={{ width: '100%' }}  encType="multipart/form-data" >
                        
                                    <CardHeader
                                            // title={  + " : " +  "SADCAS F134 A : SUBMISSION "|| ''}
                                            title={ labName.toUpperCase() + " : " +  "SADCAS F134 B - AUDIT SUBMISSION "|| ''}
                                            sx={{
                                                backgroundColor: '#f5f5f5',
                                                borderBottom: '1px solid #e0e0e0',
                                                '& .MuiCardHeader-title': {
                                                    color: 'text.secondary',
                                                }
                                            }}
                                        />

                                        {/* <FormLabel component="legend">Laboratory Staffing Summary:</FormLabel> */}

                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                                                               
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                            <TableRow>
                                                <TableCell align="left" >
                                                Additional /General Comments: This space may also be used to expand on comments in specific Sections
                                                <br /><br />
                                                <TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                     {...register('general_comment')}
                                                    type="text" 
                                                    multiline
										            rows={12} 
                                                    />
                                                </TableCell >
                                            </TableRow>


                                            <TableRow>
                                            <TableCell align="left" >
                                                Team Leader
                                                <br /><br />
                                                <TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="Enter Name"
                                                    {...register('team_leader')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell >
                                                
                                            </TableRow>
                                            <TableRow>
                                            <TableCell align="left" >
                                            Techincal Assessor
                                                <br /><br />
                                                <TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="Enter Name"
                                                    {...register('technical_assessor')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell >
                                                
                                            </TableRow>
                                            <TableRow>
                                            <TableCell align="left" >
                                                Signature Initials or Electronic -Signature
                                                <br /><br />
                                                <TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="Signature"
                                                    {...register('signature')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell >
                                                
                                            </TableRow>

                                          


                                        </TableBody>
                                        
                                    </Table>    

                    </form>
                </div>
                   
                              

                        <Snackbar
                            open={snackbarOpen}
                            autoHideDuration={3000}
                            onClose={onSnackbarClose}
                            message={snackbarMessage}
                            action={
                            <Button color="inherit" onClick={onSnackbarClose}>
                                Close
                            </Button>
                            }
                            sx={{

                                width: 'auto',
                                margin: '0 auto',
                            }}
                        >
                            <Alert onClose={onSnackbarClose} severity="success">
                            {snackbarMessage}
                            </Alert>
                        </Snackbar>  

    </LayoutQ>
    );
}
