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

export function SliptaAuditSection10Detail(){

    
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    const [isReadOnly, setIsReadOnly] = useState(false);

    const { slipta_lab_profileId,qID } = useParams();
    const navigate = useNavigate();
    const user = getUser();

    const { data, error } = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_10/${qID}/`, fetcher, {
        refreshInterval: 10000,
      });

      const { control, register, handleSubmit,setValue, formState: { errors } } = useForm({

        defaultValues: {

            auditor: user.id,
            lab_profile: slipta_lab_profileId,

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

    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleDelete = () => {
        axiosService
        .delete(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_10/${qID}/`)
        .then(() => {
            navigate(`/slipta_audit_section_10/${slipta_lab_profileId}/`);
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
        .put(`/slipta/lab_profile/${slipta_lab_profileId}/audit_section_10/${qID}/`,form)
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
