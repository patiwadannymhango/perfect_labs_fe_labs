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


export function SadcasAResource(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {

            na_6_1:"",
            nc_6_1:"",
            c_6_1:"",
            comment_6_1:"",
            na_6_7_1:"",
            nc_6_7_1:"",
            c_6_7_1:"",
            comment_6_7_1:"",
            na_6_7_1_a:"",
            nc_6_7_1_a:"",
            c_6_7_1_a:"",
            comment_6_7_1_a:"",
            na_6_7_1_b:"",
            nc_6_7_1_b:"",
            c_6_7_1_b:"",
            comment_6_7_1_b:"",
            na_6_7_1_c:"",
            nc_6_7_1_c:"",
            c_6_7_1_c:"",
            comment_6_7_1_c:"",
            na_6_7_1_c:"",
            nc_6_7_1_c:"",
            c_6_7_1_c:"",
            comment_6_7_1_c:"",

            na_6_7_1_i:"",
            nc_6_7_1_i:"",
            c_6_7_1_i:"",
            comment_6_7_1_i:"",

            na_6_7_1_ii:"",
            nc_6_7_1_ii:"",
            c_6_7_1_ii:"",
            comment_6_7_1_ii:"",

            na_6_7_2:"",
            nc_6_7_2:"",
            c_6_7_2:"",
            comment_6_7_2:"",
            na_6_8_1_a:"",
            nc_6_8_1_a:"",
            c_6_8_1_a:"",
            comment_6_8_1_a:"",
            na_6_8_1_b:"",
            nc_6_8_1_b:"",
            c_6_8_1_b:"",
            comment_6_8_1_b:"",
            na_6_8_1_c:"",
            nc_6_8_1_c:"",
            c_6_8_1_c:"",
            comment_6_8_1_c:"",
            na_6_8_2_a:"",
            nc_6_8_2_a:"",
            c_6_8_2_a:"",
            comment_6_8_2_a:"",

            na_6_8_2_b:"",
            nc_6_8_2_b:"",
            c_6_8_2_b:"",
            comment_6_8_2_b:"",

            na_6_8_2_c:"",
            nc_6_8_2_c:"",
            c_6_8_2_c:"",
            comment_6_8_2_c:"",

            na_6_8_2_i:"",
            nc_6_8_2_i:"",
            c_6_8_2_i:"",
            comment_6_8_2_i:"",
            na_6_8_3_a:"",
            nc_6_8_3_a:"",
            c_6_8_3_a:"",
            comment_6_8_3_a:"",
            na_6_8_3_b:"",
            nc_6_8_3_b:"",
            c_6_8_3_b:"",
            comment_6_8_3_b:"",
            na_6_8_3_c:"",
            nc_6_8_3_c:"",
            c_6_8_3_c:"",
            comment_6_8_3_c:"",
            na_6_8_3_d:"",
            nc_6_8_3_d:"",
            c_6_8_3_d:"",
            comment_6_8_3_d:"",
            na_6_8_3_e:"",
            nc_6_8_3_e:"",
            c_6_8_3_e:"",
            comment_6_8_3_e:"",

        }
      });




      const sadcasa = useSelector((state) => state.sadcasa);
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
                                            title={ labName.toUpperCase() + " : " +  "CLAUSE 6 - RESOURCE REQUIREMENT "|| ''}
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
                                                <TableCell style={{ ...cellStyle }}>6</TableCell>
                                                <TableCell><b>General</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {general.map((item) => (
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
                                                <TableCell style={{ ...cellStyle }}>6.7</TableCell>
                                                <TableCell><b>Service Agreements</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {service.map((item) => (
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
                                                <TableCell style={{ ...cellStyle }}>6.8</TableCell>
                                                <TableCell><b>Externally provided products and services</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {externally.map((item) => (
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
                                                        rows={3} 
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
                                                        rows={3} 
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
                                                        rows={3} 
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
                                                        rows={3} 
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


const general = [
	{
		id: 1,
        clause: '6.1',
        title: 'General',
		name: `Does the laboratory have available the personnel, facilities, equipment, reagents, consumables and support services necessary to manage and perform its activities?`,
		value: '6_1',
	},


]

const service = [
	{
		id: 1,
        clause: '6.7.1',
        title: 'Agreements with laboratory users',
		    name: `Does the laboratory have a procedure to establish and periodically review agreements for providing laboratory activities?`,
		    value: '6_7_1',
	},
  {
		id: 1,
        clause: '',
        title: '',
        name: `Does the procedure ensure:
        a)	the requirements are adequately specified;
        `,
        value: '6_7_1_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	the laboratory has the capability and resources to meet the requirements;`,
		    value: '6_7_1_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `c)	when applicable, the laboratory advises the user of the specific activities to be performed by referral laboratories and consultants?`,
		    value: '6_7_1_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `Does the laboratory inform users of any changes to an agreement that can affect examination results?`,
		    value: '6_7_1_i',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `Are records of reviews, including any significant changes retained?`,
		    value: '6_7_1_ii',
	},
  {
		id: 1,
        clause: '6.7.2',
        title: 'Agreements with POCT operators',
		    name: `Do service agreements between the laboratory and other parts of the organization using laboratory supported POCT, 
               ensure that respective responsibilities and authorities are specified and communicated?`,
		    value: '6_7_2',
	},

]


const externally = [
	{
		id: 1,
        clause: '6.8.1',
        title: 'General',
		    name: `How does the laboratory ensure that externally provided products and services that affect laboratory activities are suitable when such products and services are:

        a)	intended for incorporation into the laboratory's own activities;
        `,
		    value: '6_8_1_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	provided, in part or in full, directly to the user by the laboratory, as received from the external provider;`,
		    value: '6_8_1_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `c)	used to support the operation of the laboratory.
        It can be necessary to collaborate with other organizational departments or functions to fulfil this requirement`,
		    value: '6_8_1_c',
	},

  {
		id: 1,
        clause: '6.8.2',
        title: 'Referral laboratories and consultants',
		    name: `Does the laboratory communicate its requirements to referral laboratories and consultants who provide interpretations and advice, for:
          a)	the procedures, examinations, reports and consulting activities to be provided;
          `,
		    value: '6_8_2_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	management of critical results;`,
		    value: '6_8_2_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: ` c)	any required personnel qualifications and demonstration of competence?`,
		    value: '6_8_2_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `Unless otherwise specified in the agreement, does the referring laboratory (and not the referral laboratory) 
        maintain the responsible for ensuring that examination results of the referral laboratory are provided to the person making the request?`,
		    value: '6_8_2_i',
	},
  {
		id: 1,
        clause: '6.8.3',
        title: 'Review and approval of externally provided products and services.',
		    name: `Does the laboratory have procedures and retain records for:

        a)	defining, reviewing, and approving the laboratory's requirements for all externally provided products and services.
        `,
		    value: '6_8_3_a',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `b)	defining the criteria for qualification, selection, evaluation of performance and re-evaluation of external providers;`,
		    value: '6_8_3_b',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `c)	referral of samples.`,
		    value: '6_8_3_c',
	},
  {
		id: 1,
        clause: '',
        title: '',
		    name: `d)	ensuring that externally provided products and services conform to the laboratory's established requirements, or where applicable to the relevant 
                requirements of ISO 15189:2022, before they are used or directly provided to the user.
                `,
		    value: '6_8_3_d',
	},

  {
		id: 1,
        clause: '',
        title: '',
		    name: `e)	taking any actions arising from evaluations of the performance of external providers.                `,
		    value: '6_8_3_e',
	},

]