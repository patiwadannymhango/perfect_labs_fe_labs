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

const SadCASBReagentsConsumeables = () => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			reagents_consumeables_a:"",
			reagents_consumeables_b:"",
			reagents_consumeables_c:"",
			reagents_consumeables_d:"",
			reagents_consumeables_e:"",
			reagents_consumeables_f:"",
			reagents_consumeables_g:"",
			reagents_consumeables_h:"",
			reagents_consumeables_h_i:"",
			reagents_consumeables_h_ii:"",
			reagents_consumeables_h_iii:"",
			reagents_consumeables_h_iv:"",
			reagents_consumeables_comment:"",
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
								'CLAUSE 7.2.3 - REAGENTS AND CONSUMABLES     ' || ''
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
										{...register('reagents_consumeables_comment')}
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

export default SadCASBReagentsConsumeables

const items = [
	{
		letter: 'a)',
		label:
			'Does the laboratory store reagents and consumables according to the manufacturers’ specifications and monitor the environmental conditions where relevant?',
		name: 'reagents_consumeables_a',
		clauseNo: '6.6.2',
		isNested: false,
	},

	{
		letter: 'b)',
		label:
			'When the laboratory is not the receiving facility, do they verify that the receiving facility has adequate storage and handling capabilities to maintain supplies in a manner that prevents damage and deterioration? ',
		name: 'reagents_consumeables_b',
		clauseNo: '6.6.3',
		isNested: false,
	},
	{
		letter: 'c)',
		label:
			'Is new formulation of examination kits with changes in reagents or procedure, or new lot or shipment verified for performance before use or before release of results, as appropriate?',
		name: 'reagents_consumeables_c',
		clauseNo: '6.6.4',
		isNested: false,
	},
	{
		letter: 'd)',
		label:
			'Does the inventory management system established by the laboratory segregate reagents and consumables that have been accepted for use from those that have not been inspected or accepted? ',
		name: 'reagents_consumeables_d',
		clauseNo: '6.6.5',
		isNested: false,
	},
	{
		letter: 'e)',
		label:
			'Are instructions for use of reagents and consumables, including those provided by the manufacturers, readily available?',
		name: 'reagents_consumeables_e',
		clauseNo: '6.6.6',
		isNested: false,
	},
	{
		letter: 'f)',
		label:
			'Are adverse incidents and accidents (attributed to specific reagents or consumables) investigated and reported to manufacturer and/or supplier and appropriate authorities, as required?',
		name: 'reagents_consumeables_f',
		clauseNo: '6.6.6',
		isNested: false,
	},
	{
		letter: 'g)',
		label:
			'Does the laboratory have procedures for responding to any manufacturer’s recall or other notice and taking actions recommended by the manufacturer?',
		name: 'reagents_consumeables_g',
		clauseNo: '6.6.7',
		isNested: false,
	},
	{
		letter: 'h)',
		label: 'Are the following records available: ',
		name: 'reagents_consumeables_h',
		clauseNo: '',
		isNested: true,
		nested: [
			{
				letter: 'i.',
				label: 'Identity of the reagent or consumable',
				name: 'reagents_consumeables_h_i',
			},
			{
				letter: 'ii.',
				label: 'Manufacturer’s name, and batch code/ lot number',
				name: 'reagents_consumeables_h_ii',
			},
			{
				letter: 'iii.',
				label:
					'Date of receipt and condition when received, expiry date, date of first use and where applicable date when taken out of service',
				name: 'reagents_consumeables_h_iii',
			},
			{
				letter: 'iv.',
				label:
					'Records that confirmed the reagent’s or consumable’s initial and ongoing acceptance for use',
				name: 'reagents_consumeables_h_iv',
			},
		],
	},
]

// export default
