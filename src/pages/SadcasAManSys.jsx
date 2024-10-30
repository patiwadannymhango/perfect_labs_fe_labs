/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import { useSelector } from 'react-redux'; 

import { Grid, TextField} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';


import CardHeader from '@mui/material/CardHeader';


import { useDispatch } from 'react-redux';


import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import LayoutQ from '../components/LayoutQ';

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';


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


  const lab_adequate_options = [
    { label : 'Yes', value: 'Yes' },
    { label : 'No', value: 'No' },

  ];


export function SadcasAManSys(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            na_8_1_1_i:"",
            nc_8_1_1_i:"",
            c_8_1_1_i:"",
            comment_8_1_1_i:"",

                                
            na_8_1_1_ii:"",
            nc_8_1_1_ii:"",
            c_8_1_1_ii:"",
            comment_8_1_1_ii:"",

                                
            na_8_1_2:"",
            nc_8_1_2:"",
            c_8_1_2:"",
            comment_8_1_2:"",

                                    
            na_8_1_2:"",
            nc_8_1_2:"",
            c_8_1_2:"",
            comment_8_1_2:"",

                                        
            na_8_1_3_a:"",
            nc_8_1_3_a:"",
            c_8_1_3_a:"",
            comment_8_1_3_a:"",

                                            
            na_8_1_3_b:"",
            nc_8_1_3_b:"",
            c_8_1_3_b:"",
            comment_8_1_3_b:"",

                                            
            na_8_1_3_c:"",
            nc_8_1_3_c:"",
            c_8_1_3_c:"",
            comment_8_1_3_c:"",

                                            
            na_8_2_1:"",
            nc_8_2_1:"",
            c_8_2_1:"",
            comment_8_2_1:"",

                                                
            na_8_2_2:"",
            nc_8_2_2:"",
            c_8_2_2:"",
            comment_8_2_2:"",

                                                
            na_8_2_3:"",
            nc_8_2_3:"",
            c_8_2_3:"",
            comment_8_2_3:"",

                                                
            na_8_2_4:"",
            nc_8_2_4:"",
            c_8_2_4:"",
            comment_8_2_4:"",

                                                
            na_8_2_5:"",
            nc_8_2_5:"",
            c_8_2_5:"",
            comment_8_2_5:"",

                                                
            na_8_3_1:"",
            nc_8_3_1:"",
            c_8_3_1:"",
            comment_8_3_1:"",

                                                    
            na_8_3_2_a:"",
            nc_8_3_2_a:"",
            c_8_3_2_a:"",
            comment_8_3_2_a:"",

                                                        
            na_8_3_2_b:"",
            nc_8_3_2_b:"",
            c_8_3_2_b:"",
            comment_8_3_2_b:"",

                                                        
            na_8_3_2_c:"",
            nc_8_3_2_c:"",
            c_8_3_2_c:"",
            comment_8_3_2_c:"",

                                                        
            na_8_3_2_d:"",
            nc_8_3_2_d:"",
            c_8_3_2_d:"",
            comment_8_3_2_d:"",

                                                        
            na_8_3_2_e:"",
            nc_8_3_2_e:"",
            c_8_3_2_e:"",
            comment_8_3_2_e:"",

                                                        
            na_8_3_2_f:"",
            nc_8_3_2_f:"",
            c_8_3_2_f:"",
            comment_8_3_2_f:"",

                                                        
            na_8_3_2_g:"",
            nc_8_3_2_g:"",
            c_8_3_2_g:"",
            comment_8_3_2_g:"",

                                                        
            na_8_3_2_h:"",
            nc_8_3_2_h:"",
            c_8_3_2_h:"",
            comment_8_3_2_h:"",

                                                        
            na_8_3_2_i:"",
            nc_8_3_2_i:"",
            c_8_3_2_i:"",
            comment_8_3_2_i:"",

            na_8_4_1_i:"",
            nc_8_4_1_i:"",
            c_8_4_1_i:"",
            comment_8_4_1_i:"",

            
            na_8_4_1_ii:"",
            nc_8_4_1_ii:"",
            c_8_4_1_ii:"",
            comment_8_4_1_ii:"",

            
            na_8_4_2_i:"",
            nc_8_4_2_i:"",
            c_8_4_2_i:"",
            comment_8_4_2_i:"",

                
            na_8_4_2_ii:"",
            nc_8_4_2_ii:"",
            c_8_4_2_ii:"",
            comment_8_4_2_ii:"",

                    
            na_8_4_3_a:"",
            nc_8_4_3_a:"",
            c_8_4_3_a:"",
            comment_8_4_3_a:"",

                    
            na_8_4_3_a:"",
            nc_8_4_3_a:"",
            c_8_4_3_a:"",
            comment_8_4_3_a:"",

                        
            na_8_4_3_b:"",
            nc_8_4_3_b:"",
            c_8_4_3_b:"",
            comment_8_4_3_b:"",

            na_8_4_3_c:"",
            nc_8_4_3_c:"",
            c_8_4_3_c:"",
            comment_8_4_3_c:"",


            na_8_4_3_d:"",
            nc_8_4_3_d:"",
            c_8_4_3_d:"",
            comment_8_4_3_d:"",

            
            na_8_5_1_a:"",
            nc_8_5_1_a:"",
            c_8_5_1_a:"",
            comment_8_5_1_a:"",

                
            
            na_8_5_1_b:"",
            nc_8_5_1_b:"",
            c_8_5_1_b:"",
            comment_8_5_1_b:"",

                    
            na_8_5_1_c:"",
            nc_8_5_1_c:"",
            c_8_5_1_c:"",
            comment_8_5_1_c:"",

            
            na_8_5_1_d:"",
            nc_8_5_1_d:"",
            c_8_5_1_d:"",
            comment_8_5_1_d:"",

                
            na_8_5_1_i:"",
            nc_8_5_1_i:"",
            c_8_5_1_i:"",
            comment_8_5_1_i:"",

                    
            na_8_5_1_ii:"",
            nc_8_5_1_ii:"",
            c_8_5_1_ii:"",
            comment_8_5_1_ii:"",
                
            na_8_5_1_iii:"",
            nc_8_5_1_iii:"",
            c_8_5_1_iii:"",
            comment_8_5_1_iii:"",

            na_8_5_1_iv:"",
            nc_8_5_1_iv:"",
            c_8_5_1_iv:"",
            comment_8_5_1_iv:"",


            na_8_6_1_a:"",
            nc_8_6_1_a:"",
            c_8_6_1_a:"",
            comment_8_6_1_a:"",

            na_8_6_1_b:"",
            nc_8_6_1_b:"",
            c_8_6_1_b:"",
            comment_8_6_1_b:"",

            na_8_6_1_c:"",
            nc_8_6_1_c:"",
            c_8_6_1_c:"",
            comment_8_6_1_c:"",

            na_8_6_1_d:"",
            nc_8_6_1_d:"",
            c_8_6_1_d:"",
            comment_8_6_1_d:"",

            na_8_6_1_e:"",
            nc_8_6_1_e:"",
            c_8_6_1_e:"",
            comment_8_6_1_e:"",


            na_8_6_1_i:"",
            nc_8_6_1_i:"",
            c_8_6_1_i:"",
            comment_8_6_1_i:"",

            
            na_8_6_1_ii:"",
            nc_8_6_1_ii:"",
            c_8_6_1_ii:"",
            comment_8_6_1_ii:"",

            
            na_8_6_1_iii:"",
            nc_8_6_1_iii:"",
            c_8_6_1_iii:"",
            comment_8_6_1_iii:"",

            
            na_8_6_1_iv:"",
            nc_8_6_1_iv:"",
            c_8_6_1_iv:"",
            comment_8_6_1_iv:"",

                
            na_8_6_1_v:"",
            nc_8_6_1_v:"",
            c_8_6_1_v:"",
            comment_8_6_1_v:"",

                    
            na_8_7_1_a:"",
            nc_8_7_1_a:"",
            c_8_7_1_a:"",
            comment_8_7_1_a:"",

                        
            na_8_7_1_b:"",
            nc_8_7_1_b:"",
            c_8_7_1_b:"",
            comment_8_7_1_b:"",

                            
            na_8_7_1_c:"",
            nc_8_7_1_c:"",
            c_8_7_1_c:"",
            comment_8_7_1_c:"",

                            
            na_8_7_1_d:"",
            nc_8_7_1_d:"",
            c_8_7_1_d:"",
            comment_8_7_1_d:"",

                            
            na_8_7_1_e:"",
            nc_8_7_1_e:"",
            c_8_7_1_e:"",
            comment_8_7_1_e:"",

                                
            na_8_7_1_f:"",
            nc_8_7_1_f:"",
            c_8_7_1_f:"",
            comment_8_7_1_f:"",

                                
            na_8_7_1_g:"",
            nc_8_7_1_g:"",
            c_8_7_1_g:"",
            comment_8_7_1_g:"",

            na_8_7_1_i:"",
            nc_8_7_1_i:"",
            c_8_7_1_i:"",
            comment_8_7_1_i:"",

            na_8_7_2:"",
            nc_8_7_2:"",
            c_8_7_2:"",
            comment_8_7_2:"",

            na_8_7_3:"",
            nc_8_7_3:"",
            c_8_7_3:"",
            comment_8_7_3:"",

            
            na_8_8_1:"",
            nc_8_8_1:"",
            c_8_8_1:"",
            comment_8_8_1:"",

                
            na_8_8_2_i:"",
            nc_8_8_2_i:"",
            c_8_8_2_i:"",
            comment_8_8_2_i:"",

                    
            na_8_8_2_ii:"",
            nc_8_8_2_ii:"",
            c_8_8_2_ii:"",
            comment_8_8_2_ii:"",

                    
            na_8_8_3_a:"",
            nc_8_8_3_a:"",
            c_8_8_3_a:"",
            comment_8_8_3_a:"",

                        
            na_8_8_3_b:"",
            nc_8_8_3_b:"",
            c_8_8_3_b:"",
            comment_8_8_3_b:"",

                            
            na_8_8_3_c:"",
            nc_8_8_3_c:"",
            c_8_8_3_c:"",
            comment_8_8_3_c:"",

                                
            na_8_8_3_2_a:"",
            nc_8_8_3_2_a:"",
            c_8_8_3_2_a:"",
            comment_8_8_3_2_a:"",

            na_8_8_3_2_b:"",
            nc_8_8_3_2_b:"",
            c_8_8_3_2_b:"",
            comment_8_8_3_2_b:"",

            na_8_8_3_2_c:"",
            nc_8_8_3_2_c:"",
            c_8_8_3_2_c:"",
            comment_8_8_3_2_c:"",

            na_8_8_3_2_d:"",
            nc_8_8_3_2_d:"",
            c_8_8_3_2_d:"",
            comment_8_8_3_2_d:"",

            na_8_8_3_2_e:"",
            nc_8_8_3_2_e:"",
            c_8_8_3_2_e:"",
            comment_8_8_3_2_e:"",

            na_8_8_3_2_f:"",
            nc_8_8_3_2_f:"",
            c_8_8_3_2_f:"",
            comment_8_8_3_2_f:"",

                                
            na_8_9_1:"",
            nc_8_9_1:"",
            c_8_9_1:"",
            comment_8_9_1:"",

                                    
            na_8_9_2_a:"",
            nc_8_9_2_a:"",
            c_8_9_2_a:"",
            comment_8_9_2_a:"",

            na_8_9_2_b:"",
            nc_8_9_2_a:"",
            c_8_9_2_b:"",
            comment_8_9_2_b:"",

            na_8_9_2_c:"",
            nc_8_9_2_c:"",
            c_8_9_2_c:"",
            comment_8_9_2_c:"",

            
            na_8_9_2_d:"",
            nc_8_9_2_d:"",
            c_8_9_2_d:"",
            comment_8_9_2_d:"",

            
            na_8_9_2_e:"",
            nc_8_9_2_e:"",
            c_8_9_2_e:"",
            comment_8_9_2_e:"",

            
            na_8_9_2_f:"",
            nc_8_9_2_f:"",
            c_8_9_2_f:"",
            comment_8_9_2_f:"",

            na_8_9_2_g:"",
            nc_8_9_2_g:"",
            c_8_9_2_g:"",
            comment_8_9_2_g:"",

            na_8_9_2_h:"",
            nc_8_9_2_h:"",
            c_8_9_2_h:"",
            comment_8_9_2_h:"",

            na_8_9_2_i:"",
            nc_8_9_2_i:"",
            c_8_9_2_i:"",
            comment_8_9_2_g:"",

            na_8_9_2_h:"",
            nc_8_9_2_h:"",
            c_8_9_2_h:"",
            comment_8_9_2_h:"",

            
            na_8_9_2_j:"",
            nc_8_9_2_j:"",
            c_8_9_2_j:"",
            comment_8_9_2_j:"",

            
            na_8_9_3_a:"",
            nc_8_9_3_a:"",
            c_8_9_3_a:"",
            comment_8_9_3_a:"",

            na_8_9_3_b:"",
            nc_8_9_3_a:"",
            c_8_9_3_b:"",
            comment_8_9_3_b:"",

            na_8_9_3_c:"",
            nc_8_9_3_c:"",
            c_8_9_3_c:"",
            comment_8_9_3_c:"",

            
            na_8_9_3_d:"",
            nc_8_9_3_d:"",
            c_8_9_3_d:"",
            comment_8_9_3_d:"",

            
            na_8_9_3_e:"",
            nc_8_9_3_e:"",
            c_8_9_3_e:"",
            comment_8_9_3_e:"",

                
            na_8_9_3_i:"",
            nc_8_9_3_i:"",
            c_8_9_3_i:"",
            comment_8_9_3_i:"",

            na_8_9_3_ii:"",
            nc_8_9_3_ii:"",
            c_8_9_3_ii:"",
            comment_8_9_3_ii:"",



            na_a_2_i:"",
            nc_a_2_i:"",
            c_a_2_i:"",
            comment_a_2_i:"",


            na_a_2_ii:"",
            nc_a_2_ii:"",
            c_a_2_ii:"",
            comment_a_2_ii:"",

            
            na_a_2_iii:"",
            nc_a_2_iii:"",
            c_a_2_iii:"",
            comment_a_2_iii:"",

                
            na_a_2_iv:"",
            nc_a_2_iv:"",
            c_a_2_iv:"",
            comment_a_2_iv:"",

            na_a_3:"",
            nc_a_3:"",
            c_a_3:"",
            comment_a_3:"",

            na_a_4_i:"",
            nc_a_4_i:"",
            c_a_4_i:"",
            comment_a_4_i:"",


            na_a_4_ii:"",
            nc_a_4_ii:"",
            c_a_4_ii:"",
            comment_a_4_ii:"",

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
                                            title={ labName.toUpperCase() + " : " +  "CLAUSE 8 - MANAGEMENT SYSTEM REQUIREMENTS "|| ''}
                                            sx={{
                                                backgroundColor: '#ddd',
                                                borderBottom: '1px solid #e0e0e0',
                                                '& .MuiCardHeader-title': {
                                                    color: 'text.secondary',
                                                }
                                            }}
                                        />

                                      
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
                                                <TableCell style={{ ...cellStyle }}>8</TableCell>
                                                <TableCell><b>General</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {general.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}

                                                
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>8.2</TableCell>
                                                <TableCell><b>Management System Documentation</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {management.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}

                                                          
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>8.3</TableCell>
                                                <TableCell><b>Controls of Management System Documents</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {control_management.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}
                                            
                                                          
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>8.4</TableCell>
                                                <TableCell><b>Control of Records</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {control_record.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}
                                            

                                                          
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>8.5</TableCell>
                                                <TableCell><b>Actions to address risks and opportunities for improvement</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {action_address.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}

                                                
                                                          
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>8.6</TableCell>
                                                <TableCell><b>Continual improvement</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {imporovement.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}
                                                          
                                        <TableRow>
                                                <TableCell style={{ ...cellStyle }}>8.7</TableCell>
                                                <TableCell><b>Nonconformities and corrective actions</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {nonconformities.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}

                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>8.8</TableCell>
                                                <TableCell><b>Evaluations</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {evaluations.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}

                                                
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>8.9</TableCell>
                                                <TableCell><b>Management Reviews</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {management_review.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}

                                                   
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}></TableCell>
                                                <TableCell><b>Additional requirements for Point-of-Care Testing (POCT)</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {additional.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
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
                                                        {...register(`nc_${item.value}`)}
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
                                                        {...register(`c_${item.value}`)}
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
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                                ))}


                                           
                                        </TableBody>
                                        
                                    </Table>     
                    </form>
                </div>
                   
                              
    </LayoutQ>
    );
}


