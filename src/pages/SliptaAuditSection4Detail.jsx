/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CardHeader from '@mui/material/CardHeader';

import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import MySelectInput from '../components/MySelectInput';
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
  };

  const Alert = styled(MuiAlert)(({ theme }) => ({
    width: '100%',
  }))


  const FloatingActionButton = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 1200,
  }));

export function SliptaAuditSection4Detail(){

    

    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const { slipta_lab_profileId,qID } = useParams();
    const navigate = useNavigate();
    const user = getUser();

    const { data, error } = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_4/${qID}/`, fetcher, {
        refreshInterval: 10000,
      });

      const { control, register, handleSubmit, setValue, formState: { errors } } = useForm({

        defaultValues: {

            auditor: user.id,
            lab_profile: slipta_lab_profileId,
  
        }
    });

    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleDelete = () => {
        axiosService
        .delete(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_4/${qID}/`)
        .then(() => {
            navigate(`/slipta_audit_section_4/${slipta_lab_profileId}/`);
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

      useEffect(() => {
        if (data) {
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              setValue(key, data[key]);
            }
          }

          if(data.attached == true){
            setIsReadOnly(true)
          }

        }
      }, [data, setValue])

   

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
            lab_profile: slipta_lab_profileId, 
        };
    
        axiosService
        .put(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_4/${qID}/`,form)
        .then(() => {
          setSnackbarOpen(true);
          setSnackbarMessage(`Questionarie Updated`);
          
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


        
            <Box sx={{ position: 'fixed', bottom: 16, left: 16 }}>
                    <Dialog open={open} onClose={handleClose}>
                        {/* <DialogTitle>{"Confirm Delete"}</DialogTitle> */}
                        <CardHeader
                            title="Confirm Delete"
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
                        <Typography variant="h8" sx={{ color: 'text.secondary' }}>
                            Are you sure you want to delete this item?
                        </Typography>
                       
                        </DialogContent>
                        <DialogActions sx={{ justifyContent: 'flex-end', backgroundColor: '#f5f5f5', borderTop: '1px solid #e0e0e0' }}>
                            <Button onClick={handleClose} color="primary">
                               <b>NO</b> 
                            </Button>
                            <Button onClick={handleDelete} color="error">
                                <b>YES</b>
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Box>

            {!isReadOnly && (

            <FloatingActionButton
            color="error" 
            onClick={handleClickOpen}

            >
            <DeleteIcon />
            </FloatingActionButton>
            )}

                <div >

                    <form id="audit-form" onSubmit={handleSubmit(onSubmit)} >

                    <TableContainer component={Paper} sx={{ padding: '10px' }}>
                        <Table style={tableStyle}>

                        <TableHead >

                            <TableRow> 
                                <TableCell > <b>SECTION 04: CUSTOMER FOCUS </b> </TableCell>
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
                                <b>4.1 Procedure and/or Process for Advisory Services </b>  
                                <br />

                                Has the laboratory defined a procedure and/or process that addresses,
                                but is not limited to, the following?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Advice on the choice of examinations;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_1_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Communication of advisory services to its users;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_1_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Advice on clinical indications and limitations of examination
                                    procedures;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_1_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Advise on the frequency of examinations;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_1_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Provision of individual clinical advice;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_1_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    f. Advice on interpretation of results;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_1_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_f')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                          
                            <TableRow>
                                    <TableCell align="left">
                                    g. Promotion of the effective utilization of laboratory services;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_1_g" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_g')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                                                      
                            <TableRow>
                                    <TableCell align="left">
                                    h. Consultation on scientific and logistic matters;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_1_h" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_h')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_h')}
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
                                        <MySelectInput name="y_P_n_na_4_1_i" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_1_i')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_1_i')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>
                            

                            <TableRow> 
                                <TableCell > 
                                <b> 4.2 Advice and Instruction by Qualified Personnel </b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Do laboratory personnel with appropriate professional qualifications
                                provide patients and users with advice and/or training regarding required
                                types of samples, choice of examinations, repeat frequency, and
                                interpretation of results?
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_4_2" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_4_2')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_4_2')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            <TableRow> 
                            <TableCell >
                                <b>4.3 Procedure and/or Process for Handling of Complaints and
                                Feedback </b>  
                                <br />

                                Has the laboratory defined a procedure and/or process that addresses,
                                but is not limited, the following?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Receipt and acknowledgment of complaints;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_3_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_3_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_3_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Investigation and action taken from complaints and feedback (where
                                        relevant);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_3_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_3_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_3_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Tracking and recording of complaints and feedback (where relevant);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_3_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_3_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_3_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Defining timeframes for closure and feedback to the complainant;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_3_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_3_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_3_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Monitoring the effectiveness of corrective actions taken on complaints
                                    and feedback to complainant.
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_3_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_3_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_3_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                              
                            <TableRow> 
                                <TableCell > 
                                <b> 4.4 Receipt and Resolution of Complaints </b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Does the laboratory implement a process for the receipt and resolution of
                                complaints? (Are there records of the original complaint and tracking and
                                feedback?)
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_4_4" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_4_4')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_4_4')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            
                              
                            <TableRow> 
                                <TableCell > 
                                <b> 4.5 Requirements Regarding Patients</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Has the laboratory established and implemented a process for treatment
                                of patients’ well-being, samples, or remains, with due care and respect?
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_4_5" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_4_5')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_4_5')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            
                        <TableRow> 
                            <TableCell >
                                <b>4.6 Procedure and/or Process for Service Agreements (including
                                    POCT) </b>  
                                <br />

                                Has the laboratory defined a procedure and/or process that addresses,
                                but is not limited to, the following?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Establishment of service agreements (requirements are specified);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_6_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_6_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_6_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Review and approval of service agreements (capability and adequate
                                        resources);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_6_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_6_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_6_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Management of walk-in patients (where applicable);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_6_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_6_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_6_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Communication of changes of the service agreement that affect
                                    examination results;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_6_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_6_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_6_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Communication to the requester of any work that has been referred;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_6_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_6_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_6_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    f. Defining specified responsibilities and authorities for POCT activities in
                                    the service agreements
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_6_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_6_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_6_f')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                        <TableRow> 
                            <TableCell >
                                <b>4.7 Implementation of the Procedure and/or Process for Service
                                Agreements (including POCT)</b>  
                                <br />

                                Has the laboratory implemented a procedure and/or process and have
                                records including but not limited to the following?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Establishment of service agreements (requirements are specified);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_7_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_7_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_7_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Review and approval of service agreements (capability and adequate
                                        resources);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_7_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_7_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_7_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Management of walk-in patients, (where applicable);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_7_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_7_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_7_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Communication of changes of the service agreement that affect
                                    examination results;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_7_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_7_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_7_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Communication to the requester of any work that has been referred;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_7_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_7_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_7_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    f. Definitions of specified responsibilities and authorities for POCT
                                    activities in the service agreements
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_4_7_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_4_7_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_4_7_f')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow> 
                                <TableCell > 
                                <b> 4.8 Laboratory Information for Patients and Users</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is laboratory information available for patients and laboratory users in the
                                language understood by the community? 
                                <br />
                                Note 1: Laboratory information may be in the form of Laboratory Handbook, brochure,
                                videos, website, etc.
                                <br />
                                Note 2: The laboratory should provide its clients with a handbook that outlines the
                                laboratory hours of operation, available tests, sample collection instructions,
                                packaging, and shipping directions, and expected turnaround times
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_4_8" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_4_8')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_4_8')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            <TableRow> 
                                <TableCell > 
                                <b> 4.9 Communication Policy on Delays in Service</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is timely-documented notification provided to patients and users when the
                                laboratory experiences delays or interruptions in testing (due to equipment
                                failure, stock outs, personnel levels, etc.) or finds it necessary to change
                                examination procedures and when testing resumes?
                                <br />
                                Note 1: There must be a policy for notifying patients or users when the laboratory
                                experiences delays or interruptions in testing
                                <br />
                                Note 2: There must be records of communication. Communication may be in the form
                                of telephonic messages, memos, emails, etc. There must be records of
                                communication when an examination is delayed to the requester and or clinical
                                personnel

                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_4_9" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_4_9')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_4_9')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            
                            <TableRow> 
                                <TableCell > 
                                <b> 4.10 Utilization of Customer Feedback</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Are there opportunities for laboratory patients, users and personnel to
                                provide information to aid the laboratory in improving its management
                                system, laboratory activities, and services to users?
                                <br />
                                Note 1: The laboratory should measure the satisfaction of patients, users, and
                                personnel regarding its services on an ongoing basis
                                <br />
                                Note 2: There must be records of feedback including actions taken.

                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_4_10" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_4_10')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_4_10')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                        </TableBody>

                        </Table>


                    </TableContainer>
                    <br />

                    <Grid item>

                    { !isReadOnly && (
                            <>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<SaveIcon />}

                                    style={{
                                        position: 'fixed',
                                        bottom: 16,
                                        right: 16,
                                        zIndex: 1500,
                                        // backgroundColor: '#fff',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                    }}
                                    >
                                    UPDATE
                                </Button>
                            </>
                        )}
                    </Grid>
                    <br />
                        
                    </form>

                   
            </div>
      
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={5000}
                onClose={onSnackbarClose}
                message={snackbarMessage}
                action={
                <Button color="inherit" onClick={onSnackbarClose}>
                    Close
                </Button>
                }
                sx={{
                    position: 'fixed',
                    // top: '50%',
                    // left: '80%',
                    // transform: 'translate(-50%, -50%)',
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
