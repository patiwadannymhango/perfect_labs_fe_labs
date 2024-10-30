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
import CardHeader from '@mui/material/CardHeader';
import  DialogContent from '@mui/material/DialogContent';
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


const SliptaAuditSection6Form = ( props ) => {


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
            
            y_P_n_na_6_1_a:'',
            comment_6_1_a:'',
            score_6_1_a:0,

            y_P_n_na_6_1_b:'',
            comment_6_1_b:'',
            score_6_1_b:0,

            y_P_n_na_6_1_c:'',
            comment_6_1_c:'',
            score_6_1_c:0,

            y_P_n_na_6_1_d:'',
            comment_6_1_d:'',
            score_6_1_d:0,

            y_P_n_na_6_1_e:'',
            comment_6_1_e:'',
            score_6_1_e:0,

            y_P_n_na_6_1_f:'',
            comment_6_1_f:'',
            score_6_1_f:0,

            y_P_n_na_6_1_g:'',
            comment_6_1_g:'',
            score_6_1_g:0,

            y_P_n_na_6_1_h:'',
            comment_6_1_h:'',
            score_6_1_h:0,

            y_P_n_na_6_1_i:'',
            comment_6_1_i:'',
            score_6_1_i:0,

            y_P_n_na_6_1_j:'',
            comment_6_1_j:'',
            score_6_1_j:0,

            
            y_P_n_na_6_2_a:'',
            comment_6_2_a:'',
            score_6_2_a:0,

            y_P_n_na_6_2_b:'',
            comment_6_2_b:'',
            score_6_2_b:0,

            y_P_n_na_6_2_c:'',
            comment_6_2_c:'',
            score_6_2_c:0,

            
            y_P_n_na_6_3_a:'',
            comment_6_3_a:'',
            score_6_3_a:0,

            y_P_n_na_6_3_b:'',
            comment_6_3_b:'',
            score_6_3_b:0,

            y_P_n_na_6_3_c:'',
            comment_6_3_c:'',
            score_6_3_c:0,

            y_P_n_na_6_4_a:'',
            comment_6_4_a:'',
            score_6_4_a:0,

            y_P_n_na_6_4_b:'',
            comment_6_4_b:'',
            score_6_4_b:0,

            y_P_n_na_6_4_c:'',
            comment_6_4_c:'',
            score_6_4_c:0,

            y_P_n_na_6_4_d:'',
            comment_6_4_d:'',
            score_6_4_d:0,

            y_P_n_na_6_4_e:'',
            comment_6_4_e:'',
            score_6_4_e:0,

            
            y_P_n_na_6_5_a:'',
            comment_6_5_a:'',
            score_6_5_a:0,

            y_P_n_na_6_5_b:'',
            comment_6_5_b:'',
            score_6_5_b:0,

            y_P_n_na_6_5_c:'',
            comment_6_5_c:'',
            score_6_5_c:0,

            y_P_n_na_6_5_d:'',
            comment_6_5_d:'',
            score_6_5_d:0,

            y_P_n_na_6_5_e:'',
            comment_6_5_e:'',
            score_6_5_e:0,

            y_P_n_na_6_5_f:'',
            comment_6_5_f:'',
            score_6_5_f:0,

            y_P_n_na_6_5_g:'',
            comment_6_5_g:'',
            score_6_5_g:0,

            y_P_n_na_6_5_h:'',
            comment_6_5_h:'',
            score_6_5_h:0,

            y_P_n_na_6_5_i:'',
            comment_6_5_i:'',
            score_6_5_i:0,

            y_P_n_na_6_5_j:'',
            comment_6_5_j:'',
            score_6_5_j:0,

            y_P_n_na_6_5_k:'',
            comment_6_5_k:'',
            score_6_5_k:0,

            y_P_n_na_6_5_l:'',
            comment_6_5_l:'',
            score_6_5_l:0,

            y_P_n_na_6_5_m:'',
            comment_6_5_m:'',
            score_6_5_m:0,

            y_P_n_na_6_5_n:'',
            comment_6_5_n:'',
            score_6_5_n:0,

            y_P_n_na_6_5_o:'',
            comment_6_5_o:'',
            score_6_5_o:0,

            y_P_n_na_6_5_p:'',
            comment_6_5_p:'',
            score_6_5_p:0,

            y_P_n_na_6_5_q:'',
            comment_6_5_q:'',
            score_6_5_q:0,

            y_P_n_na_6_5_r:'',
            comment_6_5_r:'',
            score_6_5_r:0,

            y_P_n_na_6_5_s:'',
            comment_6_5_s:'',
            score_6_5_s:0,

            y_P_n_na_6_5_t:'',
            comment_6_5_t:'',
            score_6_5_t:0,
  
            y_P_n_na_6_5_u:'',
            comment_6_5_u:'',
            score_6_5_u:0,

                        
            y_P_n_na_6_6_a:'',
            comment_6_6_a:'',
            score_6_6_a:0,

            y_P_n_na_6_6_b:'',
            comment_6_6_b:'',
            score_6_6_b:0,

            y_P_n_na_6_6_c:'',
            comment_6_6_c:'',
            score_6_6_c:0,

            y_P_n_na_6_6_d:'',
            comment_6_6_d:'',
            score_6_6_d:0,

            y_P_n_na_6_6_e:'',
            comment_6_6_e:'',
            score_6_6_e:0,

            y_P_n_na_6_7_a:'',
            comment_6_7_a:'',
            score_6_7_a:0,

            y_P_n_na_6_7_b:'',
            comment_6_7_b:'',
            score_6_7_b:0,

            y_P_n_na_6_7_c:'',
            comment_6_7_c:'',
            score_6_7_c:0,

            y_P_n_na_6_8:'',
            comment_6_8:'',
            score_6_8:0,

            y_P_n_na_6_9:'',
            comment_6_9:'',
            score_6_9:0,
 
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
        .post(`/slipta/lab_profile/${lab_profile_id}/audit_section_6/`,form)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`SECTION 06: ASSESSMENTS`);
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
                        title="SECTION 06: ASSESSMENTS"
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
                                    <TableCell > <b>SECTION 06: ASSESSMENTS </b> </TableCell>
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
                                     <b>6.1 Procedure and/or Process for Internal Audits </b>  
                                     <br />

                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Inputs into planning, scheduling, and conduct of internal audits;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Scheduling of internal audits;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Frequency of internal audits;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Scope of internal audits;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Criteria for internal audits;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Selection of internal auditors;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                              
                                <TableRow>
                                        <TableCell align="left">
                                        g. Recording of audit findings;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                           
                                <TableRow>
                                        <TableCell align="left">
                                        h. Addressing identified nonconformities;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                    
                                <TableRow>
                                        <TableCell align="left">
                                        i. Advice on required sample types and volumes for testing.

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        j. Monitoring of the effectiveness of corrective actions.

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_1_j" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_1_j')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_1_j')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                            <TableRow> 
                                <TableCell >
                                     <b>6.2 Internal Audits</b>  
                                     <br />

                                    Are internal audits conducted at intervals as defined in the internal audit
                                    program and do these audits address all areas of the laboratory
                                    management systems?

                                    <br />

                                    Is there an audit program that ensures all activities of the laboratory are
                                    audited?


                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are audits being carried out with minimal conflict of interest where
                                        possible, carried out by persons who are not involved in activities in
                                        the section being audited?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_2_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_2_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_2_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Are the personnel conducting the internal audits trained, qualified, and
                                        authorized to conduct internal audits?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_2_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_2_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_2_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Are internal audit findings documented and presented to laboratory
                                        management and relevant personnel for review?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_2_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_2_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_2_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                            
                            <TableRow> 
                                <TableCell >
                                     <b>6.3 Audit Recommendations and Action Plan and Follow-up</b>  
                                    
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Are internal audits reports generated, disseminated, and
                                        communicated to laboratory management and relevant personnel for
                                        review?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_3_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_3_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_3_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Is an action plan developed with clear timelines, assigned personnel
                                        and documented follow-up within the timeframe defined by
                                        laboratory management?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_3_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_3_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_3_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Are recommendations for improvement actions made based on audit
                                        findings?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_3_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_3_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_3_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                              
                            <TableRow> 
                                <TableCell >
                                     <b>6.4 Procedure and/or Process for Risk Management</b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?
                                     <br />
                                     Note: Risk must be managed at the pre-examination processes, examination
                                    processes and post-examination processes. The laboratory shall evaluate the impact
                                    of work processes and potential failures on examination results as they affect patient
                                    safety and shall modify processes to reduce or eliminate the identified risks and
                                    document decisions and actions taken. Risk management must take into
                                    consideration patient care and laboratory activities
                                    
                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Methods used to identify risks and opportunities;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_4_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_4_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_4_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Areas for identifying risks and opportunities associated with its
                                        examinations and activities;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_4_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_4_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_4_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Development of action plans to address both risks and opportunities
                                        for improvement;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_4_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_4_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_4_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                        
                                <TableRow>
                                        <TableCell align="left">
                                        d. Evaluation of the effectiveness of implemented actions and
                                        modification where required;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_4_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_4_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_4_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                   
                                <TableRow>
                                        <TableCell align="left">
                                        e. Recording and communication of decisions made, and actions taken
                                        on risks and opportunities
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_4_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_4_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_4_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                            <TableRow> 
                                <TableCell >
                                     <b>6.5 Risk Management</b>  
                                     <br />

                                     Has laboratory management developed and implemented a risk
                                    management program that identifies risks and opportunities for
                                    improvement in all laboratory processes including but not limited to:


                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Impartiality;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Confidentiality;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Structural and governance requirements;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Personnel;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Facilities and environmental activities;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Equipment;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                              
                                <TableRow>
                                        <TableCell align="left">
                                        g. Reagents and consumables;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                           
                                <TableRow>
                                        <TableCell align="left">
                                        h. Service agreements;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                    
                                <TableRow>
                                        <TableCell align="left">
                                        i. Externally provided products and services

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        j. Pre-examination processes;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_j" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_j')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_j')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        k. Examination processes (including POCT) ;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_k" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_k')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_k')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                 
                                <TableRow>
                                        <TableCell align="left">
                                        l. Post-examination processes;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_l" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_l')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_l')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                  
                                <TableRow>
                                        <TableCell align="left">
                                        m. Nonconforming work;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_m" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_m')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_m')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                  
                                <TableRow>
                                        <TableCell align="left">
                                        n. Control of data and information management;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_n" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_n')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_n')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                
                                <TableRow>
                                        <TableCell align="left">
                                        o. Complaints;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_o" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_o')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_o')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                                                
                                <TableRow>
                                        <TableCell align="left">
                                        p. Management system documentation;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_p" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_p')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_p')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                                                                                                
                                <TableRow>
                                        <TableCell align="left">
                                        q. Control of management system documents;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_q" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_q')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_q')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                                                                    
                                <TableRow>
                                        <TableCell align="left">
                                        r. Control of records;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_r" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_r')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_r')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        s. Nonconformities and corrective actions;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_s" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_s')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_s')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        t. Evaluations;

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_t" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_t')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_t')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                   
                                <TableRow>
                                        <TableCell align="left">
                                        u. Management review

                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_5_u" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_5_t')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_5_u')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                
                            <TableRow> 
                                <TableCell >
                                     <b>6.6 Risk Management Assessment</b>  
                                     <br />

                                     Does the laboratory use evaluation tools to identify risks and opportunities
                                     for improvements?


                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Internal audits;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_6_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_6_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_6_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Customer complaints/feedback;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_6_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_6_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_6_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Nonconforming event management;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_6_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_6_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_6_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Management review;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_6_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_6_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_6_d')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Quality indicators
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_6_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_6_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_6_e')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                                                                                
                            <TableRow> 
                                <TableCell >
                                     <b>6.7 Risk and Opportunities Action Plan</b>  
                                     <br />

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Is an action plan for identified risks and opportunities for improvement
                                        developed and implemented with clear timelines and responsibilities?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_7_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_7_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_7_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Does laboratory management evaluate the effectiveness of the risk
                                        and/or opportunities for improvement action plan?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_7_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_7_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_7_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                
                                <TableRow>
                                        <TableCell align="left">
                                        c. Are actions modified when actions are identified as being ineffective?
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_6_7_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_6_7_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_6_7_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>



                                <TableRow> 
                                    <TableCell > 
                                    <b> 6.8 Quality Indicators</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are quality indicators selected to cover pre-examination, examination, and
                                    post-examination processes (e.g., turnaround times, rejected samples,
                                    stock-outs, etc.), defined, measured, and monitored?
                                    <br />
                                    Note 1: The identification of the quality indicators should include establishing the
                                    objectives, methodology, interpretation, limits, action plan and duration of monitoring
                                    <br />
                                    Note 2: The laboratory should select quality indicators in line with meeting its
                                    objectives from pre-analytic, analytic, and post-analytic phases critical to patient
                                    outcomes

                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_6_8" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_6_8')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_6_8')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                
                                <TableRow> 
                                    <TableCell > 
                                    <b> 6.9 Monitoring of Quality Indicators</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are the outcome of the review of quality indicators used to improve
                                    laboratory processes?
                                    <br />
                                    Note: The laboratory should review the quality indicators at defined intervals
                                   

                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_6_9" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_6_9')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_6_9')}
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

export default SliptaAuditSection6Form;