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
import { render } from '@testing-library/react';


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


export function SadcasAPreExam(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            
    nc_7_2_4_1_i:"",
    na_7_2_4_1_i:"",
    c_7_2_4_1_i:"",
    comment_7_2_4_1_i:"",

        
    na_7_2_4_1_ii:"",
    nc_7_2_4_1_ii:"",
    c_7_2_4_1_ii:"",
    comment_7_2_4_1_ii:"",

        
    na_7_2_4_1_iii:"",
    nc_7_2_4_1_iii:"",
    c_7_2_4_1_iii:"",
    comment_7_2_4_1_iii:"",

        
    na_7_2_4_1_iv:"",
    nc_7_2_4_1_iv:"",
    c_7_2_4_1_iv:"",
    comment_7_2_4_1_iv:"",

        
    na_7_2_4_1_v:"",
    nc_7_2_4_1_v:"",
    c_7_2_4_1_v:"",
    comment_7_2_4_1_v:"",

    na_7_2_4_2:"",
    nc_7_2_4_2:"",
    c_7_2_4_2:"",
    comment_7_2_4_2:"",

    
    na_7_2_4_2_a:"",
    nc_7_2_4_2_a:"",
    c_7_2_4_2_a:"",
    comment_7_2_4_2_a:"",

        
    na_7_2_4_2_b:"",
    nc_7_2_4_2_b:"",
    c_7_2_4_2_b:"",
    comment_7_2_4_2_b:"",

        
    na_7_2_4_2_c:"",
    nc_7_2_4_2_c:"",
    c_7_2_4_2_c:"",
    comment_7_2_4_2_c:"",

        
    na_7_2_4_2_d:"",
    nc_7_2_4_2_d:"",
    c_7_2_4_2_d:"",
    comment_7_2_4_2_d:"",

        
    na_7_2_4_2_e:"",
    nc_7_2_4_2_e:"",
    c_7_2_4_2_e:"",
    comment_7_2_4_2_e:"",

        
    na_7_2_4_2_f:"",
    nc_7_2_4_2_f:"",
    c_7_2_4_2_f:"",
    comment_7_2_4_2_f:"",

        
    na_7_2_4_3_a:"",
    nc_7_2_4_3_a:"",
    c_7_2_4_3_a:"",
    comment_7_2_4_3_a:"",

            
    na_7_2_4_3_b:"",
    nc_7_2_4_3_b:"",
    c_7_2_4_3_b:"",
    comment_7_2_4_3_b:"",

            
    na_7_2_4_3_c:"",
    nc_7_2_4_3_c:"",
    c_7_2_4_3_c:"",
    comment_7_2_4_3_c:"",

            
                
    na_7_2_4_4_a:"",
    nc_7_2_4_4_a:"",
    c_7_2_4_4_a:"",
    comment_7_2_4_4_a:"",

    na_7_2_4_4_i:"",
    nc_7_2_4_4_i:"",
    c_7_2_4_4_i:"",
    comment_7_2_4_4_i:"",

    
    na_7_2_4_4_ii:"",
    nc_7_2_4_4_ii:"",
    c_7_2_4_4_ii:"",
    comment_7_2_4_4_ii:"",

        
    na_7_2_4_4_iii:"",
    nc_7_2_4_4_iii:"",
    c_7_2_4_4_iii:"",
    comment_7_2_4_4_iii:"",

            
    na_7_2_4_4_iv:"",
    nc_7_2_4_4_iv:"",
    c_7_2_4_4_iv:"",
    comment_7_2_4_4_iv:"",

            
    na_7_2_4_4_v:"",
    nc_7_2_4_4_v:"",
    c_7_2_4_4_v:"",
    comment_7_2_4_4_v:"",

    na_7_2_4_4_vi:"",
    nc_7_2_4_4_vi:"",
    c_7_2_4_4_vi:"",
    comment_7_2_4_4_vi:"",

    
    na_7_2_4_4_vii:"",
    nc_7_2_4_4_vii:"",
    c_7_2_4_4_vii:"",
    comment_7_2_4_4_vii:"",

    na_7_2_4_4_viii:"",
    nc_7_2_4_4_viii:"",
    c_7_2_4_4_viii:"",
    comment_7_2_4_4_viii:"",

    na_7_2_4_4_ix:"",
    nc_7_2_4_4_ix:"",
    c_7_2_4_4_ix:"",
    comment_7_2_4_4_ix:"",

    
    na_7_2_4_4_x:"",
    nc_7_2_4_4_x:"",
    c_7_2_4_4_x:"",
    comment_7_2_4_4_x:"",

        
    na_7_2_5_a_i:"",
    nc_7_2_5_a_i:"",
    c_7_2_5_a_i:"",
    comment_7_2_5_a_i:"",

            
    na_7_2_5_a_ii:"",
    nc_7_2_5_a_ii:"",
    c_7_2_5_a_ii:"",
    comment_7_2_5_a_ii:"",

                
    na_7_2_5_a_iii:"",
    nc_7_2_5_a_iii:"",
    c_7_2_5_a_iii:"",
    comment_7_2_5_a_iii:"",

                
    na_7_2_5_a_iv:"",
    nc_7_2_5_a_iv:"",
    c_7_2_5_a_iv:"",
    comment_7_2_5_a_iv:"",

                    
    na_7_2_5_b:"",
    nc_7_2_5_b:"",
    c_7_2_5_b:"",
    comment_7_2_5_b:"",

                        
    na_7_2_5_c:"",
    nc_7_2_5_c:"",
    c_7_2_5_c:"",
    comment_7_2_5_c:"",

    na_7_2_6_1_a:"",
    nc_7_2_6_1_a:"",
    c_7_2_6_1_a:"",
    comment_7_2_6_1_a:"",

    
    na_7_2_6_1_b:"",
    nc_7_2_6_1_b:"",
    c_7_2_6_1_b:"",
    comment_7_2_6_1_b:"",

    
    na_7_2_6_1_c:"",
    nc_7_2_6_1_c:"",
    c_7_2_6_1_c:"",
    comment_7_2_6_1_c:"",

    
    na_7_2_6_1_d:"",
    nc_7_2_6_1_d:"",
    c_7_2_6_1_d:"",
    comment_7_2_6_1_d:"",

    
    na_7_2_6_1_e:"",
    nc_7_2_6_1_e:"",
    c_7_2_6_1_e:"",
    comment_7_2_6_1_e:"",

    
    na_7_2_6_1_f:"",
    nc_7_2_6_1_f:"",
    c_7_2_6_1_f:"",
    comment_7_2_6_1_f:"",

    
    na_7_2_6_1_g:"",
    nc_7_2_6_1_g:"",
    c_7_2_6_1_g:"",
    comment_7_2_6_1_g:"",

    
    na_7_2_6_2_a_i:"",
    nc_7_2_6_2_a_i:"",
    c_7_2_6_2_a_i:"",
    comment_7_2_6_2_a_i:"",

        
    na_7_2_6_2_a_ii:"",
    nc_7_2_6_2_a_ii:"",
    c_7_2_6_2_a_ii:"",
    comment_7_2_6_2_a_ii:"",

        
    na_7_2_6_2_a_iii:"",
    nc_7_2_6_2_a_iii:"",
    c_7_2_6_2_a_iii:"",
    comment_7_2_6_2_a_iii:"",

        
    na_7_2_6_2_a_iv:"",
    nc_7_2_6_2_a_iv:"",
    c_7_2_6_2_a_iv:"",
    comment_7_2_6_2_a_iv:"",

        
    na_7_2_6_2_a_v:"",
    nc_7_2_6_2_a_v:"",
    c_7_2_6_2_a_v:"",
    comment_7_2_6_2_a_v:"",

        
    na_7_2_6_2_b:"",
    nc_7_2_6_2_b:"",
    c_7_2_6_2_b:"",
    comment_7_2_6_2_b:"",

    na_7_2_7_1:"",
    nc_7_2_7_1:"",
    c_7_2_7_1:"",
    comment_7_2_7_1:"",

                
    na_7_2_7_2:"",
    nc_7_2_7_2:"",
    c_7_2_7_2:"",
    comment_7_2_7_2:"",

                    
    na_7_2_7_3:"",
    nc_7_2_7_3:"",
    c_7_2_7_3:"",
    comment_7_2_7_3:"",

                        
    na_7_5_i:"",
    nc_7_5_i:"",
    c_7_5_i:"",
    comment_7_5_i:"",
                
    na_7_5_a:"",
    nc_7_5_a:"",
    c_7_5_a:"",
    comment_7_5_a:"",
                         
    na_7_5_b:"",
    nc_7_5_b:"",
    c_7_5_b:"",
    comment_7_5_b:"",
                         
    na_7_5_c:"",
    nc_7_5_c:"",
    c_7_5_c:"",
    comment_7_5_c:"",

                             
    na_7_5_d:"",
    nc_7_5_d:"",
    c_7_5_d:"",
    comment_7_5_d:"",

                      
    na_7_5_e:"",
    nc_7_5_e:"",
    c_7_5_e:"",
    comment_7_5_e:"",

                    
    na_7_5_f:"",
    nc_7_5_f:"",
    c_7_5_f:"",
    comment_7_5_f:"",

                    
    na_7_5_g:"",
    nc_7_5_g:"",
    c_7_5_g:"",
    comment_7_5_g:"",

                            
    na_7_5_ii:"",
    nc_7_5_ii:"",
    c_7_5_ii:"",
    comment_7_5_ii:"",

    na_7_5_iii:"",
    nc_7_5_iii:"",
    c_7_5_iii:"",
    comment_7_5_iii:"",

                                
    na_7_6_1:"",
    nc_7_6_1:"",
    c_7_6_1:"",
    comment_7_6_1:"",

                                    
    na_7_6_2_i:"",
    nc_7_6_2_i:"",
    c_7_6_2_i:"",
    comment_7_6_2_i:"",

                                        
    na_7_6_2_ii:"",
    nc_7_6_2_ii:"",
    c_7_6_2_ii:"",
    comment_7_6_2_ii:"",

                                           
    na_7_6_3_a:"",
    nc_7_6_3_a:"",
    c_7_6_3_a:"",
    comment_7_6_3_a:"",

                                               
    na_7_6_3_a:"",
    nc_7_6_3_a:"",
    c_7_6_3_a:"",
    comment_7_6_3_a:"",

    na_7_6_3_b:"",
    nc_7_6_3_b:"",
    c_7_6_3_b:"",
    comment_7_6_3_b:"",

    na_7_6_3_c:"",
    nc_7_6_3_c:"",
    c_7_6_3_c:"",
    comment_7_6_3_c:"",

    
    na_7_6_3_d:"",
    nc_7_6_3_d:"",
    c_7_6_3_d:"",
    comment_7_6_3_d:"",

    
    na_7_6_3_e:"",
    nc_7_6_3_e:"",
    c_7_6_3_e:"",
    comment_7_6_3_e:"",

        
    na_7_6_4_i:"",
    nc_7_6_4_i:"",
    c_7_6_4_i:"",
    comment_7_6_4_i:"",

            
    na_7_6_4_ii:"",
    nc_7_6_4_ii:"",
    c_7_6_4_ii:"",
    comment_7_6_4_ii:"",

                
    na_7_6_4_iii:"",
    nc_7_6_4_iii:"",
    c_7_6_4_iii:"",
    comment_7_6_4_iii:"",

                    
    na_7_7_1_a:"",
    nc_7_7_1_a:"",
    c_7_7_1_a:"",
    comment_7_7_1_a:"",

                        
    na_7_7_1_b:"",
    nc_7_7_1_b:"",
    c_7_7_1_b:"",
    comment_7_7_1_b:"",

                        
    na_7_7_1_c:"",
    nc_7_7_1_c:"",
    c_7_7_1_c:"",
    comment_7_7_1_c:"",

                            
    na_7_7_1_ii:"",
    nc_7_7_1_ii:"",
    c_7_7_1_ii:"",
    comment_7_7_1_ii:"",

                            
    na_7_7_2_a:"",
    nc_7_7_2_a:"",
    c_7_7_2_a:"",
    comment_7_7_2_a:"",

                                
    na_7_7_2_b:"",
    nc_7_7_2_b:"",
    c_7_7_2_b:"",
    comment_7_7_2_b:"",

                                
    na_7_7_2_c:"",
    nc_7_7_2_c:"",
    c_7_7_2_c:"",
    comment_7_7_2_c:"",
                              
    na_7_7_3_i:"",
    nc_7_7_3_i:"",
    c_7_7_3_i:"",
    comment_7_7_3_i:"",

    na_7_7_3_ii:"",
    nc_7_7_3_ii:"",
    c_7_7_3_ii:"",
    comment_7_7_3_ii:"",

    
    na_7_7_3_ii:"",
    nc_7_7_3_ii:"",
    c_7_7_3_ii:"",
    comment_7_7_3_ii:"",

    
    na_7_7_3_iii:"",
    nc_7_7_3_iii:"",
    c_7_7_3_iii:"",
    comment_7_7_3_iii:"",

    
    na_7_8_i:"",
    nc_7_8_i:"",
    c_7_8_i:"",
    comment_7_8_i:"",

    na_7_8_ii:"",
    nc_7_8_ii:"",
    c_7_8_ii:"",
    comment_7_8_ii:"",

     
    na_7_8_a:"",
    nc_7_8_a:"",
    c_7_8_a:"",
    comment_7_8_a:"",

         
    na_7_8_b:"",
    nc_7_8_b:"",
    c_7_8_b:"",
    comment_7_8_b:"",

             
    na_7_8_c:"",
    nc_7_8_c:"",
    c_7_8_c:"",
    comment_7_8_c:"",

                 
    na_7_8_d:"",
    nc_7_8_d:"",
    c_7_8_d:"",
    comment_7_8_d:"",

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
                                            title={ labName.toUpperCase() + " : " +  "CLAUSE 7 - PRE - EXAMINATION PROCESS "|| ''}
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
                                                <TableCell style={{ ...cellStyle }}>7.2.4</TableCell>
                                                <TableCell><b>Primary sample collection and handling</b></TableCell>
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
                                                <TableCell style={{ ...cellStyle }}>7.5</TableCell>
                                                <TableCell><b>Nonconforming Work</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {nonconforming.map((item) => (
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
                                                <TableCell style={{ ...cellStyle }}>7.6</TableCell>
                                                <TableCell><b>Control of data and information management</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {control_data.map((item) => (
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
                                                <TableCell style={{ ...cellStyle }}>7.7</TableCell>
                                                <TableCell><b>Complaints</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {complaints.map((item) => (
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
                                                <TableCell style={{ ...cellStyle }}>7.8</TableCell>
                                                <TableCell><b>Continuity and Emerging preparedness planning</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {continuity.map((item) => (
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
        clause: '7.2.4.1',
        title: 'General',
		name: `Does the laboratory have procedures for the collection and handling of primary samples?`,
		value: '7_2_4_1_i',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `Is the information available to those responsible for sample collection?`,
		value: '7_2_4_1_ii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `Is any deviation from the established collection procedures clearly recorded?`,
		value: '7_2_4_1_iii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `Is the potential risk and impact on the patient outcome of acceptance or rejection of the 
        sample assessed, recorded and communicated to the appropriate personnel?`,
		value: '7_2_4_1_iv',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `Does the laboratory periodically review requirements for sample volume, collection device and preservatives
        for all sample types, as applicable, to ensure that neither insufficient nor excessive amounts of sample are collected, 
        and samples are properly collected to preserve the analyte?`,
		value: '7_2_4_1_v',
	},

    {
		id: 1,
        clause: '7.2.4.2',
        title: 'Information for pre-collection activities',
		name: `Does the laboratory provide information and instructions for pre- collection activities with sufficient detail to ensure that the integrity of the sample is not compromised?`,
		value: '7_2_4_2',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `Does this include:
            a)	preparation of the patient (e.g., instructions to caregivers, sample collectors and patients);
            `,
		value: '7_2_4_2_a',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `b)	type and amount of the primary sample to be collected with descriptions of the containers and any necessary additives, and when relevant the order of collecting samples; `,
		value: '7_2_4_2_b',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `c)	special timing of collection, where relevant;`,
		value: '7_2_4_2_c',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `d)	provision of clinical information relevant to, or affecting sample collection, 
        examination performance or result interpretation (e.g., history of administration of drugs);`,
		value: '7_2_4_2_d',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `e)	sample labelling for unequivocal identification of the patient, as well as source and site of sample, and labelling,
         when several samples from the same patient are to be collected, including multiple pieces of tissue or slides;`,
		value: '7_2_4_2_e',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `f)	the laboratory’s criteria for acceptance and rejection of samples specific to the examinations requested.`,
		value: '7_2_4_2_f',
	},
    {
		id: 1,
        clause: '7.2.4.3',
        title: 'Patient consent',
		name: `a)	Does the laboratory obtain the informed consent of the patient for all procedures carried out on the patient?`,
		value: '7_2_4_3_a',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `b)	Are special procedures, including more invasive procedures, or those with an increased risk of complications 
                to the procedure, provide a more detailed explanation and, in some cases, recorded consent? `,
		value: '7_2_4_3_b',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `c)	If obtaining consent is not possible in emergency situations, can the laboratory carry out necessary procedures,
                 provided they are in the patient’s best interest?`,
		value: '7_2_4_3_c',
	},
    {
		id: 1,
        clause: '7.2.4.4',
        title: 'Instructions for collection activities',
		name: `a)	Does the laboratory obtain the informed consent of the patient for all procedures carried out on the patient?`,
		value: '7_2_4_4_a',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `To ensure safe, accurate and clinically appropriate sample collection and pre-examination storage, does the laboratory provide instructions for:`,
		value: '7_2_4_4_i',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `verification of the identity of the patient from whom a primary sample is collected;`,
		value: '7_2_4_4_ii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `verification and when relevant, recording that the patient meets pre-examination
         requirements [e.g., fasting status, medication status (time of last dose, cessation), 
         sample collection at predetermined time or time intervals;`,
		value: '7_2_4_4_iii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `collection of primary samples, with descriptions of the primary sample containers and any necessary additives, 
                as well as the order of sample collection, where relevant;`,
		value: '7_2_4_4_iv',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `labelling of primary samples in a manner that provides an unequivocal link with the patients from whom they are collected;`,
		value: '7_2_4_4_v',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `recording of the identity of the person collecting the primary sample and the collection 
        date, and, when relevant, recording of the collection time;`,
		value: '7_2_4_4_vi',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `requirements for separating or dividing the primary sample when necessary;`,
		value: '7_2_4_4_vii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `requirements for separating or dividing the primary sample when necessary;`,
		value: '7_2_4_4_viii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `stabilization and proper storage conditions before collected samples are delivered to the laboratory;`,
		value: '7_2_4_4_ix',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `safe disposal of materials used in the collection process.`,
		value: '7_2_4_4_x',
	},
    {
		id: 1,
        clause: '7.2.5',
        title: 'Sample transportation',
		name: `a)	To ensure the timely and safe transportation of samples, does the laboratory provide instructions for:
            
                    1)	packaging of samples for transportation;
                    `,
		value: '7_2_5_a_i',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `2) ensuring the time between collection and receipt in the laboratory is appropriate for the requested examinations `,
		value: '7_2_5_a_ii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `3)	maintaining the temperature interval specified for sample collection and handling;`,
		value: '7_2_5_a_iii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `4)	any specific requirements to ensure integrity of samples, e.g.? use of designated preservatives.`,
		value: '7_2_5_a_iv',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `b)	If the integrity of a sample has been compromised and there is a health risk, is the organization
                 responsible for the transport of the sample notified immediately and action taken to reduce the risk
                  and to prevent recurrence?`,
		value: '7_2_5_b',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `c)	Does the laboratory establish and periodically evaluate adequacy of sample transportation systems? `,
		value: '7_2_5_c',
	},
    {
		id: 1,
        clause: '7.2.6.1',
        title: 'Sample receipt procedure',
		name: `Does the laboratory have a procedure for sample receipt that includes:
                a)	the unequivocal traceability of samples by request and labelling, to a uniquely identified patient 
                and when applicable, the anatomical site;
                `,
		value: '7_2_6_1_a',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `b)	criteria for acceptance and rejection of samples;`,
		value: '7_2_6_1_b',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `c)	recording the date and time of receipt of the sample, when relevant;`,
		value: '7_2_6_1_c',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `d)	recording the identity of the person receiving the sample, when relevant;`,
		value: '7_2_6_1_d',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `e)	evaluation of received samples, by authorized personnel, to ensure compliance 
                    with acceptability criteria relevant for the requested examination(s);`,
		value: '7_2_6_1_e',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `f)	instructions for samples specifically marked as urgent, which include details of 
                special labelling, transport, any rapid processing method, turnaround times, 
                and special reporting criteria to be followed;`,
		value: '7_2_6_1_f',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `g)	ensuring that all portions of the sample shall be unequivocally traceable to the original sample?`,
		value: '7_2_6_1_g',
	},
    {
		id: 1,
        clause: '7.2.6.2',
        title: 'Sample acceptance exceptions',
		name: `a)	Does the laboratory have a process that considers the best interests of the patient in receiving care
                , when a sample has been compromised due to:
                1)	incorrect patient or sample identification,
                `,
		value: '7_2_6_2_a_i',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `2)  sample instability due to, for example, delay in transport,`,
		value: '7_2_6_2_a_ii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `3)	incorrect storage or handling temperature,`,
		value: '7_2_6_2_a_iii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `4)	inappropriate container(s), and`,
		value: '7_2_6_2_a_iv',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `5)	insufficient sample volume?`,
		value: '7_2_6_2_a_v',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `b)	When a compromised clinically critical or irreplaceable sample is accepted, after consideration of 
            the risk to patient safety, does the final report indicate the nature of the problem and where applicable, 
            advising caution when interpreting results that can be affected?`,
		value: '7_2_6_2_b',
	},
    {
		id: 1,
        clause: '7.2.7',
        title: 'Pre-examination handling, preparation, and storage  7.2.7.1  Sample acceptance exceptions',
		name: `Does the laboratory have procedures and appropriate facilities for securing patient samples, ensuring sample
               integrity and preventing loss or damage during, handling, preparation and storage?`,
		value: '7_2_7_1',
	},
    {
		id: 1,
        clause: '7.2.7.2',
        title: 'Criteria for additional examination requests',
		name: `Do laboratory procedures include time limits for requesting additional examinations on the same sample`,
		value: '7_2_7_2',
	},
    {
		id: 1,
        clause: '7.2.7.3',
        title: 'Sample stability',
		name: `Considering the stability of the analyte in a primary sample, is the time between sample collection and 
               performing the examination specified and monitored where relevant?`,
		value: '7_2_7_3',
	},
    

]

const nonconforming = [
	{
		id: 1,
        clause: '',
        title: '',
		    name: `Does the laboratory have a process for when any aspect of its laboratory activities or examination 
            results do not conform to its own procedures, quality specifications, or the user requirements 
            (e.g. equipment or environmental conditions are out of specified limits, results of monitoring 
            fail to meet specified criteria)?`,
		    value: '7_5_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Does the process ensure that:
            a)	the responsibilities and authorities for the management of nonconforming work are specified;
            `,
        value: '7_5_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	immediate and long-term actions are specified and based upon the risk analysis process 
            established by the laboratory;`,
		    value: '7_5_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `c)	examinations are halted, and reports withheld when there is a risk of harm to patients;`,
		    value: '7_5_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `d)	an evaluation is made of the clinical significance of the nonconforming work, 
            including an impact analysis on examination results which were or could have been released 
            prior to identification of the nonconformance;`,
		    value: '7_5_d',
  },
  {
    id: 1,
    clause: '',
    title: '',
        name: `e)	a decision is made on the acceptability of the nonconforming work; `,
        value: '7_5_e',
  },
  {
    id: 1,
    clause: '',
    title: '',
        name: `f)	when necessary, examination results are revised, and the user is notified;`,
        value: '7_5_f',
  },
  {
    id: 1,
    clause: '',
    title: '',
        name: `g)	the responsibility for authorizing the resumption of work is specified.`,
        value: '7_5_g',
  },
  {
    id: 1,
    clause: '',
    title: '',
        name: `Does the laboratory implement corrective action commensurate with the risk of recurrence of the nonconforming work? (see 8.7).`,
        value: '7_5_ii',
  },
  {
    id: 1,
    clause: '',
    title: '',
        name: `Does the laboratory retain records of nonconforming work and actions as specified in 7.5 a) to g)?`,
        value: '7_5_iii',
  },

]


const control_data = [
	{
		id: 1,
        clause: '7.6.1',
        title: 'General',
		    name: `Does the laboratory have access to the data and information needed to perform laboratory activities?`,
		    value: 'health_post',
	},

  {
		id: 1,
        clause: '7.6.2',
        title: 'Authorities and responsibilities for information management',
		    name: ``,
		    value: '7_6_1',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `Does the laboratory ensure that the authorities and responsibilities for the management of the information 
        systems are specified, including the maintenance and modification to the information systems that can affect patient care?`,
		    value: '7_6_2_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `Is the laboratory ultimately responsible for the laboratory information systems?`,
		    value: '7_6_2_ii',
	},
    {
		id: 1,
        clause: '7.6.3',
        title: 'Information systems management',
		    name: `Are the system(s) used for the collection, processing, recording, reporting, storage or retrieval 
                    of examination data and information:
                    a)	validated by the supplier and verified for functionality by the laboratory before introduction? 
                    Any changes to the system, including laboratory software configuration or modifications to commercial off-the-shelf software, 
                    shall be authorized, documented and validated before implementation?
                    `,
		    value: '7_6_3_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	documented, and the documentation readily available to authorized users, including that 
            for day-to-day functioning of the system?`,
		    value: '7_6_3_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `c)	implemented taking cybersecurity into account, to protect the system from unauthorized 
            access and safeguard data against tampering or loss?`,
		    value: '7_6_3_c',
	},

  {
		id: 1,
        clause: '',
        title: '',
		    name: `d)	operated in an environment that complies with supplier specifications or, in the case of non-computerized systems,
             provides conditions which safeguard the accuracy of manual recording and transcription?`,
		    value: '7_6_3_d',
	},
    {
		id: 1,
        clause: '',
        title: '',
		    name: `e)	maintained in a manner that ensures the integrity of the data and information and includes the recording of system
             failures and the appropriate immediate and corrective actions?
             Are calculations and data transfers checked in an appropriate and systematic manner?
             `,
		    value: '7_6_3_e',
	},
    {
		id: 1,
        clause: '7.6.4',
        title: 'Downtime plans',
		    name: `Does the laboratory have planned processes to maintain operations in the event of failure or during downtime 
            in information systems that affects the laboratory's activities? `,
		    value: '7_6_4_i',
	},
    {
		id: 1,
        clause: '',
        title: '',
		    name: `Does this include automated selection and reporting of results?`,
		    value: '7_6_4_ii',
	},
    {
		id: 1,
        clause: '7.6.4',
        title: 'Off site management',
        name: `When the laboratory information system(s) are managed and maintained off-site or through an external provider, 
        how does the laboratory ensure that the provider or operator of the system complies with all applicable requirements of ISO 15189:2022?`,
        value: '7_6_4_iii',
	},


]

