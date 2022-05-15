import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';


export const errorHelper = (formik,values) => ({
    error: formik.errors[values] && formik.touched[values] ? true :false,
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values]:null
})

export const Loader = () => (
    <div className='root_loader'>
        <CircularProgress/>
    </div>
)

export const showToast = (type,msg) => {
    switch(type){
        case 'SUCCESS':
            toast.success(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        break;
        case 'ERROR':
            toast.error(msg,{
                position: toast.POSITION.BOTTOM_RIGHT
            })
        break;
        default:
            return false

    }
}