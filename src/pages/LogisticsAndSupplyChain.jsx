import React, { useEffect, useState } from 'react'
import LayoutQ from '../components/LayoutQ'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import useSWR from 'swr'
import { useParams, useNavigate } from 'react-router-dom'
import { fetcher } from '../helpers/axios'
import { CircularProgress } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Snackbar,
	Button,
	Box,
} from '@mui/material'
import MyRadioGroup from '../components/MyRadioGroup'
import { useForm } from 'react-hook-form'
import { TextField } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'

const LogisticsAndSupplyChain = () => {
	return <LayoutQ>LogisticsAndSupplyChain</LayoutQ>
}

export default LogisticsAndSupplyChain
