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

export function SliptaAuditSection3Detail(){

    

    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const { slipta_lab_profileId,qID } = useParams();
    const navigate = useNavigate();
    const user = getUser();

    const { data, error } = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_3/${qID}/`, fetcher, {
        refreshInterval: 10000,
      });

      const { control, register, handleSubmit, setValue, formState: { errors } } = useForm({

        defaultValues: {

            auditor: user.id,
            lab_profile: slipta_lab_profileId,

            y_P_n_na_3_1_a: '',
            comment_3_1_a: '',
            score_3_1_a: 0,
            y_P_n_na_3_1_b: '',
            comment_3_1_b: '',
            score_3_1_b: 0,
            y_P_n_na_3_1_c: '',
            comment_3_1_c: '',
            score_3_1_c: 0,
            y_P_n_na_3_1_d: '',
            comment_3_1_d: '',
            score_3_1_d: 0,
            y_P_n_na_3_1_e: '',
            comment_3_1_e: '',
            score_3_1_e: 0,
            y_P_n_na_3_2: '',
            comment_3_2: '',
            score_3_2: 0,
            y_P_n_na_3_3: '',
            comment_3_3: '',
            score_3_3: 0,
            y_P_n_na_3_4_a: '',
            comment_3_4_a: '',
            score_3_4_a: 0,
            y_P_n_na_3_4_b: '',
            comment_3_4_b: '',
            score_3_4_b: 0,
            y_P_n_na_3_4_c: '',
            comment_3_4_c: '',
            score_3_4_c: 0,
            y_P_n_na_3_4_d: '',
            comment_3_4_d: '',
            score_3_4_d: 0,
            y_P_n_na_3_4_e: '',
            comment_3_4_e: '',
            score_3_4_e: 0,
            y_P_n_na_3_4_f: '',
            comment_3_4_f: '',
            score_3_4_f: 0,
            y_P_n_na_3_4_g: '',
            comment_3_4_g: '',
            score_3_4_g: 0,
            y_P_n_na_3_4_h: '',
            comment_3_4_h: '',
            score_3_4_h: 0,
            y_P_n_na_3_4_i: '',
            comment_3_4_i: '',
            score_3_4_i: 0,
            y_P_n_na_3_4_j: '',
            comment_3_4_j: '',
            score_3_4_j: 0,
            y_P_n_na_3_4_k: '',
            comment_3_4_k: '',
            score_3_4_k: 0,
            y_P_n_na_3_4_l: '',
            comment_3_4_l: '',
            score_3_4_l: 0,
            y_P_n_na_3_4_m: '',
            comment_3_4_m: '',
            score_3_4_m: 0,
            y_P_n_na_3_5_a: '',
            comment_3_5_a: '',
            score_3_5_a: 0,
            y_P_n_na_3_5_b: '',
            comment_3_5_b: '',
            score_3_5_b: 0,
            y_P_n_na_3_6_a: '',
            comment_3_6_a: '',
            score_3_6_a: 0,
            y_P_n_na_3_6_b: '',
            comment_3_6_b: '',
            score_3_6_b: 0,
            y_P_n_na_3_6_c: '',
            comment_3_6_c: '',
            score_3_6_c: 0,
            y_P_n_na_3_6_d: '',
            comment_3_6_d: '',
            score_3_6_d: 0,
            y_P_n_na_3_7_a: '',
            comment_3_7_a: '',
            score_3_7_a: 0,
            y_P_n_na_3_7_b: '',
            comment_3_7_b: '',
            score_3_7_b: 0,
            y_P_n_na_3_7_c: '',
            comment_3_7_c: '',
            score_3_7_c: 0,
            y_P_n_na_3_8_a: '',
            comment_3_8_a: '',
            score_3_8_a: 0,
            y_P_n_na_3_8_b: '',
            comment_3_8_b: '',
            score_3_8_b: 0,
            y_P_n_na_3_8_c: '',
            comment_3_8_c: '',
            score_3_8_c: 0,
            y_P_n_na_3_8_d: '',
            comment_3_8_d: '',
            score_3_8_d: 0,
            y_P_n_na_3_8_e: '',
            comment_3_8_e: '',
            score_3_8_e: 0,
            y_P_n_na_3_9_a: '',
            comment_3_9_a: '',
            score_3_9_a: 0,
            y_P_n_na_3_9_b: '',
            comment_3_9_b: '',
            score_3_9_b: 0,
            y_P_n_na_3_9_c: '',
            comment_3_9_c: '',
            score_3_9_c: 0,
            y_P_n_na_3_9_d: '',
            comment_3_9_d: '',
            score_3_9_d: 0,
            y_P_n_na_3_9_e: '',
            comment_3_9_e: '',
            score_3_9_e: 0,
            y_P_n_na_3_9_f: '',
            comment_3_9_f: '',
            score_3_9_f: 0,
            y_P_n_na_3_9_g: '',
            comment_3_9_g: '',
            score_3_9_g: 0,
            y_P_n_na_3_9_h: '',
            comment_3_9_h: '',
            score_3_9_h: 0,
            y_P_n_na_3_9_i: '',
            comment_3_9_i: '',
            score_3_9_i: 0,
            y_P_n_na_3_10_a: '',
            comment_3_10_a: '',
            score_3_10_a: 0,
            y_P_n_na_3_10_b: '',
            comment_3_10_b: '',
            score_3_10_b: 0,
            y_P_n_na_3_10_c: '',
            comment_3_10_c: '',
            score_3_10_c: 0,
            y_P_n_na_3_10_d: '',
            comment_3_10_d: '',
            score_3_10_d: 0,
            y_P_n_na_3_10_e: '',
            comment_3_10_e: '',
            score_3_10_e: 0,
            y_P_n_na_3_10_f: '',
            comment_3_10_f: '',
            score_3_10_f: 0,
            y_P_n_na_3_11_a: '',
            comment_3_11_a: '',
            score_3_11_a: 0,
            y_P_n_na_3_11_b: '',
            comment_3_11_b: '',
            score_3_11_b: 0,
            y_P_n_na_3_11_c: '',
            comment_3_11_c: '',
            score_3_11_c: 0,
            y_P_n_na_3_12_a: '',
            comment_3_12_a: '',
            score_3_12_a: 0,
            y_P_n_na_3_12_b: '',
            comment_3_12_b: '',
            score_3_12_b: 0,
            y_P_n_na_3_12_c: '',
            comment_3_12_c: '',
            score_3_12_c: 0,
            y_P_n_na_3_13_a: '',
            comment_3_13_a: '',
            score_3_13_a: 0,
            y_P_n_na_3_13_b: '',
            comment_3_13_b: '',
            score_3_13_b: 0,
            y_P_n_na_3_13_c: '',
            comment_3_13_c: '',
            score_3_13_c: 0,
            y_P_n_na_3_13_d: '',
            comment_3_13_d: '',
            score_3_13_d: 0,
            y_P_n_na_3_13_e: '',
            comment_3_13_e: '',
            score_3_13_e: 0,
            y_P_n_na_3_13_f: '',
            comment_3_13_f: '',
            score_3_13_f: 0,
            y_P_n_na_3_13_g: '',
            comment_3_13_g: '',
            score_3_13_g: 0,
            y_P_n_na_3_13_h: '',
            comment_3_13_h: '',
            score_3_13_h: 0,
            y_P_n_na_3_13_i: '',
            comment_3_13_i: '',
            score_3_13_i: 0,
            y_P_n_na_3_13_j: '',
            comment_3_13_j: '',
            score_3_13_j: 0,
            y_P_n_na_3_14_a: '',
            comment_3_14_a: '',
            score_3_14_a: 0,
            y_P_n_na_3_14_b: '',
            comment_3_14_b: '',
            score_3_14_b: 0,
            y_P_n_na_3_14_c: '',
            comment_3_14_c: '',
            score_3_14_c: 0,
            y_P_n_na_3_14_d: '',
            comment_3_14_d: '',
            score_3_14_d: 0,
            y_P_n_na_3_14_e: '',
            comment_3_14_e: '',
            score_3_14_e: 0,
            y_P_n_na_3_14_f: '',
            comment_3_14_f: '',
            score_3_14_f: 0,
           
            
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
        .delete(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_3/${qID}/`)
        .then(() => {
            navigate(`/slipta_audit_section_3/${slipta_lab_profileId}/`);
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
        .put(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_3/${qID}/`,form)
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

                    <Table style={tableStyle} >
                            <TableHead >
                                <TableRow> <TableCell > <b>SECTION 03: PERSONNEL MANAGEMENT </b>  </TableCell></TableRow>
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
                                     <b>3.1 Procedure and/or Process for Personnel Management </b>  <br />
                                     Has the laboratory defined a procedure and/or process that addresses,
                                     but is not limited to, the following?

                                </TableCell> 
                            </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    a. Definition of the structure of the organization (organizational plan)
                                    based on the needs of the laboratory activities;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_1_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_1_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_1_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    b. Definition of job profiles and job descriptions for all laboratory
                                    positions;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_1_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_1_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_1_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    c. Selection and recruitment of appropriately qualified personnel;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_1_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_1_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_1_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    d. Orientation of newly recruited and appointed personnel;
                                    </TableCell>
                                    
                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_1_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_1_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_1_d')}
                                            type="number"  
                                            />
                                    </TableCell>


                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    e. Establishment and maintenance of personnel records.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_1_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_1_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_1_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                
                                <TableRow> 
                                    <TableCell > 
                                    <b> 3.2 Duty Roster and Daily Routine </b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Does the laboratory have a duty roster that covers normal hours and after
                                    hours? 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_2" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_2')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_2')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b> 3.3 Organizational Chart and External/Internal Reporting Systems </b>   
                                    </TableCell> 
                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Is an organizational chart available for indicating the relationship between
                                    the laboratory and its parent organization? 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_3" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_3')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_3')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>3.4 Laboratory Management</b> <br />  
                                    Is the laboratory directed by a person(s) (however named) with specified
                                    qualifications, authority, competency and delegated responsibility to
                                    perform the following:
                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Provide effective leadership, budgeting and planning;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Communicate with stakeholders;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_b')}
                                            type="number"  
                                            />
                                    </TableCell>


                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Ensure adequate competent personnel;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Ensure the implementation of the quality management system;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Select and monitor laboratory supplies;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    f. Select and monitor referral laboratories;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_f')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    g. Ensure a safe laboratory environment;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_g" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_g')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    h. Provide advisory services;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_h" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_h')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_h')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    i. Provide professional development programs for laboratory personnel;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_i" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_i')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_i')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    j. Address complaints, requests, or suggestions from personnel and or
                                    laboratory users;               
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_j" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_j')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_j')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    k. Ensure the implementation and application of risk assessment
                                    program;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_k" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_k')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_k')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    l. Design and implement a contingency plan based on the risk
                                    assessment program;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_l" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_l')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_l')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    m. Ensure management and operations of POCT activities.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_4_m" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_4_m')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_4_m')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>3.5 Compliance with Laboratory Management System</b> <br />  

                                    Is there a person or persons who, irrespective of other responsibilities,
                                    have the authority and resources needed to carry out their duties,
                                    including

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Implementation, maintenance, and improvement of the management
                                       system;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_5_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_5_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_5_a')}
                                            type="number"  
                                            />
                                    </TableCell>


                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Identification of deviations from the management system or from the
                                    procedures for performing laboratory activities.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_5_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_5_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_5_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow> 
                                    <TableCell > 
                                    <b>3.6 Procedure and/or Process for Authorization</b> <br />  
                                    Has the laboratory defined a procedure and/or process that addresses,
                                    but is not limited to, the following?

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. List of activities that require authorization;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_6_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_6_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_6_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Defined criteria for authorizing persons for specific laboratory
                                    activities;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_6_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_6_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_6_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Documented authorization for the various activities;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_6_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_6_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_6_c')}
                                            type="number"  
                                            />
                                    </TableCell>


                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Appointed deputies for the key positions where appropriate.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_6_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_6_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_6_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b> 3.7 Authorization </b> <br />  
                                    Are personnel authorized to perform specific laboratory activities
                                    including, but not limited to, the following:

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Selection, development, modification, validation, and verification of
                                    methods;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_7_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_7_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_7_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Review, release, and reporting of results;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_7_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_7_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_7_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Use of laboratory information systems, particularly accessing patient
                                    data and information, entering patient data and examination results,
                                    and changing patient data or examination results.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_7_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_7_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_7_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow> 
                                    <TableCell > 
                                    <b>3.8 Procedure and/or Process for Personnel Training </b> <br />  
                                    Has the laboratory defined a procedure and/or process that addresses,
                                    but is not limited to, the following?

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Identification of training needs;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_8_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_8_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_8_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Establishment of training program (including initial and refresher
                                        training);
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_8_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_8_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_8_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Provision of a continuous education program;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_8_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_8_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_8_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Recording of training;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_8_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_8_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_8_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Evaluation of the effectiveness of the training program.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_8_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_8_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_8_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> 
                                    <TableCell > 
                                    <b>3.9 Laboratory Personnel Training, Continuing Education and
                                    Professional Development </b> <br />  

                                    Is there a program for training, continuing education and professional
                                    development including, but not limited to, the following:

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Laboratory management system;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Induction to the organization;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Assigned work processes, procedures, and tasks;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Applicable laboratory information system;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Health and safety, including the prevention or containment of the
                                    effects of adverse incidents;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    f. Laboratory ethics, impartiality and confidentiality of patient
                                    information;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_f')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    g. Supervision of persons undergoing training
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_g" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_g')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    h. Continuous education (advancement in laboratory practice, clinical
                                        diagnostics, surveillance, etc.);
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_h" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_h')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_h')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    i. Review of effectiveness of the training program
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_9_i" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_9_i')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_9_i')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                
                                <TableRow> 
                                    <TableCell > 
                                    <b>3.10 Procedure and/or Process for Competency Assessment </b> <br />  

                                    Has the laboratory defined a procedure and/or a process that addresses,
                                    but is not limited to, the following?

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Defining the methods of performing competency assessment;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_10_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_10_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_10_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Defining the competency requirements, criteria and frequency for
                                    each laboratory activity or function (managerial or technical tasks);
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_10_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_10_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_10_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Assessment of ongoing competency;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_10_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_10_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_10_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Providing feedback (verbal, written, etc.) to persons assessed;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_10_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_10_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_10_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Scheduling retraining based on assessment outcomes;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_10_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_10_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_10_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    f. Retention of records of competency assessments and outcomes
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_10_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_10_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_10_f')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                
                                <TableRow> 
                                    <TableCell > 
                                    <b>3.11 Implementation of Procedure and/or Process of Personnel
                                    Competency </b> <br />  

                                    Does the laboratory assess the competency of its personnel according to
                                    its defined criteria for all relevant activities including the following

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Records that indicate which skills were assessed, how those skills
                                    were measured, and who performed the assessment;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_11_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_11_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_11_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Competency assessments performed according to defined criteria for
                                    new hires and existing personnel;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_11_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_11_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_11_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Retraining and re-assessment where needed
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_11_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_11_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_11_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                
                                
                                <TableRow> 
                                    <TableCell > 
                                    <b>3.12 Procedure and/or Process for Review of Personnel
                                    Performance </b> <br />  

                                    Has the laboratory defined a procedure and/or process that addresses,
                                    but is not limited to, the following?

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Planning and performing personnel performance appraisals;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_12_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_12_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_12_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Establishing frequency of monitoring and reviewing of personnel
                                    performance outcome;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_12_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_12_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_12_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Keeping records of personnel performance
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_12_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_12_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_12_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                
                                <TableRow> 
                                    <TableCell > 
                                    <b>3.13 Personnel Meetings </b> <br />  

                                    Are personnel meetings held regularly and do they address the following
                                    meeting items?

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Follow-up of action items from previous personnel meetings;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Systemic and/or recurrent problems and issues addressed, including
                                    actions to prevent recurrence;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Complaints;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Communication on reviewed/revised/redundant SOPs and changes
                                    to the laboratory management system;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Review of results from prior to corrective actions;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    f. Discussion and evaluation of improvement topics/projects;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_f')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    g. Feedback given by personnel that have attended hospital meetings,
                                    clinical rounds, external meetings, training, conferences, workshops,
                                    etc.;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_g" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_g')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    h. Provide advisory and/or interpretation of laboratory results and
                                    updates on laboratory attendance at meetings with clinicians (use of
                                    laboratory services);
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_h" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_h')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_h')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    i. Recording, monitoring and follow-up of meeting actions;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_i" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_i')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_i')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    j. Importance of meeting, needs and requirements of users and
                                    management system (ISO15189:2022)
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_13_j" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_13_j')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_13_j')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                                                
                                <TableRow> 
                                    <TableCell > 
                                    <b>3.14 Personnel Records </b> <br />  

                                    Are records of personnel maintained (hardcopy or electronic copy) and do
                                    they include the following?

                                    </TableCell> 
                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    a. Educational and professional qualifications;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_14_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_14_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_14_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    b. Determination of the competency requirements specified in Section 3
                                    of this checklist;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_14_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_14_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_14_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    c. Job descriptions in relation to the designated position;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_14_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_14_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_14_c')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    d. Training and re-training;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_14_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_14_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_14_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    e. Authorization of personnel;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_14_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_14_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_14_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    f. Monitoring of competency of personnel.
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_3_14_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_3_14_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_3_14_f')}
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
