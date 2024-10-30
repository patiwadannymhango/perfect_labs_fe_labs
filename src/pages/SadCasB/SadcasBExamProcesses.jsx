/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import { fetcher } from '../../helpers/axios'

import { Grid, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Paper,
	Snackbar,
	Button,
	Box,
} from '@mui/material'

import CardHeader from '@mui/material/CardHeader'
import { useSelector } from 'react-redux'; 

import { useDispatch } from 'react-redux'

import axiosService from '../../helpers/axios'
import { getUser } from '../../hooks/user.actions'
import { styled } from '@mui/material/styles'
import MuiAlert from '@mui/material/Alert'
import LayoutQ from '../../components/LayoutQ'

import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

const tableStyle = {
	border: '1px solid rgba(224, 224, 224, 1)',
	borderCollapse: 'collapse',
}

const cellStyle = {
	border: '1px solid rgba(224, 224, 224, 1)',
	padding: '8px',
	width: '500px', // Set the width to 400px
}

const Alert = styled(MuiAlert)(({ theme }) => ({
	// width: '100%',
}))

const SadcasBExamProcesses = () => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			exam_processes_a:"",
			exam_processes_b:"",
			exam_processes_c:"",
			exam_processes_d:"",
			exam_processes_e:"",
			exam_processes_f:"",
			exam_processes_g:"",
			exam_processes_h:"",
			exam_processes_i:"",
			exam_processes_j:"",
			exam_processes_k:"",
			exam_processes_l:"",
			exam_processes_m:"",
			exam_processes_n:"",
			exam_processes_o:"",
			exam_processes_comment:"",
		},
	})

	const sadcasb = useSelector((state) => state.sadcasb);
    
	const [open, setOpen] = useState(false);
	const [snackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [errorPut, setErrorPut] = useState('');
	
	const [labName, setLabName] = useState('');

   
	const { lab_profileId} = useParams();
	const navigate = useNavigate();

	
	const { data, error } = useSWR(`/slipta/lab_profile/${lab_profileId}/sadcasb/${sadcasb.id}/`, fetcher, {
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
		.delete(`/slipta/lab_profile/${lab_profileId}/sadcasa/${sadcasb.id}/`)
		.then(() => {
			navigate(`/sadcas_b_summary/${lab_profileId}/`);
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
		.put(`/slipta/lab_profile/${lab_profileId}/sadcasb/${sadcasb.id}/`,form)
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

  

	return (
		<LayoutQ>
			<Box sx={{ mb: 2, textAlign: 'left' }}>
				<img
					src="/Sadcas_a.jpg"
					alt="Logo"
					style={{ width: '200px', height: '65px' }}
				/>
			</Box>
			<div>
				<form
					id="sadcas_b_reqs_reports"
					onSubmit={handleSubmit(onSubmit)}
					component={Paper}
					style={{ width: '100%' }}
					encType="multipart/form-data">
					<CardHeader
						title={
							labName.toUpperCase() +
								' : ' +
								'CLAUSE 7.3 - EXAMINATION PROCESSES ' || ''
						}
						sx={{
							backgroundColor: '#f5f5f5',
							borderBottom: '1px solid #e0e0e0',
							'& .MuiCardHeader-title': {
								color: 'text.secondary',
							},
						}}
					/>

					<Table style={tableStyle}>
						<TableHead>
							<TableRow>
								<TableCell style={{ ...cellStyle, width: '5%' }}></TableCell>
								<TableCell style={{ ...cellStyle, width: '40%' }}></TableCell>
								<TableCell style={{ ...cellStyle, width: '45%' }}></TableCell>
								<TableCell style={{ ...cellStyle, width: '10%' }}>
									Clause No
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{items.map((item) => (
								<TableRow key={item.name}>
									<TableCell
										align="center"
										style={{ ...cellStyle, width: '5%' }}>
										{item.letter}
									</TableCell>
									<TableCell style={{ ...cellStyle, width: '45%' }}>
										{item.label}
									</TableCell>
									<TableCell style={{ ...cellStyle, width: '45%' }}>
										<TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
											variant="outlined"
											fullWidth
											label=""
											{...register(`${item.name}`)}
											type="text"
											multiline
											rows={2}
										/>
									</TableCell>
									<TableCell style={{ ...cellStyle, width: '10%' }}>
										{item.clauseNo}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>

					<Table>
						<TableHead>
							<TableRow>
								<TableCell
									style={{ ...cellStyle, width: '100%', fontWeight: 'bold' }}>
									Comment
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell style={{ ...cellStyle, width: '100%' }}>
									<TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
										variant="outlined"
										fullWidth
										label=""
										{...register('exam_processes_comment')}
										type="text"
										multiline
										rows={4}
									/>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</form>
			</div>
		</LayoutQ>
	)
}

export default SadcasBExamProcesses

const items = [
	{
		letter: 'a)',
		label:
			'Was the examination procedure documented to the extent necessary to ensure the consistent application of activities and the validity of results?',
		name: 'exam_processes_a',
		clauseNo: '7.3.6(a)',
	},
	{
		letter: 'b)',
		label:
			'Were documented procedures written in a language understood by the laboratory personnel and available in appropriate locations?',
		name: 'exam_processes_b',
		clauseNo: '7.3.6(b) ',
	},
	{
		letter: 'c)',
		label: 'Is the examination procedure validated for its intended use?',
		name: 'exam_processes_c',
		clauseNo: '7.3.1(a)',
	},
	{
		letter: 'd)',
		label:
			'If yes, did the laboratory conduct a verification to ensure that the required performance as specified by the manufacturer or method can be achieved?',
		name: 'exam_processes_d',
		clauseNo: '7.3.2',
	},
	{
		letter: 'e)',
		label: 'Was the verification procedure available?',
		name: 'exam_processes_e',
		clauseNo: '',
	},
	{
		letter: 'f)',
		label:
			'Were the performance specifications for the examination method confirmed during the verification relevant to the intended use of the examination results?',
		name: 'exam_processes_f',
		clauseNo: '7.3.2(b)',
	},
	{
		letter: 'g)',
		label:
			'Was the extent of the verification of examination methods sufficient to ensure the validity of results pertinent to clinical decision making?',
		name: 'exam_processes_g',
		clauseNo: '7.3.2(c)',
	},
	{
		letter: 'h)',
		label:
			'Were the verification results reviewed by authorised personnel and was the review recorded indicating whether the results meet the specified requirements?',
		name: 'exam_processes_h',
		clauseNo: '7.3.2(d)',
	},
	{
		letter: 'i)',
		label:
			'If the examination procedure is a non-standard method/ laboratory designed or developed method / standard method used outside its intended scope / modified is the examination procedure validated?',
		name: 'exam_processes_i',
		clauseNo: '7.3.3',
	},
	{
		letter: 'j)',
		label:
			'Were the specific validation requirements for the intended use of the examination fulfilled?',
		name: 'exam_processes_j',
		clauseNo: '7.3.3(b)',
	},
	{
		letter: 'k)',
		label:
			'Were the validation results reviewed by authorised personnel and was the review recorded indicating whether the results meet the specified requirements?',
		name: 'exam_processes_k',
		clauseNo: '7.3.3(c)',
	},
	{
		letter: 'l)',
		label:
			'Was  the measurement uncertainty(MU) for this examination procedure evaluated and maintained for its intended use, where relevant?',
		name: 'exam_processes_l',
		clauseNo: '7.3.4(a)',
	},
	{
		letter: 'm)',
		label:
			'Was the MU compared against performance specifications and documented?',
		name: 'exam_processes_m',
		clauseNo: '7.3.4(a)',
	},
	{
		letter: 'n)',
		label: 'What is the frequency of MU evalutions review? ',
		name: 'exam_processes_n',
		clauseNo: '7.3.4(b)',
	},
	{
		letter: 'o)',
		label:
			'Were the reference intervals and clinical decision values for this examination procedure defined, their basis recorded and communicated to users?',
		name: 'exam_processes_o',
		clauseNo: '7.3.5',
	},
]
