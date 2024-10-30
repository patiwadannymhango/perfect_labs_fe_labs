/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import  Dialog from '@mui/material/Dialog';
import  DialogContent from '@mui/material/DialogContent';
import CardHeader from '@mui/material/CardHeader';
import Snackbar from '@mui/material/Snackbar';
import AddIcon from '@mui/icons-material/Add';
import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import MySelectInput from './MySelectInput';
import { IconButton, Tooltip , Paper} from '@mui/material';


const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
  };

const SadcasAIntroForm = ( props ) => {


    const refresh = props.refresh;
    const lab_profile_id = props.lab_profile_id; 
    const user = getUser();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState('');


    console.log(lab_profile_id)
    const { control, register, handleSubmit, formState: { errors } } = useForm({

        defaultValues: {

            auditor: user.id,
            lab_profile: lab_profile_id,

            assessors:'',
            observers:'',
            field_operation:'',
            lab_representative:'',

            na_1:'',
            nc_1:'',
            c_1:'',
            comment_1:'',

            na_2:'',
            nc_2:'',
            c_2:'',
            comment_2:'',

            na_3:'',
            nc_3:'',
            c_3:'',
            comment_3 :'',

        }
    });
        
    const onDialogOpen = () => {
        setDialogOpen(true);
    };
    const onDialogClose = () => {
        setDialogOpen(false);
    };

    const onSnackbarClose = (e, reason) => {
        if (reason === 'clickaway') {
        return;
        } 
        setSnackbarOpen(false);
        setSnackbarMessage('');
    }

    const onSubmit = form => {
        

        console.log(form);
        axiosService
        .post(`/slipta/lab_profile/${lab_profile_id}/sadcasa/`,form)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`SADCAS A Form Created`);
          refresh();
          
        })
        .catch((err) => {
            if (err.message) {
                setError(err.request.response);
            }
            setSnackbarOpen(true);
            setSnackbarMessage(`Error : ${error}`);
            refresh();
        });
        
      };


    return (
        <>
           <Tooltip title="Create new Audit report">
				<Button variant="contained" onClick={onDialogOpen} sx={{ mt: 2 }} startIcon={<AddIcon />} color="success"  >
					CREATE NEW AUDIT
				</Button> 
			</Tooltip>
            
        
            <Dialog open={dialogOpen} onClose={onDialogClose} maxWidth='lg'>
            <CardHeader
                        title="SADCAS F134 A : INTRODUCTION"
                        sx={{
                            backgroundColor: '#f5f5f5',
                            borderBottom: '1px solid #e0e0e0',
                            // '& .MuiCardHeader-title': {
                            //   color: '#b0b0b0', // Light grey color for the title
                            // }
                            '& .MuiCardHeader-title': {
                                color: 'text.secondary', // Standard grey color for the title
                            }
                        }}
                    />
            <DialogContent>


            <form id="lab-profile-form" onSubmit={handleSubmit(onSubmit)} component={Paper} sstyle={{ width: '100%' }} >
                        



                                        {/* <FormLabel component="legend">Laboratory Staffing Summary:</FormLabel> */}

                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                                                            
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                            <TableRow>
                                                <TableCell align="left" >
                                                Assessor/s 
                                                <br /><br />
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('assessors')}
                                                    type="text" 
                                                    multiline
                                                    rows={1} 
                                                    />
                                                </TableCell >

                                                <TableCell align="left" >
                                                Observers
                                                <br /><br />
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('observers')}
                                                    type="text" 
                                                    multiline
                                                    rows={1} 
                                                    />
                                                </TableCell >

                
                                            </TableRow>


                                            <TableRow>
                                                <TableCell align="left" >
                                                Area / Field of Operation
                                                <br /><br />
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('field_operation')}
                                                    type="text" 
                                                    multiline
                                                    rows={1} 
                                                    />
                                                </TableCell >

                                                <TableCell align="left" >
                                                Laboratory Representative

                                                <br /><br />
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('lab_representative')}
                                                    type="text" 
                                                    multiline
                                                    rows={1} 
                                                    />
                                                </TableCell >

                                            </TableRow>


                                        </TableBody>
                                        
                                    </Table>    

                                    <br /><br />
                                        <Table style={tableStyle}>
                                        <TableHead>
                                        <TableRow>
                                            <TableCell style={{...cellStyle, width: '5%' }}>Clause No</TableCell> 
                                            <TableCell style={{...cellStyle, width: '20%' }}>Requirement</TableCell> 
                                            <TableCell style={{...cellStyle, width: '15%' }}>NA</TableCell> 
                                            <TableCell style={{...cellStyle, width: '15%' }}>NC</TableCell> 
                                            <TableCell style={{...cellStyle, width: '15%' }}>C</TableCell> 
                                            <TableCell style={{...cellStyle, width: '15%' }}>Comments</TableCell>                                  
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        
                                            <TableRow>
                                                <TableCell>1</TableCell>
                                                <TableCell>The schedule of accredited tests shall include only the tests that are performed by the Laboratory.</TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('na_1')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('nc_1')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('c_1')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>

                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('comment_1')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>

                                            </TableRow>

                                            <TableRow>
                                                <TableCell>2</TableCell>
                                                <TableCell>The relevant staff have access to SADCAS documentation</TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('na_2')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('nc_2')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('c_2')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('comment_2')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>

                                            </TableRow>

                                            <TableRow>
                                                <TableCell>3</TableCell>
                                                <TableCell>A current list of approved signatories for each discipline within the laboratory is available.</TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('na_3')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('nc_3')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('c_3')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                <TextField
                                                    variant="outlined"
                                                    fullWidth
                                                    label=""
                                                    {...register('comment_3')}
                                                    type="text" 
                                                    multiline
                                                    rows={2} 
                                                    />
                                                </TableCell>

                                            </TableRow>

            
                                        </TableBody>
                                        
                                    </Table>     
                        
                                    <br />

                                    <Grid item>
                                        <Button onClick={onDialogClose} color="primary">
                                            Cancel
                                            </Button>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                startIcon={<SaveIcon />}
                                                >
                                            SAVE
                                            </Button>
                                    </Grid>
                    </form>


            </DialogContent>
        </Dialog>
        <Snackbar
            open={snackbarOpen}
            message={snackbarMessage}
            onClose={onSnackbarClose}
            autoHideDuration={5000}
        />

    </>
        
   );

}

export default SadcasAIntroForm;