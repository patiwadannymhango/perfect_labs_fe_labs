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

const SadcasBEnsureValExams = () => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			ensure_val_exams_a:"",
			ensure_val_exams_b:"",
			ensure_val_exams_c:"",
			ensure_val_exams_c_i:"",
			ensure_val_exams_c_ii:"",
			ensure_val_exams_d:"",
			ensure_val_exams_d_i:"",
			ensure_val_exams_d_ii:"",
			ensure_val_exams_d_iii:"",
			ensure_val_exams_d_iv:"",
			ensure_val_exams_e:"",
			ensure_val_exams_f:"",
			ensure_val_exams_g:"",
			ensure_val_exams_comment:"",
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
								'CLAUSE 7.3.7 - ENSURING THE VALIDITY OF EXAMINATION RESULTS      ' ||
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
							<TableRow>
								<TableCell align="center" style={{ ...cellStyle, width: '5%' }}>
									a)
								</TableCell>
								<TableCell style={{ ...cellStyle, width: '45%' }}>
									Does the laboratory have a procedure for monitoring the
									validity of results? Is the monitoring planned and reviewed?
								</TableCell>

								<TableCell style={{ ...cellStyle, width: '45%' }}>
									<TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
										variant="outlined"
										fullWidth
										label=""
										{...register(`ensure_val_exams_a`)}
										type="text"
										multiline
										rows={2}
									/>
								</TableCell>
								<TableCell style={{ ...cellStyle, width: '10%' }}>
									7.3.7.1
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center" style={{ ...cellStyle, width: '5%' }}>
									b)
								</TableCell>
								<TableCell style={{ ...cellStyle, width: '45%' }}>
									Is data recorded in such a way that trends and shifts are
									detected and where practicable, statistical techniques applied
									to review the results?
								</TableCell>

								<TableCell style={{ ...cellStyle, width: '45%' }}>
									<TextField  InputProps={{
    readOnly: true, // This will be true or false based on the condition
  }}
										variant="outlined"
										fullWidth
										label=""
										{...register(`ensure_val_exams_b`)}
										type="text"
										multiline
										rows={2}
									/>
								</TableCell>
								<TableCell style={{ ...cellStyle, width: '10%' }}></TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="left"></TableCell>
								<TableCell align="left">
									<b> Internal Quality Control(IQC)</b>
								</TableCell>
								<TableCell align="left"></TableCell>
								<TableCell align="left"></TableCell>
							</TableRow>
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

										<TableCell style={{ ...cellStyle, width: '40%' }}>
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
										{...register('ensure_val_exams_comment')}
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

export default SadcasBEnsureValExams

const items = [
	{
		letter: 'c)',
		label:
			'Does the laboratory have an IQC procedure for monitoring the ongoing validity of examination results, according to specified criteria, that verifies the attainment of the intended quality and ensures validity pertinent to clinical decision making?',
		name: 'ensure_val_exams_c',
		clauseNo: '7.3.7.2 (a)',
		isNested: false,
	},
	{
		letter: 'i.',
		label:
			'Does the procedure also allow for the detection of either lot- to-lot reagent or calibrator variation, or both, of the examination method?',
		name: 'ensure_val_exams_c_i',
		clauseNo: '7.3.7.2(a)',
		isNested: false,
	},
	{
		letter: 'ii.',
		label:
			'Is the use of third-party IQC material considered, either as an alternative to, or in addition to, control material supplied by the reagent or instrument manufacturer?',
		name: 'ensure_val_exams_c_ii',
		clauseNo: '7.2.3.2',
		isNested: false,
	},
	{
		letter: 'd)',
		label:
			'Does the laboratory select IQC material that is fit for its intended purpose? When selecting IQC material, do the factors to be considered include:',
		name: 'ensure_val_exams_d',
		clauseNo: '7.3.7.2(b)',
		isNested: true,
		nested: [
			{
				letter: 'i.',
				label: 'Stability with regard to the properties of interest?',
				name: 'ensure_val_exams_d_i',
			},
			{
				letter: 'ii.',
				label: 'The matrix is as close as possible to that of patient samples?',
				name: 'ensure_val_exams_d_ii',
			},
			{
				letter: 'iii.',
				label:
					'The IQC material reacts to the examination method in a manner as close as possible to patient samples?',
				name: 'ensure_val_exams_d_iii',
			},
			{
				letter: 'iv.',
				label:
					'The IQC material provides a clinically relevant challenge to the examination method, has concentration levels at or near clinical decision limits and when possible, covers the measurement range of the examination method?',
				name: 'ensure_val_exams_d_iv',
			},
		],
	},
	{
		letter: 'e)',
		label:
			'Is the IQC performed at a frequency that is based on the stability and robustness of the examination method and the risk of harm to the patient from an erroneous result? ',
		name: 'ensure_val_exams_e',
		clauseNo: '7.3.7.2(d)',
		isNested: false,
	},
	{
		letter: 'f)',
		label:
			'Is the IQC data reviewed with defined acceptability criteria at regular intervals and in a timeframe that allows a meaningful indication of current performance?',
		name: 'ensure_val_exams_f',
		clauseNo: '7.3.7.2(f)',
		isNested: false,
	},
	{
		letter: 'g)',
		label:
			'Does the laboratory prevent the release of patient results in the event that IQC fails the acceptability criteria?',
		name: 'ensure_val_exams_g',
		clauseNo: '7.3.7.2(g)',
		isNested: false,
	},
]
