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

const SliptaAuditSection12Form = ( props ) => {


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

            y_P_n_na_12_1_a:'',
            comment_12_1_a:'',
            score_12_1_a:0,

            y_P_n_na_12_2_a:'',
            comment_12_2_a:'',
            score_12_2_a:0,

            y_P_n_na_12_2_b:'',
            comment_12_2_b:'',
            score_12_2_b:0,

            y_P_n_na_12_2_c:'',
            comment_12_2_c:'',
            score_12_2_c:0,

            y_P_n_na_12_2_d:'',
            comment_12_2_d:'',
            score_12_2_d:0,

            y_P_n_na_12_2_e:'',
            comment_12_2_e:'',
            score_12_2_e:0,

            y_P_n_na_12_2_f:'',
            comment_12_2_f:'',
            score_12_2_f:0,


            y_P_n_na_12_3:'',
            comment_12_3:'',
            score_12_3:0,

            y_P_n_na_12_4:'',
            comment_12_4:'',
            score_12_4:0,

            y_P_n_na_12_5_a:'',
            comment_12_5_a:'',
            score_12_5_a:0,

            y_P_n_na_12_5_b:'',
            comment_12_5_b:'',
            score_12_5_b:0,

            y_P_n_na_12_5_c:'',
            comment_12_5_c:'',
            score_12_5_c:0,

            
            y_P_n_na_12_6_a:'',
            comment_12_6_a:'',
            score_12_6_a:0,

            y_P_n_na_12_6_b:'',
            comment_12_6_b:'',
            score_12_6_b:0,

            y_P_n_na_12_6_c:'',
            comment_12_6_c:'',
            score_12_6_c:0,

            y_P_n_na_12_6_d:'',
            comment_12_6_d:'',
            score_12_6_d:0,

            y_P_n_na_12_6_e:'',
            comment_12_6_e:'',
            score_12_6_e:0,

            y_P_n_na_12_6_f:'',
            comment_12_6_f:'',
            score_12_6_f:0,

            y_P_n_na_12_6_g:'',
            comment_12_6_g:'',
            score_12_6_g:0,

            y_P_n_na_12_6_h:'',
            comment_12_6_h:'',
            score_12_6_h:0,

            y_P_n_na_12_6_i:'',
            comment_12_6_i:'',
            score_12_6_i:0,

            y_P_n_na_12_6_j:'',
            comment_12_6_j:'',
            score_12_6_j:0,

            y_P_n_na_12_6_k:'',
            comment_12_6_k:'',
            score_12_6_k:0,


            y_P_n_na_12_7:'',
            comment_12_7:'',
            score_12_7:0,

            y_P_n_na_12_8_a:'',
            comment_12_8_a:'',
            score_12_8_a:0,

            y_P_n_na_12_8_b:'',
            comment_12_8_b:'',
            score_12_8_b:0,

            y_P_n_na_12_8_c:'',
            comment_12_8_c:'',
            score_12_8_c:0,

            y_P_n_na_12_8_d:'',
            comment_12_8_d:'',
            score_12_8_d:0,

            y_P_n_na_12_8_e:'',
            comment_12_8_e:'',
            score_12_8_e:0,

            y_P_n_na_12_8_f:'',
            comment_12_8_f:'',
            score_12_8_f:0,

            y_P_n_na_12_8_g:'',
            comment_12_8_g:'',
            score_12_8_g:0,


            y_P_n_na_12_9_a:'',
            comment_12_9_a:'',
            score_12_9_a:0,

            y_P_n_na_12_9_b:'',
            comment_12_9_b:'',
            score_12_9_b:0,

            y_P_n_na_12_9_c:'',
            comment_12_9_c:'',
            score_12_9_c:0,


            y_P_n_na_12_10_a:'',
            comment_12_10_a:'',
            score_12_10_a:0,

            y_P_n_na_12_10_b:'',
            comment_12_10_b:'',
            score_12_10_b:0,

            y_P_n_na_12_10_c:'',
            comment_12_10_c:'',
            score_12_10_c:0,

            y_P_n_na_12_10_d:'',
            comment_12_10_d:'',
            score_12_10_d:0,

            y_P_n_na_12_10_e:'',
            comment_12_10_e:'',
            score_12_10_e:0,

                        
            y_P_n_na_12_11_a:'',
            comment_12_11_a:'',
            score_12_11_a:0,

            y_P_n_na_12_11_b:'',
            comment_12_11_b:'',
            score_12_11_b:0,

            y_P_n_na_12_11_c:'',
            comment_12_11_c:'',
            score_12_11_c:0,

            y_P_n_na_12_11_d:'',
            comment_12_11_d:'',
            score_12_11_d:0,

            y_P_n_na_12_11_e:'',
            comment_12_11_e:'',
            score_12_11_e:0,

            y_P_n_na_12_11_f:'',
            comment_12_11_f:'',
            score_12_11_f:0,

            y_P_n_na_12_11_g:'',
            comment_12_11_g:'',
            score_12_11_g:0,

            y_P_n_na_12_11_h:'',
            comment_12_11_h:'',
            score_12_11_h:0,

            y_P_n_na_12_11_i:'',
            comment_12_11_i:'',
            score_12_11_i:0,

            y_P_n_na_12_11_j:'',
            comment_12_11_j:'',
            score_12_11_j:0,

            y_P_n_na_12_11_k:'',
            comment_12_11_k:'',
            score_12_11_k:0,

            y_P_n_na_12_11_l:'',
            comment_12_11_l:'',
            score_12_11_l:0,

            y_P_n_na_12_11_m:'',
            comment_12_11_m:'',
            score_12_11_m:0,

                                  
            y_P_n_na_12_12_a:'',
            comment_12_12_a:'',
            score_12_12_a:0,

            y_P_n_na_12_12_b:'',
            comment_12_12_b:'',
            score_12_12_b:0,

            y_P_n_na_12_12_c:'',
            comment_12_12_c:'',
            score_12_12_c:0,

            y_P_n_na_12_12_d:'',
            comment_12_12_d:'',
            score_12_12_d:0,

            y_P_n_na_12_12_e:'',
            comment_12_12_e:'',
            score_12_12_e:0,

            y_P_n_na_12_12_f:'',
            comment_12_12_f:'',
            score_12_12_f:0,

            y_P_n_na_12_12_g:'',
            comment_12_12_g:'',
            score_12_12_g:0,

            y_P_n_na_12_12_h:'',
            comment_12_12_h:'',
            score_12_12_h:0,

            y_P_n_na_12_12_i:'',
            comment_12_12_i:'',
            score_12_12_i:0,

            y_P_n_na_12_12_j:'',
            comment_12_12_j:'',
            score_12_12_j:0,

            y_P_n_na_12_12_k:'',
            comment_12_12_k:'',
            score_12_12_k:0,

            y_P_n_na_12_12_l:'',
            comment_12_12_l:'',
            score_12_12_l:0,

                                              
            y_P_n_na_12_13_a:'',
            comment_12_13_a:'',
            score_12_13_a:0,

            y_P_n_na_12_13_b:'',
            comment_12_13_b:'',
            score_12_13_b:0,

            y_P_n_na_12_13_c:'',
            comment_12_13_c:'',
            score_12_13_c:0,

            y_P_n_na_12_13_d:'',
            comment_12_13_d:'',
            score_12_13_d:0,


            y_P_n_na_12_14_a:'',
            comment_12_14_a:'',
            score_12_14_a:0,

            y_P_n_na_12_14_b:'',
            comment_12_14_b:'',
            score_12_14_b:0,

            y_P_n_na_12_14_c:'',
            comment_12_14_c:'',
            score_12_14_c:0,

            y_P_n_na_12_14_d:'',
            comment_12_14_d:'',
            score_12_14_d:0,

            y_P_n_na_12_14_e_1:'',
            comment_12_14_e_1:'',
            score_12_14_e_1:0,

            y_P_n_na_12_14_e_2:'',
            comment_12_14_e_2:'',
            score_12_14_e_2:0,

            y_P_n_na_12_14_e_3:'',
            comment_12_14_e_3:'',
            score_12_14_e_3:0,


            y_P_n_na_12_15_a:'',
            comment_12_15_a:'',
            score_12_15_a:0,

            y_P_n_na_12_15_b:'',
            comment_12_15_b:'',
            score_12_15_b:0,

            y_P_n_na_12_15_c:'',
            comment_12_15_c:'',
            score_12_15_c:0,

            y_P_n_na_12_15_d:'',
            comment_12_15_d:'',
            score_12_15_d:0,

            
            y_P_n_na_12_16_a:'',
            comment_12_16_a:'',
            score_12_16_a:0,

            y_P_n_na_12_16_b:'',
            comment_12_16_b:'',
            score_12_16_b:0,

            y_P_n_na_12_16_c:'',
            comment_12_16_c:'',
            score_12_16_c:0,

            y_P_n_na_12_16_d:'',
            comment_12_16_d:'',
            score_12_16_d:0,

            y_P_n_na_12_16_e:'',
            comment_12_16_e:'',
            score_12_16_e:0,


            y_P_n_na_12_17_a:'',
            comment_12_17_a:'',
            score_12_17_a:0,

            y_P_n_na_12_17_b:'',
            comment_12_17_b:'',
            score_12_17_b:0,

            y_P_n_na_12_17_c:'',
            comment_12_17_c:'',
            score_12_17_c:0,

            y_P_n_na_12_17_d:'',
            comment_12_17_d:'',
            score_12_17_d:0,

            y_P_n_na_12_17_e:'',
            comment_12_17_e:'',
            score_12_17_e:0,

            y_P_n_na_12_17_f:'',
            comment_12_17_f:'',
            score_12_17_f:0,

            y_P_n_na_12_18:'',
            comment_12_18:'',
            score_12_18:0,

            y_P_n_na_12_19:'',
            comment_12_19:'',
            score_12_19:0,

            y_P_n_na_12_20:'',
            comment_12_20:'',
            score_12_20:0,

            y_P_n_na_12_21:'',
            comment_12_21:'',
            score_12_21:0,

            y_P_n_na_12_22:'',
            comment_12_22:'',
            score_12_22:0,

            y_P_n_na_12_23:'',
            comment_12_23:'',
            score_12_23:0,

            y_P_n_na_12_24:'',
            comment_12_24:'',
            score_12_24:0,

            
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
        .post(`/slipta/lab_profile/${lab_profile_id}/audit_section_12/`,form)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`Section 12: Facilities and Safety`);
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
                        title="SECTION 12: FACILITIES AND SAFETY"
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
                                    <TableCell > <b>SECTION 12: FACILITIES AND SAFETY</b> </TableCell>
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
                                     <b>12.1 Procedure and/or Process for Laboratory Safety </b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Ensure all safety measures are implemented at the laboratory as
                                        applicable to national and/or international guidelines and regulations.
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_1_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_1_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_1_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.2 Facilities and Environmental Conditions (including POCT)</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                    but is not limited to, the following?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Define how to evaluate and determine the sufficiency and adequacy
                                        of the space allocated for the performance of the scope of work;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_2_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_2_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_2_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Ensure storage and disposal facilities meet applicable requirements;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_2_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_2_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_2_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Ensure personnel have space for personal activities (supply of
                                        drinking water, storage space for personal and protective equipment
                                        and clothing);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_2_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_2_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_2_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Monitor, control and record any specific environmental and facility
                                        requirements
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_2_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_2_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_2_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Sample collection facilities, taking into consideration patient privacy,
                                        comfort, and needs (e.g., disabled access, toilet facility) of patients
                                        and accommodation of accompanying persons (e.g., guardian or
                                        interpreter) during collection;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_2_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_2_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_2_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Implementation, recording, monitoring, and reviewing of facility
                                        controls (access, safety, etc.).
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_2_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_2_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_2_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow> 
                                    <TableCell > 
                                    <b>12.3 Adequacy of Size and Layout of Laboratory</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is there documented evidence that the laboratory has evaluated the
                                    adequacy of the size and layout of the laboratory and organized the space
                                    so that workstations are positioned to reduce risk, ensure optimal
                                    workflow, and prioritize occupational health?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_3" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_3')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_3')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.4 Patient Care Areas</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are patient care and testing areas of the laboratory distinctly separate
                                    from one another?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_4" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_4')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_4')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                
                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.5 Housekeeping</b>  
                                     <br />
                                     Are housekeeping activities performed to ensure the efficient operations of
                                     the laboratory and the safety of the personnel, users, and patients?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are there records of housekeeping duties performed daily (at the
                                            minimum)?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_5_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_5_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_5_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Are all necessary housekeeping supplies present and easily
                                        accessible?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_5_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_5_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_5_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Are all equipment and work surfaces (that are used for processing
                                        contaminated materials) cleaned and disinfected with appropriate
                                        agents both before and at the end of each working shift and
                                        whenever spills or other contamination has occurred?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_5_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_5_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_5_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.6 Physical Work Environment</b>  
                                     <br />
                                     Is the physical work environment appropriate for testing?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Free of clutter?
                                        <br />
                                        ISO 15190: 2020 Clause 18 j
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Adequately ventilated?
                                        <br />
                                        ISO 15190: 2020 Clause 9.2
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Climate-controlled for optimum equipment function?
                                        <br />
                                        ISO 15189:2022 Clause: 6.3.1
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Are filters checked, cleaned and/or replaced at regular intervals,
                                        where air-conditioning is installed?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Are wires and cables properly installed and protected from
                                        hazardous factors and from traffic?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Is there a functioning back-up power supply (generator) and are
                                        there records of maintenance?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Is critical equipment supported by uninterrupted power source
                                        systems?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        h. Is all equipment placed appropriately (away from water hazards, out
                                            of traffic areas)?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        i. Are appropriate provisions made for adequate water supply,
                                        including deionized water or distilled water, if needed?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        j. Is clerical work performed in a designated clean area?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_j" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_j')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_j')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        k. Is safety signage posted and enforced, including “NO EATING,
                                        SMOKING, OR DRINKING”?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_6_k" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_6_k')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_6_k')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.7 Laboratory Access</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is the laboratory properly secured from unauthorized access with
                                    appropriate systems and signage?
                                    <br />
                                    Note: Access control should take into consideration safety, confidentiality and quality
                                    and safeguard medical information and patient samples
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_7" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_7')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_7')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                
                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.8 Laboratory Storage Areas</b>  
                                     <br />
                                     Is there adequate storage space under the appropriate conditions and
                                     properly labelled for the following?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Samples;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_8_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_8_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_8_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Equipment;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_8_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_8_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_8_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Reagents and consumables;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_8_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_8_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_8_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Documents and records;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_8_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_8_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_8_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Patient samples and materials used in examination processes
                                        (stored separately);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_8_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_8_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_8_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Hazardous materials and biological waste appropriate to the
                                        classification in context of any statutory or regulatory requirements;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_8_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_8_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_8_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Personnel items, food, and drinks.
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_8_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_8_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_8_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.9 Laboratory Facilities</b>  
                                     <br />
                                     Note: The work area should be cleaned regularly. An appropriate disinfectant should
                                    be used. At a minimum, all bench tops and working surfaces should be disinfected at
                                    the beginning and end of every shift. All spills should be contained immediately and
                                    decontaminated, as appropriate, and the work surfaces disinfected

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are laboratory facilities maintained in a functional and reliable
                                        condition (e.g., housekeeping and maintenance, etc.)?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_9_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_9_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_9_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Does the laboratory have adequate safety facilities and devices,
                                        where applicable, and regularly verify their proper functioning (eye
                                        wash stations, emergency showers, fire alarms, etc.)?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_9_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_9_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_9_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Is the work area clean and free of leakage and spills, and are
                                        disinfection and decontamination procedures conducted and
                                        documented, where appropriate?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_9_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_9_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_9_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.10 Safety Cabinet (biosafety cabinet, laboratory hood, etc.)</b>  
                                     <br />
                                     Where a biosafety cabinet is present and required to perform work, are
                                     the following conditions met, where appropriate?
                                     <br />
                                     Note: A biosafety cabinet should be used to prevent aerosol exposure to contagious
                                    samples or organisms. For proper functioning and full protection, biosafety cabinets
                                    require periodic maintenance and should be serviced accordingly. Biosafety cabinets
                                    should be recertified according to national protocols or manufacturer requirements

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Selection, location, design, and type of biological safety cabinet
                                        utilized appropriate to the level of risk containment required for safe
                                        working;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_10_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_10_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_10_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Used in such a manner as to avoid compromising the cabinet’s
                                        function (e.g., jarring or mishandling delicate HEPA filters);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_10_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_10_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_10_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Vented appropriate to the microbiological risk and consistent with
                                        safety requirements; frequently monitored to ensure that they
                                        function as designed;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_10_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_10_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_10_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Tested/certified upon installation, when moved or repaired and
                                        annually; records shall be kept of the inspection and any functionality
                                        testing result;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_10_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_10_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_10_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Proof of inspection indicated by a certification label displayed on the
                                        cabinet
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_10_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_10_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_10_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                
                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.11 Safety Program</b>  
                                     <br />
                                     Does the laboratory have a safety program that includes, but is not limited
                                     to, the following elements?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Safety and health policy;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Written work procedures that include safe work practices;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Education and training of laboratory-associated personnel;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Supervision of personnel;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Regular inspections;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Hazardous materials and substances;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Health surveillance and prophylaxis;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        h. First aid services and equipment;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        i. Investigation of accidents and illnesses;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        j. Records and statistics;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_j" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_j')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_j')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        k. Requirement for follow-up to ensure that all required actions arising
                                        from the audit are completed;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_k" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_k')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_k')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        l. Fire safety;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_l" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_l')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_l')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        m. Oversight of good housekeeping practices.
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_11_m" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_11_m')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_11_m')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.12 Laboratory Safety Manual</b>  
                                     <br />
                                     Is a laboratory safety manual available, accessible, and up to date?
                                     <br />
                                     Does the safety manual include guidelines on the following topics?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Safety policy;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Blood and body fluid precautions;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Biosafety and biosecurity hazards, where appropriate;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Risk assessment and mitigation;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Biological hazards;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Hazardous waste disposal;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Chemical safety;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        h. Radiation;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        i. Vaccination;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        j. Post-exposure prophylaxis
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_j" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_j')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_j')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        k. Fire prevention;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_k" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_k')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_k')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        l. Electrical safety
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_12_l" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_12_l')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_12_l')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.13 Waste Disposal</b>  
                                     <br />
                                     Note 1: Waste should be separated according to biohazard risk, with infectious and
                                    non-infectious waste disposed of in separate containers. Infectious waste should be
                                    discarded into containers that do not leak and are clearly marked with a biohazard
                                    symbol. Sharp instruments and needles should be discarded in puncture resistant
                                    containers. Both infectious waste and sharps containers should be autoclaved before
                                    being discarded to prevent injury from exposed waste; infectious waste should be
                                    incinerated, burnt in a pit, or buried.
                                     <br />
                                     Note 2: All syringes, needles, lancets, or other bloodletting devices capable of
                                    transmitting infection must be used only once and discarded in puncture resistant
                                    containers that are not overfilled. Sharps containers should be clearly marked to warn
                                    handlers of the potential hazard and should be available in areas where sharps are
                                    commonly used.

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Is sufficient waste disposal available and adequate?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_13_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_13_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_13_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Is waste separated into infectious and non-infectious waste, with
                                        infectious waste autoclaved/incinerated?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_13_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_13_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_13_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Are ‘sharps’ handled and disposed of properly in ‘sharps’ containers
                                        that are appropriately utilized?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_13_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_13_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_13_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Are adequate records of hazardous waste disposal retained in an
                                        accessible file by the laboratory?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_13_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_13_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_13_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.14 Hazardous Chemicals</b>  
                                     <br />
                                     Are hazardous chemicals/materials properly handled?
                                     <br />
                                     Note: Chemicals present a broad range of physical (e.g., flammable, corrosive) and
                                     biological (e.g., toxic, radioactive, carcinogenic) hazards

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are hazardous chemicals properly classified and labelled?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_14_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_14_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_14_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Are chemicals segregated and stored by reactivity class and
                                        flammability?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_14_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_14_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_14_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Are hazardous chemicals properly utilized according to safety data
                                        sheets (SDS)?
                                        <br /> 
                                        Note: The SDS may be available in a computerized format as long personnel are
                                        trained on how to access them, the computers are kept in working order and the
                                        employer can provide a hard copy of the SDS on request
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_14_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_14_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_14_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Are hazardous chemicals properly disposed of according to national
                                        and/or international guidelines or SDS?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_14_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_14_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_14_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                       
                            <TableRow> 
                                <TableCell >
                                     
                                e. Is there documented information and records of communication with
                                laboratory personnel regarding the potential routes of entry for toxic
                                chemicals and how best to perform the necessary precautions to
                                prevent exposure?
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        1. A Are oxidizing materials used with appropriate
                                        precautions?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_14_e_1" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_14_e_1')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_14_e_1')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        2. Are corrosive materials used with appropriate
                                        precautions?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_14_e_2" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_14_e_2')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_14_e_2')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        3. Are suitable chemical spill measures provided, including
                                        neutralizing agents, spill containment, and absorbents
                                        appropriate for the chemicals used
                                        <br /> 
                                        Note: All hazardous chemicals must be labelled with the chemical’s name
                                        and with hazard markings. Flammable chemicals must be stored out of
                                        sunlight and below their flashpoint, preferably in a steel cabinet in a wellventilated area. Flammable and corrosive agents should be separated from
                                        one another. Distinct care should always be taken when handling hazardous
                                        chemicals
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_14_e_3" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_14_e_3')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_14_e_3')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.15 Fire Safety</b>  
                                     <br />
                                   
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are all electrical cords, plugs, and receptacles used appropriately,
                                        installed, and in good condition?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_15_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_15_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_15_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Is an appropriate fire extinguisher available, properly placed, in
                                        working condition, and routinely inspected?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_15_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_15_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_15_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Are there automatic smoke-detection, heat-detection, and alarm
                                        systems adequately placed within the laboratory?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_15_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_15_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_15_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Is there a training program in fire safety including fire drills and use of
                                        fire extinguishers, which is given to all laboratory workers and
                                        personnel who share the building?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_15_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_15_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_15_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                
                                
                            <TableRow> 
                                <TableCell >
                                     <b>12.16 Safety Audits</b>  
                                     <br />
                                     Are safety inspections or audits conducted regularly and documented?
                                     <br />
                                     Note: Work sites shall be surveyed/inspected at least annually
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Is there a safety audit plan or schedule that ensures all activities of
                                        the laboratory are checked for safety compliance?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_16_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_16_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_16_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Are safety inspections or safety audits being carried out by
                                        authorized personnel?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_16_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_16_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_16_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Are the personnel conducting the internal audits trained in safety?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_16_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_16_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_16_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Is root cause analysis and corrective action taken for safety
                                        inspection findings?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_16_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_16_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_16_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                           
                                <TableRow>
                                        <TableCell align="left">
                                        e. Are safety inspection findings documented and presented to the
                                        laboratory management and relevant personnel for review?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_16_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_16_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_16_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                        
                            <TableRow> 
                                <TableCell >
                                     <b>12.17 Safety Equipment</b>  
                                     <br />
                                     Is standard safety equipment available and properly used within the
                                    laboratory?
                                     <br />
                                     Note: Management is responsible for providing appropriate personal protective
                                    equipment (gloves, lab coats, eye protection, etc.) in useable condition. Laboratory
                                    personnel must always utilize personal protective equipment while in the laboratory.
                                    Protective clothing should not be worn outside designated working areas
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Safety cabinet(s) (including biosafety cabinets, laboratory hoods,
                                            etc.);
                                            <br />
                                            ISO 15190:2020 Clause 7.7
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_17_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_17_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_17_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Covers, safety caps, safety buckets on centrifuge(s);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_17_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_17_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_17_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Hand-washing station;
                                        <br />
                                        ISO 15190: 2020 Clause 4.2
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_17_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_17_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_17_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Eyewash station/bottle(s) and emergency showers where applicable;
                                        <br />
                                        ISO 15190: 2020 Clause 10.3 
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_17_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_17_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_17_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                           
                                <TableRow>
                                        <TableCell align="left">
                                        e. Spill kit(s);
                                        <br />
                                        ISO 15190: 2020 Clause 10.5
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_17_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_17_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_17_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        f. First aid kit(s).
                                        <br />
                                        ISO 15190: 2020 Clause 10.2
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_12_17_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_12_17_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_12_17_f')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.18 Personnel Protective Equipment</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is personal protective equipment easily accessible at the workstation and
                                    utilized appropriately and consistently?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_18" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_18')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_18')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.19 Personnel Vaccinations</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are post-exposure prophylaxis policies and procedures readily available to
                                    laboratory personnel and implemented after possible and known
                                    exposures?
                                    <br />
                                    Note 1: The laboratory must have a procedure for follow-up of possible and known
                                    percutaneous, mucus membrane or abraded skin exposure to HIV, hepatitis B virus,
                                    hepatitis C virus, tuberculosis bacteria, and other applicable pathogens. The
                                    procedure should include clinical and serological evaluation and appropriate
                                    prophylaxis
                                    <br />
                                    Note 2: Laboratory personnel should be offered appropriate vaccinations—particularly
                                    for hepatitis B virus. Personnel may decline to receive the vaccination. In that
                                    situation, personnel must sign a declination form which must be filed in their
                                    respective personnel file
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_19" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_19')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_19')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.20 Post-Exposure Prophylaxis</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are adverse incidents, accidents, or injuries (from equipment, reagents,
                                    consumables, occupational injuries, medical screening, or illnesses, etc.)
                                    fully investigated, documented, and subsequent steps taken to reduce the
                                    possibility of recurrence?
                                    <br />
                                    Note: The laboratory must have a procedure for follow-up of possible and known
                                    percutaneous, mucus membrane or abraded skin exposure to HIV, hepatitis B virus, or
                                    hepatitis C virus. The procedure should include clinical and serological evaluation and
                                    appropriate prophylaxis
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_20" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_20')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_20')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.21 Management of Adverse Incidents or Injury</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are adverse incidents or injuries from equipment, reagents, occupational
                                    injuries, medical screening, or illnesses, documented and investigated?
                                    <br />
                                    Note: All occupational injuries or illnesses should be thoroughly investigated and
                                    documented in the safety log or occurrence log, depending on the laboratory.
                                    Corrective actions taken by the laboratory in response to an accident or injury must
                                    also be documented.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_21" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_21')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_21')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.22 Safety Training</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are all personnel (including drivers / couriers, phlebotomists and cleaners)
                                    performing laboratory activities trained in safety practices relevant to their
                                    job tasks (including general safety, biosafety, and biosecurity, where
                                    appropriate)?
                                    <br />
                                    Note: All personnel must be trained in prevention or control of the effects of adverse
                                    incidents.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_22" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_22')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_22')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.23 Laboratory Safety Officer</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is a trained safety officer designated to implement and monitor the safety
                                    program in the laboratory?
                                    <br />
                                    Note: A safety officer should be appointed to implement and monitor the safety
                                    program, coordinate safety training, and handle all safety issues. This officer should
                                    receive safety training
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_23" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_23')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_23')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>12.24 Biosecurity</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are biosecurity policies, processes, and procedures implemented by the
                                    laboratory, where appropriate?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_12_24" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_12_24')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_12_24')}
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

export default SliptaAuditSection12Form;