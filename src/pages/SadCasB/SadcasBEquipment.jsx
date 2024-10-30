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

const SadcasBEquipment = () => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			sadcas_b_equipment_a:"",
			sadcas_b_equipment_b:"",
			sadcas_b_equipment_c:"",
			sadcas_b_equipment_d:"",
			sadcas_b_equipment_e:"",
			sadcas_b_equipment_f:"",
			sadcas_b_equipment_g:"",
			sadcas_b_equipment_h:"",
			sadcas_b_equipment_i:"",
			sadcas_b_equipment_j:"",
			sadcas_b_equipment_k:"",
			sadcas_b_equipment_comment:"",
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
		  setSnackbarMessage(`SADCAS:F134 B  Updated`);
		  
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
							labName.toUpperCase() + ' : ' + 'CLAUSE 6.4 - EQUIPMENT' || ''
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
							<TableRow>
								<TableCell></TableCell>
								<TableCell
									sx={{
										textDecoration: 'underline',
									}}>
									Equipment calibration and metrological traceability (Refer to
									SADCAS F 121)
								</TableCell>
								<TableCell></TableCell>
								<TableCell></TableCell>
							</TableRow>
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
										{...register('sadcas_b_equipment_comment')}
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

export default SadcasBEquipment

const items = [
	{
		letter: 'a)',
		label:
			'Does the laboratory have processes for selection, procurement, installation, acceptance testing, handling, transport, storage, use, maintenance and decommissioning of equipment to ensure proper functioning and prevent contamination or deterioration?',
		name: 'sadcas_b_equipment_a',
		clauseNo: '6.4.1',
	},
	{
		letter: 'b)',
		label:
			'Which equipment was used to perform the examinations and was the equipment uniquely   identified?',
		name: 'sadcas_b_equipment_b',
		clauseNo: '6.3.2(c) ',
	},
	{
		letter: 'c)',
		label:
			'Is a register maintained for  equipment that can influence laboratory activities?  ',
		name: 'sadcas_b_equipment_c',
		clauseNo: '',
	},
	{
		letter: 'd)',
		label:
			'Does the laboratory maintain and replace equipment as needed to ensure the quality of examination results?',
		name: 'sadcas_b_equipment_d',
		clauseNo: '6.4.2(d)',
	},
	{
		letter: 'e)',
		label:
			'Does the laboratory have a preventive maintenance programme based on manufacturer’s schedule and instructions and are deviations  recorded?',
		name: 'sadcas_b_equipment_e',
		clauseNo: '6.4.5(a)',
	},
	{
		letter: 'f)',
		label:
			'Are defective equipment  taken out of service clearly labelled or marked as being out of service until it has been verified to perform correctly?',
		name: 'sadcas_b_equipment_f',
		clauseNo: '6.4.5(c)',
	},
	{
		letter: 'g)',
		label:
			'Does the laboratory examine the effect of the defect or deviation from specified requirements and initiate actions when non-conforming work occurs?',
		name: 'sadcas_b_equipment_g',
		clauseNo: '6.4.5(c ) & 7.5',
	},
	{
		letter: 'h)',
		label:
			'When applicable, does the laboratory decontaminate equipment before service, repair or decommissioning and provide suitable space for repairs and provide appropriate personal protective equipment?',
		name: 'sadcas_b_equipment_h',
		clauseNo: '6.4.5(d)',
	},
	{
		letter: 'i)',
		label:
			'Does the laboratory have procedures for responding to any manufacturer’s recall or other notice and take actions recommended by the manufacturer?',
		name: 'sadcas_b_equipment_i',
		clauseNo: '6.4.6',
	},
	{
		letter: 'j)',
		label:
			'Does the laboratory maintain  records for each item of equipment which can influence the results of laboratory activities)',
		name: 'sadcas_b_equipment_j',
		clauseNo: '6.5',
	},
	{
		letter: 'k)',
		label:
			'Does the laboratory have procedures for the calibration of equipment that directly or indirectly affect examination results?',
		name: 'sadcas_b_equipment_k',
		clauseNo: '6.3.3(c)',
	},
]
