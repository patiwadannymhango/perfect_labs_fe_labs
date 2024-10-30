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

export function SliptaAuditSection9Detail(){

    
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const { slipta_lab_profileId,qID } = useParams();
    const navigate = useNavigate();
    const user = getUser();

    const { data, error } = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_9/${qID}/`, fetcher, {
        refreshInterval: 10000,
      });

      const { control, register, handleSubmit, setValue, formState: { errors } } = useForm({

        defaultValues: {

            auditor: user.id,
            lab_profile: slipta_lab_profileId,

            y_P_n_na_9_1_a:'',
            comment_9_1_a:'',
            score_9_1_a:0,

            y_P_n_na_9_1_b:'',
            comment_9_1_b:'',
            score_9_1_b:0,

            y_P_n_na_9_1_c:'',
            comment_9_1_c:'',
            score_9_1_c:0,

            y_P_n_na_9_1_d:'',
            comment_9_1_d:'',
            score_9_1_d:0,

            y_P_n_na_9_1_e:'',
            comment_9_1_e:'',
            score_9_1_e:0,

            y_P_n_na_9_1_f:'',
            comment_9_1_f:'',
            score_9_1_f:0,

            y_P_n_na_9_1_g:'',
            comment_9_1_g:'',
            score_9_1_g:0,

            y_P_n_na_9_1_h:'',
            comment_9_1_h:'',
            score_9_1_h:0,

            y_P_n_na_9_1_i:'',
            comment_9_1_i:'',
            score_9_1_i:0,

            y_P_n_na_9_1_j:'',
            comment_9_1_j:'',
            score_9_1_j:0,

            y_P_n_na_9_2:'',
            comment_9_2:'',
            score_9_2:0,

            y_P_n_na_9_3:'',
            comment_9_3:'',
            score_9_3:0,

            y_P_n_na_9_4_a:'',
            comment_9_4_a:'',
            score_9_4_a:0,

            y_P_n_na_9_4_b:'',
            comment_9_4_b:'',
            score_9_4_b:0,

            y_P_n_na_9_4_c:'',
            comment_9_4_c:'',
            score_9_4_c:0,

            y_P_n_na_9_4_d:'',
            comment_9_4_d:'',
            score_9_4_d:0,

            y_P_n_na_9_4_e:'',
            comment_9_4_e:'',
            score_9_4_e:0,

            y_P_n_na_9_4_f:'',
            comment_9_4_f:'',
            score_9_4_f:0,

            y_P_n_na_9_4_g:'',
            comment_9_4_g:'',
            score_9_4_g:0,

            y_P_n_na_9_4_h:'',
            comment_9_4_h:'',
            score_9_4_h:0,

            y_P_n_na_9_4_i:'',
            comment_9_4_i:'',
            score_9_4_i:0,

            y_P_n_na_9_4_j:'',
            comment_9_4_j:'',
            score_9_4_j:0,

            y_P_n_na_9_4_k:'',
            comment_9_4_k:'',
            score_9_4_k:0,

            y_P_n_na_9_4_l:'',
            comment_9_4_l:'',
            score_9_4_l:0,

            y_P_n_na_9_4_m:'',
            comment_9_4_m:'',
            score_9_4_m:0,

            y_P_n_na_9_4_n:'',
            comment_9_4_n:'',
            score_9_4_n:0,

            y_P_n_na_9_4_o:'',
            comment_9_4_o:'',
            score_9_4_o:0,

            y_P_n_na_9_4_p:'',
            comment_9_4_p:'',
            score_9_4_p:0,

            y_P_n_na_9_4_q:'',
            comment_9_4_q:'',
            score_9_4_q:0,

            y_P_n_na_9_4_r:'',
            comment_9_4_r:'',
            score_9_4_r:0,

            y_P_n_na_9_5:'',
            comment_9_5:'',
            score_9_5:0,

            
            y_P_n_na_9_6_a:'',
            comment_9_6_a:'',
            score_9_6_a:0,

            y_P_n_na_9_6_b:'',
            comment_9_6_b:'',
            score_9_6_b:0,

            y_P_n_na_9_6_c:'',
            comment_9_6_c:'',
            score_9_6_c:0,

            y_P_n_na_9_6_d:'',
            comment_9_6_d:'',
            score_9_6_d:0,

            y_P_n_na_9_6_e:'',
            comment_9_6_e:'',
            score_9_6_e:0,

            y_P_n_na_9_6_f:'',
            comment_9_6_f:'',
            score_9_6_f:0,

            y_P_n_na_9_6_g:'',
            comment_9_6_g:'',
            score_9_6_g:0,

            y_P_n_na_9_6_h:'',
            comment_9_6_h:'',
            score_9_6_h:0,

            y_P_n_na_9_7:'',
            comment_9_7:'',
            score_9_7:0,

                        
            y_P_n_na_9_8_a:'',
            comment_9_8_a:'',
            score_9_8_a:0,

            y_P_n_na_9_8_b:'',
            comment_9_8_b:'',
            score_9_8_b:0,

            y_P_n_na_9_8_c:'',
            comment_9_8_c:'',
            score_9_8_c:0,

            y_P_n_na_9_8_d:'',
            comment_9_8_d:'',
            score_9_8_d:0,

            y_P_n_na_9_9_a:'',
            comment_9_9_a:'',
            score_9_9_a:0,

            y_P_n_na_9_9_b:'',
            comment_9_9_b:'',
            score_9_9_b:0,

            y_P_n_na_9_9_c:'',
            comment_9_9_c:'',
            score_9_9_c:0,

                                 
            y_P_n_na_9_10_a:'',
            comment_9_10_a:'',
            score_9_10_a:0,

            y_P_n_na_9_10_b:'',
            comment_9_10_b:'',
            score_9_10_b:0,

            y_P_n_na_9_10_c:'',
            comment_9_10_c:'',
            score_9_10_c:0,

            y_P_n_na_9_10_d:'',
            comment_9_10_d:'',
            score_9_10_d:0,

 
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
        .delete(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_9/${qID}/`)
        .then(() => {
            navigate(`/slipta_audit_section_9/${slipta_lab_profileId}/`);
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
        .put(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_9/${qID}/`,form)
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
                            <TableCell><b>SECTION 09: INFORMATION MANAGEMENT</b> </TableCell>
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
                            <b>9.1 Procedure and/or Process for Reporting and Release of Results</b>  
                            <br />
                            Has the laboratory defined a procedure and/or process that addresses,
                            but is not limited to, the following?

                        </TableCell> 
                    </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                a. Defining report format;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_a" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_a')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_a')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                b. Medium (electronic or paper based);
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_b" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_b')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_b')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        
                        <TableRow>
                                <TableCell align="left">
                                c. Reviewing of patient results;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_c" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_c')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_c')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                
                        <TableRow>
                                <TableCell align="left">
                                d. Communication of alert, urgent and critical patient results;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_d" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_d')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_d')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                e. Release of results and reports by authorized persons;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_e" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_e')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_e')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                f. Amendments of results and reports;
                                <br /> 
                                </TableCell>
                                
                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_f" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_f')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_f')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                    
                        <TableRow>
                                <TableCell align="left">
                                g. Issue of amended reports;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_g" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_g')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_g')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                
                        <TableRow>
                                <TableCell align="left">
                                h. Reporting of results performed by a referral laboratory;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_h" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_h')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_h')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                    
                        <TableRow>
                                <TableCell align="left">
                                i. Identification of the referral laboratory;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_i" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_i')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_i')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                        
                        <TableRow>
                                <TableCell align="left">
                                j. Retention and maintenance of patient results
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_1_j" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_1_j')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_1_j')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                                
                        <TableRow> 
                            <TableCell > 
                            <b>9.2 Test Result Reporting System</b>   
                            </TableCell> 
                        </TableRow>
                        
                        <TableRow>
                            <TableCell style={cellStyle}>
                            Are test results legible, technically verified, and confirmed against patient
                            identity?
                            <br />
                            Note: Paper-based reports must be written in ink and have documentation of review
                            and verification. Evidence of documentation of verification must be available
                            </TableCell>

                            <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_2" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_2')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_2')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                                    
                        <TableRow> 
                            <TableCell > 
                            <b>9.3 Testing Personnel</b>   
                            </TableCell> 
                        </TableRow>
                        
                        <TableRow>
                            <TableCell style={cellStyle}>
                            Is the person authorizing the release of the result identified on the result
                            report or other records (paper- or electronic-based)?
                            </TableCell>

                            <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_3" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_3')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_3')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                    <TableRow> 
                        <TableCell >
                            <b>9.4 Requirements for Reports</b>  
                            <br />
                            Does the laboratory report contain at least the following:

                        </TableCell> 
                    </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                a. Clear, unambiguous identification of the examinations performed
                                (including POCT reports);
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_a" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_a')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_a')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                b. Identification of the laboratory issuing the report;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_b" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_b')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_b')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        
                        <TableRow>
                                <TableCell align="left">
                                c. Identification of all examinations performed by a referral laboratory or
                                part of a research or development program;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_c" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_c')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_c')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                
                        <TableRow>
                                <TableCell align="left">
                                d. Patient identification, location, date of primary sample collection (and
                                time, relevant to patient care), date of issue on every page of the
                                report;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_d" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_d')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_d')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                e. Name of the requester (user);
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_e" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_e')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_e')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                f. Identification of examination method used, where relevant, and
                                including, where possible and necessary, harmonized (electronic)
                                identification of the measurand and measurement principle;
                                <br /> 
                                </TableCell>
                                
                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_f" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_f')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_f')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                    
                        <TableRow>
                                <TableCell align="left">
                                g. Type of primary sample and any specific information necessary to
                                describe the sample
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_g" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_g')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_g')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                
                        <TableRow>
                                <TableCell align="left">
                                h. Provisional reports;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_h" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_h')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_h')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                    
                        <TableRow>
                                <TableCell align="left">
                                i. Reporting of result in SI units, when applicable;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_i" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_i')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_i')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                        
                        <TableRow>
                                <TableCell align="left">
                                j. Biological reference intervals, clinical decision limits, likelihood ratios;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_j" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_j')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_j')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                        
                        <TableRow>
                                <TableCell align="left">
                                k. Presence of space for interpretation or comments of results, when
                                applicable;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_k" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_k')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_k')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                                
                        <TableRow>
                                <TableCell align="left">
                                l. Indication of critical results;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_l" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_l')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_l')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                                    
                        <TableRow>
                                <TableCell align="left">
                                m. Identification of the person(s) reviewing and authorizing the release
                                of the report;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_m" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_m')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_m')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                                    
                        <TableRow>
                                <TableCell align="left">
                                n. Date and time of the report;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_n" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_n')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_n')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                                            
                        <TableRow>
                                <TableCell align="left">
                                o. Page number to total number of pages (e.g., ‘Page 1 of 5’);
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_o" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_o')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_o')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                p. Clear identification of revisions, including reference to the date and
                                patient identity on the original report, and user notification of the
                                revision, when issuing revised reports;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_p" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_p')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_p')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                q. Presence on revised record of time and date of change and name of
                                the person responsible for the change;
                                <br />
                                Note: When the reporting system cannot capture amendments, changes or alterations,
                                a record of such shall be kept
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_q" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_q')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_q')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                r. Presence of original report entry in the record
                                <br />
                                Note: Applicable to paper- and electronic-based systems
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_4_r" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_4_r')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_4_r')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                                        
                        <TableRow> 
                            <TableCell > 
                            <b>9.5 Analytic System / Method Tracing</b>   
                            </TableCell> 
                        </TableRow>
                        
                        <TableRow>
                            <TableCell style={cellStyle}>
                            Are test results traceable to the equipment used for testing when more
                            than one instrument is in use for the same test?
                            <br />
                            Note: There must be traceability of sample results, including proficiency testing
                            results, to a specific analytical system or method
                            </TableCell>

                            <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_5" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_5')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_5')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                        
                    <TableRow> 
                        <TableCell >
                            <b>9.6 Procedure and/or Process for Laboratory Information System
                            (LIS) (computerised or non-computerised)</b>  
                            <br />
                            Has the laboratory defined a procedure and/or process that addresses,
                            but is not limited to, the following?
                            <br />
                            Note: ‘Information systems’ includes the management of data and information
                            contained in both computer and non-computerized systems. Some of the
                            requirements may be more applicable to computer systems than to non-computerized
                            systems. Computerized systems can include those integral to the functioning of
                            laboratory equipment and stand-alone systems using generic software, such as word
                            processing, spreadsheet and database applications that generate, collate, report and
                            archive patient information and reports

                        </TableCell> 
                    </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                a. Verification of the LIS on installation and after every upgrade;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_6_a" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_6_a')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_6_a')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                b. Definition of authorities and responsibilities for management and use
                                of the LIS;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_6_b" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_6_b')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_6_b')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        
                        <TableRow>
                                <TableCell align="left">
                                c. Patient confidentiality;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_6_c" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_6_c')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_6_c')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                
                        <TableRow>
                                <TableCell align="left">
                                d. Maintenance and troubleshooting of the LIS;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_6_d" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_6_d')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_6_d')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                e. Back-up and storage of non-computerized system;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_6_e" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_6_e')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_6_e')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                f. Ongoing checks of calculations used to generate results;
                                <br /> 
                                </TableCell>
                                
                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_6_f" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_6_f')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_6_f')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                    
                        <TableRow>
                                <TableCell align="left">
                                g. Data transfers checks (interface between testing systems and LIS)
                                for protection and security of the system against external and internal
                                access and tampering;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_6_g" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_6_g')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_6_g')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                
                        <TableRow>
                                <TableCell align="left">
                                h. Automated selection, review, release and reporting of results
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_6_h" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_6_h')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_6_h')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                                            
                        <TableRow> 
                            <TableCell > 
                            <b>9.7 Archived Data Laboratory and Storage</b>   
                            </TableCell> 
                        </TableRow>
                        
                        <TableRow>
                            <TableCell style={cellStyle}>
                            Are archived results (paper or data-storage media) properly labelled and
                            stored in a secure location accessible only to authorized personnel?
                            <br />
                            Note: All patient data, paper, and external storage devices must be retained as per the
                            laboratory’s retention policy and should be stored in a safe and access-controlled
                            environment
                            </TableCell>

                            <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_7" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_7')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_7')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                                                
                    <TableRow> 
                        <TableCell >
                            <b>9.8 Authorities and Responsibilities for Information Management</b>  
                            <br />
                            Has the laboratory designated authorities and responsibilities for the
                            management and use of the LIS, both paper- and electronic-based,
                            including access, maintenance and modifications that may affect patient
                            care?
                            <br />
                            Note 1: ‘Information systems’ includes the management of data and information
                            contained in both computer and non-computerized systems. Some of the
                            requirements may be more applicable to computer systems than to non-computerized
                            systems. Computerized systems can include those integral to the functioning of
                            laboratory equipment and standalone systems using generic software, such as word
                            processing, spreadsheet and database applications that generate, collate, report and
                            archive patient information and reports.”
                            <br />
                            Note 2: Authorities and responsibilities may be defined in the authority matrix, job
                            description, etc
                            <br />
                            Is the following in place and implemented?

                        </TableCell> 
                    </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                a. Controlled access to patient data and information;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_8_a" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_8_a')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_8_a')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                b. Controlled access to enter patient data and examination results;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_8_b" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_8_b')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_8_b')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        
                        <TableRow>
                                <TableCell align="left">
                                c. Controlled access to modifying patient data or examination
                                results;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_8_c" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_8_c')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_8_c')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                                
                        <TableRow>
                                <TableCell align="left">
                                d. Controlled access to the release of examination results and reports
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_8_d" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_8_d')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_8_d')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                                                                
                    <TableRow> 
                        <TableCell >
                            <b>9.9 Verification of Electronic Laboratory Information System</b>  
                            <br />
                            Note: The laboratory must perform verification of the system after upgrades and to
                            ensure previously stored patient results have not been affected
                            
                        </TableCell> 
                    </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                a. Has the system been validated and or verified before implementation
                                and version upgrades?
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_9_a" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_9_a')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_9_a')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                b. Are ongoing system checks available for correct transmission,
                                calculation and storage of results and records?
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_9_b" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_9_b')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_9_b')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>


                        <TableRow>
                                <TableCell align="left">
                                c. Are there records to check the functioning of the interface of the LIS
                                to other systems (e.g., analyser’s, hospital information system)?
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_9_c" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_9_c')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_9_c')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        
                                                                
                    <TableRow> 
                        <TableCell >
                            <b>9.10 Records of Maintenance of the Laboratory Information System</b>  
                            <br />
                            Note 1: If the LIS is maintained offsite, records of maintenance must be readily
                            available. The laboratory should include the LIS as part of their internal audit.
                            
                        </TableCell> 
                    </TableRow>

                        <TableRow>
                                <TableCell align="left">
                                a. Records of regular service by authorized and trained personnel;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_10_a" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_10_a')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_10_a')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                b. Records of system failures with documented appropriate root cause
                                analysis, corrective actions and verification;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_10_b" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_10_b')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_10_b')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>


                        <TableRow>
                                <TableCell align="left">
                                c. Records that the system is operated in an environment
                                recommended by the supplier for optimal functioning;
                                <br /> 
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_10_c" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_10_c')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_10_c')}
                                        type="number"  
                                        />
                                </TableCell>
                        </TableRow>

                        
                        <TableRow>
                                <TableCell align="left">
                                d. Evidence that the laboratory has implemented a process to ensure
                                the protection and security of the LIS
                                <br /> 
                                Note 1: If the LIS is maintained offsite, records of maintenance must be readily
                                available. The laboratory should include the LIS as part of their internal audit
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_9_10_d" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_9_10_d')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_9_10_d')}
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
