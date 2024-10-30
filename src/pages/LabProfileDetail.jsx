/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";

import { Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';
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

const lab_adequate_options = [
    { label : 'Yes', value: 'Yes' },
    { label : 'No', value: 'No' },

  ];

const lab_cert_accr_options = [
    { label : 'Certified', value: 'Certified' },
    { label : 'Accredited', value: 'Accredited' },

  ];

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


  const FloatingActionButton = styled(Fab)(({ theme }) => ({
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    zIndex: 1200,
  }));


const provinceCityData  = {
    'Central Province': ['Kabwe', 'Kapiri Mposhi', 'Serenje', 'Mkushi', 'Mumbwa', 'Chibombo', 'Chisamba', 'Itezhi-Tezhi', 'Liteta', 'Mulungushi'],
    'Copperbelt Province': ['Ndola', 'Kitwe', 'Chingola', 'Mufulira', 'Luanshya', 'Kalulushi', 'Chililabombwe', 'Lufwanyama', 'Masaiti', 'Mpongwe'],
    'Eastern Province': ['Chipata', 'Petauke', 'Katete', 'Lundazi', 'Nyimba', 'Sinda', 'Mambwe', 'Vubwi', 'Chadiza'],
    'Luapula Province': ['Mansa', 'Samfya', 'Kawambwa', 'Nchelenge', 'Mwansabombwe', 'Mwense', 'Chienge', 'Chembe', 'Milenge', 'Chipili', 'Lunga'],
    'Lusaka Province': ['Lusaka', 'Chongwe', 'Kafue', 'Chilanga', 'Rufunsa'],
    'Muchinga Province': ['Chinsali', 'Mpika', 'Nakonde', 'Isoka', 'Mafinga', 'Shiwang\'andu', 'Kanchibiya', 'Lavushimanda'],
    'Northern Province': ['Kasama', 'Mbala', 'Mpulungu', 'Mporokoso', 'Kaputa', 'Luwingu', 'Chilubi', 'Nsama', 'Senga Hill', 'Lunte'],
    'North-Western Province': ['Solwezi', 'Kasempa', 'Mwinilunga', 'Zambezi', 'Chavuma', 'Kabompo', 'Manyinga', 'Kalumbila', 'Mushindamo'],
    'Southern Province': ['Choma', 'Livingstone', 'Mazabuka', 'Monze', 'Kalomo', 'Namwala', 'Siavonga', 'Gwembe', 'Sinazongwe', 'Kazungula', 'Itezhi-Tezhi', 'Pemba', 'Zimba'],
    'Western Province': ['Mongu', 'Senanga', 'Kaoma', 'Sesheke', 'Kalabo', 'Lukulu', 'Shangombo', 'Sioma', 'Nalolo', 'Mwandi', 'Limulunga', 'Mitete']
    };

const lab_tier_level_options = [
    { label: 'I', value: 'I' },
    { label: 'II', value: 'II' },
    { label: 'III', value: 'III' },
    { label: 'IV', value: 'IV'},
    { label: 'V', value: 'V'},
    { label: 'Health Center', value: 'Health Center'},
    { label: 'Other', value:'Other'},
    ];

const lab_level_options = [
    { label: 'National', value: 'National' },
    { label: 'Reference', value: 'Reference' },
    { label: 'Provincial', value: 'Provincial' },
    { label: 'District', value: 'District'},
    { label: 'Zonal', value: 'Zonal'},
    { label: 'Field', value: 'Field'},
    { label: 'Other', value: 'Other' },  
    ];
  const lab_types_options = [
    { label: 'Public', value: 'Public'},
    { label: 'Private', value: 'Private'},
    { label: 'Faith-Based', value: 'Faith-Based'},
    { label: 'Military', value: 'Military'},
    { label: 'Research', value: 'Research'},
    { label: 'Other', value: 'Other' },  
  ];



export function LabProfileDetail(){

    const { lab_profileId} = useParams();
    const navigate = useNavigate();

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {

            lab_name: '',
            lab_number: '',
            lab_address: '',
            province: '',
            lab_city_town: '',
            lab_physical_address: '',
            lab_phone: '',
            lab_fax: '',
            lab_email: '',
            lab_level: '',
            lab_type: '',
            lab_incharge_name: '',
            lab_incharge_phone: '',
            lab_incharge_email: '',
            lab_incharge_qualification: '',
            lab_level_description: '',
            lab_tier_level: '',
            is_lab_certified_prof:"",
            is_lab_certified_prof_comment:"",
            is_lab_accredited_prof:"",
            is_lab_accredited_prof_comment:"",
            lab_tier_level_other: '',
            lab_type_description: ''


        }
      });
    const labProfile = useSelector((state) => state.labProfile);


    const [open, setOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [errorPut, setErrorPut] = useState('');
    
    const [cityOptions, setCityOptions] = useState([]);
    const province = watch('province');

    const [labName, setLabName] = useState('');


    const selectedLabTierLevel = watch('lab_tier_level'); // Watch the selected value for lab_tier_level
    
    
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
            
            if (data.province) {
                setValue('province', data.province);  // Set initial province value
                setCityOptions(provinceCityData[data.province] || []); // Set city options based on initial province
            }
            if (data.lab_city_town) {
                setValue('lab_city_town', data.lab_city_town);  // Set initial city/town value
            }
        }
      

      }, [data,province, provinceCityData, setValue, dispatch]);
      

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
        console.log(form)
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
         

                
                    <form id="lab-profile-form" onSubmit={handleSubmit(onSubmit)} component={Paper} sx={{padding: '10px' }} >
                        <Card sx={{ maxWidth: '100%', mb: 2 }}>
                        <CardHeader
                            title={ labName.toUpperCase() + " : " +  "LABORATORY PROFILE "|| ''}
                            sx={{
                                backgroundColor: '#ddd',
                                borderBottom: '1px solid #e0e0e0',
                                '& .MuiCardHeader-title': {
                                    color: 'text.secondary',
                                }
                            }}
                        />
                            
                            <CardContent>
                            
                                        <Grid container spacing={2} mb={2} >

                                            <Grid item xs={6} sm={6} md={6} >
                                            <TextField  InputProps={{ readOnly: true }}
                                                variant='outlined'
                                                label="Laboratory Name"
                                                fullWidth
                                                {...register('lab_name')}
                                                type="text"
                                                
                                            />
                                            </Grid>
                                            <Grid item xs={6} sm={6} md={6} >
                                            <TextField  InputProps={{ readOnly: true }}
                                                variant='outlined'
                                                label="Laboratory HPCZ License No."
                                                fullWidth
                                                {...register('lab_number')}
                                                type="text"
                                                
                                            />
                                            </Grid>

                                        </Grid>
                                        
                                        <br />
                                        <Grid container spacing={2} mb={2}>
                                       
                                       {/* Province Dropdown */}
                                        <Grid item xs={4} sm={4} md={4}>
                                            <FormControl fullWidth variant="outlined">
                                            <InputLabel>Laboratory: Province</InputLabel>
                                            <Select
                                                label="Province"
                                                value={province || ''}
                                                onChange={(e) => {
                                                setValue('province', e.target.value);
                                                setCityOptions(provinceCityData[e.target.value] || []); // Dynamically set city options based on selected province
                                                setValue('lab_city_town', ''); // Reset city/town value when province changes
                                                }}
                                                {...register('province')}
                                            >
                                                {Object.keys(provinceCityData).map((prov) => (
                                                <MenuItem key={prov} value={prov}>
                                                    {prov}
                                                </MenuItem>
                                                ))}
                                            </Select>
                                            </FormControl>
                                        </Grid>

                                        {/* City/Town Dropdown */}
                                        <Grid item xs={4} sm={4} md={4}>
                                            <FormControl fullWidth variant="outlined">
                                            <InputLabel>Laboratory: City/Town</InputLabel>
                                            <Select
                                                label="City/Town"
                                                value={watch('lab_city_town') || ''}
                                                onChange={(e) => setValue('lab_city_town', e.target.value)}
                                                {...register('lab_city_town')}
                                            >
                                                {cityOptions.length > 0 ? (
                                                cityOptions.map((city) => (
                                                    <MenuItem key={city} value={city}>
                                                    {city}
                                                    </MenuItem>
                                                ))
                                                ) : (
                                                <MenuItem value="" disabled>
                                                    Select a province first
                                                </MenuItem>
                                                )}
                                            </Select>
                                            </FormControl>
                                        </Grid>

                                        {/* Physical Address Field */}
                                        <Grid item xs={4} sm={4} md={4}>
                                            <TextField  InputProps={{ readOnly: true }}
                                            variant="outlined"
                                            label="Laboratory : Physical Address"
                                            fullWidth
                                            {...register('lab_physical_address')}
                                            />
                                        </Grid>

                                        </Grid>
                                        
                                        <Grid container spacing={2} mb={2} mt={4} >
                                            
                                            <Grid item xs={4} sm={4} md={4} >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    label="Laboratory Telephone"
                                                    fullWidth
                                                    {...register('lab_phone')}
                                                    type="text"
                                                    required
                                                />
                                            </Grid>

                                            <Grid item xs={4} sm={4} md={4} >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    label="Laboratory Fax"
                                                    fullWidth
                                                    {...register('lab_fax')}
                                                    type="text"
                                                
                                                />
                                            </Grid>

                                            <Grid item xs={4} sm={4} md={4} >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    label="Laboratory Email"
                                                    fullWidth
                                                    {...register('lab_email')}
                                                    type="email"
                                                    
                                                />
                                            </Grid>

                                        </Grid>

                                        <br />
                                        <FormLabel component="legend">Laboratory Incharge:</FormLabel>

                                        <Grid container spacing={2} mb={2} >
                                            
                                            <Grid item xs={3} sm={3} md={3} >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    label="Name"
                                                    fullWidth
                                                    {...register('lab_incharge_name')}
                                                    type="text"
                                                    required
                                                />
                                            </Grid>

                                            <Grid item xs={3} sm={3} md={3} >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    label="Telephone"
                                                    fullWidth
                                                    {...register('lab_incharge_phone')}
                                                    type="text"
                                                    
                                                />
                                            </Grid>

                                            <Grid item xs={3} sm={3} md={3} >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    label="Email Address"
                                                    fullWidth
                                                    {...register('lab_incharge_email')}
                                                    type="email"
                                                    required
                                                />
                                            </Grid>

                                            <Grid item xs={3} sm={3} md={3} >
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant='outlined'
                                                    label="Qualification"
                                                    fullWidth
                                                    {...register('lab_incharge_qualification')}
                                                    type="text"
                                                    required
                                                />
                                            </Grid>
                                            
                                        </Grid>

                                    
                                        <Grid item  xs={12} sm={6} md={6}>
                                        
                                        </Grid>
                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                        
                                        <TableCell align="left" style={cellStyle}>Laboratory Tier Level</TableCell>
                                        
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                        <TableRow>
                                            
                                            <TableCell align="left" style={cellStyle}> 

                                                <MyRadioGroup
                                                    name="lab_tier_level"
                                                    options={lab_tier_level_options}
                                                    control={control}
                                                    rules={{ required: 'Please select one option' }}
                                                    
                                                />
                                            
                                            </TableCell>
                                            
                                        </TableRow>

                                        <TableRow>
                                            <TableCell align="left" style={cellStyle}>
                                            <TextField  InputProps={{ readOnly: true }}
                                                variant="outlined"
                                                fullWidth
                                                multiline
                                                rows={3}
                                                {...register('lab_tier_level_other')}
                                                label="Specify"
                                                type="text"
                                                disabled={selectedLabTierLevel !== 'Other'} // Disable if "Other" is not selected
                                            />
                                            </TableCell>
                                        </TableRow>
                                        
                                        </TableBody>
                                        </Table>
                                        <br />
                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                        
                                        <TableCell align="left" style={cellStyle}></TableCell>
                                        
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                        <TableRow>
                                                <TableCell align="left" >
                                                Is Laboratory Certified/Accredited

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="is_lab_certified_prof"
                                                        options={lab_adequate_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br />
                                                {/* Is Laboratory Accredited */}

                                                {/* <br /><br /> */}
                                                <MyRadioGroup
                                                        name="is_lab_accredited_prof"
                                                      
                                                        options={lab_cert_accr_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /> <br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('is_lab_accredited_prof_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />
                                                {/* <br /> <br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('is_lab_certified_prof_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    /> */}

                                                </TableCell >
                                        </TableRow>
{/* 
                                        <TableRow>
                                                <TableCell align="left" >
                                                Is Laboratory Accredited

                                                <br /><br />
                                                <MyRadioGroup
                                                        name="is_lab_accredited_prof"
                                                      
                                                        options={lab_cert_accr_options}
                                                        control={control}
                                                        rules={{ required: 'Please select one option' }}
                                                    />
                                                <br /> <br />
                                                <TextField  InputProps={{ readOnly: true }}
                                                    variant="outlined"
                                                    fullWidth
                                                    label="Comment"
                                                    {...register('is_lab_accredited_prof_comment')}
                                                    type="text" 
                                                    multiline
										            rows={2} 
                                                    
                                                    />

                                                </TableCell >
                                        </TableRow> */}
                                        
                                        </TableBody>
                                        </Table>

                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                        
                                        <TableCell align="left" style={cellStyle}>Laboratory Type </TableCell>
                                        <TableCell align="left" style={cellStyle}>Laboratory Affiliation </TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                        <TableRow>
                                            
                                            <TableCell align="left" style={cellStyle}> 

                                                <MyRadioGroup
                                                    name="lab_level"
                                                    options={lab_level_options}
                                                    control={control}
                                                    rules={{ required: 'Please select one option' }}
                                                />
                                            
                                            </TableCell>

                                            <TableCell align="left" style={cellStyle}> 
                                        
                                                <MyRadioGroup
                                                    name="lab_type"
                                                    options={lab_types_options}
                                                    control={control}
                                                    rules={{ required: 'Please select one option' }}
                                                />
                                        
                                            </TableCell>
                                            
                                        </TableRow>

                                        <TableRow>
                                        
                                        <TableCell align="left" style={cellStyle}>
                                            <TextField  InputProps={{ readOnly: true }}
                                                variant='outlined'
                                                fullWidth
                                                multiline
                                                rows={3}
                                                {...register('lab_level_description')}
                                                label="Specify"
                                                type="text"  
                                            />
                
                                            
                                        </TableCell>
                                        <TableCell align="left" style={cellStyle}>
                                                <TextField  InputProps={{ readOnly: true }}
                                                variant='outlined'
                                                fullWidth
                                                multiline
                                                rows={3}
                                                {...register('lab_type_description')}
                                                label="Specify"
                                                type="text"  
                                                />
                
                                        </TableCell>
                                        </TableRow>
                                        
                                        </TableBody>
                                        </Table>

                            </CardContent>
                                                                
                            </Card>
                    </form>

                   
                
             
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
