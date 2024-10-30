/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';

import { Grid, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import SaveIcon from '@mui/icons-material/Save';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import  Dialog from '@mui/material/Dialog';
import  DialogContent from '@mui/material/DialogContent';
import Snackbar from '@mui/material/Snackbar';
import { IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';

import MyRadioGroup from './MyRadioGroup';

import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";

const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
  };

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
        ];

    const lab_types_options = [
        { label: 'Public', value: 'Public'},
        { label: 'Private', value: 'Private'},
        { label: 'Faith-Based', value: 'Faith-Based'},
        { label: 'Military', value: 'Military'},
        { label: 'Research', value: 'Research'},
        { label: 'Other', value: 'Other' },  
    ];

    const lab_adequate_options = [
        { label : 'Yes', value: 'Yes' },
        { label : 'No', value: 'No' },
        { label : 'Insufficient Data', value: 'Insufficient_Data'}

    ];

    const yes_no_option = [
        { label : 'Yes', value: 'Yes' },
        { label : 'No', value: 'No' },
    ]

 
export function LabProfileForm( props ){



    const { refresh } = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState('');


    const user = getUser();


    const { control, reset, register, handleSubmit,setValue, watch, formState: { errors } } = useForm({

        defaultValues: {

            auditor: user.id,
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
            lab_rep_name: '',
            lab_rep_tel_personal: '',
            lab_rep_tel_work: '',
            lab_incharge_name: '',
            lab_incharge_phone: '',
            lab_incharge_email: '',
            lab_incharge_qualification: '',
            lab_level_description: '',
            lab_tier_level: '',
            lab_tier_level_other: '',
            lab_type_description: ''
 
        }
    });

    

    const [cityOptions, setCityOptions] = useState([]);
    const province = watch('province');

    const selectedLabTierLevel = watch('lab_tier_level'); // Watch the selected value for lab_tier_level
    


    useEffect(() => {
          // Update city options dynamically if the province changes
          if (province) {
            setCityOptions(provinceCityData[province] || []);
            setValue('lab_city_town', ''); // Reset city selection if the province changes
          }
    },[province])


        
    const onDialogOpen = () => {
        setDialogOpen(true);
    };
    const onDialogClose = () => {
        setDialogOpen(false);
    };

    const onSnackbarClose = (e, reason) => {
        if (reason === 'clickaway') {
        return;
        } 
        setSnackbarOpen(false);
        setSnackbarMessage('');
    }

    const onSubmit = form => {
        

        axiosService
        .post(`/slipta/lab_profile/`,form)
        .then(() => {
        onDialogClose();
        setSnackbarOpen(true);
        setSnackbarMessage(`Lab profile created`);
        refresh();
        reset();
        })
        .catch((err) => {
            if (err.message) {
                setError(err.request.response);
            }
            setSnackbarOpen(true);
            setSnackbarMessage(`${error}`);
            refresh();
        });
      };

    return (
        <>
           <Tooltip title="Create Laboratory Profile">
            <IconButton
            color="success"
            onClick={onDialogOpen}
            sx={{
                ml: 0,
                fontSize: '1.25rem',
                padding: '8px',
                border: '2px solid #4caf50',
                borderRadius: '50%',
                '&:hover': {
                borderColor: '#388e3c', 
                }
            }}
            >
            <AddIcon />
            </IconButton>
        </Tooltip>
        <Dialog open={dialogOpen} onClose={onDialogClose} maxWidth='lg'>
            <CardHeader
                title="CREATE LABORATORY PROFILE"
                sx={{
                    backgroundColor: '#f5f5f5',
                    borderBottom: '1px solid #e0e0e0',
                    '& .MuiCardHeader-title': {
                        color: 'text.secondary',
                    }
                }}
                />
            <DialogContent>
                <form id="lab-profile-form" onSubmit={handleSubmit(onSubmit)} >
            <Card>
                <CardContent>
                
                            <Grid container spacing={2} mb={2} >

                                <Grid item xs={6} sm={6} md={6} >
                                <TextField
                                    variant='outlined'
                                    label="Laboratory Name"
                                    fullWidth
                                    {...register('lab_name')}
                                    type="text"
                                    required
                                />
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} >
                                <TextField
                                    variant='outlined'
                                    label="Laboratory Number"
                                    fullWidth
                                    {...register('lab_number')}
                                    type="text"
                                    required
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
                                            <TextField
                                            variant="outlined"
                                            label="Laboratory : Physical Address"
                                            fullWidth
                                            {...register('lab_physical_address')}
                                            />
                                        </Grid>
                            
                            </Grid>


                            <br />
                            <Grid container spacing={2} mb={2} >
                                
                                <Grid item xs={4} sm={4} md={4} >
                                    <TextField
                                        variant='outlined'
                                        label="Laboratory Telephone"
                                        fullWidth
                                        {...register('lab_phone')}
                                        type="text"
                                        required
                                    />
                                </Grid>

                                <Grid item xs={4} sm={4} md={4} >
                                    <TextField
                                        variant='outlined'
                                        label="Laboratory Fax"
                                        fullWidth
                                        {...register('lab_fax')}
                                        type="text"
                                       
                                    />
                                </Grid>

                                <Grid item xs={4} sm={4} md={4} >
                                    <TextField
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
                                    <TextField
                                        variant='outlined'
                                        label="Name"
                                        fullWidth
                                        {...register('lab_incharge_name')}
                                        type="text"
                                        required
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3} md={3} >
                                    <TextField
                                        variant='outlined'
                                        label="Telephone"
                                        fullWidth
                                        {...register('lab_incharge_phone')}
                                        type="text"
                                        
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3} md={3} >
                                    <TextField
                                        variant='outlined'
                                        label="Email Address"
                                        fullWidth
                                        {...register('lab_incharge_email')}
                                        type="email"
                                        required
                                    />
                                </Grid>

                                <Grid item xs={3} sm={3} md={3} >
                                    <TextField
                                        variant='outlined'
                                        label="Qualification"
                                        fullWidth
                                        {...register('lab_incharge_qualification')}
                                        type="text"
                                        required
                                    />
                                </Grid>
                                
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
                                            <TextField
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
                            <Grid item  xs={12} sm={6} md={6}>
                            
                            </Grid>
                            <Table style={tableStyle}>
                            <TableHead>
                            <TableRow>
                            
                            <TableCell align="left" style={cellStyle}>Laboratory Level</TableCell>
                            <TableCell align="left" style={cellStyle}>Laboratory Type / Affiliation </TableCell>
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
                                <TextField
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
                                    <TextField
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
                            <br />

                            {/* Laboratory Staffing Summary */}
{/* 
                            <FormLabel component="legend">Laboratory Staffing Summary:</FormLabel>

                            <Table style={tableStyle}>
                            <TableHead>
                            <TableRow>
                            
                            <TableCell align="left" style={cellStyle}>Full Time Professions</TableCell>
                            <TableCell align="left" style={cellStyle}>Adequate for facility operations?</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        <TextField
                                        variant='outlined'
                                        fullWidth
                                        label="Degree-holding Professional Staff"
                                        {...register('full_time_degree_holders')}
                                        type="number"  
                                        />
                                    </TableCell >
                                    <TableCell align="left" style={cellStyle}>

                                        <MyRadioGroup
                                            name="are_degree_holders_adequate"
                                            options={lab_adequate_options}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />

                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        <TextField
                                        variant='outlined'
                                        fullWidth
                                        label="Diploma-holding Professional Staff"
                                        {...register('full_time_diploma_holders')}
                                        type="number"  
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>

                                         <MyRadioGroup
                                            name="are_diploma_holders_adequate"
                                            options={lab_adequate_options}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        <TextField
                                        variant='outlined'
                                        fullWidth
                                        label="Certificate-holding Professional Staff"
                                        {...register('full_time_certificate_holders')}
                                        type="number"  
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                        <MyRadioGroup
                                            name="are_certificate_holders_adequate"
                                            options={lab_adequate_options}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        <TextField
                                        variant='outlined'
                                        fullWidth
                                        label="Data Clerk"
                                        {...register('full_time_data_clerks')}
                                        type="number"  
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    
                                        <MyRadioGroup
                                            name="are_data_clerks_adequate"
                                            options={lab_adequate_options}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            label="Phlebotomist"
                                            {...register('full_time_phlebotomists')}
                                            type="number"  
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                        
                                        <MyRadioGroup
                                            name="are_phlebotomists_adequate"
                                            options={lab_adequate_options}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        <TextField
                                        variant='outlined'
                                        fullWidth
                                        label="Cleaner"
                                        {...register('full_time_cleaners')}
                                        type="number"  
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                        
                                         <MyRadioGroup
                                            name="are_cleaners_adequate"
                                            options={lab_adequate_options}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" style={cellStyle}>
                                       
                                        <MyRadioGroup
                                            label="Is / Are the cleaner(s) dedicated to the laboratory
                                            only?"
                                            name="are_cleaners_lab_dedicated"
                                            options={yes_no_option}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                        
                                        <MyRadioGroup
                                            label="Has the cleaner(s) been trained on safety and waste handling?"
                                            name="are_cleaners_trained_safety_waste"
                                            options={yes_no_option}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        <TextField
                                        variant='outlined'
                                        fullWidth
                                        label="Number of Driver/Courier/Messenger"
                                        {...register('full_time_drivers')}
                                        type="number"  
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                         <MyRadioGroup
                                            name="are_drivers_adequate"
                                            options={lab_adequate_options}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                <TableCell align="left" style={cellStyle}>
                                        
                                        <MyRadioGroup
                                            label="Is / Are the driver(s) / courier(s) / messenger(s) dedicated to
                                            the laboratory only?"
                                            name="are_drivers_lab_dedicated"
                                            options={yes_no_option}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                         <MyRadioGroup
                                            label="Has / Have driver(s) been trained in biosafety?"
                                            name="are_drivers_trained_biosafety"
                                            options={yes_no_option}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                        <TextField
                                        variant='outlined'
                                        fullWidth
                                        label="Other"
                                        {...register('full_time_others')}
                                        type="number"  
                                        />
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                           <MyRadioGroup
                                            name="are_others_adequate"
                                            options={lab_adequate_options}
                                            control={control}
                                            rules={{ required: 'Please select one option' }}
                                        />
                                        
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                            
                            </Table> */}

                   
                </CardContent>
                <CardActions
                sx={{ justifyContent: 'flex-end', backgroundColor: '#f5f5f5', borderTop: '1px solid #e0e0e0' }}
                >
                            <Grid item>
                                {/* <Button variant="contained" color="success" type='submit'>SUBMIT PROFILE</Button> */}
                                <Button onClick={onDialogClose} color="primary">
                                    Cancel
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        startIcon={<SaveIcon />}
                                        >
                                    SAVE
                                    </Button>
                            </Grid>
                </CardActions>
                 
                </Card>
                </form>
            </DialogContent>

        </Dialog>
        <Snackbar
            open={snackbarOpen}
            message={snackbarMessage}
            onClose={onSnackbarClose}
            autoHideDuration={10000}
        />

    </>
        
    );

}