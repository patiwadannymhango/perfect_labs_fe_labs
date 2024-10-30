import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../helpers/axios'
import { getUser } from '../../hooks/user.actions'
import { useParams } from 'react-router-dom'

import LayoutQ from '../../components/LayoutQ'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { format } from 'date-fns'
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Chip,
	Box,
	Paper,

} from '@mui/material'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import SadcasBIntroForm from '../../components/SadcasBIntroForm'
import { setShowItems4 } from '../../redux/sadcasBSidebarSlice'
import { setSadcasb, resetSadcasb } from '../../redux/sadcasbSlice'

const statusOptions = {
    true: { label: 'Submitted', color: 'success' },
    false: { label: 'In Progress', color: 'warning' },
  };


function SadcasBSummary() {

    const labProfile = useSelector((state) => state.labProfile);
    const { lab_profileId } = useParams();
    const [open, setOpen] = useState(false);
    const user = getUser();


    const sadcas_b = useSWR(`/slipta/lab_profile/${lab_profileId}/sadcasb/`,fetcher,{
        refreshInterval:1000,
    })
    
    
    const navigate = useNavigate();

  
    const handleRowClick = (params) => {
        
            const newSadcasData = {
                id: params.row.id,
            };
            
            dispatch(resetSadcasb());
            dispatch(setSadcasb(newSadcasData));
        navigate(`/sadcas_b_intro/${lab_profileId}/`);
    };
    
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setShowItems4(true))
	}, [dispatch])

	if (!user) {
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}>
				<CircularProgress />
			</Box>
		)
	}

 
    const columns = [
        {
            field: 'created',
            headerName: 'Assessment Date',
            width: 350,
            renderCell: (params) => format(new Date(params.value), 'yyyy-MM-dd HH:mm:ss')
        },
        { field: 'assessors', headerName: 'Assessors', width: 400 },
        { field: 'observers', headerName: 'Observers', width: 400 },
        { field: 'field_operation', headerName: 'Field of Operation', width: 300 },
        { field: 'lab_representative', headerName: 'Laboratory Representative', width: 400 },
        {
            field: 'is_submitted',
            headerName: 'Status',
            width: 300,
            renderCell: (params) => (
              <Chip
                label={statusOptions[params.value].label}
                color={statusOptions[params.value].color}
              />
            )
          },
        
    ];

	return (
		<LayoutQ>
			<Box sx={{ mb: 2, textAlign: 'left' }}>
				<img
					src="/Sadcas_a.jpg"
					alt="Logo"
					style={{ width: '200px', height: '65px' }}
				/>
			</Box>

			<Paper>
				<Card sx={{ maxWidth: '100%', mb: 2 }}>
					<CardHeader
						title={
							labProfile.lab_name +
								' | ' +
								' ' +
								labProfile.lab_number +
								': SADCAS B AUDITS' || ''
						}
						sx={{
							backgroundColor: '#9ad1c4',
							borderBottom: '1px solid #e0e0e0',
							'& .MuiCardHeader-title': {
								color: 'text.secondary',
							},
						}}
					/>
					

					<CardContent>
						<Box sx={{ height: 600, width: '100%' }}>
						<DataGrid
							rows={(sadcas_b.data?.results || []).filter(row => row.is_submitted === true)}
							columns={columns}
							pageSize={10}
							rowsPerPageOptions={[10]}
							disableSelectionOnClick
							onRowClick={handleRowClick} // Attach the row click handler
							slots={{ toolbar: GridToolbar }}
							sx={{
								// Border for DataGrid
								'& .MuiDataGrid-cell': {
									border: '1px solid #ddd', // Border for individual cells
								},
								'& .MuiDataGrid-columnHeaders': {
									borderBottom: '1px solid #ddd', // Border for column headers
								}
							}}
						/>

						</Box>
					</CardContent>
					<CardActions
						sx={{
							justifyContent: 'flex-end',
							backgroundColor: '#f5f5f5',
							borderTop: '1px solid #e0e0e0',
						}}>
						{/* <Button variant="contained" color="primary" onClick={onDialogOpen}>
                                    Open Dialog
                                </Button> */}
					</CardActions>
				</Card>
				{/* </Box> */}
			</Paper>
		</LayoutQ>
	)
}

export default SadcasBSummary