const complaints = [
	{
		id: 1,
        clause: '7.7.1',
        title: '',
		    name: `Does the laboratory have a process for handling complaints that shall include at least the following:
            a)	a description of the process for receiving, substantiating and investigating the complaint, and deciding what
            actions shall be taken in response;
            `,
		    value: '7_7_1_a',
	},

  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	tracking and recording the complaint, including the actions undertaken to resolve it;`,
		    value: '7_7_1_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `c)	ensuring appropriate action is taken.`,
		    value: '7_7_1_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `Is a description of the process for handling complaints made publicly available?`,
		    value: '7_7_1_ii',
	},
    {
		id: 1,
        clause: '7.7.2',
        title: '',
		    name: `a)	Upon receipt of a complaint, does the laboratory confirm whether the complaint relates to laboratory activities that 
            the laboratory is responsible for and, if so, does it resolve the complaint? (see 8.7.1)?`,
		    value: '7_7_2_a',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `b)	Is the laboratory receiving the complaint responsible for gathering all necessary information to
                determine whether the complaint is substantiated?`,
		    value: '7_7_2_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `c)	Whenever possible does the laboratory acknowledge receipt of the complaint, 
                and provide the complainant with the outcome and, if applicable, progress reports?`,
		    value: '7_7_2_c',
	},
    {
		id: 1,
        clause: '7.7.3',
        title: 'Resolution of complaint',
		    name: `Does investigation and resolution of complaints result in any discriminatory actions?`,
		    value: '7_7_3_i',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `Is the resolution of complaints made by, or reviewed and approved by, persons not involved in 
        the subject of the complaint in question?`,
		    value: '7_7_3_ii',
	},
    {
		id: 1,
        clause: '',
        title: '',
		name: `Where resources do not permit this, does the laboratory ensure that any alternative 
        approach does not compromise impartiality?`,
		    value: '7_7_3_iii',
	},
]


const continuity = [
	{
		id: 1,
        clause: '',
        title: '',
		    name: `Does the laboratory ensure that risks associated with emergency situations or other
             conditions when laboratory activities are limited, or unavailable, have been identified, 
             and a coordinated strategy exists that involves plans, procedures, and technical measures 
             to enable continued operations after a disruption?
            `,
		    value: '7_8_i',
	},

  {
		id: 1,
        clause: '',
        title: '',
		    name: `Are plans periodically tested and the planned response capability exercised, where practicable?`,
		    value: '7_8_ii',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `Does the laboratory:
            a)	establish a planned response to emergency situations, taking into account the needs and 
            capabilities of all relevant laboratory personnel?
            `,
		    value: '7_8_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `b)	provide information and training as appropriate to relevant laboratory personnel?`,
		    value: '7_8_b',
	},
    {
		id: 1,
        clause: '',
        title: '',
		    name: `c)	respond to actual emergency situations;`,
		    value: '7_8_c',
	},
    {
		id: 1,
        clause: '',
        title: '',
		    name: `d)	take action to prevent or mitigate the consequences of emergency situations, 
            appropriate to the magnitude of the emergency and the potential impact?`,
		    value: '7_8_d',
	},

]