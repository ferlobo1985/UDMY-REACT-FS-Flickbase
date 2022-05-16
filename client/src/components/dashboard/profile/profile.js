import { useFormik } from 'formik';
import { useDispatch, useSelector} from 'react-redux';

import { errorHelper } from '../../../utils/tools';
import { updateUserProfile } from '../../../store/actions/users'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserProfile = () => {
    const { firstname,lastname,age } = useSelector(state=>state.users.data)
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize: true,
        initialValues:{ firstname,lastname,age },
        onSubmit:(values)=>{
            dispatch(updateUserProfile(values))
        }
    })


    return(
        <>
          <form className='mt-3 article_form' style={{ maxWidth:'250px'}}
            onSubmit={formik.handleSubmit}
          >

              <div className='form-group'>
                <TextField
                    style={{width:'100%'}}
                    name="firstname"
                    label="Enter your firstname"
                    variant='outlined'
                    {...formik.getFieldProps('firstname')}
                    {...errorHelper(formik,'firstname')}
                />
              </div>
              <div className='form-group'>
                <TextField
                    style={{width:'100%'}}
                    name="lastname"
                    label="Enter your lastname"
                    variant='outlined'
                    {...formik.getFieldProps('lastname')}
                    {...errorHelper(formik,'lastname')}
                />
              </div>
              <div className='form-group'>
                <TextField
                    style={{width:'100%'}}
                    name="age"
                    label="Enter your age"
                    variant='outlined'
                    {...formik.getFieldProps('age')}
                    {...errorHelper(formik,'age')}
                />
              </div>
              <Button
                className='mt-3'
                variant='contained'
                color='primary'
                type='submit'
              >
                  Edit profile
              </Button>


          </form>
        </>
    )

}


export default  UserProfile