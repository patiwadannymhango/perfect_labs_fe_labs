/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import  Dialog from '@mui/material/Dialog';
import  DialogContent from '@mui/material/DialogContent';
import CardHeader from '@mui/material/CardHeader';
import Snackbar from '@mui/material/Snackbar';
import AddIcon from '@mui/icons-material/Add';
import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import MySelectInput from './MySelectInput';
import { IconButton, Tooltip } from '@mui/material';


const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
  };


const SliptaAuditSection8Form = ( props ) => {


    const refresh = props.refresh;
    const lab_profile_id = props.lab_profile_id; 
    const user = getUser();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState('');

    const { control, register, handleSubmit, formState: { errors } } = useForm({

        defaultValues: {

            auditor: user.id,
            lab_profile: lab_profile_id,

            
            y_P_n_na_8_1_a:'',
            comment_8_1_a:'',
            score_8_1_a:0,

            y_P_n_na_8_1_b:'',
            comment_8_1_b:'',
            score_8_1_b:0,

            y_P_n_na_8_1_c:'',
            comment_8_1_c:'',
            score_8_1_c:0,

            y_P_n_na_8_1_d:'',
            comment_8_1_d:'',
            score_8_1_d:0,

            y_P_n_na_8_1_e:'',
            comment_8_1_e:'',
            score_8_1_e:0,

                        
            y_P_n_na_8_2_a:'',
            comment_8_2_a:'',
            score_8_2_a:0,

            y_P_n_na_8_2_b:'',
            comment_8_2_b:'',
            score_8_2_b:0,

            y_P_n_na_8_2_c:'',
            comment_8_2_c:'',
            score_8_2_c:0,

            y_P_n_na_8_2_d:'',
            comment_8_2_d:'',
            score_8_2_d:0,

                      
            y_P_n_na_8_3_a:'',
            comment_8_3_a:'',
            score_8_3_a:0,

            y_P_n_na_8_3_b:'',
            comment_8_3_b:'',
            score_8_3_b:0,

            y_P_n_na_8_3_c:'',
            comment_8_3_c:'',
            score_8_3_c:0,

            y_P_n_na_8_3_d:'',
            comment_8_3_d:'',
            score_8_3_d:0,

            y_P_n_na_8_3_e:'',
            comment_8_3_e:'',
            score_8_3_e:0,

            y_P_n_na_8_3_f:'',
            comment_8_3_f:'',
            score_8_3_f:0,

            y_P_n_na_8_3_g:'',
            comment_8_3_g:'',
            score_8_3_g:0,

            y_P_n_na_8_3_h:'',
            comment_8_3_h:'',
            score_8_3_h:0,

            y_P_n_na_8_3_i:'',
            comment_8_3_i:'',
            score_8_3_i:0,

            y_P_n_na_8_3_j:'',
            comment_8_3_j:'',
            score_8_3_j:0,

            y_P_n_na_8_3_k:'',
            comment_8_3_k:'',
            score_8_3_k:0,

            y_P_n_na_8_3_l:'',
            comment_8_3_l:'',
            score_8_3_l:0,

            y_P_n_na_8_3_m:'',
            comment_8_3_m:'',
            score_8_3_m:0,

                               
            y_P_n_na_8_4_a:'',
            comment_8_4_a:'',
            score_8_4_a:0,

            y_P_n_na_8_4_b:'',
            comment_8_4_b:'',
            score_8_4_b:0,

            y_P_n_na_8_4_c:'',
            comment_8_4_c:'',
            score_8_4_c:0,

            y_P_n_na_8_4_d:'',
            comment_8_4_d:'',
            score_8_4_d:0,

            y_P_n_na_8_4_e:'',
            comment_8_4_e:'',
            score_8_4_e:0,

            y_P_n_na_8_4_f:'',
            comment_8_4_f:'',
            score_8_4_f:0,

            y_P_n_na_8_4_g:'',
            comment_8_4_g:'',
            score_8_4_g:0,

            y_P_n_na_8_4_h:'',
            comment_8_4_h:'',
            score_8_4_h:0,

                               
            y_P_n_na_8_5_a:'',
            comment_8_5_a:'',
            score_8_5_a:0,

            y_P_n_na_8_5_b:'',
            comment_8_5_b:'',
            score_8_5_b:0,

            y_P_n_na_8_5_c:'',
            comment_8_5_c:'',
            score_8_5_c:0,

            y_P_n_na_8_5_d:'',
            comment_8_5_d:'',
            score_8_5_d:0,

            y_P_n_na_8_5_e:'',
            comment_8_5_e:'',
            score_8_5_e:0,

            y_P_n_na_8_5_f:'',
            comment_8_5_f:'',
            score_8_5_f:0,

            y_P_n_na_8_5_g:'',
            comment_8_5_g:'',
            score_8_5_g:0,

            y_P_n_na_8_5_h:'',
            comment_8_5_h:'',
            score_8_5_h:0,

                                           
            y_P_n_na_8_6_a:'',
            comment_8_6_a:'',
            score_8_6_a:0,

            y_P_n_na_8_6_b:'',
            comment_8_6_b:'',
            score_8_6_b:0,

            y_P_n_na_8_6_c:'',
            comment_8_6_c:'',
            score_8_6_c:0,

            y_P_n_na_8_6_d:'',
            comment_8_6_d:'',
            score_8_6_d:0,

            y_P_n_na_8_6_e:'',
            comment_8_6_e:'',
            score_8_6_e:0,

            y_P_n_na_8_6_f:'',
            comment_8_6_f:'',
            score_8_6_f:0,

            y_P_n_na_8_6_g:'',
            comment_8_6_g:'',
            score_8_6_g:0,

            y_P_n_na_8_7:'',
            comment_8_7:'',
            score_8_7:0,

            y_P_n_na_8_8_a:'',
            comment_8_8_a:'',
            score_8_8_a:0,

            y_P_n_na_8_8_b:'',
            comment_8_8_b:'',
            score_8_8_b:0,

            y_P_n_na_8_8_c:'',
            comment_8_8_c:'',
            score_8_8_c:0,

            y_P_n_na_8_8_d:'',
            comment_8_8_d:'',
            score_8_8_d:0,


                                
            y_P_n_na_8_9_a:'',
            comment_8_9_a:'',
            score_8_9_a:0,

            y_P_n_na_8_9_b:'',
            comment_8_9_b:'',
            score_8_9_b:0,

            y_P_n_na_8_9_c:'',
            comment_8_9_c:'',
            score_8_9_c:0,

            y_P_n_na_8_9_d:'',
            comment_8_9_d:'',
            score_8_9_d:0,

            y_P_n_na_8_9_e:'',
            comment_8_9_e:'',
            score_8_9_e:0,

            y_P_n_na_8_9_f:'',
            comment_8_9_f:'',
            score_8_9_f:0,

            y_P_n_na_8_9_g:'',
            comment_8_9_g:'',
            score_8_9_g:0,

            y_P_n_na_8_9_h:'',
            comment_8_9_h:'',
            score_8_9_h:0,

            y_P_n_na_8_9_i:'',
            comment_8_9_i:'',
            score_8_9_i:0,

            y_P_n_na_8_9_j:'',
            comment_8_9_j:'',
            score_8_9_j:0,

            y_P_n_na_8_9_k:'',
            comment_8_9_k:'',
            score_8_9_k:0,

                                            
            y_P_n_na_8_10_a:'',
            comment_8_10_a:'',
            score_8_10_a:0,

            y_P_n_na_8_10_b:'',
            comment_8_10_b:'',
            score_8_10_b:0,

            y_P_n_na_8_10_c:'',
            comment_8_10_c:'',
            score_8_10_c:0,

            y_P_n_na_8_10_d:'',
            comment_8_10_d:'',
            score_8_10_d:0,

            y_P_n_na_8_10_e:'',
            comment_8_10_e:'',
            score_8_10_e:0,

                                                    
            y_P_n_na_8_11_a:'',
            comment_8_11_a:'',
            score_8_11_a:0,

            y_P_n_na_8_11_b:'',
            comment_8_11_b:'',
            score_8_11_b:0,

            y_P_n_na_8_12:'',
            comment_8_12:'',
            score_8_12:0,

            y_P_n_na_8_13:'',
            comment_8_13:'',
            score_8_13:0,

                                            
            y_P_n_na_8_14_a:'',
            comment_8_14_a:'',
            score_8_14_a:0,

            y_P_n_na_8_14_b:'',
            comment_8_14_b:'',
            score_8_14_b:0,

            y_P_n_na_8_14_c:'',
            comment_8_14_c:'',
            score_8_14_c:0,

            y_P_n_na_8_14_d:'',
            comment_8_14_d:'',
            score_8_14_d:0,

            y_P_n_na_8_14_e:'',
            comment_8_14_e:'',
            score_8_14_e:0,

            y_P_n_na_8_14_f:'',
            comment_8_14_f:'',
            score_8_14_f:0,

                                                        
            y_P_n_na_8_15_a:'',
            comment_8_15_a:'',
            score_8_15_a:0,

            y_P_n_na_8_15_b:'',
            comment_8_15_b:'',
            score_8_15_b:0,

            y_P_n_na_8_15_c:'',
            comment_8_15_c:'',
            score_8_15_c:0,


            y_P_n_na_8_16_a:'',
            comment_8_16_a:'',
            score_8_16_a:0,

            y_P_n_na_8_16_b:'',
            comment_8_16_b:'',
            score_8_16_b:0,


            y_P_n_na_8_17_a:'',
            comment_8_17_a:'',
            score_8_17_a:0,

            y_P_n_na_8_17_b:'',
            comment_8_17_b:'',
            score_8_17_b:0,

            y_P_n_na_8_17_c:'',
            comment_8_17_c:'',
            score_8_17_c:0,

            y_P_n_na_8_17_d:'',
            comment_8_17_d:'',
            score_8_17_d:0,

                                                        
            y_P_n_na_8_18_a:'',
            comment_8_18_a:'',
            score_8_18_a:0,

            y_P_n_na_8_18_b:'',
            comment_8_18_b:'',
            score_8_18_b:0,

            y_P_n_na_8_18_c:'',
            comment_8_18_c:'',
            score_8_18_c:0,

            y_P_n_na_8_18_d:'',
            comment_8_18_d:'',
            score_8_18_d:0,

            y_P_n_na_8_18_e:'',
            comment_8_18_e:'',
            score_8_18_e:0,

                                                                    
            y_P_n_na_8_19_a:'',
            comment_8_19_a:'',
            score_8_19_a:0,

            y_P_n_na_8_19_b:'',
            comment_8_19_b:'',
            score_8_19_b:0,

                                          
            y_P_n_na_8_20_a:'',
            comment_8_20_a:'',
            score_8_20_a:0,

            y_P_n_na_8_20_b:'',
            comment_8_20_b:'',
            score_8_20_b:0,

            y_P_n_na_8_20_c:'',
            comment_8_20_c:'',
            score_8_20_c:0,

            y_P_n_na_8_20_d:'',
            comment_8_20_d:'',
            score_8_20_d:0,

            y_P_n_na_8_20_e:'',
            comment_8_20_e:'',
            score_8_20_e:0,

            y_P_n_na_8_20_f:'',
            comment_8_20_f:'',
            score_8_20_f:0,

            y_P_n_na_8_20_g:'',
            comment_8_20_g:'',
            score_8_20_g:0,


            y_P_n_na_8_21_a:'',
            comment_8_21_a:'',
            score_8_21_a:0,

            y_P_n_na_8_21_b:'',
            comment_8_21_b:'',
            score_8_21_b:0,

            y_P_n_na_8_21_c:'',
            comment_8_21_c:'',
            score_8_21_c:0,

            y_P_n_na_8_21_d:'',
            comment_8_21_d:'',
            score_8_21_d:0,

            y_P_n_na_8_21_e:'',
            comment_8_21_e:'',
            score_8_21_e:0,

            
            y_P_n_na_8_22_a:'',
            comment_8_22_a:'',
            score_8_22_a:0,

            y_P_n_na_8_22_b:'',
            comment_8_22_b:'',
            score_8_22_b:0,

            y_P_n_na_8_22_c:'',
            comment_8_22_c:'',
            score_8_22_c:0,


            y_P_n_na_8_23_a:'',
            comment_8_23_a:'',
            score_8_23_a:0,

            y_P_n_na_8_23_b:'',
            comment_8_23_b:'',
            score_8_23_b:0,

            y_P_n_na_8_23_c:'',
            comment_8_23_c:'',
            score_8_23_c:0,

            y_P_n_na_8_23_d:'',
            comment_8_23_d:'',
            score_8_23_d:0,

            y_P_n_na_8_23_e:'',
            comment_8_23_e:'',
            score_8_23_e:0,


            y_P_n_na_8_24_a:'',
            comment_8_24_a:'',
            score_8_24_a:0,

            y_P_n_na_8_24_b:'',
            comment_8_24_b:'',
            score_8_24_b:0,

            y_P_n_na_8_24_c:'',
            comment_8_24_c:'',
            score_8_24_c:0,


            y_P_n_na_8_25_a:'',
            comment_8_25_a:'',
            score_8_25_a:0,

            y_P_n_na_8_25_b:'',
            comment_8_25_b:'',
            score_8_25_b:0,

            
            y_P_n_na_8_26_a:'',
            comment_8_26_a:'',
            score_8_26_a:0,

            y_P_n_na_8_26_b:'',
            comment_8_26_b:'',
            score_8_26_b:0,

            y_P_n_na_8_26_c:'',
            comment_8_26_c:'',
            score_8_26_c:0,

            y_P_n_na_8_26_d:'',
            comment_8_26_d:'',
            score_8_26_d:0,


            
            y_P_n_na_8_27_a:'',
            comment_8_27_a:'',
            score_8_27_a:0,

            y_P_n_na_8_27_b:'',
            comment_8_27_b:'',
            score_8_27_b:0,

            y_P_n_na_8_27_c:'',
            comment_8_27_c:'',
            score_8_27_c:0,

            y_P_n_na_8_27_d:'',
            comment_8_27_d:'',
            score_8_27_d:0,


        }
    });
        
    const onDialogOpen = () => {
        setDialogOpen(true);
    };
    const onDialogClose = () => {
        setDialogOpen(false);
    };

    const onSnackbarClose = (e, reason) => {
        if (reason === 'clickaway') {
        return;
        } 
        setSnackbarOpen(false);
        setSnackbarMessage('');
    }

    const onSubmit = form => {
        
        axiosService
        .post(`/slipta/lab_profile/${lab_profile_id}/audit_section_8/`,form)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`SECTION 08: PROCESS CONTROL`);
          refresh();
          
        })
        .catch((err) => {
            if (err.message) {
                setError(err.request.response);
            }
            setSnackbarOpen(true);
            setSnackbarMessage(`Error : ${error}`);
            refresh();
        });
        
      };


    return (
        <>
            <Tooltip title="Add Questionnarie">
                            <IconButton
                            color="success" // Green color
                            onClick={onDialogOpen}
                            sx={{
                                ml: 0, // Margin-left = zero
                                fontSize: '1.25rem', // Adjust font size for the icon
                                padding: '8px', // Adjust padding for a smaller button
                                border: '2px solid #4caf50', // Green border
                                borderRadius: '50%', // Circular border to match button shape
                                '&:hover': {
                                borderColor: '#388e3c', // Darker green border on hover
                                }
                            }}
                            >
                            <AddIcon />
                            </IconButton>
                </Tooltip>
            
        
            <Dialog open={dialogOpen} onClose={onDialogClose} maxWidth='lg'>
            <CardHeader
                        title="SECTION 08: PROCESS MANGEMENT"
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
            <DialogContent>


                <form id="audit-form" onSubmit={handleSubmit(onSubmit)} >
                           
                            <Table style={tableStyle}>

                            <TableHead >

                                <TableRow> 
                                    <TableCell > <b>SECTION 08: PROCESS MANGEMENT</b> </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>REQUIREMENTS</TableCell>
                                    <TableCell align="left" style={cellStyle}>Y/P/N/NA</TableCell>
                                    <TableCell align="left" style={cellStyle}>COMMENT</TableCell>
                                    <TableCell align="right" style={cellStyle}>SCORE</TableCell>
                                </TableRow>
                            
                            </TableHead>
                            <TableBody>

                            <TableRow> 
                                <TableCell >
                                     <b>8.1 Procedure and/or Process for Continuity and Emergency
                                     Preparedness Planning (Contingency Plan)</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                    but is not limited to, the following activities and measures to address and
                                    mitigate the consequences of any event that leads to interruptions of
                                    services including but not limited to:
                                    <br />
                                    Notes: Contingency plans should be periodically tested. Where the laboratory uses
                                    another laboratory as a backup, the performance of the back-up laboratory shall be
                                    regularly reviewed including contingency plans in the event of failure of the back-up
                                    laboratory

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Personnel;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_1_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_1_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_1_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Equipment breakdown;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_1_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_1_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_1_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Power outages;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_1_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_1_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_1_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Stock outs of reagents and consumables;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_1_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_1_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_1_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Fire, natural disasters, e.g., severe weather or floods, bomb threats or
                                        civil disturbances
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_1_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_1_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_1_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                                                                    
                            <TableRow> 
                                <TableCell >
                                     <b>8.2 Implementation of Continuity and Emergency Preparedness
                                     Planning</b>  

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Has laboratory management developed and implemented a continuity
                                        and emergency preparedness plan covering all laboratory operations
                                        (including inputs from risk assessments, internal audits, management
                                        reviews, safety audits, etc)
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_2_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_2_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_2_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Is the continuity and emergency preparedness plan periodically
                                        tested for its continued effectiveness and are actions taken to
                                        address any identified gaps?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_2_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_2_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_2_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Are there records of monitoring the effectiveness of the continuity and
                                        emergency preparedness plan?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_2_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_2_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_2_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Has the continuity and emergency preparedness plan been
                                        communicated and training provided to all relevant laboratory
                                        personnel?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_2_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_2_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_2_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.3 Procedure and/or Process for Pre-examination Processes</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Location(s) of the laboratory, operating hours, and contact
                                        information;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Procedures for requesting and collection of patient samples;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Instructions for collection activities (including sample, volume, and
                                            transportation requirements);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Instructions for pre-collection activities;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Preparation and storage prior to dispatch to the laboratory;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Scope of laboratory activities and time for expected laboratory results;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Time limits and special handling of patient samples;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        h. Patient sample acceptance and rejection criteria;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        i. Factors known to significantly impact the performance of
                                        examinations or interpretation of results;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                        
                                <TableRow>
                                        <TableCell align="left">
                                        j. Availability of advisory services;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_j" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_j')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_j')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                 
                                <TableRow>
                                        <TableCell align="left">
                                        k. Requirements for patient consent;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_k" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_k')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_k')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                     
                                <TableRow>
                                        <TableCell align="left">
                                        l. Ensuring patient confidentiality;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_l" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_l')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_l')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        m. Complaints procedure.
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_3_l" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_3_l')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_3_l')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.4 Instructions for Collection Activities</b>  
                                     <br />
                                     Are records available to show implementation of the following:

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Verification of the identity of the patient from whom a primary sample
                                        is collected;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_4_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_4_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_4_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Verification and, when relevant, recording that the patient meets 
                                        preexamination requirements (e.g., fasting status, medication status [time
                                        of last dose, cessation], sample collection at predetermined time or
                                        time interval);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_4_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_4_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_4_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Collection of primary samples, with descriptions of the primary sample
                                        containers and any necessary additives, as well as the order of sample
                                        collection, where relevant;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_4_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_4_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_4_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Labelling of primary samples in a manner that provides an
                                        unequivocal link with the patient from whom they are collected;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_4_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_4_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_4_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Recording of the identity of the person collecting the primary sample
                                        and the collection date, and, when relevant, recording of the collection
                                        time;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_4_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_4_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_4_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Requirements for separating or dividing the primary sample, when
                                        necessary;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_4_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_4_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_4_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Stabilization and proper storage conditions before collected samples
                                        are delivered to the laboratory;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_4_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_4_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_4_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        h. Safe disposal of materials used in the sample collection process
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_4_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_4_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_4_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.5 Test Request</b>  
                                     <br />
                                     Does the laboratory adequately collect information needed for
                                     examination performance?
                                     <br />
                                     Note 1: Each request accepted by the laboratory for examination(s) shall be
                                     considered an agreement. The request may be paper-based or electronic-based;
                                     <br />
                                     Note 2: The review of service agreements occurs on sample reception. All portions of
                                     the primary sample must be unequivocally traceable to the original primary sample

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are all test requests accompanied by an acceptable and approved
                                        test requisition (e.g., a transmittal sheet/checklist/manifest/request
                                        form where applicable)?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_5_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_5_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_5_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Does the request include patient identifiers, including gender, date of
                                        birth, location of patient and unique identifier?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_5_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_5_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_5_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Name, initials, and signature (where applicable) of authorized
                                        requester; 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_5_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_5_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_5_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Type of sample and examination requested;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_5_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_5_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_5_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Clinically relevant information;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_5_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_5_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_5_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Date of sample collection (may include time where appropriate);
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_5_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_5_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_5_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Date and time of sample receipt (pre-analytical);
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_5_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_5_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_5_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        h. Informed consent when required
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_5_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_5_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_5_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                      
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.6 Primary Sample Receipt Procedure</b>  
                                     <br />
                                     Does the laboratory implement the sample receipt procedures and are
                                     there records of implementation of the following:

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Unique patient identifier;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_6_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_6_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_6_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Are received samples evaluated according to acceptance and
                                        rejection criteria?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_6_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_6_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_6_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Are samples logged appropriately upon receipt in the laboratory
                                        (including date of receipt, time of receipt, and name of receiving
                                        personnel)?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_6_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_6_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_6_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Are procedures in place to process urgent samples?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_6_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_6_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_6_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Are procedures in place to process oral requests?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_6_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_6_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_6_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. When samples are split, can the portions be traced back to the
                                        primary sample?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_6_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_6_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_6_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Are samples delivered to the correct workstations as per the
                                        laboratory processes?
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_6_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_6_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_6_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>



                                <TableRow> 
                                    <TableCell > 
                                    <b> 8.7 Pre-examination Handling, Processing and Storage</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Prior to testing, are samples handled, processed, and stored according to
                                    specific sample type stability and testing requirements?
                                    <br />
                                    Note: Samples should be stored under the appropriate conditions to maintain the
                                    stability of the sample according to international best practice and or testing
                                    guidelines

                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_8_7" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_8_7')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_8_7')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                                                 
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.8 Sample Transportation</b>  
                                     <br />
                                     Note: All samples shall be transported to the laboratory in a manner that is safe to
                                    patients, users, personnel (including transporters), community and the environment.
                                    The laboratory must ensure that the samples were received within a temperature and
                                    time interval specified for sample collection

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are samples either received at the laboratory or referred to another
                                        site, packaged according to national guidelines/regulations?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_8_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_8_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_8_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. When specimens are transported across borders (i.e., internationally)
                                        is the packaging and transportation in full compliance with
                                        international (e.g., IATA) regulations?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_8_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_8_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_8_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Are samples transported within acceptable timeframe and
                                        temperature intervals?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_8_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_8_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_8_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Are specimens packaged according to national regulations when
                                        either received at the laboratory or referred to another site?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_8_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_8_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_8_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                                                
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.9 Procedure and/or Process for Referral Laboratories and
                                     Technical Consultants</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Defining criteria for referral laboratories and technical consultants;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Selection and approval of referral laboratories;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Technical consultants who provide advice and interpretation;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Evaluation and monitoring of the performance of referral laboratories
                                        and technical consultants;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Maintenance of a list of approved referral laboratories and technical
                                        consultants;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Maintenance of records of referred samples;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Tracking of referred samples and their results;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        h. Reporting of results from referral laboratories;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        i. Management of critical results received from referral laboratories;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        j. Packaging and transportation of referred samples;
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_j" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_j')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_j')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        k. Record of communication of results from referral laboratories and
                                        technical consultants
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_9_k" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_9_k')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_9_k')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                                
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.10 Referral Laboratories and Technical Consultants</b>  
                                     <br />
                                     Note: The laboratory must have systems in place to ensure that the referral
                                    laboratories are competent to perform the services required. Evaluations may be in
                                    the form of checking their accreditation status, using a questionnaire, performing
                                    audits, use of blinded samples, etc

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Does the laboratory select referral laboratories and technical
                                        consultants based on specific criteria?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_10_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_10_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_10_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Are there documented reviews and evaluations of referral
                                        laboratories and technical consultants as defined by the laboratory?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_10_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_10_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_10_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Is there a register of referral laboratories and technical consultants?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_10_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_10_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_10_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Are referred samples tracked properly using a logbook, tracking form
                                        or electronically?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_10_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_10_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_10_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Does the laboratory ensure that the results obtained by the referral
                                        laboratory are tracked to ensure timely delivery to the user?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_10_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_10_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_10_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                                                                                
                                                                                            
                                <TableRow> 
                                <TableCell >
                                     <b>8.11 Procedure and/or Process for Documentation of Examination
                                     Procedures</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?
                                     <br />
                                     Note: Working instructions, job aids, flow process diagrams or similar systems that
                                    summarize key information are acceptable for use as a quick reference at the
                                    workbench, provided that a fully documented examination procedure (e.g., SOP) is
                                    available for reference. Information from product instructions for use can be
                                    incorporated into examination procedures by reference in the SOP

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Defining the format, language, and appropriate location of examination
                                        procedures;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_11_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_11_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_11_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Selection and approval of referral laboratories
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_11_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_11_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_11_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                              

                                    
                                <TableRow> 
                                    <TableCell > 
                                    <b> 8.12 Location of Examination Procedures</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are examination information and instructions available in appropriate
                                    locations?
                                    <br />
                                    Note: Examination information and instructions may include SOPs, package inserts,
                                    user manuals, job aids, etc

                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_8_12" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_8_12')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_8_12')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                      
                                <TableRow> 
                                    <TableCell > 
                                    <b> 8.13 Reagents and Consumables Acceptance Testing</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is verification performed and documented before use for each new
                                    preparation, new lot, and new shipment of reagents and consumables?
                                    <br />
                                    Note: Verification can be in-house or based on the Certificate of Analysis of the
                                    reagent

                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_8_13" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_8_13')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_8_13')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                                                                                                                
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.14 Procedure and/or Process for Internal Quality Control (IQC)</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?
                                     <br />
                                     Note: The laboratory should choose concentrations of control materials, wherever
                                    possible, especially at or near clinical decision values, which ensure the validity of
                                    decisions made. Use of independent third-party control materials should be
                                    considered, either instead of, or in addition to, any control materials supplied by the
                                    reagent or instrument manufacturer

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Definition of IQC criteria (acceptance and rejection);
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_14_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_14_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_14_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Frequency of processing IQC;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_14_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_14_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_14_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Definition of acceptable ranges (package inserts or in house);
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_14_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_14_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_14_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Use of alternate quality control methods when appropriate quality
                                        controls are not available (in-house produced IQC materials, EQA
                                        materials, etc.);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_14_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_14_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_14_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Recording, evaluating, and monitoring ongoing IQC performance;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_14_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_14_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_14_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        f. Troubleshooting unacceptable IQC performance
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_14_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_14_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_14_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                                                                                                                
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.15 Quality Control</b>  
                                  
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Is internal quality control performed and verified to be within
                                        acceptable limits before testing and release of results?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_15_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_15_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_15_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Is corrective action taken and documented when quality control
                                        results fall outside the acceptable range and reviews identify nonconformities in a timely manner?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_15_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_15_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_15_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                            
                                <TableRow>
                                        <TableCell align="left">
                                        c. Does the laboratory evaluate the results from patient samples that
                                        were examined after the last successful quality control result in the
                                        event of a quality control failure?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_15_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_15_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_15_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                                                           
                            <TableRow> 
                                <TableCell >
                                     <b>8.16 Monitoring of Quality Control Performance</b>  
                                  
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are quality control results monitored and reviewed to assess the
                                        performance of the method and/or identify errors over time for
                                        quantitative tests?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_16_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_16_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_16_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Is appropriate action taken and documented when there is an error or
                                        rule violation with the quality control results?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_16_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_16_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_16_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                                                     
                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.17 Comparability of Examination Results</b>  
                                     <br />
                                     Does the laboratory compare results to ensure there is no clinically
                                    significant variation when the same test for a patient sample is performed
                                    with different methods or equipment, including POCT?
                                    <br />
                                    Note: The laboratory should document and implement a system to ensure there is
                                    comparability of results. This could be done using EQA performance, using blinded
                                    samples, and parallel testing.
                                  
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Does the laboratory record the results of comparability performed
                                        and its acceptability?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_17_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_17_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_17_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Does the laboratory periodically review the comparability of results?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_17_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_17_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_17_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                            
                                <TableRow>
                                        <TableCell align="left">
                                        c. Does the laboratory evaluate and act upon the impact of any
                                        differences on biological reference intervals and clinical decision
                                        limits?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_17_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_17_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_17_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        d. Does the laboratory inform users of any clinically significant
                                        differences in comparability of results?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_17_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_17_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_17_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.18 Monitoring and Recording Environmental Conditions</b>  
                                     <br />
                                     Are the following environmental conditions monitored and recorded daily?
                                    <br />
                                    Note: The laboratory shall monitor, control, and record environmental conditions, as
                                    required by relevant specifications or where it may influence the quality of the sample,
                                    results, and/or the safety of patients, visitors, laboratory users, and personnel.
                                  
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Room temperatures, including storage areas and all areas involved
                                        with testing, e.g., server rooms
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_18_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_18_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_18_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Freezers;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_18_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_18_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_18_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                            
                                <TableRow>
                                        <TableCell align="left">
                                        c. Refrigerators;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_18_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_18_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_18_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        d. Incubators;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_18_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_18_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_18_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                   
                                <TableRow>
                                        <TableCell align="left">
                                        e. Water baths
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_18_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_18_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_18_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                                                                                           
                            <TableRow> 
                                <TableCell >
                                     <b>8.19 Reviewing of Environmental Conditions</b>  
                                                                      
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Have acceptable ranges been defined for all environmental
                                        conditions?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_19_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_19_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_19_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Is there evidence of documentation for action taken in response to
                                        unacceptable conditions?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_19_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_19_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_19_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.20 Procedure and/or Process for External Quality Assessment
                                     (EQA)</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?
                                     <br />
                                     Note: The laboratory should choose concentrations of control materials, wherever
                                    possible, especially at or near clinical decision values, which ensure the validity of
                                    decisions made. Use of independent third-party control materials should be
                                    considered, either instead of, or in addition to, any control materials supplied by the
                                    reagent or instrument manufacturer

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. All examinations, including POCT, must be enrolled in EQA or
                                        alternative methods, in the event EQA is not available;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_20_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_20_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_20_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Defining EQA processing criteria (treating EQA as routine);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_20_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_20_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_20_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Frequency of processing as per the EQA schedule;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_20_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_20_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_20_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Defining acceptable performance criteria;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_20_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_20_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_20_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Use of alternate approaches when the EQA program is not available
                                        (e.g., reference materials, blind testing, etc.);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_20_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_20_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_20_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        f. Recording, evaluating, and monitoring ongoing EQA performance;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_20_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_20_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_20_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        g. Troubleshooting unacceptable EQA performance
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_20_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_20_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_20_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.21 Participation in External Quality Assessment (EQA)</b>  
                                     <br />
                                     Does the laboratory participate in EQA or external alternative assessment
                                     procedures (APP) for all tests?
                                     <br />
                                     NOTE1: Acceptable alternatives include:
                                    • Participation in sample exchanges with other laboratories;
                                    • Interlaboratory comparisons of results of examinations of identical IQC materials,
                                    which evaluates individual laboratory IQC results against pooled results from
                                    participants using the same IQC material, analysis of a different lot number of the
                                    manufacturer's end-user calibrator or the manufacturer's trueness control material;
                                    • Analysis of microbiological organisms using split / blind testing of the same sample
                                    by at least two persons, or on at least two analysers, or by at least two methods;
                                    • Analysis of reference materials considered to be commutable with patient samples;
                                    • Analysis of patient samples from clinical correlation studies;
                                    • Analysis of materials from cell and tissue repositories

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Do EQA or AAP materials come from providers who are approved
                                        suppliers?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_21_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_21_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_21_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Are EQA or AAP materials handled and tested the same way as
                                        routine patient specimens?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_21_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_21_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_21_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Is the EQA or AAP performance of the laboratory reviewed and
                                        discussed with relevant personnel?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_21_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_21_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_21_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Is root cause analysis performed for unacceptable EQA or AAP
                                        performance?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_21_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_21_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_21_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Is corrective action documented for unacceptable EQA or AAP
                                        performance?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_21_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_21_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_21_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.22 Procedure and/or Process for Verification and Validation of
                                     Examinations Methods</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?
                                     <br />
                                     Note 1: Validations should be done on a) non-standard methods, b) laboratory
                                    designed or developed methods, c) standard methods used outside their intended
                                    scope, d) validated methods subsequently modified
                                    <br />
                                    Note 2: ‘Verification’ is performed on methods that are being used without any
                                    modifications and is a process of evaluating of whether the procedure meets the
                                    performance characteristics stated by the manufacturer, i.e., the manufacturer’s
                                    validation claims. The performance characteristics are obtained from the
                                    manufacturer (validation reports) or from package inserts. Comparison of different
                                    methods used for same tests is ongoing verification. The frequency and
                                    characteristics to be checked in ongoing verification must be clearly defined
                                    <br />
                                    Note 3: All procedures or equipment used as backup must also be validated/verified
                                    as relevant.
                                    

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Defining the validation or verification protocol (including the
                                        authorization for the intended use);
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_22_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_22_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_22_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Performing method validation or verification;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_22_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_22_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_22_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Defining validation or verification report
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_22_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_22_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_22_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.23 Records of Verification of Examination Methods</b>  
                                     <br />
                                     Note 1: Newly introduced methods must be verified onsite to ensure that their
                                    introduction yields performance equal to or better than the manufacturer's
                                    claims/specifications
                                     <br />
                                     Note 2: ‘Verification’ is performed on methods that are being used without any
                                    modifications and is a process of evaluating of whether the procedure meets the
                                    performance characteristics stated by the manufacturer, i.e., the manufacturer’s
                                    validation claims. The performance characteristics are obtained from the
                                    manufacturer (validation reports) or from package inserts. Comparison of different
                                    methods used for same tests is ongoing verification

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Has the laboratory developed, reviewed, and approved the
                                        verification plan (protocol) for each testing method in use prior to
                                        verification?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_23_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_23_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_23_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Has the laboratory defined a verification report?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_23_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_23_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_23_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Has the verification report been reviewed by an authorised person?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_23_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_23_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_23_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Has the laboratory generated, reviewed, and approved the
                                        verification report for each testing method in use?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_23_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_23_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_23_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Are verification records available (including raw data, calculations,
                                            etc.)?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_23_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_23_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_23_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.24 Records of Validation of Examination Methods</b>  
                                     <br />
                                    Note: Validations should be done on a) non-standard methods, b) laboratory-designed
                                    or -developed methods, c) standard methods used outside their intended scope, d)
                                    validated methods subsequently modified

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Has the laboratory developed, reviewed, and approved the validation
                                        plan (protocol) for each testing method in use prior to validation?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_24_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_24_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_24_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Has the laboratory generated, reviewed, and approved the validation
                                        report for each testing method in use?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_24_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_24_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_24_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Are validation records available (including raw data, calculations,
                                            etc.)?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_24_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_24_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_24_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                
                                                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.25 Procedure and/or Process for Measurement Uncertainty (MU)</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?
                                     <br />
                                     Note: MU is used to indicate the confidence we have that the reported figure is
                                    correct. MU may be calculated using the calculated CV of at least 30 sets of internal
                                    precision quality control data: CV% x 2 = MU

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Determining MU (analytical error) on measured quantity values
                                        (quantitative tests);
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_25_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_25_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_25_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Defining performance requirements for MU
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_25_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_25_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_25_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                
                                                                                                                            
                            <TableRow> 
                                <TableCell >
                                     <b>8.26 Measurement Uncertainty of Measured Quantitative Tests</b>  
                                     <br />
                                     Does the laboratory have documented estimates of MU for each semiquantitative 
                                     and quantitative test in use?
                                     <br />
                                     Note: MU should be calculated at different clinical decision limits. Cumulative IQC
                                     (minimum 6 months data) may be used to calculate MU

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Has the laboratory calculated MU for each quantitative test in use?
                                        Note: If quantitative values are used to decide a qualitative result, then MU must be
                                        performed
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_26_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_26_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_26_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Has the laboratory defined the performance requirements (factors
                                        that affect MU) for the MU of each measurement examination and
                                        does the laboratory regularly review estimates of MU?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_26_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_26_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_26_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Does the laboratory make its calculated MU available to its users
                                        upon request?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_26_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_26_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_26_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        d. Does the laboratory document reasons for exclusion from MU
                                        estimation for examination procedures where evaluation of MU is not
                                        possible or relevant?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_26_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_26_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_26_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                                                                                                                                                        
                            <TableRow> 
                                <TableCell >
                                     <b>8.27 Procedure and/or Process for Biological Reference Intervals or
                                     Clinical Decision Limits</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?
                                     <br />
                                     Note: The laboratory shall define the biological reference intervals or clinical decision
                                    values, document the basis for the reference intervals or decision values and
                                    communicate this information to users

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Defining biological reference intervals or clinical decision limits;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_27_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_27_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_27_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Biological reference intervals for examinations that identify presence
                                        or absence of a characteristic;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_27_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_27_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_27_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Source of reference intervals or clinical decision limits;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_27_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_27_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_27_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        d. Communication of changes of biological reference intervals or clinical
                                        decision limits to users
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_8_27_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_8_27_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_8_27_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>





                                



                                
                        


                                
                                <TableRow> 
                                    <TableCell > 
                                    <b>7.7 Management Review of Supply Requests</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Does laboratory management review and approve the laboratory's
                                    requirements for all externally provided products and services?
                                    <br />
                                    Note: Since laboratories have different purchasing approval systems, there should be
                                    a system in place that the laboratory reviews final approval of their original request
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_7_7" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_7_7')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_7_7')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                                                
                      


                            </TableBody>
                            
                            </Table>

                            <br />

                            <Grid item>
                                <Button onClick={onDialogClose} color="primary">
                                    Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        startIcon={<SaveIcon />}
                                        >
                                    SAVE
                                    </Button>
                            </Grid>
                </form>


            </DialogContent>
        </Dialog>
        <Snackbar
            open={snackbarOpen}
            message={snackbarMessage}
            onClose={onSnackbarClose}
            autoHideDuration={5000}
        />

    </>
        
   );

}

export default SliptaAuditSection8Form;