const general = [
	{
		id: 1,
        clause: '8.1.1',
        title: 'General Requirement',
        name: `Does the laboratory establish, document, implement and maintain a management 
        system to support and demonstrate the consistent fulfilment of the requirements of ISO 15189:2022?`,
        value: '8_1_1_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `As a minimum, does the management system of the laboratory include the following:

              —	responsibilities (8.1)
              —	objectives and policies (8.2)
              —	documented information (8.2, 8.3 and 8.4)
              —	actions to address risks and opportunities for improvement (8.5)

              —	continual improvement (8.6)
              —	corrective actions (8.7)

              —	evaluations and internal audits (8.8)

              —	management reviews (8.9)`,
        value: '8_1_1_ii',
	},
  {
		id: 1,
        clause: '8.1.2',
        title: 'Fulfilment of management system requirements',
        name: `The laboratory may meet 8.1.1 by establishing, implementing, and maintaining 
        a quality management system (e.g.? in accordance with the requirements of ISO 9001) 
        (see Table B.1)? This quality management system shall support and demonstrate the 
        consistent fulfilment of the requirements of Clauses 4 to 7 and the
        requirements specified in 8.2 to 8.9.
        `,
        value: '8_1_2',
	},
  {
		id: 1,
        clause: '8.1.3',
        title: 'Management system awareness',
        name: `Does the laboratory ensure that persons doing work under the laboratory’s control are aware of:
               a)	relevant objectives and policies;`,
        value: '8_1_3_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `b)	their contribution to the effectiveness of the management system, 
               including the benefits of improved performance;`,
        value: '8_1_3_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `c)	the consequences of not conforming with the management system requirements.`,
        value: '8_1_3_c',
	},

]

const management = [
	{
		id: 1,
        clause: '8.2.1',
        title: 'General',
		    name: `Did laboratory management establish, document, and maintain objectives and policies
         for the fulfilment of the purposes of ISO 15189:2022and did they ensure that the objectives
          and policies are acknowledged and implemented at all levels of the laboratory organization?`,
		    value: '8_2_1',
	},
  {
		id: 1,
        clause: '8.2.2',
        title: 'Competence and quality',
        name: `Do the objectives and policies address the competence, quality and consistent operation of the laboratory`,
        value: '8_2_2',
	},
  {
		id: 1,
        clause: '8.2.3',
        title: 'Evidence of commitment',
		    name: `How does laboratory management provide evidence of commitment to the development and implementation of 
        the management system and to continually improving its effectiveness?`,
		    value: '8_2_3',
	},
  {
		id: 1,
        clause: '8.2.4',
        title: 'Documentation',
		    name: `Are all documentation, processes, systems, and records, related to the fulfilment of the requirements of 
                ISO 15189:2022 included in, referenced from, or linked to the management system?`,
		    value: '8_2_4',
	},
  {
		id: 1,
        clause: '8.2.5',
        title: 'Personnel access',
		    name: `Do all personnel involved in laboratory activities have access to the parts of the management system 
               documentation and related information that are applicable to their responsibilities.`,
		    value: '8_2_5',
	},

]

const control_management = [
	{
		id: 1,
        clause: '8.3.1',
        title: 'General',
		    name: `Does the laboratory control the documents (internal and external) that relate to the fulfilment of ISO 15189:2022?`,
		    value: '8_3_1',
	},
  {
		id: 1,
        clause: '8.3.2',
        title: 'Control of documents',
        name: `Does the laboratory ensure that:
              a)	documents are uniquely identified;
              `,
        value: '8_3_2_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	documents are approved for adequacy before issue by authorized personnel who have the expertise and 
                  competence to determine adequacy;`,
		    value: '8_3_2_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `c)	documents are periodically reviewed and updated as necessary; `,
		    value: '8_3_2_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `d)	relevant versions of applicable documents are available at points of use and, 
                where necessary, their distribution is controlled;`,
		    value: '8_3_2_d',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `e)	changes and the current revision status of documents are identified;`,
		    value: '8_3_2_e',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `f)	documents are protected from unauthorized changes and any deletion or removal;`,
		    value: '8_3_2_f',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `g)	documents are protected from unauthorized access;`,
		    value: '8_3_2_g',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `h)	the unintended use of obsolete documents is prevented, and suitable identification 
              is applied to them if they are retained for any purpose;`,
		    value: '8_3_2_h',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `i)	at least one paper or electronic copy of each obsolete controlled document is retained 
              for a specified time period or in accordance with applicable specified requirements.`,
		    value: '8_3_2_i',
	},
 

]

const control_record = [
	{
		id: 1,
        clause: '8.4.1',
        title: 'Creation of records',
		    name: `Does the laboratory establish and retain legible records to demonstrate fulfilment of the requirements of ISO 15189:2022?`,
		    value: '8_4_1_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Are records created at the time each activity that affects the quality of an examination is performed?a)	
              documents are uniquely identified;
              `,
        value: '8_4_1_ii',
	},
  {
		id: 1,
        clause: '8.4.2',
        title: 'Amendment of records',
		    name: `Does the laboratory ensure that amendments to records can be traced to previous versions or to original observations? `,
		    value: '8_4_2_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Are both the original and amended data and files kept, including the date and where relevant, the time, of alteration, 
               an indication of the altered aspects and the personnel making the alterations?`,
        value: '8_4_2_ii',
	},
  {
		id: 1,
        clause: '8.4.3',
        title: 'Retention of records',
		    name: `a)	Does the laboratory implement the procedures needed for the identification, storage, protection from unauthorized access 
                  and changes, back-up, archive, retrieval, retention time, and disposal of its records?`,
		    value: '8_4_3_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `b)	Are the retention times for records specified?`,
        value: '8_4_3_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `c)	Are reported examination results retrievable for as long as necessary or as required?`,
        value: '8_4_3_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `d)	Are all records accessible throughout the entire retention period, legible in whichever medium the laboratory keeps 
              records, and available for laboratory management review (see 8.9)? `,
        value: '8_4_3_d',
	},

]

const action_address = [
	{
		id: 1,
        clause: '8.5.1',
        title: 'Identification of risks and opportunities for improvement',
		    name: `Does the laboratory identify risks and opportunities for improvement associated with the laboratory activities to:
              a)	prevent or reduce undesired impacts and potential failures in the laboratory activities;
              `,
		    value: '8_5_1_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `b)	assure that the management system achieves its intended results;
              `,
        value: '8_5_1_b',
	},
  {
		id: 1,
        clause: '8.4.2',
        title: 'Amendment of records',
		    name: `c)	mitigate risks to patient care; and `,
		    value: '8_5_1_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `d)	help achieve the purpose and objectives of the laboratory?`,
        value: '8_5_1_d',
	},
  {
		id: 1,
        clause: '8.5.2',
        title: 'Acting on risks and opportunities for improvement',
		    name: `Does the laboratory prioritize and act on identified risks?`,
		    value: '8_5_1_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Are actions taken to address risks proportional to the potential impact on laboratory examination results,
         as well as patient and personnel safety?`,
        value: '8_5_1_ii',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Does the laboratory record decisions made and actions taken on risks and opportunities?`,
        value: '8_5_1_iii',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Does the laboratory integrate and implement actions on identified risks and improvement 
            opportunities into its management system and evaluate their effectiveness?`,
        value: '8_5_1_iv',
	},

]

