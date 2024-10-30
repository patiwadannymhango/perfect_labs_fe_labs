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
import { IconButton, Tooltip } from '@mui/material';
import MySelectInput from './MySelectInput';

const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
  };

export function SliptaAuditSection2Form( props ){


    const refresh = props.refresh;
    const lab_profile_id = props.lab_profile_id; 
    const user = getUser();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState('');


    const { control, register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {
            
        auditor: user.id,
        lab_profile: lab_profile_id, 

        y_P_n_na_2_1_a: '',
        comment_2_1_a: '',
        score_2_1_a: 0,

        y_P_n_na_2_1_b: '',
        comment_2_1_b: '',
        score_2_1_b: 0,

        y_P_n_na_2_1_c: '',
        comment_2_1_c: '',
        score_2_1_c: 0,

        y_P_n_na_2_1_d: '',
        comment_2_1_d: '',
        score_2_1_d: 0,

        y_P_n_na_2_2_a: '',
        comment_2_2_a: '',
        score_2_2_a: 0,

        y_P_n_na_2_2_b: '',
        comment_2_2_b: '',
        score_2_2_b: 0,

        y_P_n_na_2_2_c: '',
        comment_2_2_c: '',
        score_2_2_c: 0,

        y_P_n_na_2_2_d: '',
        comment_2_2_d: '',
        score_2_2_d: 0,

        y_P_n_na_2_3: '',
        comment_2_3: '',
        score_2_3: 0,

        y_P_n_na_2_4: '',
        comment_2_4: '',
        score_2_4: 0,

        y_P_n_na_2_5_a: '',
        comment_2_5_a: '',
        score_2_5_a: 0,

        y_P_n_na_2_5_b: '',
        comment_2_5_b: '',
        score_2_5_b: 0,

        y_P_n_na_2_5_c: '',
        comment_2_5_c: '',
        score_2_5_c: 0,

        y_P_n_na_2_5_d: '',
        comment_2_5_d: '',
        score_2_5_d: 0,

        y_P_n_na_2_5_e: '',
        comment_2_5_e: '',
        score_2_5_e: 0,

        y_P_n_na_2_5_f: '',
        comment_2_5_f: '',
        score_2_5_f: 0,

        y_P_n_na_2_5_g: '',
        comment_2_5_g: '',
        score_2_5_g: 0,

        y_P_n_na_2_5_h: '',
        comment_2_5_h: '',
        score_2_5_h: 0,

        y_P_n_na_2_5_i: '',
        comment_2_5_i: '',
        score_2_5_i: 0,

        y_P_n_na_2_5_j: '',
        comment_2_5_j: '',
        score_2_5_j: 0,

        y_P_n_na_2_5_k: '',
        comment_2_5_k: '',
        score_2_5_k: 0,

        y_P_n_na_2_5_l: '',
        comment_2_5_l: '',
        score_2_5_l: 0,

        y_P_n_na_2_6_a: '',
        comment_2_6_a: '',
        score_2_6_a: 0,

        y_P_n_na_2_6_b: '',
        comment_2_6_b: '',
        score_2_6_b: 0,

        y_P_n_na_2_6_c: '',
        comment_2_6_c: '',
        score_2_6_c: 0,

        y_P_n_na_2_6_d: '',
        comment_2_6_d: '',
        score_2_6_d: 0,

        y_P_n_na_2_6_e: '',
        comment_2_6_e: '',
        score_2_6_e: 0,

        y_P_n_na_2_6_f: '',
        comment_2_6_f: '',
        score_2_6_f: 0,

        y_P_n_na_2_6_g: '',
        comment_2_6_g: '',
        score_2_6_g: 0,

        y_P_n_na_2_7: '',
        comment_2_7: '',
        score_2_7: 0,

        y_P_n_na_2_8_a: '',
        comment_2_8_a: '',
        score_2_8_a: 0,

        y_P_n_na_2_8_b: '',
        comment_2_8_b: '',
        score_2_8_b: 0,

        y_P_n_na_2_8_c: '',
        comment_2_8_c: '',
        score_2_8_c: 0,

        y_P_n_na_2_8_d: '',
        comment_2_8_d: '',
        score_2_8_d: 0,

        y_P_n_na_2_8_e: '',
        comment_2_8_e: '',
        score_2_8_e: 0,

        y_P_n_na_2_8_f: '',
        comment_2_8_f: '',
        score_2_8_f: 0,

        y_P_n_na_2_8_g: '',
        comment_2_8_g: '',
        score_2_8_g: 0,

        y_P_n_na_2_8_h: '',
        comment_2_8_h: '',
        score_2_8_h: 0,

        y_P_n_na_2_8_i: '',
        comment_2_8_i: '',
        score_2_8_i: 0,

        y_P_n_na_2_8_j: '',
        comment_2_8_j: '',
        score_2_8_j: 0,


        y_P_n_na_2_9_a: '',
        comment_2_9_a: '',
        score_2_9_a: 0,

        y_P_n_na_2_9_b: '',
        comment_2_9_b: '',
        score_2_9_b: 0,

        y_P_n_na_2_9_c: '',
        comment_2_9_c: '',
        score_2_9_c: 0,

        y_P_n_na_2_9_d: '',
        comment_2_9_d: '',
        score_2_9_d: 0,


        y_P_n_na_2_10: '',
        comment_2_10: '',
        score_2_10: 0,

        y_P_n_na_2_11: '',
        comment_2_11: '',
        score_2_11: 0,

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

    const onSubmit = data => {
        
        axiosService
        .post(`/slipta/lab_profile/${lab_profile_id}/audit_section_2/`,data)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`Section 2: Organisation and Leadership`);
          refresh();
          
        })
        .catch((err) => {
            if (err.message) {
                setError(err.request.response);
            }
            setSnackbarOpen(true);
            setSnackbarMessage(`Error : ${error}`);

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
            
        
            <Dialog 
                open={dialogOpen} 
                onClose={onDialogClose} 
                maxWidth='lg'
                >

                <CardHeader
                        title="SECTION 02: ORGANISATION AND LEADERSHIP"
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
                                <TableRow> <TableCell > <b>SECTION 02: ORGANISATION AND LEADERSHIP</b>  </TableCell> </TableRow>
                                <TableRow>
                                
                                <TableCell align="left" style={cellStyle}>REQUIREMENTS</TableCell>
                                <TableCell align="left" style={cellStyle}>Y/P/N/NA</TableCell>
                                <TableCell align="left" style={cellStyle}>COMMENT</TableCell>
                                <TableCell align="right" style={cellStyle}>SCORE</TableCell>
                                </TableRow>
                            
                            </TableHead>
                            <TableBody>
                            <TableRow> <TableCell > <b>2.1 Procedure and/or Process for Organizational Code of Conduct </b> <br /> 
                                    Has the laboratory defined a procedure and/or a process that addresses,
                                    but is not limited to, the following?
                            </TableCell> </TableRow>
                                
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        a. Adherence to organizational policies and procedures
                                    </TableCell>

                                     <TableCell align="top" style={cellStyle} >
                                         <MySelectInput name="y_P_n_na_2_1_a" control={control}  />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_1_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_1_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                            b. Impartiality
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_2_1_b" control={control}  />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_1_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_1_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    c. Confidentialit
                                    </TableCell>
                                    
                                    <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_2_1_c" control={control}  />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_1_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_1_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    d. Conflicts of interest
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_2_1_d" control={control}  />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_1_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_1_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>2.2 Implementation of the Organizational Code of Conduct </b> <br />  
                                    Has the laboratory implemented the procedure and/or process and does it
                                    have records of the following?
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Adherence to organizational policies and procedures;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_2_2_a" control={control}  />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_2_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_2_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Impartiality;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_2_2_b" control={control}  />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_2_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_2_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Confidentiality;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_2_2_c" control={control}  />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_2_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_2_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Conflicts of interest
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_2_2_d" control={control}  />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_2_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_2_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b> 2.3 Deputization </b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    In the event of the absence of key personnel, has the laboratory
                                    implemented a process to ensure the continuity of the laboratory
                                    management system?
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_3" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_3')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_3')}

                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 2.4 Budgetary Projections </b> </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Are budgetary projections based on personnel needs, scope of test,
                                    infrastructure, equipment needs, service and maintenance and quality
                                    assurance process and materials (IQC and EQA)?
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_4" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_4')}

                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_4')}

                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                

                                <TableRow> 
                                    <TableCell > 
                                    <b>2.5 Routine Review of Quality and Technical Records </b> <br />  
                                    Does the laboratory routinely perform a documented review of all quality
                                    and technical records?
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Follow-up of action items from previous reviews;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_a" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_a')}

                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Status of corrective actions taken and required risk mitigation actions;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_b" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Reports from personnel;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_c" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Environmental monitoring logs;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_d" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Sample rejection records;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_e" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    f. Equipment calibration and maintenance records;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_f" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_f')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    g. IQC records across all test areas;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_g" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_g')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    h. Outcomes of PTs and other forms of inter-laboratory comparisons;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_h" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_h')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_h')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    i. Quality indicators;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_i" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_i')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_i')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    j. Customer complaints and feedback;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_j" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_j')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_j')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    k. Results of improvement projects;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_k" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_k')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_k')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    l. Documentation of this routine review and action planning with
                                    personnel for resolution and follow-up review.
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_5_l" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_5_l')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_5_l')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow> 
                                    <TableCell > 
                                    <b>2.6 Procedure and/or Process for Management Review </b> <br />  
                                    Has the laboratory defined a procedure and/or a process that addresses,
                                    but is not limited to, the following?
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Frequency of management reviews;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_6_a" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_6_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_6_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Review input (agenda as per Clause 8.9.2 of ISO15189:2022);
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_6_b" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_6_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_6_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Key attendees;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_6_c" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_6_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_6_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Conduct of review activities;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_6_d" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_6_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_6_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Review output (decisions, actions to be taken, provision of required
                                    resources person responsible and due dates);
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_6_e" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_6_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_6_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    f. Communication of decisions and actions to be taken to the relevant
                                    persons;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_6_f" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_6_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_6_f')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    g. Ensure all actions arising are completed within the defined
                                    timeframe
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_6_g" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_6_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_6_g')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 2.7 Conduct of Management Reviews </b> </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Does the laboratory management perform a review and discussion of the
                                    laboratory management system at planned intervals?
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_7" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_7')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_7')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow> 
                                    <TableCell > 
                                    <b>2.8 Management Review Inputs </b> <br />  
                                    Does the management review meeting include the following inputs? <br />

                                    Note: The minimum list of review inputs should include the requirements of Clause
                                    8.9.2 (a-j) of ISO15189:2022.
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Status of actions from previous management reviews, internal and
                                    external changes to the management system, changes in the volume
                                    and type of laboratory activities and adequacy of resources;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_a" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Fulfilment of objectives and suitability of policies and procedures;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_b" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Outcomes of recent evaluations, process monitoring using quality
                                    indicators, internal audits, analysis of non-conformities, corrective
                                    actions and assessments by external bodies;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_c" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Patient, user and personnel feedback and complaints;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_d" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Quality assurance of result validity;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_e" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    f. Effectiveness of any implemented improvements and actions taken
                                    to address risks and opportunities for improvement;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_f" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_f')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    g. Performance of external providers, including referral laboratories and
                                    technical consultants;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_g" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_g')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    h. Results of participation in interlaboratory comparison programs;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_h" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_h')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_h')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    i. Evaluation of POCT activities;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_i" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_i')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_i')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    j. Other relevant factors, such as monitoring activities and training.
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_8_j" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_8_j')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_8_j')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                                                   
                                <TableRow> 
                                    <TableCell > 
                                    <b>2.9 Management Review Outputs </b> <br />  
                                    Does the management review meeting include the following outputs? <br />

                                    Note: The interval between management reviews should be no greater than 12
                                    months; however, shorter intervals should be adopted when a Laboratory
                                    Management System is being established.
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Effectiveness of the management system and its processes;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                        <MySelectInput name="y_P_n_na_2_9_a" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_9_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_9_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Improvement of the laboratory activities related to the fulfilment of
                                    the requirements of this document;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                     <MySelectInput name="y_P_n_na_2_9_a" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_9_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_9_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Provision of required resources;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_9_c" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_9_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_9_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Improvement of services to patients and users;
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_9_d" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_9_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_9_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Any need for change.
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                        <MySelectInput name="y_P_n_na_2_9_e" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_9_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_9_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 2.10 Communication of Review Findings </b> </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Are findings and actions from routine technical and management review
                                    meeting communicated to the relevant personnel?
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                        <MySelectInput name="y_P_n_na_2_10" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_10')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_10')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 2.11 Completion and Monitoring of Review Action Items </b> </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Does laboratory management ensure that actions from routine technical
                                    review and management review meetings are completed within defined
                                    timeframes and monitored for their effectiveness?
                                    </TableCell>

                                    <TableCell style={cellStyle}>
                                    <MySelectInput name="y_P_n_na_2_10" control={control}  />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            multiline
                                            rows={1}
                                            {...register('comment_2_11')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_2_11')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                            </TableBody>
                            
                            </Table>

                            <br />
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