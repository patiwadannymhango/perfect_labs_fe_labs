/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Grid from '@mui/material/Grid';
import useSWR from 'swr';
import { MenuItem, Select, FormControl, InputLabel, Typography  } from '@mui/material';
import { fetcher } from "../helpers/axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import  Dialog from '@mui/material/Dialog';
import  DialogContent from '@mui/material/DialogContent';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import { IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import axiosService from "../helpers/axios";
import { getUser } from "../hooks/user.actions";


const tableStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    borderCollapse: 'collapse',
  };
  
  const cellStyle = {
    border: '1px solid rgba(224, 224, 224, 1)', 
    padding: '8px',
  };

  const scoreCellStyle = {
    ...cellStyle, // Include any common styles
    width: '500px', // Set the width to 400px
  };

  const sectionCellStyle = {
    ...cellStyle, // Include any common styles
    width: '500px', // Set the width to 400px
  }


export function SliptaAuditForm( props ){

    const navigate = useNavigate();
    const refresh = props.refresh;
    const lab_profile_id = props.lab_profile_id; 
    const [dialogOpen, setDialogOpen] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState('');
    const user = getUser();

    const { control, reset, register, handleSubmit, formState: { errors } } = useForm({

        defaultValues: {
            auditor: user.id,
            lab_profile: lab_profile_id,

            section_1: '',
            section_2: '',
            section_3: '',
            section_4: '',
            section_5: '',
            section_6: '',
            section_7: '',
            section_8: '',
            section_9: '',
            section_10: '',
            section_11: '',
            section_12: '',


        }
    });


    const audit_section_1 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_1/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_2 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_2/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_3 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_3/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_4 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_4/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_5 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_5/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_6 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_6/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_7 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_7/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_8 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_8/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_9 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_9/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_10 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_10/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_11 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_11/`,fetcher,{
        refreshInterval:10000,
    })
    const audit_section_12 = useSWR(`/slipta/lab_profile/${lab_profile_id}/audit_section_12/`,fetcher,{
        refreshInterval:10000,
    })


    

    const [form, setForm] = useState({
        section_1:"",
        section_2:null,
        section_3:null,
        section_4:null,
        section_5:null,
        section_6:null,
        section_7:null,
        section_8:null,
        section_9:null,
        section_10:null,
        section_11:null,
        section_12:null,
    });

    const audit1Handle = () => {
        navigate(`/slipta_audit_section_1/${lab_profile_id}/`);
    };
    
    const audit2Handle = () => {
        navigate(`/slipta_audit_section_2/${lab_profile_id}/`);
    };

    const audit3Handle = () => {
        navigate(`/slipta_audit_section_3/${lab_profile_id}/`);
    };
    const audit4Handle = () => {
        navigate(`/slipta_audit_section_4/${lab_profile_id}/`);
    };
    const audit5Handle = () => {
        navigate(`/slipta_audit_section_5/${lab_profile_id}/`);
    };

    const audit6Handle = () => {
        navigate(`/slipta_audit_section_6/${lab_profile_id}/`);
    };
    
    const audit7Handle = () => {
        navigate(`/slipta_audit_section_7/${lab_profile_id}/`);
    };

    const audit8Handle = () => {
        navigate(`/slipta_audit_section_8/${lab_profile_id}/`);
    };
    const audit9Handle = () => {
        navigate(`/slipta_audit_section_9/${lab_profile_id}/`);
    };
    const audit10Handle = () => {
        navigate(`/slipta_audit_section_10/${lab_profile_id}/`);
    };
    const audit11Handle = () => {
        navigate(`/slipta_audit_section_11/${lab_profile_id}/`);
    };
    const audit12Handle = () => {
        navigate(`/slipta_audit_section_12/${lab_profile_id}/`);
    };

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
        .post(`/slipta/lab_profile/${lab_profile_id}/audit/`, form)
        .then(() => {
          onDialogClose();
          setSnackbarOpen(true);
          setSnackbarMessage(`Lab Audit Posted`);
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

        <Tooltip title="Audit">
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
                    title="AUDIT SUMMARY"
                    sx={{
                        backgroundColor: '#f5f5f5',
                        borderBottom: '1px solid #e0e0e0',
                        '& .MuiCardHeader-title': {
                            color: 'text.secondary', // Standard grey color for the title
                        }
                    }}
                    />
            <DialogContent>

            <Card>
           
                <CardContent>

                <form id="audit-form" onSubmit={handleSubmit(onSubmit)} >
                           
                            <Table style={tableStyle}>
                            <TableHead>
                            <TableRow>
                            
                            <TableCell align="left" style={sectionCellStyle}>Section</TableCell>
                            <TableCell align="left" style={scoreCellStyle}>Questionnarie</TableCell>
                            <TableCell align="left" style={cellStyle}>Max Score</TableCell>
                            {/* <TableCell align="right">Questionarie(s)</TableCell> */}
                            </TableRow>
                            
                            </TableHead>
                            <TableBody>
                            
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 1: Documents and Records
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                
                                        <FormControl fullWidth>
                                            <InputLabel id="select-label">Select an Option</InputLabel>
                                            <Select
                                                {...register('section_1')}
                                                label="Select an Option"
                                            >
                                                 {audit_section_1.data?.results
                                                    ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                    .map((item) => {
                                                        return (
                                                            <MenuItem key={item.total_score} value={item.id}>
                                                                Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                            </MenuItem>
                                                        );
                                                    })}
                
                                            </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        22
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={audit1Handle}
                                            >
                                            Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 2: Organisation and Leadership
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <FormControl fullWidth>
                                            <InputLabel id="select-label">Select an Option</InputLabel>
                                            <Select
                                                 {...register('section_2')}
                                                label="Select an Option"
                                            >
                                                {audit_section_2.data?.results
                                                    ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                    .map((item) => {
                                                        return (
                                                            <MenuItem key={item.total_score} value={item.id}>
                                                                Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        26
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={audit2Handle}
                                            >
                                            Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 3: Personnel Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                    <FormControl fullWidth>
                                            <InputLabel id="select-label">Select an Option</InputLabel>
                                            <Select
                                                 {...register('section_3')}
                                                label="Select an Option"
                                            >
                                              {audit_section_3.data?.results
                                                    ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                    .map((item) => {
                                                        return (
                                                            <MenuItem key={item.total_score} value={item.id}>
                                                                Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        34
                                    </TableCell>
                                    {/* <TableCell align="right">
                                    <   Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={audit3Handle}
                                            >
                                            Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 4: Customer Focus
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                        <FormControl fullWidth>
                                                <InputLabel id="select-label">Select an Option</InputLabel>
                                                <Select
                                                     {...register('section_4')}
                                                    label="Select an Option"
                                                >
                                                   {audit_section_4.data?.results
                                                    ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                    .map((item) => {
                                                        return (
                                                            <MenuItem key={item.total_score} value={item.id}>
                                                                Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                            </MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        24
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            onClick={audit4Handle}
                                            >
                                            Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 5: Equipment Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                        <FormControl fullWidth>
                                                    <InputLabel id="select-label">Select an Option</InputLabel>
                                                    <Select
                                                         {...register('section_5')}
                                                         label="Select an Option"
                                                    >
                                                       {audit_section_5.data?.results
                                                        ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                        .map((item) => {
                                                            return (
                                                                <MenuItem key={item.total_score} value={item.id}>
                                                                    Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        44
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={audit5Handle}
                                                >
                                                Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 6: Assessment
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                        <FormControl fullWidth>
                                                    <InputLabel id="select-label">Select an Option</InputLabel>
                                                    <Select
                                                         {...register('section_6')}
                                                        label="Select an Option"
                                                    >
                                                        {audit_section_6.data?.results
                                                        ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                        .map((item) => {
                                                            return (
                                                                <MenuItem key={item.total_score} value={item.id}>
                                                                    Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle} >
                                        24
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={audit6Handle}
                                                >
                                                Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 7: Supplier and Inventory Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                            <FormControl fullWidth>
                                                            <InputLabel id="select-label">Select an Option</InputLabel>
                                                            <Select
                                                                 {...register('section_7')}
                                                                 label="Select an Option"
                                                            >
                                                                {audit_section_7.data?.results
                                                                ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                                .map((item) => {
                                                                    return (
                                                                        <MenuItem key={item.total_score} value={item.id}>
                                                                            Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                                        </MenuItem>
                                                                    );
                                                                })}
                                                            </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        27
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={audit7Handle}
                                                >
                                                Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 8: Process Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                            <FormControl fullWidth>
                                                    <InputLabel id="select-label">Select an Option</InputLabel>
                                                    <Select
                                                        {...register('section_8')}
                                                        label="Select an Option"
                                                    >
                                                        {audit_section_8.data?.results
                                                        ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                        .map((item) => {
                                                            return (
                                                                <MenuItem key={item.total_score} value={item.id}>
                                                                    Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        71
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={audit8Handle}
                                                >
                                                Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 9: Information Management
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                            <FormControl fullWidth>
                                                    <InputLabel id="select-label">Select an Option</InputLabel>
                                                    <Select
                                                         {...register('section_9')}
                                                         label="Select an Option"
                                                    >
                                                       {audit_section_9.data?.results
                                                        ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                        .map((item) => {
                                                            return (
                                                                <MenuItem key={item.total_score} value={item.id}>
                                                                    Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        24
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={audit9Handle}
                                                >
                                                Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 10: Nonconforming Events
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}> 
                                         <FormControl fullWidth>
                                                    <InputLabel id="select-label">Select an Option</InputLabel>
                                                    <Select
                                                         {...register('section_10')}
                                                         label="Select an Option"
                                                    >
                                                       {audit_section_10.data?.results
                                                        ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                        .map((item) => {
                                                            return (
                                                                <MenuItem key={item.total_score} value={item.id}>
                                                                    Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        13
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={audit10Handle}
                                                >
                                                Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 11: Continual Improvement
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                            <FormControl fullWidth>
                                                    <InputLabel id="select-label">Select an Option</InputLabel>
                                                    <Select
                                                         {...register('section_11')}
                                                         label="Select an Option"
                                                    >
                                                        {audit_section_11.data?.results
                                                        ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                        .map((item) => {
                                                            return (
                                                                <MenuItem key={item.total_score} value={item.id}>
                                                                    Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        07
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={audit11Handle}
                                                >
                                                Questionarie
                                        </Button>
                                    </TableCell> */}
                                </TableRow>
                                <TableRow>
                                    <TableCell align="left" style={cellStyle}>
                                    Section 12: Facilities and Safety
                                    </TableCell>
                                    <TableCell align="left" style={cellStyle}>
                                            <FormControl fullWidth>
                                                    <InputLabel id="select-label">Select an Option</InputLabel>
                                                    <Select
                                                         {...register('section_12')}
                                                         label="Select an Option"
                                                    >
                                                         {audit_section_12.data?.results
                                                        ?.filter(item => !item.attached) // Filter items where `attached` is false
                                                        .map((item) => {
                                                            return (
                                                                <MenuItem key={item.total_score} value={item.id}>
                                                                    Time Created : {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')} : Total Score = {item.total_score}
                                                                </MenuItem>
                                                            );
                                                        })}
                                                    </Select>
                                            </FormControl>
                                    </TableCell>
                                    <TableCell align="center" style={cellStyle}>
                                        57
                                    </TableCell>
                                    {/* <TableCell align="right">
                                    <   Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={audit12Handle}
                                                >
                                                Questionarie
                                        </Button>
                                    </TableCell> */}
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
                                    variant="contained"
                                    type='submit'
                                    color="primary"
                                    >
                                    Create
                                    </Button>
                            </Grid>
                        
                    </form>
                </CardContent>
                </Card>

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