const imporovement = [
	{
		id: 1,
        clause: '8.6.1',
        title: 'Continual improvement',
		    name: `a)	Does the laboratory continually improve the effectiveness of the management system, including the pre-examination,
         examination and post-examination processes as stated in the objectives and policies?`,
		    value: '8_6_1_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `b)	Does the laboratory identify and select opportunities for improvement and develop, document, and implement any 
              necessary actions? Are improvement activities directed at areas of highest priority based on risk assessments and 
              the opportunities identified (see 8.5)?`,
        value: '8_6_1_b',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `c)	Does the laboratory evaluate the effectiveness of the actions taken? `,
		    value: '8_6_1_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `d)	Does laboratory management ensure that the laboratory participates in continual 
        improvement activities that encompass relevant areas and outcomes of patient care?`,
        value: '8_6_1_d',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `e)	Does laboratory management communicate to personnel its improvement plans and related goals?`,
		    value: '8_6_1_e',
	},
  {
		id: 1,
        clause: '8.6.1',
        title: 'Laboratory patients, user, and personnel feedback',
		    name: `Does the laboratory seek feedback from its patients, users, and personnel?`,
		    value: '8_6_1_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Is the feedback analysed and used to improve the management system, laboratory activities and services to users?`,
        value: '8_6_1_ii',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Are records of feedback maintained including the actions taken?`,
        value: '8_6_1_iii',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Is communication provided to personnel on actions taken arising from their feedback?`,
        value: '8_6_1_iv',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Does the laboratory integrate and implement actions on identified risks and improvement 
            opportunities into its management system and evaluate their effectiveness?`,
        value: '8_6_1_v',
	},

]


const nonconformities = [
	{
		id: 1,
        clause: '8.7.1',
        title: 'Actions when nonconformity occurs',
		    name: `
              When a nonconformity occurs, does the laboratory:

              a)	Respond to the nonconformity and, as applicable:
              1)		take immediate action to control and correct the nonconformity;

              2)		address the consequences, with a particular focus on patient safety including escalation to the appropriate person.
              `,
		    value: '8_7_1_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `b)	Determine the cause(s) of the nonconformity?`,
        value: '8_7_1_b',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `c)	Evaluate the need for corrective action to eliminate the 
         cause(s) of the nonconformity, in order to reduce the likelihood of recurrence or occurrence elsewhere, by:
          1)	reviewing and analyzing the nonconformity;
          2)	determining whether similar nonconformities exist, or could potentially occur;
          3)		assessing the potential risk(s) and effect(s) if the nonconformity recurs?
          `,
		    value: '8_7_1_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `d)	Implement any action needed?`,
        value: '8_7_1_d',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `e)	Review and evaluate the effectiveness of any corrective action taken?`,
		    value: '8_7_1_e',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `f)	Update risks and opportunities for improvement, as needed?`,
		    value: '8_7_1_f',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `g)	Make changes to the management system, if necessary?`,
        value: '8_7_1_g',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Are records of feedback maintained including the actions taken?`,
        value: '8_7_1_i',
	},
  {
		id: 1,
        clause: '8.7.2',
        title: 'Corrective action effectiveness',
        name: `Are corrective actions appropriate to the effects of the nonconformities encountered 
               and shall mitigate the identified cause(s)?`,
        value: '8_7_2',
	},
  {
		id: 1,
        clause: '8.7.3',
        title: 'Records of nonconformities and corrective actions',
        name: `Does the laboratory retain records as evidence of the:
          a)	nature of the nonconformities, cause(s) and any subsequent actions taken, and
          b)	evaluation of the effectiveness of any corrective action?
          `,
        value: '8_7_3',
	},

]

