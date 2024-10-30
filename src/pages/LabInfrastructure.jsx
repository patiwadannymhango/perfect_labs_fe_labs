/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";

import { Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';  // Import the view icon


import { Input } from '@mui/material';

import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import FormLabel from '@mui/material/FormLabel';

import { useDispatch } from 'react-redux';
import { setShowItems2 } from '../redux/labSidebarSlice';

import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import LayoutQ from '../components/LayoutQ';
import { useSelector } from 'react-redux'; 

import MyRadioGroup from '../components/MyRadioGroup';


import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import LabProfile from './LabProfile';


const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
   
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
    width: '500px', // Set the width to 400px
  };



  const Alert = styled(MuiAlert)(({ theme }) => ({
    // width: '100%',
  }))


  const lab_adequate_options = [
    { label : 'Yes', value: 'Yes' },
    { label : 'No', value: 'No' },

  ];


export function LabInfrastructure(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            is_there_area_dedicated_lab:"",
            area_dedicated_lab_comment:"",
            challenge_with_infrastructure:"",
            is_there_enough_ventilation:"",
            enough_ventilation_comment:"",
            list_lab_water_source:"",
            challenge_with_water_source:"",
            list_lab_energy_source:"",
            challenge_with_energy_source:"",
            staff_toilet_availability:"",
            staff_toilet_comment:"",
            patient_toilet_availability:"",
            patient_toilet_comment:"",
            aircons_availability:"",
            aircons_comment:"",
            office_space_lab_incharge:"",
            office_space_lab_comment:"",
            office_space_lab_safety_officer:"",
            office_space_lab_safety_comment:"",
            office_space_lab_quality_officer:"",
            office_space_lab_quality_comment:"",
            office_space_lab_logistic_officer:"",
            office_space_lab_logistic_comment:"",
            is_there_area_dedicated_reagent:"",
            area_dedicated_reagent_comment:"",
            availability_shelves_storage_area:"",
            availability_refrig_store_room:"",
            availability_refrig_store_room_comment:"",
            availability_thermometers:"",
            availability_thermomemeter_comment:"",
            
            is_there_space_dedicated_for_sanples:"",
            is_there_space_dedicated_for_sanples_comment:"",
            is_there_refrigerator_dedicated_for_samples:"",
            is_there_refrigerator_dedicated_for_samples_comment:"",


            
        }
      });



    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    
    const [labName, setLabName] = useState('');

    // Watch the selected Options
    
    const sel_area_dedicated_lab_comment = watch('is_there_area_dedicated_lab');
   
            
    const { lab_profileId} = useParams();
    const navigate = useNavigate();

    
    const { data, error } = useSWR(`/slipta/lab_profile/${lab_profileId}/`, fetcher, {
        refreshInterval: 10000,
      });

    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


      const handleDelete = () => {
        axiosService
        .delete(`/slipta/lab_profile/${lab_profileId}/`)
        .then(() => {
            navigate(`/`);
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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setShowItems2(true));

        if (data) {
          // Populate form fields from data
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              setValue(key, data[key]);
            }
          }
          setLabName(data.lab_name)
          
        }
      
      }, [data, setValue, dispatch]);
      

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
 
    const onSubmit = form => {
        
        form = {
            ...form,
            auditor: user.id,
            lab_profile: lab_profileId, 
        };
    
        axiosService
        .put(`/slipta/lab_profile/${lab_profileId}/`,form)
        .then(() => {
          setSnackbarOpen(true);
          setSnackbarMessage(`Laboratory Updated`);
          
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
         
                
                <div>
                    <form id="lab-profile-form" onSubmit={handleSubmit(onSubmit)} component={Paper} sstyle={{ width: '100%' }}  encType="multipart/form-data" >
                        




                                    <CardHeader
                                            title={ labName.toUpperCase() + " : " +  "LABORATORY INFRASTRUCTURE "|| ''}
                                            sx={{
                                                backgroundColor: '#ddd',
                                                borderBottom: '1px solid #e0e0e0',
                                                '& .MuiCardHeader-title': {
                                                    color: 'text.secondary',
                                                }
                                            }}
                                        />

                                        {/* <FormLabel component="legend">Laboratory Staffing Summary:</FormLabel> */}

                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                        
                                        <TableCell align="left" ><h5> Laboratory Testing Areas </h5></TableCell>
                                       
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                            <TableRow>
                                                <TableCell align="left" >
                                                Is there an area dedicated specifically to the Laboratory
                                                <br /><br />
                                                <MyRadioGroup
                                                        name="is_there_area_dedicated_lab"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /> <br /> 
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('area_dedicated_lab_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    disabled={sel_area_dedicated_lab_comment !== 'No'}
                                                    />
                                                </TableCell >

                                                

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Challenges with Infrastructure"
                                                    {...register('challenge_with_infrastructure')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />
                                                </TableCell >
                                                                                                

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Is there enough Ventilation

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="is_there_enough_ventilation"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('enough_ventilation_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                               
                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="List the Water source is the Laboratory using"
                                                    {...register('list_lab_water_source')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />
                                                    <br /><br />
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="Challenges with Water Source"
                                                    {...register('challenge_with_water_source')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />
                                                </TableCell >
                                                

                                            </TableRow>

                               

                                            <TableRow>
                                                <TableCell align="left" >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="List the energy source is the Laboratory using"
                                                    {...register('list_lab_energy_source')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />
                                                        <br /> <br />
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    
                                                    label="Challenges with Energy Source"
                                                    {...register('challenge_with_energy_source')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />
                                                </TableCell >
                                                

                                            </TableRow>

                                        

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Staff Toilets

                                                <br />  <br />
                                                
                                                <MyRadioGroup
                                                        name="staff_toilet_availability"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />

                                                < br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('staff_toilet_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                            </TableCell>

                                            </TableRow>

                                            
                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Patient Toilets

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="patient_toilet_availability"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('patient_toilet_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                                
                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Aircons

                                                <br /><br />

                                                <MyRadioGroup
                                                        name="aircons_availability"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('aircons_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                               

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Office Space for Laboratory Incharge    

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="office_space_lab_incharge"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('office_space_lab_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >


                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Office Space for Safety Officer  

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="office_space_lab_safety_officer"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('office_space_lab_safety_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                                

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Office Space for Quality Officer   

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="office_space_lab_quality_officer"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('office_space_lab_quality_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                                
                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Office Space for Logistics Officer    

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="office_space_lab_logistic_officer"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('office_space_lab_logistic_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />
                                                </TableCell >

                                                

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" ><h5> Storage Facilities </h5></TableCell>
                                                
                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Is there Area dedicated for reagent storage

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="is_there_area_dedicated_reagent"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('area_dedicated_reagent_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />
                                                </TableCell >

                                                
                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Shelves in the storage Area 

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="availability_shelves_storage_area"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />
                                                </TableCell >

                                                

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of Refrigerators for reagent storage in the store room

                                                <br /><br />

                                                <MyRadioGroup
                                                        name="availability_refrig_store_room"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />

                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('availability_refrig_store_room_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                                

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Is there space dedicated for the storage of analysed samples

                                                <br /><br />

                                                <MyRadioGroup
                                                        name="is_there_space_dedicated_for_sanples"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />

                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('is_there_space_dedicated_for_sanples_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                                

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Is there Refrigerator dedicated for the storage of analysed samples

                                                <br /><br />

                                                <MyRadioGroup
                                                        name="is_there_refrigerator_dedicated_for_samples"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />

                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('is_there_refrigerator_dedicated_for_samples_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                                

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                Availability of thermometers

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="availability_thermometers"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /><br />

                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('availability_thermomemeter_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >

                                                

                                            </TableRow>

                                        </TableBody>
                                        
                                        </Table>       
                        
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
