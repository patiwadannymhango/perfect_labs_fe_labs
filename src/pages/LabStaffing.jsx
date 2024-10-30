/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";

import { Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Button, Box , IconButton  } from '@mui/material';


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
import AddIcon from '@mui/icons-material/Add';

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

  const yes_no_option = [
    { label : 'Yes', value: 'Yes' },
    { label : 'No', value: 'No' },
 ];


export function LabStaffing(){

    const { control, register, handleSubmit, setValue,getValues, watch, formState: { errors } } = useForm({
        defaultValues: {
            full_master_holders: 0,  
            full_time_degree_holders: 0,  
            full_time_diploma_holders: 0,  
            full_time_certificate_holders: 0,  
            full_time_data_clerks: 0,  
            full_time_phlebotomists: 0,  
            full_time_cleaners: 0,  
            full_time_drivers: 0,  
            full_time_others: 0,  
            staff_on_leave: 0, 

            are_master_holders_adequate: "",
            are_degree_holders_adequate: "",
            are_diploma_holders_adequate: "",
            are_certificate_holders_adequate: "",
            are_data_clerks_adequate: "",
            are_phlebotomists_adequate: "",
            are_cleaners_adequate: "",
            are_drivers_adequate: "",
            are_others_adequate: "",
            are_cleaners_lab_dedicated: "",
            are_drivers_lab_dedicated: "",
            others_description: "",

            minimum_master_holders: "",
            minimum_degree_holders: "",
            minimum_diploma_holders: "",
            minimum_certificate_holders: "",
            minimum_data_clerks: "",
            minimum_phlebotomists: "",
            minimum_cleaners: "",

            are_cleaners_trained_safety_waste: "",
            are_drivers_trained_biosafety: "",
            hpcz_license:null
        }
      });

    
    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    const [rows, setRows] = useState([{ list_1: '', list_2: '' }]); //
    
    const [labName, setLabName] = useState('');

    // Watch the selected Options
    
    const sel_are_master_holders_adequate = watch('are_master_holders_adequate');
    const sel_are_degree_holders_adequate = watch('are_degree_holders_adequate');
    const sel_are_diploma_holders_adequate = watch('are_diploma_holders_adequate');
    const sel_are_certificate_holders_adequate = watch('are_certificate_holders_adequate');
    const sel_are_data_clerks_adequate = watch('are_data_clerks_adequate');
    const sel_are_phlebotomists_adequate = watch('are_phlebotomists_adequate');        
    const sel_are_cleaners_adequate = watch('are_cleaners_adequate');
    const sel_are_drivers_adequate = watch('are_drivers_adequate');      
            
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


        if (data?.list_1 && data?.list_2) {
            const populatedRows = data.list_1.map((item, index) => ({
              list_1: item,
              list_2: data.list_2[index] || '',
            }));
            setRows(populatedRows);
            populatedRows.forEach((row, index) => {
              setValue(`list_1_${index}`, row.list_1);
              setValue(`list_2_${index}`, row.list_2);
            });
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

        // Function to add a new empty row
  const addRow = () => {
    setRows([...rows, { list_1: '', list_2: '' }]);
  };

  // Function to remove a specific row
  const removeRow = (index) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
  };
 
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
         
{/* 
                <Box sx={{ position: 'fixed', bottom: 16, left: 16 }}>
                    <Dialog open={open} onClose={handleClose}>
                        <CardHeader
                            title="Confirm Delete"
                            sx={{
                                backgroundColor: '#f5f5f5',
                                borderBottom: '1px solid #e0e0e0',
                                '& .MuiCardHeader-title': {
                                    color: 'text.secondary', 
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

                

                <FloatingActionButton
                color="error" 
                onClick={handleClickOpen}

                >
                <DeleteIcon />
                </FloatingActionButton> */}
                
                <div>
                    <form id="lab-profile-form" onSubmit={handleSubmit(onSubmit)} component={Paper} sstyle={{ width: '100%' }}  encType="multipart/form-data" >
                        




                                    <CardHeader
                                            title={ labName.toUpperCase() + " : " +  "LABORATORY STAFFING LEVELS "|| ''}
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
                                        
                                        <TableCell align="left" style={cellStyle}><h5>Number Of Full Time Professions</h5></TableCell>
                                        <TableCell align="left" style={cellStyle}><h5>Is Personnel Adequate for facility operations?</h5></TableCell>
                                        <TableCell align="left" style={cellStyle}><h5>Minimium Number of Personnel Required</h5></TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                            <TableRow>
                                                <TableCell align="left" >

                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Master Professional Staff"
                                                    {...register('full_master_holders')}
                                                    type="number"  
                                                    />

                                                </TableCell >

                                                <TableCell align="left" >

                                                    <MyRadioGroup
                                                        name="are_master_holders_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />

                                                </TableCell>

                                                <TableCell align="right" >

                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Minimum Degree-holding Professional Staff"
                                                    {...register('minimum_master_holders')}
                                                    type="number"  
                                                    disabled={sel_are_master_holders_adequate !== 'No'}
                                                    />

                                                </TableCell >

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >

                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Degree-holding Professional Staff"
                                                    {...register('full_time_degree_holders')}
                                                    type="number"  
                                                    />

                                                </TableCell >

                                                <TableCell align="left" >

                                                    <MyRadioGroup
                                                        name="are_degree_holders_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />

                                                </TableCell>

                                                <TableCell align="right" >

                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Minimum Degree-holding Professional Staff"
                                                    {...register('minimum_degree_holders')}
                                                    type="number"  
                                                    disabled={sel_are_degree_holders_adequate !== 'No'}
                                                    />

                                                </TableCell >

                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Diploma-holding Professional Staff"
                                                    {...register('full_time_diploma_holders')}
                                                    type="number"  
                                                    />
                                                </TableCell>
                                                <TableCell align="left">

                                                    <MyRadioGroup
                                                        name="are_diploma_holders_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>

                                                <TableCell align="right" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Minimum Diploma-holding Professional Staff"
                                                        {...register('minimum_diploma_holders')}
                                                        type="number" 
                                                        disabled={sel_are_diploma_holders_adequate !== 'No'} 
                                                        />
                                                </TableCell >

                                            </TableRow>

                                            
                                            <TableRow>
                                            <TableCell align="left">
                                                
                                                    <MyRadioGroup
                                                        label="Are all the Technical staff licensed with the professional body (HPCZ) "
                                                        name="are_cleaners_lab_dedicated"
                                                        options={yes_no_option}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>
                                                
                                                
                                                <TableCell align="left" >


                                                <FormControl fullWidth>
                                                <FormLabel sx={{ float: 'right', mb: 1 }}>
                                                    Upload HPCZ License(s) as one file (pdf, image, docx)
                                                </FormLabel>
                                                <Box>
                                                    <input
                                                    type="file"
                                                    accept=".pdf,.doc,.docx,.jpg,.png"
                                                    onChange={(event) => {
                                                        const file = event.target.files[0];
                                                        setValue('hpcz_license', file); // Set file in the form state
                                                    }}
                                                    {...register('hpcz_license')}
                                                    />
                                                </Box>
                                                </FormControl>


                                                </TableCell >
                                                <TableCell align="left">
                                                    
                                                <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Comment"
                                                        {...register('minimum_diploma_holders')}
                                                        type="text" 
                                                        disabled={sel_are_diploma_holders_adequate !== 'No'} 
                                                        />
                                                </TableCell>
                                            </TableRow>


                                            <TableRow>
                                                <TableCell align="left">
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Certificate-holding Professional Staff"
                                                    {...register('full_time_certificate_holders')}
                                                    type="number"  
                                                    />
                                                </TableCell>
                                                <TableCell align="left" >
                                                    <MyRadioGroup
                                                        name="are_certificate_holders_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>

                                                
                                                <TableCell align="right" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Minimum Certificate-holding Professional Staff"
                                                        {...register('minimum_certificate_holders')}
                                                        type="number"  
                                                        disabled={sel_are_certificate_holders_adequate !== 'No'} 
                                                        />
                                                </TableCell >
                                                
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Data Clerk"
                                                    {...register('full_time_data_clerks')}
                                                    type="number"  
                                                    />
                                                </TableCell>
                                                <TableCell align="left" >
                                                
                                                    <MyRadioGroup
                                                        name="are_data_clerks_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>

                                                
                                                <TableCell align="right" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Minimum Data Clerk Staff "
                                                        {...register('minimum_data_clerks')}
                                                        type="number"  
                                                        disabled={sel_are_data_clerks_adequate !== 'No'}
                                                        />
                                                </TableCell >

                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Phlebotomist"
                                                        {...register('full_time_phlebotomists')}
                                                        type="number"  
                                                    />
                                                </TableCell>
                                                <TableCell align="left">
                                                    
                                                    <MyRadioGroup
                                                        name="are_phlebotomists_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>
                                                
                                                <TableCell align="right" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Minimum Phlebotomist Staff"
                                                        {...register('minimum_phlebotomists')}
                                                        type="number"  
                                                        disabled={sel_are_phlebotomists_adequate !== 'No'}
                                                        />
                                                </TableCell >
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Cleaners"
                                                    {...register('full_time_cleaners')}
                                                    type="number"  
                                                    />
                                                </TableCell>
                                                <TableCell align="left">
                                                    
                                                    <MyRadioGroup
                                                        name="are_cleaners_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>
                                                
                                                <TableCell align="right" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Minimum Cleaning Staff"
                                                        {...register('minimum_cleaners')}
                                                        type="number" 
                                                        disabled={sel_are_cleaners_adequate !== 'No'} 
                                                        />
                                                </TableCell >
                                            </TableRow>
                                            <TableRow>

                                            </TableRow>

                                            <TableRow>
                                            <TableCell align="left">
                                                
                                                    <MyRadioGroup
                                                        label="Is / Are the cleaner(s) dedicated to the laboratory
                                                        only?"
                                                        name="are_cleaners_lab_dedicated"
                                                        options={yes_no_option}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>
                                                <TableCell align="left">
                                                    
                                                    <MyRadioGroup
                                                        label="Has the cleaner(s) been trained on safety and waste handling?"
                                                        name="are_cleaners_trained_safety_waste"
                                                        options={yes_no_option}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>
                                                
                                                <TableCell align="right" >
                                                    
                                                </TableCell >
                                            </TableRow>

                                            <TableRow>
                                                <TableCell align="left">
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Number of Driver/Courier/Messenger"
                                                    {...register('full_time_drivers')}
                                                    type="number"  
                                                    />
                                                </TableCell>
                                                <TableCell align="left">
                                                    <MyRadioGroup
                                                        name="are_drivers_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>
                                                
                                                <TableCell align="right" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Minimum Driver/Courier/Messenger Staff"
                                                        {...register('minimum_drivers')}
                                                        type="number"  
                                                        disabled={sel_are_drivers_adequate !== 'No'} 
                                                        />
                                                </TableCell >
                                            </TableRow>
                                            <TableRow>
                                            <TableCell align="left">
                                                    
                                                    <MyRadioGroup
                                                        label="Is / Are the driver(s) / courier(s) / messenger(s) dedicated to
                                                        the laboratory only?"
                                                        name="are_drivers_lab_dedicated"
                                                        options={yes_no_option}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>
                                                <TableCell align="left">
                                                    <MyRadioGroup
                                                        label="Has / Have driver(s) been trained in biosafety?"
                                                        name="are_drivers_trained_biosafety"
                                                        options={yes_no_option}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                </TableCell>
                                                
                                                <TableCell align="right" >
                                                   
                                                </TableCell >
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    fullWidth
                                                    label="Other Staff"
                                                    {...register('full_time_others')}
                                                    type="number"  
                                                    />
                                                </TableCell>
                                                <TableCell align="left">
                                                    {/* <MyRadioGroup
                                                        name="are_others_adequate"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                     */}
                                                </TableCell>
                                                
                                                <TableCell align="right" >
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant='outlined'
                                                        fullWidth
                                                        label="Other Staff Description"
                                                        {...register('others_description')}
                                                        type="text"  
                                                        />
                                                </TableCell >
                                            </TableRow>
                                        </TableBody>
                                        
                                        </Table>  

                                        <br />
                                        <FormLabel component="legend" sx={{ fontSize: '1.975rem',}}>Lab staff on leave:</FormLabel>   
                                        <hr />
                                        <Table>
                                        
                                        <TableHead>
                                            <TableRow>
                                            <TableCell>
                                                <Button variant="outlined" onClick={addRow} sx={{ mt: 2 }} startIcon={<AddIcon />} color="success"  >
                                                    ADD 
                                                </Button> 
                                      
                                            </TableCell>
                                         
                                        </TableRow>
                                            <TableRow>
                                                <TableCell style={cellStyle}>Name</TableCell>
                                                <TableCell style={cellStyle}>Leave Start Date</TableCell>
                                                <TableCell style={cellStyle}>Leave End Date</TableCell>
                                                <TableCell style={cellStyle}>Duration</TableCell>
                                                <TableCell style={cellStyle}>Profession</TableCell>
                                                <TableCell style={cellStyle}>Purpose</TableCell>
                                                <TableCell style={cellStyle}>Comment</TableCell>
                                                <TableCell style={{...cellStyle, width:'5%'}}>DELETE</TableCell>
                                            
                                            </TableRow> 
                                            </TableHead>
                                        <TableBody>
                                        
                                        {rows.map((row, index) => (
                                            <TableRow key={index}>
                                            <TableCell style={cellStyle}>
                                                <Controller
                                                name={`list_1_${index}`}
                                                control={control}
                                                defaultValue={row.list_1}
                                                render={({ field }) => (
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    {...field}
                                                    variant="outlined"
                                                    label=""
                                                    type="text"
                                                    fullWidth
                                                    />
                                                )}
                                                />
                                            </TableCell>
                                            <TableCell style={cellStyle}>
                                                <Controller
                                                name={`list_2_${index}`}
                                                control={control}
                                                defaultValue={row.list_2}
                                                render={({ field }) => (
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    {...field}
                                                    variant="outlined"
                                                    label=""
                                                    type="date"
                                                    fullWidth
                                                    />
                                                )}
                                                />
                                            </TableCell>
                                            <TableCell style={cellStyle}>
                                                <Controller
                                                name={`list_1_${index}`}
                                                control={control}
                                                defaultValue={row.list_1}
                                                render={({ field }) => (
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    {...field}
                                                    variant="outlined"
                                                    label=""
                                                    type="date"
                                                    fullWidth
                                                    />
                                                )}
                                                />
                                            </TableCell>
                                            
                                            <TableCell style={cellStyle}>
                                                <Controller
                                                name={`list_2_${index}`}
                                                control={control}
                                                defaultValue={row.list_2}
                                                render={({ field }) => (
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    {...field}
                                                    variant="outlined"
                                                    label=""
                                                    type="text"
                                                    fullWidth
                                                    />
                                                )}
                                                />
                                            </TableCell>

                                            <TableCell style={cellStyle}>
                                                <Controller
                                                name={`list_2_${index}`}
                                                control={control}
                                                defaultValue={row.list_2}
                                                render={({ field }) => (
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    {...field}
                                                    variant="outlined"
                                                    label=""
                                                    type="text"
                                                    fullWidth
                                                    />
                                                )}
                                                />
                                            </TableCell>
                                            <TableCell style={cellStyle}>
                                                <Controller
                                                name={`list_1_${index}`}
                                                control={control}
                                                defaultValue={row.list_1}
                                                render={({ field }) => (
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    {...field}
                                                    variant="outlined"
                                                    label=""
                                                    type="text"
                                                    fullWidth
                                                    />
                                                )}
                                                />
                                            </TableCell>

                                            <TableCell style={cellStyle}>
                                                <Controller
                                                name={`list_2_${index}`}
                                                control={control}
                                                defaultValue={row.list_2}
                                                render={({ field }) => (
                                                    <TextField  InputProps={{ readOnly: true }}
                                                    {...field}
                                                    variant="outlined"
                                                    label=""
                                                    type="text"
                                                    fullWidth
                                                    />
                                                )}
                                                />
                                            </TableCell>
                                            <TableCell style={cellStyle}>
                                                <IconButton onClick={() => removeRow(index)} color="error">
                                                <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                            </TableRow>
                                        ))}
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
