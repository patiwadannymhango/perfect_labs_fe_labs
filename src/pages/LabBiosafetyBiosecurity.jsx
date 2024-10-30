/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm, Controller  } from 'react-hook-form';
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

  const scoreCellStyle = {
    ...cellStyle, // Include any common styles
    width: '500px', // Set the width to 400px
  };

  const sectionCellStyle = {
    ...cellStyle, // Include any common styles
    // width: '500px', // Set the width to 400px
  }


  const Alert = styled(MuiAlert)(({ theme }) => ({
    // width: '100%',
  }))


  const FloatingActionButton = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 1200,
  }));


  // Function to format date to 'YYYY-MM-DD'
const formatDateToYMD = (dateString) => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding leading zero for months
	const day = String(date.getDate()).padStart(2, '0'); // Adding leading zero for days
	return `${year}-${month}-${day}`;
  };

  const lab_adequate_options = [
    { label : 'Yes', value: 'Yes' },
    { label : 'No', value: 'No' },

  ];

  const sop_option = [
    { label : 'Access to a burner', value: 'Access to a burner' },
    { label : 'Access to a modern incinerator', value: 'Access to a modern incinerator' },
	{ label : 'Sending waste to centralized location', value: 'Sending waste to centralized location' },
 ];


export function LabBiosafetyBiosecurity(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
			biosafety_level_of_lab:"",
			biosafety_cabinet_class_use:"",
			how_many_biosafety_cabinet_available:null,
			is_are_biosafety_cabinet_certified:"",
			biosafety_cabinet_certification_date:"",
			
			does_lab_have_biosafety_officer:"",
			has_biosafety_officer_trained:"",
			name_biosafety_officer:"",
			does_lab_have_controlled_access:"",
			list_mechanism_fire_ex:"",
			deos_lab_have_fire_extinguisher:"",
			deos_lab_have_spill_kits:"",

			sop_in_place_for_waste_man:"",
      access_to_a_burner:"",
      access_to_a_modern_incinerator:"",
      sending_waste_to_centralized_loc:"",

			is_safety_manual_available:"",
			is_there_a_focal_point_bio:"",
      biosafety_general_comment:"",
            
        }
      });



    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    
    const [labName, setLabName] = useState('');

    // Watch the selected Options
       
            
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
          setLabName(data.lab_name);
		  const formattedDate = formatDateToYMD(data.biosafety_cabinet_certification_date);
		  setValue('biosafety_cabinet_certification_date', formattedDate);
		  console.log(data);
          
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
                                            title={ labName.toUpperCase() + " : " +  "LABORATORY BIOSAFETY AND BIOSECURITY "|| ''}
                                            sx={{
                                                backgroundColor: '#f5f5f5',
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
                                        
                                        <TableCell align="left" ></TableCell>
                                        
                                        
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
											<TableRow>
												<TableCell align="right" >

													<TextField
													variant="outlined"
													fullWidth
													label="What is the Biosafety Level of the Laboratory"
													{...register('biosafety_level_of_lab')}
													type="text" 
																										
													/>
												</TableCell >

												
											</TableRow>

											<TableRow>
												<TableCell align="right" >

													<TextField
													variant="outlined"
													fullWidth
													label="What is the Class of Biosafety Cabinet in use"
													{...register('biosafety_cabinet_class_use')}
													type="text" 
																										
													/>
												</TableCell >

												
											</TableRow>

											<TableRow>
												<TableCell align="right" >

													<TextField
													variant="outlined"
													fullWidth
													label="How many Biosafety Cabinet available"
													{...register('how_many_biosafety_cabinet_available')}
													type="number" 
																										
													/>
												</TableCell >

												
											</TableRow>


                                            <TableRow>
                                                <TableCell align="left" >
                                                Is/Are the Biosafety Cabinet(s) Certified

												<br />

												<MyRadioGroup
                                                        name="is_are_biosafety_cabinet_certified"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                                

                                            </TableRow>
											<TableRow>
											<TableCell>
											When was the last Biosafety Cabinet Certification

											<br /> 
											<br />

											{/* <TextField
													variant="outlined"
													fullWidth
													// label="When was the last Biosafety Cabinet Certification"
													{...register('biosafety_cabinet_certification_date')}
													type="date" 
																										
													/> */}

											<TextField
												variant="outlined"
												fullWidth
												// label="When was the last Biosafety Cabinet Certification"
												{...register('biosafety_cabinet_certification_date')}
												type="date"
												/>

										{/* <Controller
												name="biosafety_cabinet_certification_date"
												control={control}
												render={({ field }) => (
												<TextField
													{...field}
													variant="outlined"
													fullWidth
													label="Biosafety Cabinet Certification Date"
													type="date"
													InputLabelProps={{
													shrink: true, // Ensures the label stays above the field when a date is selected
													}}
												/>
												)}
											/> */}
											</TableCell>
												

												
											</TableRow>

											<TableRow>
                                                <TableCell align="left" >
                                                Does the Laboratory have a Biosafety Officer

												<br />

												<MyRadioGroup
                                                        name="does_lab_have_biosafety_officer"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                                


                                            </TableRow>

											<TableRow>
                                                <TableCell align="left" >
                                                Has the Biosafety Officer undergone Biosafety Training
												
												<br />

												<MyRadioGroup
                                                        name="has_biosafety_officer_trained"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                               


                                            </TableRow>

											<TableRow>
												<TableCell align="right" >

													<TextField
													variant="outlined"
													fullWidth
													label="Name of the Biosafety Officer"
													{...register('name_biosafety_officer')}
													type="text" 
																										
													/>
												</TableCell >

												
											</TableRow>

											<TableRow>
                                                <TableCell align="left" >
                                                Does the Laboratory have a controlled Access
												<br />
												<MyRadioGroup
                                                        name="does_lab_have_controlled_access"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                                


                                            </TableRow>

											<TableRow>
                                                <TableCell align="left" >
                                                Does the Laboratory have fire extinguishers
												<br />
												<MyRadioGroup
                                                        name="deos_lab_have_fire_extinguisher"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                                


                                            </TableRow>

											<TableRow>
                                                <TableCell align="left" >
                                                Does the Laboratory have any spill kits for spillage control
												<br />
												<MyRadioGroup
                                                        name="deos_lab_have_spill_kits"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                                


                                            </TableRow>

											<TableRow>
                                                                                               

                                                <TableCell align="right" >

                                                    <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label="List any mechanisms the Laboratory has put in place to extinguish fires"
                                                    {...register('list_mechanism_fire_ex')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />


                                                </TableCell >

												

                                            </TableRow>

											                        <TableRow>
                                                  <TableCell align="left" >
                                                  SOP in place for waste management
                                                  <br />
                                                  <MyRadioGroup
                                                        name="sop_in_place_for_waste_man"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        // rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                            </TableRow>

                                            <TableRow>
                                                  <TableCell align="left" >
                                                  Access to a burner
                                                  <br />
                                                  <MyRadioGroup
                                                        name="access_to_a_burner"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        // rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                            </TableRow>

                                            <TableRow>
                                                  <TableCell align="left" >
                                                 Access to a modern incinerator
                                                  <br />
                                                  <MyRadioGroup
                                                        name="access_to_a_modern_incinerator"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        // rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                            </TableRow>

                                            <TableRow>
                                                  <TableCell align="left" >
                                                  Sendning waste to a centralized location
                                                  <br />
                                                  <MyRadioGroup
                                                        name="sending_waste_to_centralized_loc"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        // rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >

                                            </TableRow>

											                      <TableRow>
                                                <TableCell align="left" >
                                                Is a safety manual available
                                            <br />
                                            <MyRadioGroup
                                                        name="is_safety_manual_available"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >


                                            </TableRow>

											                    <TableRow>
                                                <TableCell align="left" >
                                                Is there a focal point for biosafety and biosecurity
												                        <br />
												                          <MyRadioGroup
                                                        name="is_there_a_focal_point_bio"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell >


                                            </TableRow>

                                        </TableBody>
                                        
                                        </Table> 

                                        <br />
                                        <TextField
                                              variant="outlined"
                                              fullWidth
                                              label="Biosafety and Biosecurity General Comments"
                                              {...register('biosafety_general_comment')}
                                              type="text" 
                                              multiline
                                              rows={2} 
                                          />    
                        
                        <Grid item>
                                
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
                                
                            </Grid>
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
