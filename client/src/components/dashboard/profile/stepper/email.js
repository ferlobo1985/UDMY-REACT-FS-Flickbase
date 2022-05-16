import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { errorHelper, Loader } from '../../../../utils/tools'

import {
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel
} from '@mui/material'


const EmailStepper = ({user,closeModal}) => {
    const [activeStep,setActiveStep] = useState(0);
    const steps = ['Enter old email','Enter new email','Are you sure ?'];
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize:true,
        initialValues:{ email:'', newemail:''},
        validationSchema:Yup.object({
            email: Yup.string()
            .required('This is required')
            .email('This is not a valid email')
            .test('match','Please check your email',(email)=>{
                return email === user.data.email
            }),
            newemail:Yup.string()
            .required('This is required')
            .email('This is not a valid email')
            .test('equal','The email are the same',(newemail)=>{
                return newemail !== user.date.email
            })
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })



return(<>stepper</>)

}

export default EmailStepper;