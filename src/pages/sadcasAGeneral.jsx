/** @jsxImportSource @emotion/react */

import React, { useEffect, useState  } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../helpers/axios";
import { useSelector } from 'react-redux'; 

import { Grid, TextField} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Snackbar, Button, Box  } from '@mui/material';


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



export function SadcasAGeneral(){

    const { control, register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            
            na_1:"",
            nc_1:"",
            c_1:"", 
            comment_1:"",
            na_2:"",
            nc_2:"",
            c_2:"",
            comment_2:"",
            na_3:"",
            nc_3:"", 
            c_3:"",
            comment_3:"",
            
            na_4_1_a:"",
            nc_4_1_a:"",
            c_4_1_a:"",
            comment_4_1_a:"",
            na_4_1_b:"",
            nc_4_1_b:"",
            c_4_1_b:"",
            comment_4_1_b:"",
            na_4_1_c:"",
            nc_4_1_c:"",
            c_4_1_c:"",
            comment_4_1_c:"",
            na_4_1_d:"",
            nc_4_1_d:"",
            c_4_1_d:"",
            comment_4_1_d:"",
            na_4_1_e:"",
            nc_4_1_e:"",
            c_4_1_e:"",
            comment_4_1_e:"",
            
            na_4_2_1_i:"",
            nc_4_2_1_i:"",
            c_4_2_1_i:"",
            comment_4_2_1_i:"",
            na_4_2_1_ii:"",
            nc_4_2_1_ii:"",
            c_4_2_1_ii:"",
            comment_4_2_1_ii:"",
            na_4_2_1_iii:"",
            nc_4_2_1_iii:"",
            c_4_2_1_iii:"",
            comment_4_2_1_iii:"",
            na_4_2_1_iv:"",
            nc_4_2_1_iv:"",
            c_4_2_1_iv:"",
            comment_4_2_1_iv:"",
            
            na_4_2_2_i:"",
            nc_4_2_2_i:"",
            c_4_2_2_i:"",
            comment_4_2_2_i:"",
            na_4_2_2_ii:"",
            nc_4_2_2_ii:"",
            c_4_2_2_ii:"",

            comment_4_2_2_ii:"",
            na_4_2_2_iii:"",
            nc_4_2_2_iii:"",
            c_4_2_2_iii:"",
            comment_4_2_2_iii:"",
            na_4_2_3:"",
            nc_4_2_2_3:"",
            c_4_2_2_3:"",
            comment_4_2_2_3:"",
            na_4_3_i:"",
            nc_4_3_i:"",
            c_4_3_i:"",
            comment_4_3_i:"",
            na_4_3_a:"",
            nc_4_3_a:"",
            c_4_3_a:"",
            comment_4_3_a:"",
            na_4_3_b:"",
            nc_4_3_b:"",
            c_4_3_b:"",
            comment_4_3_b:"",
            na_4_3_c:"",
            nc_4_3_c:"",
            c_4_3_c:"",
            comment_4_3_c:"",
            na_4_3_d:"",
            nc_4_3_d:"",
            c_4_3_d:"",
            comment_4_3_d:"",
            na_4_3_e:"",
            nc_4_3_e:"",
            c_4_3_e:"",
            comment_4_3_e:"",
            na_4_3_f:"",
            nc_4_3_f:"",
            c_4_3_f:"",
            comment_4_3_f:"",
            na_4_3_g:"",
            nc_4_3_g:"",
            c_4_3_g:"",
            comment_4_3_g:"",
            na_4_3_h:"",
            nc_4_3_h:"",
            c_4_3_h:"",
            comment_4_3_h:"",
            na_4_3_i:"",
            nc_4_3_i:"",
            c_4_3_i:"",
            comment_4_3_i:"",
        
        }
      });




      const sadcasa = useSelector((state) => state.sadcasa);
      console.log(sadcasa)
      const [open, setOpen] = useState(false);
      const [snackbarOpen, setSnackbarOpen] = useState(false);
      const [snackbarMessage, setSnackbarMessage] = useState('');
      const [errorPut, setErrorPut] = useState('');
      
      const [labName, setLabName] = useState('');
  
     
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
                                            title={ labName.toUpperCase() + " : " +  "CLAUSE 4 - GENERAL REQUIREMENTS "|| ''}
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
                                                <TableCell style={{ ...cellStyle }}>4.1</TableCell>
                                                <TableCell><b>Impartiality</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {Impartiality.map((item) => (
                                                <TableRow key={item.id}>
                                                    <TableCell style={{ ...cellStyle }} ></TableCell>
                                                    <TableCell>
                                                        {item.name}
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
                                                <TableCell style={{ ...cellStyle }}>4.2</TableCell>
                                                <TableCell><b>Confidentiality</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>


                                            {confidentiality.map((item) => (
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
                                                <TableCell style={{ ...cellStyle }}>4.3</TableCell>
                                                <TableCell><b>Requirements regarding patients</b></TableCell>
                                                <TableCell >
                            
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>
                                                <TableCell >
                                               
                                                </TableCell>

                                            </TableRow>

                                                {patients.map((item) => (
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




const Impartiality = [
	{
		id: 1,
		name: `a)	Are laboratory activities undertaken impartially? How is 
        the laboratory structured and managed to safeguard impartiality?`,
		value: '4_1_a',
	},
	{
		id: 2,
		name: `b)	What evidence is available to show management’s commitment to impartiality?`,
		value: '4_1_b',
	},
	{
		id: 3,
		name: `c)	What measures are in place to ensure that the laboratory takes responsibility for the impartiality of 
        its activities and does not allow commercial, financial or other pressures to compromise impartiality?`,
		value: '4_1_c',
	},
	{
		id: 4,
		name: `d)	Does the laboratory monitor its activities and relationships to identify threats to its 
                impartiality? Does this monitoring include relationships of its personnel?`,
		value: '4_1_d',
	},
	{
		id: 5,
		name: `e)	If a threat to impartiality is identified, how does the laboratory mitigate such threats to ensure 
        the effect is eliminated or minimized so that the impartiality is not compromised?`,
		value: '4_1_e',
	},
	
]

const confidentiality = [
	{
		id: 1,
        clause: '4.2.1',
        title: 'Management of Information',
		name: `Is the laboratory responsible, through legally enforceable agreements, 
              for the management of all patient information 
             obtained or created during the performance of laboratory activities?`,
		value: '4_2_1_i',
	},
	{
		id: 2,
        clause:'',
        title:'',
		name: `Does the management of patient information include privacy and confidentiality?`,
		value: '4_2_1_ii',
	},
	{
		id: 3,
        clause:'',
        title:'',
		name: `Does the laboratory inform the user and/or the patient in advance, of the 
                information it intends to place in the public domain?`,
		value: '4_2_1_iii',
	},
	{
		id: 4,
        clause:'',
        title:'',
		name: `Except for information that the user and/or the patient makes publicly available, 
             or when agreed between the laboratory and the patient (e.g., for the purpose of responding to complaints)
             is all other information considered proprietary information and regarded as confidential?`,
        value: '4_2_1_iv',
	},
    {
		id: 5,
        clause: '4.2.2',
        title: '  ',
		name: `When the laboratory is required by law or authorized by contractual arrangements to release confidential information, 
        does the laboratory notify the patient concerned of the information released, unless prohibited by law?`,

		value: '4_2_2_i',
	},
    {
		id: 6,
        clause:'',
        title:'',
		name: `Does the laboratory keep information about the patient from a source other than the patient (e.g., complainant, regulator) confidential?`,
		value: '4_2_2_ii',
	},
    {
		id: 3,
        clause:'',
        title:'',
		name: `Does the laboratory keep the identity of the source confidential and not share it with the patient, unless agreed by the source?`,

		value: '4_2_2_iii',
	},
    {
		id: 5,
        clause: '4.2.3',
        title: 'Personnel responsibility',
		name: `Do personnel, including any committee members, contractors, personnel of external bodies, or individuals with access to laboratory
         information acting on the laboratory’s behalf, keep confidential all information obtained or created during the performance of laboratory activities?`,

		value: '4_2_3',
	},

]

const patients = [
	{
		id: 1,
        clause: '',
        title: '',
		name: `Does the laboratory management ensure that patients’ well-being, safety and 
        rights are the primary considerations? Has the laboratory established and implemented the following processes:`,
		value: '4_3_i',
	},
	{
		id: 2,
        clause:'',
        title:'',
		name: `a)	opportunities for patients and laboratory users to provide helpful information to aid the laboratory
                 in the selection of the examination methods, and the interpretation of the examination results;`,
		value: '4_3_a',
	},
	{
		id: 3,
        clause:'',
        title:'',
		name: `b)	provision of patients and users with publicly available information about the examination process, 
                    including costs when applicable, and when to expect results;`,
		value: '4_3_b',
	},
	{
		id: 4,
        clause:'',
        title:'',
		name: `c)	periodic review of the examinations offered by the laboratory to ensure they are clinically appropriate and necessary;`,
        value: '4_3_c',
	},
    {
		id: 2,
        clause:'',
        title:'',
		name: `d)	where appropriate, disclosure to patients, users and any other relevant persons, of incidents that resulted 
            or could have resulted in patient harm, and records of actions taken to mitigate those harms;`,
		value: '4_3_d',
	},
	{
		id: 3,
        clause:'',
        title:'',
		name: `e)	treatment of patients, samples, or remains, with due care and respect;`,
		value: '4_3_e',
	},
	{
		id: 4,
        clause:'',
        title:'',
		name: `f)	obtaining informed consent when required;`,
        value: '4_3_f',
	},
    {
		id: 2,
        clause:'',
        title:'',
		name: `g)	ensuring the ongoing availability and integrity of retained patient samples and records in 
        the event of the closure, acquisition or merger of the laboratory;`,
		value: '4_3_g',
	},
	{
		id: 3,
        clause:'',
        title:'',
		name: `h)	making relevant information available to a patient and any other health service provider at
         the request of the patient or the request of a healthcare provider acting on their behalf`,
		value: '4_3_h',
	},
	{
		id: 4,
        clause:'',
        title:'',
		name: `i)	upholding the rights of patients to care that is free from discrimination?`,
        value: '4_3_i',
	},

]