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

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'; 

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

const SadcasBReqProvideLabExams = () => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			req_provide_lab_exams_a :"",
			req_provide_lab_exams_b :"",
			req_provide_lab_exams_b_i :"",
			req_provide_lab_exams_b_ii :"",
			req_provide_lab_exams_b_iii :"",
			req_provide_lab_exams_b_iv :"",
			req_provide_lab_exams_c :"",
			req_provide_lab_exams_d :"",
			req_provide_lab_exams_comment:"",
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
								'CLAUSE 7.2.3 - REQUESTS FOR PROVIDING LABORATORY EXAMINATIONS      ' ||
							''
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
								<>
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
											{!item.isNested && (
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
											)}
										</TableCell>
										<TableCell style={{ ...cellStyle, width: '10%' }}>
											{item.clauseNo}
										</TableCell>
									</TableRow>
									{item.isNested &&
										item.nested.map((nestItem) => (
											<TableRow key={nestItem.name}>
												<TableCell
													align="center"
													style={{ padding: '4px', width: '5%' }}>
													{nestItem.letter}
												</TableCell>
												<TableCell style={{ padding: '4px', width: '45%' }}>
													{nestItem.label}
												</TableCell>
												<TableCell style={{ padding: '4px', width: '45%' }}>
													<TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
														variant="outlined"
														fullWidth
														label=""
														{...register(`${nestItem.name}`)}
														type="text"
														multiline
														rows={1}
													/>
												</TableCell>
												<TableCell
													style={{ padding: '4px', width: '10%' }}></TableCell>
											</TableRow>
										))}
								</>
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
										{...register('req_provide_lab_exams_comment')}
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

export default SadcasBReqProvideLabExams

const items = [
	{
		letter: 'a)',
		label:
			'Is each request accepted by the laboratory for examinations(s) considered an agreement?',
		name: 'req_provide_lab_exams_a',
		clauseNo: '7.2.3.1(a)',
		isNested: false,
	},
	{
		letter: 'b)',
		label:
			'Does the examination request provide sufficient information to ensure:',
		name: 'req_provide_lab_exams_b',
		clauseNo: '7.2.3.1 (b)',
		isNested: true,
		nested: [
			{
				letter: 'i)',
				label:
					'Unequivocal traceability of the patient to the request and sample?',
				name: 'req_provide_lab_exams_b_i',
			},
			{
				letter: 'ii)',
				label: 'Identity and contact information of requester?',
				name: 'req_provide_lab_exams_b_ii',
			},
			{
				letter: 'iii)',
				label: 'Identification of the examination(s) requested?',
				name: 'req_provide_lab_exams_b_iii',
			},
			{
				letter: 'iv)',
				label:
					'Informed clinical and technical advice, and clinical interpretation can be provided?',
				name: 'req_provide_lab_exams_b_iv',
			},
		],
	},
	{
		letter: 'c)',
		label:
			'Is examination request information provided in a format or medium as deemed appropriate by the laboratory and acceptable to the user?',
		name: 'req_provide_lab_exams_c',
		clauseNo: '7.2.3.1(c)',
		isNested: false,
	},
	{
		letter: 'd)',
		label: ' How are oral requests managed?',
		name: 'req_provide_lab_exams_d',
		clauseNo: '7.2.3.2',
		isNested: false,
	},
]
