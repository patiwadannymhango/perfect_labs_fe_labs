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
import LayoutQ from '../components/LayoutQ';
import { useSelector } from 'react-redux'; 
import { format } from 'date-fns';


import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';


const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
   
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
    width: '500px', // Set the width to 400px
  };

  const scoreCellStyle = {
    ...cellStyle, // Include any common styles
    width: '500px', // Set the width to 400px
  };

  const sectionCellStyle = {
    ...cellStyle, // Include any common styles
    // width: '500px', // Set the width to 400px
  }


  const Alert = styled(MuiAlert)(({ theme }) => ({
    width: '100%',
  }))


  const FloatingActionButton = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 1200,
  }));

export function SliptaAuditsDetail(){

    const labProfile = useSelector((state) => state.labProfile);

    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');

    const [isReadOnly, setIsReadOnly] = useState(false);

    const [section1ID, setSection1ID] = useState('');
    const [section2ID, setSection2ID] = useState('');
    const [section3ID, setSection3ID] = useState('');
    const [section4ID, setSection4ID] = useState('');
    const [section5ID, setSection5ID] = useState('');
    const [section6ID, setSection6ID] = useState('');
    const [section7ID, setSection7ID] = useState('');
    const [section8ID, setSection8ID] = useState('');
    const [section9ID, setSection9ID] = useState('');
    const [section10ID, setSection10ID] = useState('');
    const [section11ID, setSection11ID] = useState('');
    const [section12ID, setSection12ID] = useState('');

    let section1=null;
    let section2=null;
    let section3=null;
    let section4=null;
    let section5=null;
    let section6=null;
    let section7=null;
    let section8=null;
    let section9=null;
    let section10=null;
    let section11=null;
    let section12=null;


    const [updatedTime, setUpdatedTime] = useState(null);

    const { slipta_lab_profileId,aID } = useParams();
    const navigate = useNavigate();


   
    
    const { data, error } = useSWR(`/slipta/lab_profile/${slipta_lab_profileId}/audit/${aID}/`, fetcher, {
        refreshInterval: 10000,
      });

      const { control, register, handleSubmit, setValue, formState: { errors } } = useForm({
        defaultValues: {

            section_1_score: '',
            section_2_score: '',
            section_3_score: '',
            section_4_score: '',
            section_5_score: '',
            section_6_score: '',
            section_7_score: '',
            section_8_score: '',
            section_9_score: '',
            section_10_score: '',
            section_11_score: '',
            section_12_score: '',
        }
      });

    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const audit1Handle = () => {
        navigate(`/slipta_audit_section_1_detail/${slipta_lab_profileId}/${section1ID}/`);
    };
    
    const audit2Handle = () => {
        navigate(`/slipta_audit_section_2_detail/${slipta_lab_profileId}/${section2ID}/`);
    };

    const audit3Handle = () => {
        navigate(`/slipta_audit_section_3_detail/${slipta_lab_profileId}/${section3ID}/`);
    };
    const audit4Handle = () => {
        navigate(`/slipta_audit_section_4_detail/${slipta_lab_profileId}/${section4ID}/`);
    };
    const audit5Handle = () => {
        navigate(`/slipta_audit_section_5_detail/${slipta_lab_profileId}/${section5ID}/`);
    };

    const audit6Handle = () => {
        navigate(`/slipta_audit_section_6_detail/${slipta_lab_profileId}/${section6ID}/`);
    };
    
    const audit7Handle = () => {
        navigate(`/slipta_audit_section_7_detail/${slipta_lab_profileId}/${section7ID}/`);
    };

    const audit8Handle = () => {
        navigate(`/slipta_audit_section_8_detail/${slipta_lab_profileId}/${section8ID}/`);
    };
    const audit9Handle = () => {
        navigate(`/slipta_audit_section_9_detail/${slipta_lab_profileId}/${section9ID}/`);
    };
    const audit10Handle = () => {
        navigate(`/slipta_audit_section_10_detail/${slipta_lab_profileId}/${section10ID}/`);
    };
    const audit11Handle = () => {
        navigate(`/slipta_audit_section_11_detail/${slipta_lab_profileId}/${section11ID}/`);
    };
    const audit12Handle = () => {
        navigate(`/slipta_audit_section_12_detail/${slipta_lab_profileId}/${section12ID}/`);
    };
    
      const handleDelete = () => {
        axiosService
        .delete(`/slipta/lab_profile/${slipta_lab_profileId}/audit/${aID}/`)
        .then(() => {
            navigate(`/slipta_lab_profile/${slipta_lab_profileId}/`);
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

          setSection1ID(data.section_1);
          setSection2ID(data.section_2);
          setSection3ID(data.section_3);
          setSection4ID(data.section_4);
          setSection5ID(data.section_5);
          setSection6ID(data.section_6);
          setSection7ID(data.section_7);
          setSection8ID(data.section_8);
          setSection9ID(data.section_9);
          setSection10ID(data.section_10);
          setSection11ID(data.section_11);
          setSection12ID(data.section_12);
          setUpdatedTime(data.updated);


        }
      }, [data, setValue])

     
      if(section1ID === null){
       section1 = true
      }

      if(section2ID === null){
        section2 = true
      }
       if(section3ID === null){
        section3 = true
       }
       if(section4ID === null){
         section4 = true
       }
       if(section5ID === null){
        section5 = true
       }
 
       if(section6ID === null){
         section6 = true
       }
       if(section7ID === null){
         section7 = true
       }
        
       if(section8ID === null){
          section8 = true
       }
       if(section9ID === null){
        section9 = true
       }
       if(section10ID === null){
        section10 = true
       }
       if(section11ID === null){
        section11 = true
       }
       if(section12ID === null){
        section12 = true
       }

    const user = getUser();

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
    console.log(data)

    const onSubmit = form => {
        
        form = {
            ...form,
            auditor: user.id,
            lab_profile: slipta_lab_profileId, 
        };
    
        axiosService
        .put(`/slipta/lab_profile/${slipta_lab_profileId}/audit/${aID}/`,form)
        .then(() => {
          setSnackbarOpen(true);
          setSnackbarMessage(`Audit Updated`);
          

        console.log("Updated")
          
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
               
                <div >
                    <form style={{ padding: '10px' }} 
                     id="audit-form" onSubmit={handleSubmit(onSubmit)} >
                   
                    <TableContainer component={Paper} sx={{ padding: '10px' }}>

                    <Table style={tableStyle}>
                            <TableHead>
                            <TableRow style={{ width: '800px'}}> 
                                <TableCell >
                                <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                     {"LAB :" + labProfile.lab_name + " | " + " # " + labProfile.lab_number +  ": AUDIT SUMMARY "|| ''} { format(new Date(updatedTime), 'yyyy-MM-dd HH:mm:ss') }
                                </Typography> <b></b> 
                                </TableCell>
                            </TableRow>
                            <TableRow>
                            
                            <TableCell align="left" style={cellStyle}>Section</TableCell>
                            <TableCell align="left" style={cellStyle}>Score Obtained</TableCell>
                            <TableCell align="center" style={{...cellStyle, width:'5%'}}>Max Score</TableCell>
                            <TableCell align="left"style={cellStyle}>Action</TableCell>
                            </TableRow>
                            
                            </TableHead>
                            <TableBody>
                            
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 1: Documents and Records
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_1_score')}
                                            type="text" 
                                            disabled
                                        />

                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        22
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit1Handle}
                                            disabled={ section1 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 2: Organisation and Leadership
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                       <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_2_score')}
                                            type="text" 
                                            disabled   
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        26
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit2Handle}
                                            disabled={ section2 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 3: Personnel Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_3_score')}
                                            type="text" 
                                            disabled  
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        34
                                    </TableCell>
                                    <TableCell align="left">
                                        { (setSection3ID != '') && (
                                            <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit3Handle}
                                            disabled={ section3 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                        )}
                                        
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 4: Customer Focus
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_4_score')}
                                            type="text" 
                                            disabled  
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        24
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit4Handle}
                                            disabled={ section4 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 5: Equipment Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_5_score')}
                                            type="text" 
                                            disabled   
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        44
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit5Handle}
                                            disabled={ section5 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 6: Assessment
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                           variant='outlined'
                                           fullWidth
                                           {...register('section_6_score')}
                                           type="text" 
                                           disabled   
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle} >
                                        24
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit6Handle}
                                            disabled={ section6 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 7: Supplier and Inventory Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_7_score')}
                                            type="text" 
                                            disabled   
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        27
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit7Handle}
                                            disabled={ section7 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 8: Process Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_8_score')}
                                            type="text" 
                                            disabled  
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        71
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit8Handle}
                                            disabled={ section8 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 9: Information Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_9_score')}
                                            type="text" 
                                            disabled  
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        24
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit9Handle}
                                            disabled={ section9 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 10: Nonconforming Events
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}> 
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_10_score')}
                                            type="text" 
                                            disabled  
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        13
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit10Handle}
                                            disabled={ section10 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 11: Continual Improvement
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('section_11_score')}
                                            type="text" 
                                            disabled   
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        07
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit11Handle}
                                            disabled={ section11 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 12: Facilities and Safety
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <TextField
                                           variant='outlined'
                                           fullWidth
                                           {...register('section_12_score')}
                                           type="text" 
                                           disabled  
                                        />
                                        
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        57
                                    </TableCell>
                                    <TableCell align="left">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            onClick={audit12Handle}
                                            disabled={ section12 }
                                            >
                                            OPEN QUESTIONNARIE
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                
                            </TableBody>
                            
                            </Table>

                    </TableContainer>
                      
                        
                    </form>

                   
                </div>
             
                        <Snackbar
                            open={snackbarOpen}
                            autoHideDuration={3000}
                            onClose={onSnackbarClose}
                            message={snackbarMessage}
                            action={
                            <Button color="inherit" onClick={onSnackbarClose}>
                                Close
                            </Button>
                            }
                            sx={{
                                // position: 'fixed',
                                // top: '30%',
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
