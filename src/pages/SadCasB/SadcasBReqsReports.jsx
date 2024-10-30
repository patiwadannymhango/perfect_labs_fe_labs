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

const SadcasBReqsReports = () => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			req_reports_a :"",
			req_reports_b :"",
			req_reports_c :"",
			req_reports_d :"",
			req_reports_e :"",
			req_reports_f :"",
			req_reports_g :"",
			req_reports_h :"",
			req_reports_comment :"",
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
							labName.toUpperCase() +
								' : ' +
								'CLAUSE 7.4.1.6 - REQUIREMENTS FOR  REPORTS ' || ''
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
										{...register('req_reports_comment')}
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

export default SadcasBReqsReports

const items = [
	{
		letter: 'a)',
		label:
			'Unique patient Identification, date of primary sample, type of primary sample collection and date of report on each page of report.',
		name: 'req_reports_a',
		clauseNo: '7.4.1.6(a,d)',
	},
	{
		letter: 'b)',
		label:
			'Clear, unambiguous identification of the examinations performed and the examination method used.',
		name: 'req_reports_b',
		clauseNo: '7.4.1.6(e,f)',
	},
	{
		letter: 'c)',
		label:
			'Indication of any critical results, notification of user or authorised personnel as soon as relevant, and escalation procedure for laboratory personnel when responsible person cannot be contacted.',
		name: 'req_reports_c',
		clauseNo: '7.4.1.6 (i) & 7.4.1.3',
	},
	{
		letter: 'd)',
		label:
			'Examination results with reported in SI units or other applicable units and indication of biological reference.',
		name: 'req_reports_d',
		clauseNo: '7.4.1.6(g,h)',
	},
	{
		letter: 'e)',
		label:
			'Identification of the person(s) reviewing the results and authorizing the release of the report (if not contained in the report, readily available when needed)',
		name: 'req_reports_e',
		clauseNo: '7.4.1.6 (j)',
	},
	{
		letter: 'f)',
		label:
			'Are examination results reported accurately,clearly, unambiguously and in accordance with any specific instructions in the examination procedure?',
		name: 'req_reports_f',
		clauseNo: '7.4.1.1(a) ',
	},
	{
		letter: 'g)',
		label:
			'Is all information associated with issued reports retained in accordance with management system requirements?',
		name: 'req_reports_g',
		clauseNo: '8.4',
	},

	{
		letter: 'h)',
		label:
			'Is this a revised report? If yes, is it clearly identified as a revision and includes reference to the date and patient’s identity in the original ',
		name: 'req_reports_h',
		clauseNo: '7.4.1.8',
	},
]
