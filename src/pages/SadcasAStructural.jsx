/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";

import { Grid, TextField} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';
import { useSelector } from 'react-redux'; 


import CardHeader from '@mui/material/CardHeader';


import { useDispatch } from 'react-redux';


import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import { styled } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
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
    width: '500px', // Set the width to 400px
  };



  const Alert = styled(MuiAlert)(({ theme }) => ({
    // width: '100%',
  }))


  const lab_adequate_options = [
    { label : 'Yes', value: 'Yes' },
    { label : 'No', value: 'No' },

  ];


export function SadcasAStructural(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {

            na_5_1:"",
            nc_5_1:"",
            c_5_1:"",
            comment_5_1:"",

            na_5_2_1:"",
            nc_5_2_1:"",
            c_5_2_1:"",
            comment_5_2_1:"",

            // na_5_2_1:"",
            // nc_5_2_1:"",
            // c_5_2_1:"",
            // comment_5_2_1:"",

            na_5_2_2_i:"",
            nc_5_2_2_i:"",
            c_5_2_2_i:"",
            comment_5_2_2_i:"",

            na_5_2_2_ii:"",
            nc_5_2_2_ii:"",
            c_5_2_2_ii:"",
            comment_5_2_2_ii:"",

            na_5_2_3_i:"",
            nc_5_2_3_i:"",
            c_5_2_2_3_i:"",
            comment_5_2_2_3_i:"",

            na_5_2_3_ii:"",
            nc_5_2_3_ii:"",
            c_5_2_2_3_ii:"",
            comment_5_2_2_3_ii:"",

            na_5_3_1:"",
            nc_5_3_1:"",
            c_5_3_1:"",
            comment_5_3_1:"",

            na_5_3_2_i:"",
            nc_5_3_2_i:"",
            c_5_3_2_i:"",
            comment_5_3_2_i:"",

            na_5_3_2_ii:"",
            nc_5_3_2_ii:"",
            c_5_3_2_ii:"",
            comment_5_3_2_ii:"",

            na_5_3_3:"",
            nc_5_3_3:"",
            c_5_3_3:"",
            comment_5_3_3:"",

            na_5_3_3_a:"",
            nc_5_3_3_a:"",
            c_5_3_3_a:"",
            comment_5_3_3_a:"",
        
            na_5_3_3_b:"",
            nc_5_3_3_b:"",
            c_5_3_3_b:"",
            comment_5_3_3_b:"",
    
            na_5_3_3_c:"",
            nc_5_3_3_c:"",
            c_5_3_3_c:"",
            comment_5_3_3_c:"",
                    
            na_5_3_3_d:"",
            nc_5_3_3_d:"",
            c_5_3_3_d:"",
            comment_5_3_3_d:"",
                       
            na_5_4_1_a_i:"",
            nc_5_4_1_a_i:"",
            c_5_4_1_a_i:"",
            comment_5_4_1_a_i:"",
                        
            na_5_4_1_a_ii:"",
            nc_5_4_1_a_ii:"",
            c_5_4_1_a_ii:"",
            comment_5_4_1_a_ii:"",
                  
            na_5_4_1_b:"",
            nc_5_4_1_b:"",
            c_5_4_1_b:"",
            comment_5_4_1_b:"",

            na_5_4_1_c:"",
            nc_5_4_1_c:"",
            c_5_4_1_c:"",
            comment_5_4_1_c:"",

            na_5_4_2_a:"",
            nc_5_4_2_a:"",
            c_5_4_2_a:"",
            comment_5_4_2_a:"",

            na_5_4_2_b:"",
            nc_5_4_2_b:"",
            c_5_4_2_b:"",
            comment_5_4_2_b:"",

            na_5_4_2_c:"",
            nc_5_4_2_c:"",
            c_5_4_2_c:"",
            comment_5_4_2_c:"",

            na_5_4_2_d:"",
            nc_5_4_2_d:"",
            c_5_4_2_d:"",
            comment_5_4_2_d:"",

            na_5_4_2_e:"",
            nc_5_4_2_e:"",
            c_5_4_2_e:"",
            comment_5_4_2_e:"",

            na_5_5_a:"",
            nc_5_5_a:"",
            c_5_5_a:"",
            comment_5_5_a:"",

            na_5_5_a_i:"",
            nc_5_5_a_i:"",
            c_5_5_a_i:"",
            comment_5_5_i:"",

            na_5_5_a_ii:"",
            nc_5_5_a_ii:"",
            c_5_5_a_ii:"",
            comment_5_5_ii:"",

            na_5_5_a_iii:"",
            nc_5_5_a_iii:"",
            c_5_5_a_iii:"",
            comment_5_5_iii:"",

            na_5_5_a_iv:"",
            nc_5_5_a_iv:"",
            c_5_5_a_iv:"",
            comment_5_5_iv:"",

            na_5_5_b:"",
            nc_5_5_b:"",
            c_5_5_b:"",
            comment_5_5_b:"",

            na_5_5_c:"",
            nc_5_5_c:"",
            c_5_5_c:"",
            comment_5_5_c:"",

            na_5_5_d:"",
            nc_5_5_d:"",
            c_5_5_d:"",
            comment_5_5_d:"",

            na_5_6_a:"",
            nc_5_6_a:"",
            c_5_6_a:"",
            comment_5_6_a:"",
            
            na_5_6_b:"",
            nc_5_6_b:"",
            c_5_6_b:"",
            comment_5_6_b:"",

        }
      });



      const sadcasa = useSelector((state) => state.sadcasa);
      console.log(sadcasa)
      const [open, setOpen] = useState(false);
      const [snackbarOpen, setSnackbarOpen] = useState(false);
      const [snackbarMessage, setSnackbarMessage] = useState('');
      const [errorPut, setErrorPut] = useState('');
      
      const [labName, setLabName] = useState('');
  
      // Watch the selected Options
              
      const { lab_profileId} = useParams();
      const navigate = useNavigate();
  
      
      const { data, error } = useSWR(`/slipta/lab_profile/${lab_profileId}/sadcasa/${sadcasa.id}/`, fetcher, {
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
          .delete(`/slipta/lab_profile/${lab_profileId}/sadcasa/${sadcasa.id}/`)
          .then(() => {
              navigate(`/sadcas_a_summary/${lab_profileId}/`);
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
          
          if (data) {
              console.log(data)
            // Populate form fields from data
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                setValue(key, data[key]);
              }
            }
            setLabName(data.lab_profile.lab_name)
            console.log(labName)
            
          }
        
        }, [data, setValue, dispatch]);
        
        console.log(labName)
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
          .put(`/slipta/lab_profile/${lab_profileId}/sadcasa/${sadcasa.id}/`,form)
          .then(() => {
            setSnackbarOpen(true);
            setSnackbarMessage(`SADCAS:F134 A  Updated`);
            
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
                <Box sx={{ mb: 2, textAlign: 'left' }}>
                            <img src="/Sadcas_a.jpg" alt="Logo" style={{ width: '200px', height: '65px' }} />
                        </Box>
                
                <div>
                    <form id="lab-profile-form" onSubmit={handleSubmit(onSubmit)} component={Paper} sstyle={{ width: '100%' }}  encType="multipart/form-data" >
                        




                                    <CardHeader
                                            title={ labName.toUpperCase() + " : " +  "CLAUSE 5 - STRUCTURAL AND GOVERNANCE REQUIREMENTS "|| ''}
                                            sx={{
                                                backgroundColor: '#ddd',
                                                borderBottom: '1px solid #e0e0e0',
                                                '& .MuiCardHeader-title': {
                                                    color: 'text.secondary',
                                                }
                                            }}
                                        />

                                                                           
                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                            <TableCell style={{...cellStyle, width: '5%' }}>Clause No</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>Requirement</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>NA</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>NC</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>C</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>Comments</TableCell>                                  
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            
                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>5.1</TableCell>
                                                <TableCell><b>Legal Entity</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {legal.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`nc_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`c_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                                </TableRow>
                                            ))}


                                            <TableRow>
                                                <TableCell style={{ ...cellStyle }}>5.2</TableCell>
                                                <TableCell><b>Laboratory Director</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>

                                                {lab_director.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`nc_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`c_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                              </TableRow>

                                            ))}

                                            
                                        <TableRow>
                                                <TableCell style={{ ...cellStyle }}>5.3</TableCell>
                                                <TableCell><b>Laboratory Activities</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>

                                            
                                                {lab_activities.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`nc_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`c_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                              </TableRow>

                                            ))}


                                                   
                                        <TableRow>
                                                <TableCell style={{ ...cellStyle }}>5.4</TableCell>
                                                <TableCell><b>Structure and Authority</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>

                                            
                                                {structure_authority.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`nc_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`c_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                              </TableRow>

                                            ))} 


                                                        
                                        <TableRow>
                                                <TableCell style={{ ...cellStyle }}>5.5</TableCell>
                                                <TableCell><b>Objectives and Policies</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>

                                            
                                                {objective_polices.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`nc_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`c_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                              </TableRow>

                                            ))} 

                                                            
                                        <TableRow>
                                                <TableCell style={{ ...cellStyle }}>5.6</TableCell>
                                                <TableCell><b>Risk Management</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>

                                            
                                                {risk.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                    <b> {item.clause} </b>   <b> {item.title} </b> <br /> <br /> {item.name}
                                                    </TableCell>
                                                    
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`na_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`nc_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`c_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>
                                                    <TableCell style={{ ...cellStyle }}>
                                                    <TextField  InputProps={{ readOnly: true }}
                                                        variant="outlined"
                                                        fullWidth
                                                        label=""
                                                        {...register(`comment_${item.value}`)}
                                                        type="text" 
                                                        multiline
                                                        rows={2} 
                                                        />
                                                    </TableCell>

                                              </TableRow>

                                            ))} 
                                           
                                        </TableBody>
                                        
                                    </Table>     
                        
                    </form>
                </div>
                   

    </LayoutQ>
    );
}





const legal = [
	{
		id: 1,
        clause: '',
        title: '',
		name: `Is the laboratory or the organization of which the laboratory is a part, an entity that can be held legally responsible for its activities?        
        NOTE: A government laboratory is deemed to be a legal entity on the basis of its government status.
        `,
		value: '5_1',
	},

]

const risk = [
	{
		id: 1,
        clause: '',
        title: '',
		name: `a)	Has laboratory management established, implemented, and maintained processes for identifying risks of harm to patients and opportunities for
          improved patient care associated with its examinations and activities, and have actions been developed to address both risks and opportunities for improvement?`,
		value: '5_6_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `b)	Does the laboratory director \ensure that these processes are evaluated for effectiveness and modified, when identified as being ineffective?`,
		value: '5_6_b',
	},

]


const objective_polices = [
	{
		id: 1,
        clause: '',
        title: '',
        name: `a)	Has the laboratory management established, and do they maintain objectives and policies to:`,
        value: '5_5_a',
	},
    {
		id: 1,
        clause: '',
        title: '',
        name: ` 1)	meet the needs and requirements of its patients and users;`,
        value: '5_5_a_i',
	},
    {
		id: 1,
        clause: '',
        title: '',
        name: `  2)	commit to good professional practice;`,
        value: '5_5_a_ii',
	},
    {
		id: 1,
        clause: '',
        title: '',
        name: `3)	provide examinations that fulfil their intended use;`,
        value: '5_5_a_iii',
	},
    {
		id: 1,
        clause: '',
        title: '',
        name: `4)	conform to ISO 15189:2022.`,
        value: '5_5_a_iv',
	},

  {
		id: 1,
        clause: '',
        title: '',
        name: `b)	Are objectives measurable, and consistent with policies? How does the laboratory ensure that the objectives and policies 
        are implemented at all levels of the laboratory organization?`,
        value: '5_5_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `c)	How does the laboratory management ensure that the integrity of the management system is maintained when changes to the management system are planned and implemented?`,
		value: '5_5_c',
	},
  {
		id: 1,
        clause:'',
        title: '',
		name: `d)	Has the laboratory established quality indicators to evaluate performance throughout key aspects of pre-examination, 
    examination, and post-examination processes and monitor performance in relation to objectives? `,
		value: '5_5_d'
  }

]
const lab_director = [
	{
		id: 1,
        clause: '5.2.1',
        title: 'Laboratory director competence',
		name: `Is the laboratory directed by a person, or persons however named, with the specified qualifications, competence, delegated authority, 
           responsibility, and resources to fulfil the requirements of ISO 15189:2022?`,
		value: '5_2_1',
	},
  {
		id: 1,
        clause: '5.2.2',
        title: 'Laboratory director responsibilities',
		name: `Is the laboratory director responsible for the implementation of the management system, 
            including the application of risk management 
            to all aspects of the laboratory operations so that risks to patient care and opportunities
             to improve are systematically identified and addressed?`,
		value: '5_2_2_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `Are the duties and responsibilities of the laboratory director documented?`,
		value: '5_2_2_ii',
	},
  {
		id: 1,
        clause: '5.2.3',
        title: 'Delegation of duties',
		name: `Has the laboratory director delegated either selected duties or responsibilities, or both, 
           to qualified and competent personnel and is such delegation documented?`,
		value: 'na_5_2_3_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `Does the laboratory director maintain the ultimate responsibility 
           for the overall operation of the laboratory? `,
		value: 'na_5_2_3_ii',
	},

]

const structure_authority = [
	{
		id: 1,
        clause: '5.4.1',
        title: 'General',
		name: `Has the laboratory:

          a)	defined its organization and management structure, its place in any parent organization, and the relationships between management, technical operations and support services?
          `,
		value: '5_4_1_a_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `Is the laboratory director responsible for the implementation of the management system, 
            including the application of risk management 
            to all aspects of the laboratory operations so that risks to patient care and opportunities
             to improve are systematically identified and addressed?`,
		value: '5_4_1_a_ii',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `b)	specified the responsibility, authority, lines of communication and interrelationship of 
              all personnel who manage, perform or verify work affecting the results of laboratory activities?`,
        value: '5_4_1_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `c)	specified its procedures to the extent necessary to ensure the consistent application of its
         laboratory activities and the validity of the results?`,
		value: '5_4_1_c',
	},
  {
		id: 1,
        clause: '5.4.2',
        title: 'Quality management',
		name: `Does the laboratory have personnel who, irrespective of other responsibilities, have the authority and resources needed to carry out their duties, including?

          a)	Implementation, maintenance and improvement of the management system
          `,
		value: '5_4_2_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		name: `b)	identification of deviations from the management system or from the procedures for performing laboratory activities?
            `,
		value: '5_4_2_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `c)	initiation of actions to prevent or minimize such deviations?`,
        value: '5_4_2_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `d)	reporting to laboratory management on the performance of the management system and any need for improvement? `,
        value: '5_4_2_d',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `e)	ensuring the effectiveness of laboratory activities?`,
        value: '5_4_2_e',
	},

]

const lab_activities = [
	{
		id: 1,
        clause: '5.3.1',
        title: 'General',
		name: `Does the laboratory specify and document the range of laboratory activities, 
          including laboratory activities performed at sites other than the main location 
          (e.g., POCT, sample collection) for which it conforms with ISO 15189:2022`,
		value: '5_3_1',
	},
	{
		id: 2,
        clause:'5.3.2',
        title:'Conformance with requirements',
		name: `Does the laboratory carry out its activities in such a way as to meet 
          the requirements of ISO 15189:2022, the users, regulatory authorities 
          and organizations providing recognition?`,
		value: '5_3_2_i',
	},

  {
		id: 2,
        clause:'',
        title:'',
		name: `Does this apply to the complete range of specified and 
          documented laboratory activities, regardless of 
          where the service is provided?`,
		value: '5_3_2_ii',
	},

  {
		id: 2,
        clause:'5.3.3',
        title:'Advisory activities',
        name: `How does the laboratory management ensure that appropriate laboratory 
               advice and interpretation are available, and does it meet the needs of patients and users?`,
        value: '5_3_3',
	},
  
  {
		id: 2,
        clause:'',
        title:'',
        name: `What arrangements has the laboratory established for communicating with laboratory users on the following when applicable:

              a)	advising on choice and use of examinations, including required type of sample, clinical indications and limitations of examination methods, and the frequency of requesting the examination;
              `,
        value: '5_3_3_a',
	},
  {
		id: 2,
        clause:'',
        title:'',
        name: `
          b)	providing professional judgments on the interpretation of the results of examinations;      
        `,
        value: '5_3_3_b',
	},
  {
		id: 2,
        clause:'',
        title:'',
        name: `
              c)	promoting the effective utilization of laboratory examinations;    
        `,
        value: '5_3_3_c',
	},
  {
		id: 2,
        clause:'',
        title:'',
        name: `
              d)	advising on scientific and logistical matters such as instances of failure of sample(s) to meet acceptability criteria.;    
        `,
        value: '5_3_3_d',
	},
]