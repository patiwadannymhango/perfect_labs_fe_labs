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

export function SliptaAuditSection2Detail(){

    

    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const { slipta_lab_profileId,qID } = useParams();
    const navigate = useNavigate();
    const user = getUser();

    
    const { data, error } = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_2/${qID}/`, fetcher, {
        refreshInterval: 10000,
      });

      const { control, register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {

        auditor: user.id,
        lab_profile: slipta_lab_profileId, 

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

    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleDelete = () => {
        axiosService
        .delete(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_2/${qID}/`)
        .then(() => {
            navigate(`/slipta_audit_section_2/${slipta_lab_profileId}/`);
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
        .put(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_2/${qID}/`,form)
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
                                            <MySelectInput name="y_P_n_na_2_1_a" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_1_a')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_1_a')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left" style={cellStyle}>
                                                b. Impartiality
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_1_b" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_1_b')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_1_b')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left" style={cellStyle}>
                                        c. Confidentialit
                                        </TableCell>
                                        
                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_1_c" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_1_c')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_1_c')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left" style={cellStyle}>
                                        d. Conflicts of interest
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_1_d" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_1_d')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_1_d')}
                                                type="number"   disabled={isReadOnly}  
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
                                            <MySelectInput name="y_P_n_na_2_2_a" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_2_a')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_2_a')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        b. Impartiality;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_2_b" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_2_b')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_2_b')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        c. Confidentiality;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_2_c" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_2_c')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_2_c')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        d. Conflicts of interest
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_2_d" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_2_d')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_2_d')}
                                                type="number"   disabled={isReadOnly}  
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

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_3" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_3')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_3')}
                                                type="number"   disabled={isReadOnly}  
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

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_4" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_4')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_4')}
                                                type="number"   disabled={isReadOnly}  
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

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_a" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_a')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_a')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        b. Status of corrective actions taken and required risk mitigation actions;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_b" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_b')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_b')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        c. Reports from personnel;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_c" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_c')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_c')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        d. Environmental monitoring logs;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_d" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_d')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_d')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        e. Sample rejection records;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_e" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_e')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_e')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        f. Equipment calibration and maintenance records;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_f" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_f')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_f')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        g. IQC records across all test areas;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_g" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_g')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_g')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        h. Outcomes of PTs and other forms of inter-laboratory comparisons;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_h" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_h')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_h')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        i. Quality indicators;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_i" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_i')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_i')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        j. Customer complaints and feedback;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_j" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_j')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_j')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        k. Results of improvement projects;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_k" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_k')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_k')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        l. Documentation of this routine review and action planning with
                                        personnel for resolution and follow-up review.
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_5_l" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_5_l')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_5_l')}
                                                type="number"   disabled={isReadOnly}  
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

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_6_a" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_6_a')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_6_a')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        b. Review input (agenda as per Clause 8.9.2 of ISO15189:2022);
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_6_b" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_6_b')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_6_b')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        c. Key attendees;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_6_c" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_6_c')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_6_c')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        d. Conduct of review activities;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_6_d" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_6_d')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_6_d')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        e. Review output (decisions, actions to be taken, provision of required
                                        resources person responsible and due dates);
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_6_e" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_6_e')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_6_e')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        f. Communication of decisions and actions to be taken to the relevant
                                        persons;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_6_f" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_6_f')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_6_f')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        g. Ensure all actions arising are completed within the defined
                                        timeframe
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_6_g" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_6_g')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_6_a')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow> <TableCell > <b> 2.7 Conduct of Management Reviews </b> </TableCell> </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                        Does the laboratory management perform a review and discussion of the
                                        laboratory management system at planned intervals?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_7" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_7')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_7')}
                                                type="number"   disabled={isReadOnly}  
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

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_a" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_a')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_a')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        b. Fulfilment of objectives and suitability of policies and procedures;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_b" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_b')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_b')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        c. Outcomes of recent evaluations, process monitoring using quality
                                        indicators, internal audits, analysis of non-conformities, corrective
                                        actions and assessments by external bodies;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_c" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_c')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_c')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        d. Patient, user and personnel feedback and complaints;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_d" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_d')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_d')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        e. Quality assurance of result validity;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_e" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_e')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_e')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        f. Effectiveness of any implemented improvements and actions taken
                                        to address risks and opportunities for improvement;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_f" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_f')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_f')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        g. Performance of external providers, including referral laboratories and
                                        technical consultants;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_g" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_g')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_g')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        h. Results of participation in interlaboratory comparison programs;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_h" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_h')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_h')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        i. Evaluation of POCT activities;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_i" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_i')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_i')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        j. Other relevant factors, such as monitoring activities and training.
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_8_j" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_8_j')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_8_j')}
                                                type="number"   disabled={isReadOnly}  
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

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_9_a" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_9_a')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_9_a')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        b. Improvement of the laboratory activities related to the fulfilment of
                                        the requirements of this document;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_9_b" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_9_b')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_9_b')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        c. Provision of required resources;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_9_c" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_9_c')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_9_c')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        d. Improvement of services to patients and users;
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_9_d" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_9_d')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_9_d')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={cellStyle}>
                                        e. Any need for change.
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_9_e" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_9_e')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_9_e')}
                                                type="number"   disabled={isReadOnly}  
                                                />
                                        </TableCell>

                                    </TableRow>

                                    <TableRow> <TableCell > <b> 2.10 Communication of Review Findings </b> </TableCell> </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                        Are findings and actions from routine technical and management review
                                        meeting communicated to the relevant personnel?
                                        </TableCell>

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_10" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_10')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_10')}
                                                type="number"   disabled={isReadOnly}  
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

                                        <TableCell align="top" style={cellStyle} >
                                            <MySelectInput name="y_P_n_na_2_11" control={control} isReadOnly={isReadOnly} />
                                        </TableCell>
                                        <TableCell align="top" style={cellStyle} >
                                        <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('comment_2_11')}
                                                type="text"   disabled={isReadOnly}  
                                                />
                                        </TableCell>
                                        <TableCell align="right" style={cellStyle} >
                                            <TextField
                                                variant='outlined'
                                                fullWidth
                                                {...register('score_2_11')}
                                                type="number"   disabled={isReadOnly}  
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
