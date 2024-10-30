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

const SliptaAuditSection10Form = ( props ) => {


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

            y_P_n_na_10_1_a:'',
            comment_10_1_a:'',
            score_10_1_a:0,

            y_P_n_na_10_1_b:'',
            comment_10_1_b:'',
            score_10_1_b:0,

            y_P_n_na_10_1_c:'',
            comment_10_1_c:'',
            score_10_1_c:0,

            y_P_n_na_10_1_d:'',
            comment_10_1_d:'',
            score_10_1_d:0,

            y_P_n_na_10_1_e:'',
            comment_10_1_e:'',
            score_10_1_e:0,

            y_P_n_na_10_1_f:'',
            comment_10_1_f:'',
            score_10_1_f:0,

            y_P_n_na_10_1_g:'',
            comment_10_1_g:'',
            score_10_1_g:0,

            y_P_n_na_10_1_h:'',
            comment_10_1_h:'',
            score_10_1_h:0,

            y_P_n_na_10_1_i:'',
            comment_10_1_i:'',
            score_10_1_i:0,

            y_P_n_na_10_1_j:'',
            comment_10_1_j:'',
            score_10_1_j:0,


            y_P_n_na_10_2_a:'',
            comment_10_2_a:'',
            score_10_2_a:0,

            y_P_n_na_10_2_b:'',
            comment_10_2_b:'',
            score_10_2_b:0,

            y_P_n_na_10_2_c:'',
            comment_10_2_c:'',
            score_10_2_c:0,

            y_P_n_na_10_3:'',
            comment_10_3:'',
            score_10_3:0,

            y_P_n_na_10_4:'',
            comment_10_4:'',
            score_10_4:0,

            y_P_n_na_10_5:'',
            comment_10_5:'',
            score_10_5:0,
 
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
        .post(`/slipta/lab_profile/${lab_profile_id}/audit_section_10/`,form)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`SECTION 10: NONCONFORMING EVENT MANAGEMENT`);
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
                        title="SECTION 10: NONCONFORMING EVENT MANAGEMENT"
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
                                    <TableCell > <b>SECTION 10: NONCONFORMING EVENT MANAGEMENT</b> </TableCell>
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
                                     <b>10.1 Procedure and/or Process for Handling of Nonconforming
                                     work, Nonconformities and Corrective Action </b>  
                                     <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Identification of nonconforming work and nonconformities in any
                                        aspect of the laboratory management system;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Documentation of nonconforming work and nonconformities;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Determination of level of risk and evaluation of the impact;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                         
                                <TableRow>
                                        <TableCell align="left">
                                        d. Performing root cause analysis;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_d" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_d')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_d')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        e. Determination of the need for corrective action (how and where);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_e" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_e')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_e')}
                                                type="number"  
                                                />
                                        </TableCell>

                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        f. Assignment of roles and responsibilities for recalling, resolving and
                                        resumption of the nonconforming work and nonconformities;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_f" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_f')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_f')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                              
                                <TableRow>
                                        <TableCell align="left">
                                        g. Determining time frame for resolving nonconforming work and
                                        nonconformities;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_g" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_g')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_g')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                           
                                <TableRow>
                                        <TableCell align="left">
                                        h. Implementation of corrective action (including halting examinations
                                        and recalling of released results, where applicable);
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_h" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_h')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_h')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                                                              
                                <TableRow>
                                        <TableCell align="left">
                                        i. Monitoring, reviewing and evaluating the effectiveness of the
                                        corrective action taken;
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_i" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_i')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_i')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                                                              
                                <TableRow>
                                        <TableCell align="left">
                                        j. Retention of records of nonconforming work and nonconformities.
                                        <br /> 
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_1_j" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_1_j')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_1_j')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                            <TableRow> 
                                <TableCell >
                                     <b>10.2 Identification and Management of Nonconforming Work and
                                     Nonconformities</b>  
                                     <br />
                                    Note: Nonconformities should be identified and managed in any aspect of the
                                    laboratory management system, including pre-examination, examination, or postexamination processes. Nonconforming examinations or activities occur in many
                                    different areas and can be identified in many ways, including clinician complaints,
                                    internal quality control indications, instrument calibrations, checking of consumable
                                    materials, inter-laboratory comparisons, personnel comments, reporting and
                                    certificate checking, laboratory management reviews, and internal and external audits
                                    <br />
                                    Are nonconforming work and nonconformities documented as required
                                    below:

                                </TableCell> 
                            </TableRow>

                                <TableRow>
                                        <TableCell align="left">
                                        a. Investigation and determination of the root cause (root cause
                                        analysis), and conduct of risk assessment (to determine the level of
                                        risk and the need for action);
                                        <br /> 
                                        Note: Root cause analysis is a process of identifying and removing the underlying
                                        factor of the nonconformance.
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_2_a" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_2_a')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_2_a')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>

                                
                                <TableRow>
                                        <TableCell align="left">
                                        b. Actions (immediate and corrective) taken to control and/or correct
                                        the nonconformity or non-conforming work;
                                        <br />
                                        Note 1: Are examinations halted and results withheld or recalled where the
                                        nonconformity compromises patient results? 
                                        <br />
                                        Note 2: Informing the requester where nonconforming work/nonconformity influences
                                        the management of the patient

                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_2_b" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_2_b')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_2_b')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                <TableRow>
                                        <TableCell align="left">
                                        c. Follow up and review of actions to assess effectiveness
                                        <br /> 
                                        Note: Implemented corrective action does not imply effectiveness; therefore, the
                                        laboratory must monitor to ensure that the nonconformity has not recurred
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_10_2_c" control={control} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_10_2_c')}
                                                type="text"  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_10_2_c')}
                                                type="number"  
                                                />
                                        </TableCell>
                                </TableRow>


                                
                                <TableRow> 
                                    <TableCell > 
                                    <b>10.3 Records of Identification and Management of Nonconforming
                                    Work and Nonconformities</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Are there records of communication to the requester where
                                    nonconforming work or a nonconformity influences the management of the
                                    patient?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_10_3" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_10_3')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_10_3')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                   
                                <TableRow> 
                                    <TableCell > 
                                    <b>10.4 Resumption of Testing</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                        Is authorization for the resumption of testing documented (where testing
                                        has been halted)?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_10_4" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_10_4')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_10_4')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>10.5 Corrective Action</b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is corrective action performed and documented for nonconforming work or
                                    nonconformities?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_10_5" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_10_5')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_10_5')}
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

export default SliptaAuditSection10Form;