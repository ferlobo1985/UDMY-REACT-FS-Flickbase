// lib
import { useState, useRef } from 'react';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom'
// comp
import { AdminTitle } from '../../../../utils/tools';
import { errorHelper, Loader } from '../../../../utils/tools'
// redux
import { useDispatch, useSelector } from 'react-redux';

// MUI
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button' 
import Divider from '@mui/material/Divider' 
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
 
import InputLabel from '@mui/material/InputLabel';
import AddIcon from '@mui/icons-material/Add';
import { visuallyHidden } from '@mui/utils';


const AddArticle = () => {
    // redux
    const articles = useSelector(state=>state.articles);
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: '',
        validationSchema:'',
        onSubmit:(values)=>{
            console.log(values)
        }
    })



    return(
        <>
            <AdminTitle title="Add article"/>
            add article
        </>
    )

}

export default AddArticle