const evaluations = [
	{
		id: 1,
        clause: '8.8.1',
        title: 'General',
		    name: `Does the laboratory conduct evaluations at planned intervals to demonstrate that the management, 
        support, and pre-examination, examination, and post-examination processes meet the needs and 
        requirements of patients and laboratory users, and to ensure conformity to the requirements of ISO 15189:2022?`,
		    value: '8_8_1',
	},
  {
		id: 1,
        clause: '8.8.2',
        title: 'Quality indicators',
        name: `Is the process of monitoring quality indicators planned, which includes establishing the objectives,
         methodology, interpretation, limits, action plan and duration of monitoring?`,
        value: '8_8_2_i',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `Are the indicators periodically reviewed, to ensure continued appropriateness?`,
		    value: '8_8_2_ii',
	},
  {
		id: 1,
        clause: '8.8.3',
        title: 'Internal audits',
		    name: `8.8.3.1 : Does the laboratory conduct internal audits at planned intervals to provide information on whether the management system
              a)	conforms to the laboratory’s own requirements for its management system, including the laboratory activities,
              `,
		    value: '8_8_3_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	conforms to the requirements of ISO 15189:2022 and`,
		    value: '8_8_3_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `c)	is effectively implemented and maintained?`,
        value: '8_8_3_c',
	},
  {
		id: 1,
        clause: '8.8.3.2',
        title: '',
        name: `Does the laboratory plan, establish, implement and maintain an internal audit programme that includes:
              a)	priority given to risk to patients from laboratory activities?
              `,
        value: '8_8_3_2_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `b)	a schedule which takes into consideration identified risks; the outcomes of both external evaluations and 
        previous internal audits; the occurrence of nonconformities, incidents, and complaints; and 
        changes affecting the laboratory activities?`,
        value: '8_8_3_2_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `c)	specified audit objectives, criteria and scope for each audit?`,
        value: '8_8_3_2_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `d)	selection of auditors who are trained, qualified and authorized to assess the 
        performance of the laboratory's management system, and, whenever resources permit, 
        are independent of the activity to be audited?`,
        value: '8_8_3_2_d',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `e)	ensuring objectivity and impartiality of the audit process?`,
        value: '8_8_3_2_e',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `f)	ensuring that the results of the audits are reported to relevant personnel?`,
        value: '8_8_3_2_f',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `g)	implementation of appropriate correction and corrective actions without undue delay?`,
        value: '8_8_3_2_g',
	},

]


const management_review = [
	{
		id: 1,
        clause: '8.9.1',
        title: 'General',
		    name: `Does laboratory management review its management system at planned intervals to ensure its 
          continuing suitability, adequacy and effectiveness, including the stated policies and objectives 
          related to the fulfilment of ISO 15189:2022`,
		    value: '8_9_1',
	},
  {
		id: 1,
        clause: '8.9.2',
        title: 'Review input',
        name: `Are the inputs to management review recorded and does it include evaluations of at least the following:
              a)	status of actions from previous management reviews, internal and external changes to the management system,
              changes in the volume and type of laboratory activities and adequacy of resources;
              `,
        value: '8_9_2_a',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `b)	fulfilment of objectives and suitability of policies and procedures;`,
		    value: '8_9_2_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `c)	outcomes of recent evaluations, process monitoring using quality indicators, internal audits,
              analysis of non-conformities, corrective actions, assessments by external bodies; `,
        value: '8_9_2_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `d)	patient, user and personnel feedback and complaints; `,
		    value: '8_9_2_d',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `e)	quality assurance of result validity;`,
		    value: '8_9_2_e',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `f)	effectiveness of any implemented improvements and actions taken to address risks and opportunities for improvement;`,
        value: '8_9_2_f',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `g)	performance of external providers;`,
        value: '8_9_2_g',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `h)	results	of	participation	in interlaboratory	comparison programmes; `,
        value: '8_9_2_h',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `i)	evaluation of POCT activities;`,
        value: '8_9_2_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `j)	other relevant factors, such as monitoring activities and training.`,
        value: '8_9_2_j',
	},
  {
		id: 1,
        clause: '8.9.3',
        title: 'Review input',
        name: `Is the output from the management review a record of decisions and actions related to at least:
                a)	the effectiveness of the management system and its processes;
              `,
        value: '8_9_3_a',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `b)	improvement of the laboratory activities related to the fulfilment of the requirements of ISO 15189:2022;`,
		    value: '8_9_3_b',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `c)	provision of required resources;`,
		    value: '8_9_3_c',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `d)	improvement of services to patients and users;`,
		    value: '8_9_3_d',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `e)	 any need for change.`,
		    value: '8_9_3_e',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `Does laboratory management ensure that actions arising from management review are completed within a specified time frame?`,
		    value: '8_9_3_i',
	},
  {
		id: 1,
        clause:'',
        title: '',
		    name: `Are conclusions and actions arising from management reviews communicated to laboratory personnel`,
		    value: '8_9_3_ii',
	},

]


const additional = [
	{
		id: 1,
        clause: 'A.2',
        title: 'Governance',
        name: `Is the governing body of the organization ultimately responsible for ensuring that appropriate processes 
        are in place to monitor the accuracy and quality of POCT conducted within the organization?`,
        value: 'a_2_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Do service agreements between the laboratory and all locations using laboratory supported POCT ensure that
         respective responsibilities and authorities are specified and communicated within the organization?`,
        value: 'a_2_ii',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Do these agreements have clinical approval, and where applicable, financial approval?`,
        value: 'a_2_iii',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Are these service agreements with POCT areas and can they be managed via a health professional 
        grouping (e.g. medical advisory committee)?`,
        value: 'a_2_iv',
	},
  {
		id: 1,
        clause: 'A.3',
        title: 'Quality assurance programme',
        name: `Did the laboratory appoint a person with appropriate training and experience to be responsible for 
        POCT quality, which includes review of and conformity with the requirements of ISO 15189:2022 as related to POCT?`,
        value: 'a_3',
	},
  {
		id: 1,
        clause: 'A.4',
        title: 'Training programme',
        name: `Is a person with appropriate training and experience appointed to manage training and competency assessment of
         personnel performing POCT?`,
        value: 'a_4_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Does the trainer develop, implement, and maintain an appropriate theoretical and practical training programme for all POCT personnel?`,
        value: 'a_4_ii',
	},

]
