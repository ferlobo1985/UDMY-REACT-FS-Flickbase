import CircularProgress from '@mui/material/CircularProgress'


export const errorHelper = (formik,values) => ({
    error: formik.errors[values] && formik.touched[values] ? true :false,
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values]:null
})

export const Loader = () => (
    <div className='root_loader'>
        <CircularProgress/>
    </div>
)