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


const SliptaAuditSection7Form = ( props ) => {


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

            y_P_n_na_7_1_a:'',
            comment_7_1_a:'',
            score_7_1_a:0,

            y_P_n_na_7_1_b:'',
            comment_7_1_b:'',
            score_7_1_b:0,

            y_P_n_na_7_1_c:'',
            comment_7_1_c:'',
            score_7_1_c:0,

            y_P_n_na_7_1_d:'',
            comment_7_1_d:'',
            score_7_1_d:0,

            y_P_n_na_7_1_e:'',
            comment_7_1_e:'',
            score_7_1_e:0,

            y_P_n_na_7_1_f:'',
            comment_7_1_f:'',
            score_7_1_f:0,

            y_P_n_na_7_1_g:'',
            comment_7_1_g:'',
            score_7_1_g:0,

            y_P_n_na_7_1_h:'',
            comment_7_1_h:'',
            score_7_1_h:0,

            y_P_n_na_7_2_a:'',
            comment_7_2_a:'',
            score_7_2_a:0,

            y_P_n_na_7_2_b:'',
            comment_7_2_b:'',
            score_7_2_b:0,

            y_P_n_na_7_2_c:'',
            comment_7_2_c:'',
            score_7_2_c:0,

            y_P_n_na_7_2_d:'',
            comment_7_2_d:'',
            score_7_2_d:0,

            y_P_n_na_7_2_e:'',
            comment_7_2_e:'',
            score_7_2_e:0,

            y_P_n_na_7_2_f:'',
            comment_7_2_f:'',
            score_7_2_f:0,

            y_P_n_na_7_2_g:'',
            comment_7_2_g:'',
            score_7_2_g:0,

            y_P_n_na_7_3:'',
            comment_7_3:'',
            score_7_3:0,

            y_P_n_na_7_4:'',
            comment_7_4:'',
            score_7_4:0,

            y_P_n_na_7_5:'',
            comment_7_5:'',
            score_7_5:0,
            
            y_P_n_na_7_6_a:'',
            comment_7_6_a:'',
            score_7_6_a:0,

            y_P_n_na_7_6_b:'',
            comment_7_6_b:'',
            score_7_6_b:0,

            y_P_n_na_7_6_c:'',
            comment_7_6_c:'',
            score_7_6_c:0,

            y_P_n_na_7_6_d:'',
            comment_7_6_d:'',
            score_7_6_d:0,

            y_P_n_na_7_6_e:'',
            comment_7_6_e:'',
            score_7_6_e:0,

            y_P_n_na_7_6_f:'',
            comment_7_6_f:'',
            score_7_6_f:0,

            y_P_n_na_7_6_g:'',
            comment_7_6_g:'',
            score_7_6_g:0,

            y_P_n_na_7_7:'',
            comment_7_7:'',
            score_7_7:0,

            y_P_n_na_7_8_a:'',
            comment_7_8_a:'',
            score_7_8_a:0,

            y_P_n_na_7_8_b:'',
            comment_7_8_b:'',
            score_7_8_b:0,

            y_P_n_na_7_8_c:'',
            comment_7_8_c:'',
            score_7_8_c:0,

            
            y_P_n_na_7_9_a:'',
            comment_7_9_a:'',
            score_7_9_a:0,

            y_P_n_na_7_9_b:'',
            comment_7_9_b:'',
            score_7_9_b:0,

            y_P_n_na_7_9_c:'',
            comment_7_9_c:'',
            score_7_9_c:0,

            y_P_n_na_7_9_d:'',
            comment_7_9_d:'',
            score_7_9_d:0,

            y_P_n_na_7_9_e:'',
            comment_7_9_e:'',
            score_7_9_e:0,

            y_P_n_na_7_9_f:'',
            comment_7_9_f:'',
            score_7_9_f:0,

            y_P_n_na_7_9_g:'',
            comment_7_9_g:'',
            score_7_9_g:0,

            y_P_n_na_7_9_h:'',
            comment_7_9_h:'',
            score_7_9_h:0,

            y_P_n_na_7_9_i:'',
            comment_7_9_i:'',
            score_7_9_i:0,

            y_P_n_na_7_10:'',
            comment_7_10:'',
            score_7_10:0,

            y_P_n_na_7_11:'',
            comment_7_11:'',
            score_7_11:0,

            y_P_n_na_7_12:'',
            comment_7_12:'',
            score_7_12:0,

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
        .post(`/slipta/lab_profile/${lab_profile_id}/audit_section_7/`,form)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`SECTION 07: SUPPLIER AND INVENTORY MANAGEMENT`);
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
                        title="SECTION 07: SUPPLIER AND INVENTORY MANAGEMENT"
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
                                    <TableCell > <b>SECTION 07: SUPPLIER AND INVENTORY MANAGEMENT</b> </TableCell>
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
                                     <b>7.1 Procedure and/or Process for Externally Provided Products and
                                     Services </b>  
                                     <br />

                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Selection of required products and services;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_1_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_1_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_1_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Establishment of selection criteria;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_1_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_1_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_1_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Establishment of acceptance criteria;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_1_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_1_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_1_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Selection, approval of suppliers and technical consultants;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_1_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_1_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_1_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Maintenance of approved suppliers list;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_1_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_1_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_1_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Defining the requirements of its purchase supplies and services
                                        (purchase documentation);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_1_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_1_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_1_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                              
                                <TableRow>
                                        <TableCell align="left">
                                        g. Reviewing and monitoring of the performance of its approved
                                        suppliers;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_1_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_1_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_1_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                           
                                <TableRow>
                                        <TableCell align="left">
                                        h. Frequency of reviewing and monitoring the performance.
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_1_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_1_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_1_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                    
                            <TableRow> 
                                <TableCell >
                                     <b>7.2 Procedure and/or Process for Purchasing and Inventory Control
                                     of Equipment, Reagents, and Consumables</b>  
                                     <br />

                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?


                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Requisition, ordering and receipt of purchased items;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_2_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_2_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_2_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Establishment of acceptance and rejection criteria for purchased
                                        items;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_2_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_2_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_2_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Acceptance testing;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_2_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_2_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_2_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Storage of purchased items;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_2_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_2_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_2_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Management of inventory;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_2_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_2_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_2_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Monitoring and handling of expired items;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_2_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_2_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_2_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Responding to manufacturers recall or other notices
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_2_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_2_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_2_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                            
                                <TableRow> 
                                    <TableCell > 
                                    <b> 7.3 Inventory and Budgeting System (Including the requirements for POCT)</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is there a process for accurately forecasting needs for services, supplies
                                    and reagents?
                                    <br />
                                    Note 1: External services include referral laboratories and consultants
                                    <br />
                                    Note 2: The laboratory must have a systematic way of determining its supply and
                                    testing needs through inventory control and budgeting systems that take into
                                    consideration past patterns, present trends, and future plans

                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_7_3" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_7_3')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_7_3')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                    
                                <TableRow> 
                                    <TableCell > 
                                    <b> 7.4 Purchasing Specifications</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Does the laboratory provide specifications for their services, supplies and
                                    consumables that are required when placing a requisition?
                                    <br />
                                    Note: Specification could be in the form of catalogue number, item number,
                                    manufacturer name, etc.

                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_7_4" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_7_4')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_7_4')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                      
                                <TableRow> 
                                    <TableCell > 
                                    <b> 7.5 Service Supplier Performance Review</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Does laboratory management monitor the performance of external
                                    suppliers (including referral laboratories, technical consultants, and EQA
                                    providers) to ensure that they continually meet the stated criteria of the
                                    approved suppliers?
                                    <br />
                                    Note: All suppliers of services used by the laboratory must be reviewed and
                                    monitored for their performance

                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_7_5" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_7_5')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_7_5')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                
                                                                                    
                            <TableRow> 
                                <TableCell >
                                     <b>7.6 Inventory Control</b>  
                                     <br />
                                     Does the laboratory maintain records for each reagent and consumable
                                    that contributes to the performance of examinations? These records shall
                                    include but not be limited to the following:

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Identity of the reagent or consumable;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_6_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_6_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_6_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Batch code or lot number;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_6_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_6_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_6_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Manufacturer or supplier name and contact information;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_6_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_6_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_6_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Received date, expiration date, date of entry into service and date
                                        material was taken out of service, where applicable;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_6_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_6_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_6_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Manufacturer's instruction/package insert;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_6_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_6_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_6_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Records of inspection of reagents and consumables when received
                                        (e.g., acceptable or damaged)
                                        <br /> 
                                        <b>Note: All incoming orders must be inspected for condition and completeness of the
                                        original requests, receipted, and documented appropriately, date received in the
                                        Laboratory and expiry date for the product should be clearly indicated</b>
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_6_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_6_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_6_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Reference to the person or persons undertaking the preparation of
                                        reagents, resuspension or combined in-house, as well as the dates of
                                        preparation and stability
                                        <br /> 
                                        
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_6_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_6_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_6_g')}
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

                                                                
                                                                                    
                            <TableRow> 
                                <TableCell >
                                     <b>7.8 Laboratory Inventory System</b>  
                                     <br />
                                     Note: The laboratory inventory system should reliably inform personnel of the
                                    minimum amount of stock to be kept to avoid interruptions of service due to stockouts 
                                    and the maximum amount 
                                    to be kept by the laboratory to prevent expiry of
                                    reagents

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are inventory records complete and accurate with minimum and
                                        maximum stock levels denoted and monitored?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_8_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_8_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_8_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Is the consumption rate of all reagents and consumables monitored?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_8_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_8_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_8_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Are inventory/stock counts routinely performed?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_8_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_8_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_8_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                                                                    
                            <TableRow> 
                                <TableCell >
                                     <b>7.9 Storage Areas</b>  
                                     <br />
                                     Are storage areas set up and monitored appropriately?
                                     <br />
                                     Note: Storage of supplies and consumables must be as per the manufacturer’s
                                     specifications
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Is the storage area well-organized and free of clutter to prevent
                                        damage and deterioration?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Are there designated places for all inventory items for easy access
                                        (separation of inspected and uninspected items)?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Is adequate cold storage available?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                       
                                <TableRow>
                                        <TableCell align="left">
                                        d. Is the humidity of the room monitored routinely, when appropriate?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Is the temperature of the room monitored routinely?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Is storage in direct sunlight avoided? Is direct sunlight avoided in
                                        storage areas?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        g. Is the storage area adequately ventilated?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        h. Is the storage area clean and free of dust and pests?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        i. Are storage areas access-controlled?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_7_9_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_7_9_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_7_9_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                   
                                <TableRow> 
                                    <TableCell > 
                                    <b>7.10 Inventory Organization and Wastage Minimization</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is First-Expiration-First-Out (FEFO) practiced?
                                    <br />
                                    Note: To minimize wastage from product expiration, inventory should be organized in
                                    line with the FEFO principle. Place products that will expire first in front of products
                                    with a later expiration date and issue stock accordingly to ensure products in use are
                                    not past their expiration date. Remember that the order in which products are received
                                    is not necessarily the order in which they will expire
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_7_10" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_7_10')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_7_10')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                       
                                <TableRow> 
                                    <TableCell > 
                                    <b>7.11 Product Expiration</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are all reagents/test kits in use (and in stock) currently within the
                                    manufacturer-assigned expiration or within stability?
                                    <br />
                                    Note 1: All reagents and test kits in use, as well as those in stock, should be within the
                                    manufacturer-assigned expiry dates.
                                    <br />
                                    Note 2: Expired controls and calibrators must not be used.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_7_11" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_7_11')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_7_11')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                
                                       
                                <TableRow> 
                                    <TableCell > 
                                    <b>7.12 Disposal of Expired Products</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are expired products labelled and disposed of properly?
                                    <br />
                                    Note: Expired products should be disposed of properly and records maintained. If
                                    safe disposal is not available at the laboratory, the manufacturer/supplier should take
                                    back the expired stock at the time of their next delivery
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_7_12" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_7_12')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_7_12')}
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

export default SliptaAuditSection7Form;