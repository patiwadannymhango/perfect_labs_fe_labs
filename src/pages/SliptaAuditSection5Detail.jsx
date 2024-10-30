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

export function SliptaAuditSection5Detail(){

    
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const { slipta_lab_profileId,qID } = useParams();
    const navigate = useNavigate();
    const user = getUser();

    const { data, error } = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_5/${qID}/`, fetcher, {
        refreshInterval: 10000,
      });

      const { control, register, handleSubmit, setValue, formState: { errors } } = useForm({

        defaultValues: {

            auditor: user.id,
            lab_profile: slipta_lab_profileId,
            
            y_P_n_na_5_1_a:'',
            comment_5_1_a:'',
            score_5_1_a:0,

            y_P_n_na_5_1_b:'',
            comment_5_1_b:'',
            score_5_1_b:0,

            y_P_n_na_5_1_c:'',
            comment_5_1_c:'',
            score_5_1_c:0,

            y_P_n_na_5_1_d:'',
            comment_5_1_d:'',
            score_5_1_d:0,

            y_P_n_na_5_1_e:'',
            comment_5_1_e:'',
            score_5_1_e:0,

            y_P_n_na_5_1_f:'',
            comment_5_1_f:'',
            score_5_1_f:0,

            y_P_n_na_5_1_g:'',
            comment_5_1_g:'',
            score_5_1_g:0,

            y_P_n_na_5_1_h:'',
            comment_5_1_h:'',
            score_5_1_h:0,

            y_P_n_na_5_1_i:'',
            comment_5_1_i:'',
            score_5_1_i:0,

            y_P_n_na_5_1_j:'',
            comment_5_1_j:'',
            score_5_1_j:0,

            y_P_n_na_5_1_k:'',
            comment_5_1_k:'',
            score_5_1_k:0,

            y_P_n_na_5_1_l:'',
            comment_5_1_l:'',
            score_5_1_l:0,
                  
            y_P_n_na_5_2:'',
            comment_5_2:'',
            score_5_2:0,
                  
            y_P_n_na_5_3:'',
            comment_5_3:'',
            score_5_3:0,
                  
            y_P_n_na_5_4:'',
            comment_5_4:'',
            score_5_4:0,
                  
            y_P_n_na_5_5_a:'',
            comment_5_5_a:'',
            score_5_5_a:0,
                     
            y_P_n_na_5_5_b:'',
            comment_5_5_b:'',
            score_5_5_b:0,
                     
            y_P_n_na_5_5_c:'',
            comment_5_5_c:'',
            score_5_5_c:0,
                     
            y_P_n_na_5_6_a:'',
            comment_5_6_a:'',
            score_5_6_a:0,
        
            y_P_n_na_5_6_b:'',
            comment_5_6_b:'',
            score_5_6_b:0,

            y_P_n_na_5_6_c:'',
            comment_5_6_c:'',
            score_5_6_c:0,
        
            y_P_n_na_5_6_d:'',
            comment_5_6_d:'',
            score_5_6_d:0,

            y_P_n_na_5_6_e:'',
            comment_5_6_e:'',
            score_5_6_e:0,

            y_P_n_na_5_6_f:'',
            comment_5_6_f:'',
            score_5_6_f:0,

            y_P_n_na_5_7_a:'',
            comment_5_7_a:'',
            score_5_7_a:0,
        
            y_P_n_na_5_7_b:'',
            comment_5_7_b:'',
            score_5_7_b:0,
        
            y_P_n_na_5_7_c:'',
            comment_5_7_c:'',
            score_5_7_c:0,
        
            y_P_n_na_5_7_d:'',
            comment_5_7_d:'',
            score_5_7_d:0,
        
            y_P_n_na_5_7_e:'',
            comment_5_7_e:'',
            score_5_7_e:0,
        
            y_P_n_na_5_7_f:'',
            comment_5_7_f:'',
            score_5_7_f:0,
        
            y_P_n_na_5_7_g:'',
            comment_5_7_g:'',
            score_5_7_g:0,
        
            y_P_n_na_5_7_i:'',
            comment_5_7_i:'',
            score_5_7_i:0,
        
            y_P_n_na_5_7_j:'',
            comment_5_7_j:'',
            score_5_7_j:0,

            y_P_n_na_5_7_k:'',
            comment_5_7_k:'',
            score_5_7_k:0,
        
            y_P_n_na_5_7_l:'',
            comment_5_7_l:'',
            score_5_7_l:0,
        
            y_P_n_na_5_7_a:'',
            comment_5_7_a:'',
            score_5_7_a:0,
        
            y_P_n_na_5_8:'',
            comment_5_8:'',
            score_5_8:0,
        
            y_P_n_na_5_9:'',
            comment_5_9:'',
            score_5_9:0,
        
            y_P_n_na_5_10_a:'',
            comment_5_10_a:'',
            score_5_10_a:0,
              
            y_P_n_na_5_10_b:'',
            comment_5_10_b:'',
            score_5_10_b:0,
              
            y_P_n_na_5_10_c:'',
            comment_5_10_c:'',
            score_5_10_c:0,
              
            y_P_n_na_5_10_d:'',
            comment_5_10_d:'',
            score_5_10_d:0,
              
            y_P_n_na_5_10_e:'',
            comment_5_10_e:'',
            score_5_10_e:0,
              
            y_P_n_na_5_10_f:'',
            comment_5_10_f:'',
            score_5_10_f:0,
              
            y_P_n_na_5_11_a:'',
            comment_5_11_a:'',
            score_5_11_a:0,
                
            y_P_n_na_5_11_b:'',
            comment_5_11_b:'',
            score_5_11_b:0,
                
            y_P_n_na_5_11_c:'',
            comment_5_11_c:'',
            score_5_11_c:0,
                
            y_P_n_na_5_11_d:'',
            comment_5_11_d:'',
            score_5_11_d:0,
                
            y_P_n_na_5_11_e:'',
            comment_5_11_e:'',
            score_5_11_e:0,
                
            y_P_n_na_5_12:'',
            comment_5_12:'',
            score_5_12:0,
                
            y_P_n_na_5_13:'',
            comment_5_13:'',
            score_5_13:0,
                
            y_P_n_na_5_14_a:'',
            comment_5_14_a:'',
            score_5_14_a:0,
                 
            y_P_n_na_5_14_b:'',
            comment_5_14_b:'',
            score_5_14_b:0,
                 
            y_P_n_na_5_15:'',
            comment_5_15:'',
            score_5_15:0,

            y_P_n_na_5_16:'',
            comment_5_16:'',
            score_5_16:0,
  
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
        .delete(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_5/${qID}/`)
        .then(() => {
            navigate(`/slipta_audit_section_5/${slipta_lab_profileId}/`);
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
        .put(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_5/${qID}/`,form)
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
                                <TableCell > <b>SECTION 05: EQUIPMENT MANAGEMENT </b> </TableCell>
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
                                <b>5.1 Procedure and/or Process for Management of Laboratory
                                Equipment </b>  
                                <br />

                                Has the laboratory defined a procedure and/or process that addresses,
                                but is not limited to, the following?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Determining the need and specification of equipment;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Selection of equipment;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Procurement of equipment;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Acceptance and installation;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Creation and maintenance of equipment records (including the
                                        equipment service schedule);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    f. Unique labelling of equipment (serial number, asset number, date of
                                        calibration, etc.);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_f')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                        
                            <TableRow>
                                    <TableCell align="left">
                                    g. Defining the equipment maintenance and service frequency;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_g" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_g')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                                                    
                            <TableRow>
                                    <TableCell align="left">
                                    h. Management of defective equipment (including decontamination);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_h" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_h')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_h')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                                                                
                            <TableRow>
                                    <TableCell align="left">
                                    i. Training and authorization of personnel to operate equipment use;

                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_i" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_i')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_i')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                                                                
                            <TableRow>
                                    <TableCell align="left">
                                    j. Management of obsolete equipment;

                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_j" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_j')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_j')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                                                                        
                            <TableRow>
                                    <TableCell align="left">
                                    j. Management of obsolete equipment;

                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_j" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_j')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_j')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    k. Management of safe handling, transportation, storage and use to
                                    avoid deterioration and contamination;

                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_k" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_k')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_k')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    l. Tracking and verification of completion of repairs and services.

                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_1_l" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_1_l')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_1_l')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>
                            

                            <TableRow> 
                                <TableCell > 
                                <b> 5.2 Access to Required Equipment</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Does the laboratory have access to the required equipment for the
                                performance of laboratory activities?
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_2" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_2')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_2')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            <TableRow> 
                                <TableCell > 
                                <b> 5.3 Adherence to Proper Equipment Protocol</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is equipment installed and placed as specified in the operator’s manuals
                                and uniquely labelled or marked?
                                <br />
                                Note: Equipment should be properly placed as specified in the user manual away from
                                potential hazards including but not limited to the following: water, direct sunlight,
                                vibrations, traffic
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_3" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_3')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_3')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            <TableRow> 
                                <TableCell > 
                                <b> 5.4 Training, Competency and Authorization of Equipment Users</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is all equipment operated by trained, competent and authorized
                                personnel?
                                <br />
                                Note: Records of training, competency and authorization shall be available
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_4" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_4')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_4')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            <TableRow> 
                            <TableCell >
                                <b>5.5 Procedure and/or Process for Validation and Verification of
                                Equipment</b>  
                                <br />

                                Has the laboratory defined a procedure and/or process that addresses,
                                but is not limited to, the following?       

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Defining the validation or verification protocol (including the
                                        authorization for the intended use);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_5_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_5_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_5_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Performing equipment verification or validation;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_5_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_5_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_5_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Defining verification or validation report
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_5_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_5_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_5_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                        <TableRow> 
                            <TableCell >
                                <b>5.6 Equipment Verification and Documentation</b>  
                                <br />

                                Is all equipment verified onsite upon installation after maintenance and
                                repair before use?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Are specific verification protocols in place for each item of
                                    equipment?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Has validation information been obtained from the manufacturer as
                                    part of the verification?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Have performance characteristics been appropriately selected and
                                    evaluated as per intended use?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Were the verification studies appropriate and adequate?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Was the analysis of data appropriate for the selected performance
                                    characteristics?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>
                            
                            <TableRow>
                                    <TableCell align="left">
                                    f. Have the verification results and reports been reviewed and
                                    approved by an authorized person?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_f')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow> 
                                <TableCell > 
                                <b> 5.4 Training, Competency and Authorization of Equipment Users</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is all equipment operated by trained, competent and authorized
                                personnel?
                                <br />
                                Note: Records of training, competency and authorization shall be available
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_4" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_4')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_4')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            <TableRow> 
                            <TableCell >
                                <b>5.5 Procedure and/or Process for Validation and Verification of
                                Equipment</b>  
                                <br />

                                Has the laboratory defined a procedure and/or process that addresses,
                                but is not limited to, the following?       

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Defining the validation or verification protocol (including the
                                        authorization for the intended use);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_5_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_5_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_5_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Performing equipment verification or validation;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_5_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_5_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_5_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Defining verification or validation report
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_5_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_5_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_5_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                        <TableRow> 
                            <TableCell >
                                <b>5.6 Equipment Verification and Documentation</b>  
                                <br />

                                Is all equipment verified onsite upon installation after maintenance and
                                repair before use?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Are specific verification protocols in place for each item of
                                    equipment?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Has validation information been obtained from the manufacturer as
                                    part of the verification?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Have performance characteristics been appropriately selected and
                                    evaluated as per intended use?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Were the verification studies appropriate and adequate?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Was the analysis of data appropriate for the selected performance
                                    characteristics?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>
                            
                            <TableRow>
                                    <TableCell align="left">
                                    f. Have the verification results and reports been reviewed and
                                    approved by an authorized person?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_6_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_6_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_6_f')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                
                        <TableRow> 
                            <TableCell >
                                <b>5.7 Equipment Records</b>  
                                <br />

                                Is current equipment inventory data available for all equipment in the
                                laboratory?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Manufacturer and supplier details, and sufficient information to
                                    uniquely identify each item of equipment, including software and
                                    firmware;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Dates of receipt, acceptance testing and entry into service;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Evidence of verification or validation that equipment conforms with
                                    specified acceptability criteria;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Current location of equipment;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Condition when received (e.g., new, used, or reconditioned);
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>
                            
                            <TableRow>
                                    <TableCell align="left">
                                    f. Manufacturer's instructions;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_f')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    g. Program for preventive maintenance;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_g" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_g')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    h. Maintenance activities performed by the laboratory or approved
                                    external service provider;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_h" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_h')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_h')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    i. Damage to, malfunction, modification, or repair of the equipment;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_i" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_i')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_i')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    j. Equipment performance records, such as reports or certificates of
                                    calibrations or verifications, or both, including dates, times, and
                                    results;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_j" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_j')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_j')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                
                            <TableRow>
                                    <TableCell align="left">
                                    k. Date of last service;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_k" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_k')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_k')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    l. Date of next service
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_7_l" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_7_l')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_7_l')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow> 
                                <TableCell > 
                                <b> 5.8 Defective Equipment Waiting for Repair</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is defective equipment waiting for repair not used and clearly labelled?
                                <br />
                                Note 1 Labels should include the date of malfunction and ‘not in use’ and signature of
                                approval
                                <br />
                                Note 2: All equipment malfunctions must be investigated and documented as per the
                                non-conforming procedure. If the user cannot resolve the problem, a repair order must
                                be initiated
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_8" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_8')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_8')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            
                            
                        <TableRow> 
                            <TableCell >
                                <b>5.10 Procedure and/or Process for Calibration of Equipment</b>  
                                <br />

                                Has the laboratory defined a procedure and/or process that addresses,
                                but is not limited to, the following?

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Frequency of calibration;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_10_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_10_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_10_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Handling of in-house calibrations (pipettes, thermometers, timers,
                                        etc.);
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_10_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_10_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_10_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            
                            <TableRow>
                                    <TableCell align="left">
                                    c. Management of calibrations performed by external service providers;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_10_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_10_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_10_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Recording of metrological traceability;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_10_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_10_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_10_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Handling of failed calibrations;
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_10_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_10_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_10_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>
                            
                            <TableRow>
                                    <TableCell align="left">
                                    f. Retention of calibration records (use of stickers and calibration
                                        certificates)
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_10_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_10_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_10_f')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow> 
                                <TableCell > 
                                <b> 5.9 Obsolete Equipment</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is obsolete equipment appropriately labelled and removed from the
                                laboratory or path of workflow?
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_9" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_9')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_9')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            
                        <TableRow> 
                            <TableCell >
                                <b>5.11 Equipment Calibration and Metrological Traceability</b>  
                                <br />

                                Note: Documentation of calibration traceability to a higher order reference material or
                                reference procedure may be provided by an examination system manufacturer. Such
                                documentation is acceptable if the manufacturer's examination system and calibration
                                procedures are used without modification

                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Is routine calibration of laboratory measuring equipment (including
                                    pipettes, centrifuges, balances, and thermometers) scheduled, at
                                    minimum following manufacturer’s recommendations?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_11_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_11_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_11_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. When routine calibration of laboratory measuring equipment
                                    (including pipettes, centrifuges, balances, and thermometers) is
                                    performed offsite (externally), are there records of verification before
                                    use?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_11_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_11_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_11_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    c. Is information on metrological traceability (e.g., use of reference
                                    materials and equipment like certified thermometers, tachometer)
                                    available?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_11_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_11_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_11_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                    
                            <TableRow>
                                    <TableCell align="left">
                                    d. Is there evidence of review of calibrations records (e.g., calibration
                                    certificates, calibration reports, etc.) by the laboratory before
                                    acceptance back into use?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_11_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_11_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_11_d')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    e. Where it is not possible to provide traceability using an accredited
                                    calibration laboratory, are certified reference materials, examination
                                    and calibration by another procedure, use of mutual consent
                                    standards or methods used for in house calibrations?
                                    <br /> 
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_11_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_11_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_11_e')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                
                            <TableRow> 
                                <TableCell > 
                                <b> 5.12 Equipment Preventive Maintenance</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is routine user preventive maintenance performed on all equipment and
                                recorded according to manufacturer’s minimum requirements?
                                <br />
                                Note: Preventative maintenance by operators must be done on all equipment used in
                                examinations including centrifuges, autoclaves, microscopes, and safety cabinets
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_12" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_12')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_12')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                                    
                            <TableRow> 
                                <TableCell > 
                                <b> 5.13 Equipment Service Maintenance</b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Is equipment routinely serviced according to a schedule as per the
                                minimum manufacturer’s recommendations by approved internal or
                                external service providers and is this information documented in
                                appropriate logs?
                                <br />
                                Note: All equipment must be serviced at specified intervals by a qualified service
                                engineer either through service contracts or otherwise. Service schedules must at
                                minimum meet manufacturer’s requirements
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_13" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_13')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_13')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                                                            
                        <TableRow> 
                            <TableCell >
                                <b>5.14 Equipment Adverse Incident Reporting.</b>  
                                
                            </TableCell> 
                        </TableRow>

                            <TableRow>
                                    <TableCell align="left">
                                    a. Are there records of investigation, identification and implementation of
                                    corrective actions taken and follow-up?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_14_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_14_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_14_a')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                            
                            <TableRow>
                                    <TableCell align="left">
                                    b. Is there documentation of reports made to manufacturers or suppliers
                                    and appropriate authorities of adverse incidents and accidents where
                                    applicable?
                                    <br />
                                    Are the manufacturer’s operator manuals readily available to testing
                                    personnel and available in the language understood by personnel?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_5_14_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_5_14_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_5_14_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                            </TableRow>

                                        
                            <TableRow> 
                                <TableCell > 
                                <b> 5.15 Manufacturer’s Operator Manual </b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Are the manufacturer’s operator manuals readily available to testing
                                personnel and available in the language understood by personnel?
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_15" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_15')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_15')}
                                        type="number"  
                                        />
                                </TableCell>
                            </TableRow>

                            <TableRow> 
                                <TableCell > 
                                <b> 5.16 Use of Equipment </b>   
                                </TableCell> 
                            </TableRow>
                            
                            <TableRow>
                                <TableCell style={cellStyle}>
                                Are there precautions (e.g., password protection) in place to prevent
                                unintended adjustments of automated equipment, where applicable?
                                </TableCell>

                                <TableCell align="top" style={cellStyle} >
                                    <MySelectInput name="y_P_n_na_5_16" control={control} />
                                </TableCell>
                                <TableCell align="top" style={cellStyle} >
                                <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('comment_5_16')}
                                        type="text"  
                                        />
                                </TableCell>
                                <TableCell align="right" style={cellStyle} >
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        {...register('score_5_16')}
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
