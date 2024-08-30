
import { Box, Link, Stack, TextField, Typography } from '@mui/material'
import { useAppDispatch } from '../../redux';
import { seguridadIngresarThunk } from '../../redux/stores/seguridad/seguridadThunks';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FormLayout } from './components/FormLayout';
import { ButtonWithLoading } from '../../components/ButtonWithLoading.component';
import { useNavigate } from 'react-router';
import { getRouteByName } from '../../router/helpers';

const loginDataSchema = Yup.object({
  email: Yup.string().email('El formato de correo es invalido').required('El campo es obligatorio'),
  password: Yup.string().required('El campo es obligatorio')
})

export const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const formikLogin = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      validationSchema: loginDataSchema,
      onSubmit: (values) => {
        dispatch(seguridadIngresarThunk());
        navigate(getRouteByName('dashboard'))
        console.log({values});
      }
    })

    return (<>
            <FormLayout
              title={'Ingresar al sistema'}
              onSubmit={formikLogin.handleSubmit}
            ><>
                    <Stack gap={2}>
                      <TextField 
                            fullWidth 
                            type='text'      
                            label="Correo"
                            variant="outlined"
                            name='email'
                            value={formikLogin.values.email}
                            onChange={formikLogin.handleChange}
                            onBlur={formikLogin.handleBlur}
                            error={formikLogin.touched.email && Boolean(formikLogin.errors.email)}
                            helperText={formikLogin.touched.email && formikLogin.errors.email}
                      />
                      <Stack>
                        <TextField 
                            fullWidth 
                            type='password'
                            autoComplete={''}
                            label="Contraseña"
                            variant="outlined"
                            name='password'
                            value={formikLogin.values.password}
                            onChange={formikLogin.handleChange}
                            onBlur={formikLogin.handleBlur}
                            error={formikLogin.touched.password && Boolean(formikLogin.errors.password)}
                            helperText={formikLogin.touched.password && formikLogin.errors.password}
                        />
                        <Box textAlign={'right'}>
                          <Typography fontWeight={'light'} fontSize={'.8em'}>
                            <Link href="#">¿Has olvidado tu contraseña?</Link>
                          </Typography>
                        </Box>
                      </Stack>
                      <Stack marginTop={2} gap={1}>
                            <ButtonWithLoading
                              type='submit' 
                              variant='contained' 
                              sx={{padding: '10px 20px'}}
                              label={'Ingresar'}
                              isLoading={false}
                            />
                            <Box textAlign={'left'}>
                            <Typography marginTop={1} fontWeight={'light'} fontSize={'.8em'}>
                                Aun no tienes un cuenta? <Link href={getRouteByName('registrarse')}>Registrarse</Link>
                            </Typography>
                        </Box>
                      </Stack>
                  </Stack>
            </></FormLayout>
    </>)
}

