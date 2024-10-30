/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";

import { Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';  // Import the view icon


import { Input } from '@mui/material';

import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormLabel from '@mui/material/FormLabel';

import { useDispatch } from 'react-redux';
import { setShowItems2 } from '../redux/labSidebarSlice';

import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import LayoutQ from '../components/LayoutQ';
import { useSelector } from 'react-redux'; 

import MyRadioGroup from '../components/MyRadioGroup';


import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import LabProfile from './LabProfile';


const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
   
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
    width: '500px', // Set the width to 400px
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




export function SadcasAIntro(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            assessors:"",
            observers :"",
            field_operation:"",
            lab_representative:"",
            na_1:"",
            nc_1 :"",
            c_1 :"",
            comment_1 :"",
            na_2:"",
            nc_2:"",
            c_2:"",
            comment_2:"",
            na_3:"",
            nc_3:"",
            c_3 :"",
            comment_3:"",
        }
      });

      const sadcasa = useSelector((state) => state.sadcasa);
      console.log(sadcasa)
      const [open, setOpen] = useState(false);
      const [snackbarOpen, setSnackbarOpen] = useState(false);
      const [snackbarMessage, setSnackbarMessage] = useState('');
      const [errorPut, setErrorPut] = useState('');
      
      const [labName, setLabName] = useState('');
  
     
      const { lab_profileId} = useParams();
      const navigate = useNavigate();
  
      
      const { data, error } = useSWR(`/slipta/lab_profile/${lab_profileId}/sadcasa/${sadcasa.id}/`, fetcher, {
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
          .delete(`/slipta/lab_profile/${lab_profileId}/sadcasa/${sadcasa.id}/`)
          .then(() => {
              navigate(`/sadcas_a_summary/${lab_profileId}/`);
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
            console.log(labName)
            
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
          };
      
          axiosService
          .put(`/slipta/lab_profile/${lab_profileId}/sadcasa/${sadcasa.id}/`,form)
          .then(() => {
            setSnackbarOpen(true);
            setSnackbarMessage(`SADCAS:F134 A  Updated`);
            
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
                    <form id="lab-profile-form" onSubmit={handleSubmit(onSubmit)} component={Paper} sstyle={{ width: '100%' }}  encType="multipart/form-data" >
                        
                                    <CardHeader
                                            title={ labName.toUpperCase() + " : " +  "SADCAS F134 A : INTRODUCTION "|| ''}
                                            sx={{
                                                backgroundColor: '#ddd',
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
                                                Assessor/s 
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('assessors')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell >

                                                <TableCell align="left" >
                                                Observers
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('observers')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell >

                
                                            </TableRow>


                                            <TableRow>
                                                <TableCell align="left" >
                                                Area / Field of Operation
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('field_operation')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell >

                                                <TableCell align="left" >
                                                Laboratory Representative

                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('lab_representative')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell >

                                            </TableRow>


                                        </TableBody>
                                        
                                    </Table>    

                                    <br /><br />
                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                            <TableCell style={{...cellStyle, width: '5%' }}>Clause No</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>Requirement</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>NA</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>NC</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>C</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>Comments</TableCell>                                  
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }} >1</TableCell>
                                                <TableCell>The schedule of accredited tests shall include only the tests that are performed by the Laboratory.</TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('na_1')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('nc_1')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('c_1')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('comment_1')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>

                                            </TableRow>

                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>2</TableCell>
                                                <TableCell>The relevant staff have access to SADCAS documentation</TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('na_2')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('nc_2')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('c_2')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('comment_2')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>

                                            </TableRow>

                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>3</TableCell>
                                                <TableCell>A current list of approved signatories for each discipline within the laboratory is available.</TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('na_3')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('nc_3')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell style={{ ...cellStyle }}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('c_3')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('comment_3')}
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
