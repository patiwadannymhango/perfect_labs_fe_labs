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
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CardHeader from '@mui/material/CardHeader';
import Snackbar from '@mui/material/Snackbar';
import AddIcon from '@mui/icons-material/Add';
import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";
import MySelectInput from './MySelectInput';

import { IconButton, Tooltip } from '@mui/material';


const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
  };

export function SliptaAuditSection1Form( props ){

  
    const refresh = props.refresh;
    const lab_profile_id = props.lab_profile_id; 
    const user = getUser();


    const { control, reset, register, handleSubmit, formState: { errors } } = useForm({

        defaultValues: {
            auditor: user.id,
            lab_profile: lab_profile_id,

            y_P_n_na_1_1:'',
            comment_1_1:'',
            score_1_1:0,
     
            y_P_n_na_1_2_a:'', 
            comment_1_2_a:'',  
            score_1_2_a:0,    

            y_P_n_na_1_2_b:'', 
            comment_1_2_b:'',  
            score_1_2_b:0,    

            y_P_n_na_1_2_c:'', 
            comment_1_2_c:'',  
            score_1_2_c:0,    

            y_P_n_na_1_2_d:'',
            comment_1_2_d:'', 
            score_1_2_d:0,    

            y_P_n_na_1_2_e:'',
            comment_1_2_e:'',
            score_1_2_e:0,    

            y_P_n_na_1_2_f:'',
            comment_1_2_f:'', 
            score_1_2_f:0,   

            y_P_n_na_1_2_g:'',
            comment_1_2_g:'',  
            score_1_2_g:0,   

            y_P_n_na_1_3:'',   
            comment_1_3:'',    
            score_1_3:0,     

            y_P_n_na_1_4:'',   
            comment_1_4 :'',   
            score_1_4:0,      

            y_P_n_na_1_5_a:'',
            comment_1_5_a:'',  
            score_1_5_a:0,   

            y_P_n_na_1_5_b:'', 
            comment_1_5_b:'',  
            score_1_5_b:0,    

            y_P_n_na_1_6:'',   
            comment_1_6:'',    
            score_1_6:0,      

            y_P_n_na_1_7:'',   
            comment_1_7:'',    
            score_1_7:0,      

            y_P_n_na_1_8:'', 
            comment_1_8:'',    
            score_1_8:0,      

            y_P_n_na_1_9:'',   
            comment_1_9:'',    
            score_1_9:0,      

            y_P_n_na_1_10:'',  
            comment_1_10:'',   
            score_1_10:0,  


        }
    });

    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState('');


        
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

        axiosService
        .post(`/slipta/lab_profile/${lab_profile_id}/audit_section_1/`,form)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`Section 1: Documents and Records Posted`);
          reset(); // Reset the form after submission
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

        
                <Tooltip title="Add Questionnarie">
                            <IconButton
                            color="success" // Green color
                            onClick={onDialogOpen}
                            sx={{
                                ml: 0, // Margin-left = zero
                                fontSize: '1.25rem', // Adjust font size for the icon
                                padding: '8px', // Adjust padding for a smaller button
                                border: '2px solid #4caf50', // Green border
                                borderRadius: '50%', // Circular border to match button shape
                                '&:hover': {
                                borderColor: '#388e3c', // Darker green border on hover
                                }
                            }}
                            >
                            <AddIcon />
                            </IconButton>
                </Tooltip>
            
        
            <Dialog open={dialogOpen} onClose={onDialogClose} maxWidth='lg'>
            <CardHeader
                        title="SECTION 01: DOCUMENT AND RECORDS "
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

            {/* <Card>
                <CardContent> */}

                <form id="audit-form" onSubmit={handleSubmit(onSubmit)} >
                           
                            <Table style={tableStyle}>
                            <TableHead>
                            <TableRow> 
                                <TableCell > <b>SECTION 01: DOCUMENT AND RECORDS </b> </TableCell>
                            </TableRow>
                            <TableRow>
                            
                            <TableCell align="left" style={cellStyle}>REQUIREMENTS</TableCell>
                            <TableCell align="left" style={cellStyle}>Y/P/N/NA</TableCell>
                            <TableCell align="left" style={cellStyle}>COMMENT</TableCell>
                            <TableCell align="right" style={cellStyle}>SCORE</TableCell>
                            </TableRow>
                            
                            </TableHead>
                            <TableBody>
                            <TableRow> <TableCell > <b> 1.1 Legal Entity </b>  </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    
                                    Does the laboratory have documentation stating its legal identity? 
                                    <br /> 
                                    Note: Documentation could be in the form of a National Act, company registration <br />
                                    certificate, license number or practice number, official letter from the Ministry of <br />
                                    Health or equivalent institution to indicate that it belongs to the government. <br />
                                    </TableCell>

                                     <TableCell align="top" style={cellStyle} >
                                         <MySelectInput name="y_P_n_na_1_1" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_1')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_1')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>
                                <TableRow> 
                                    <TableCell > 
                                        <b> 1.2 Laboratory Management System Policies and Objectives </b>  <br />
                                        Is there a current document (quality manual or equivalent) that is
                                        composed of the management system policies and objectives and has the
                                        content being communicated and understood by all personnel?
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    a. Quality policy statement that includes scope of service, standard of
                                    service, measurable objectives of the laboratory management system,
                                    and management commitment to compliance to the implementation of
                                    the policies;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_2_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_2_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_2_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    b. Documented policies of the laboratory management system that meet
                                    the requirements of ISO15189:2022 and the requirements of the
                                    accreditation bodies (where relevant);
                                    </TableCell>
                                    
                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_2_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_2_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_2_b')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    c. Description of the laboratory management system and the structure of
                                       its documentation;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_2_c" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_2_c')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_2_c')}
                                            type="number"  
                                            />
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    d. Reference to supporting procedures (e.g., SOPs), including managerial
                                       and technical procedures;
                                    </TableCell>
                                    
                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_2_d" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_2_d')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_2_d')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell  style={cellStyle}>
                                    e. Description of the roles and responsibilities of the laboratory director
                                    (however named) and other key personnel responsible for ensuring
                                    compliance with the established organizational structure
                                    (organogram)
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_2_e" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_2_e')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_2_e')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    f. Record of review and approval of this document (quality manual or
                                    equivalent) by authorized personnel;
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_2_f" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_2_f')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_2_f')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    g. Records to show that relevant sections of this document were
                                    communicated to and understood by the relevant personnel (internal
                                    and external persons).
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_2_g" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_2_g')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_2_g')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 1.3 Document and Information Control System </b>  </TableCell> </TableRow>

                                <TableRow>
                                    <TableCell style={cellStyle}>
                                    Has the laboratory management established and implemented a
                                    document control system to control all documents and information from
                                    internal and external sources?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_3" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_3')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_3')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow> <TableCell > <b> 1.4 Document and Records </b>  </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Are there records detailing all documents of the laboratory management
                                    system and indicating their editions and distribution?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_4" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_4')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_4')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow> <TableCell > <b> 1.5 Laboratory Management System Documentation </b>  </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    a. Has the laboratory management established, documented and
                                    maintained objectives and policies to fulfil the requirements of ISO
                                    15189:2022 standards?
                                    </TableCell>
                                    
                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_5_a" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_5_a')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_5_a')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    b. Are these objectives and policies acknowledged and implemented at all
                                    levels of the laboratory?
                                    </TableCell>
                                    
                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_5_b" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_5_b')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_5_b')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>
                                <TableRow> <TableCell > <b> 1.6 Quality Document Accessibility </b>  </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Are quality documents (paper based and/or electronic copies) easily
                                    accessible, available and written in a language commonly understood and
                                    communicated to all relevant personnel?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_6" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_6')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_6')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 1.7 Document Control Record </b>  </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Do all quality documents have a record to reflect when it was approved for
                                    use, its review and revision history, its version, its location and when it
                                    was discontinued?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_7" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_7')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_7')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 1.8 Discontinued Quality Documents </b>  </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Are invalid or discontinued quality documents identified, clearly marked,
                                    removed from use and one copy retained for reference purposes?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_8" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_8')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_8')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 1.9 Data Files </b>  </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Are test results, technical and quality records archived for a specified
                                    period in accordance with the requirements of Section 9 of this checklist?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_9" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_9')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_9')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                                <TableRow> <TableCell > <b> 1.10 Archived Patient Results Accessibility </b>  </TableCell> </TableRow>
                                <TableRow>
                                    <TableCell align="left">
                                    Are test results, technical and quality records archived for a specified
                                    period in accordance with the requirements of Section 9 of this checklist?
                                    </TableCell>

                                    <TableCell align="top" style={cellStyle} >
                                        <MySelectInput name="y_P_n_na_1_10" control={control} />
                                    </TableCell>
                                    <TableCell align="top" style={cellStyle} >
                                    <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('comment_1_10')}
                                            type="text"  
                                            />
                                    </TableCell>
                                    <TableCell align="right" style={cellStyle} >
                                        <TextField
                                            variant='outlined'
                                            fullWidth
                                            {...register('score_1_10')}
                                            type="number"  
                                            />
                                    </TableCell>

                                </TableRow>

                            </TableBody>
                            
                            </Table>

                            <br />
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
                {/* </CardContent>
                </Card> */}

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