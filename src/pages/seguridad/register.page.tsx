
import { Box, Link, Stack, TextField, Typography } from '@mui/material'
import { useAppDispatch } from '../../redux';
import { seguridadIngresarThunk } from '../../redux/stores/seguridad/seguridadThunks';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { FormLayout } from './components/FormLayout';
import { ButtonWithLoading } from '../../components/ButtonWithLoading.component';
import { getRouteByName } from '../../router/helpers';

const loginDataSchema = Yup.object({
  nick: Yup.string().required('El campo es obligatorio'),
  email: Yup.string().email('El formato de correo es invalido').required('El campo es obligatorio'),
  password: Yup.string().min(6,'Debe tener mínimo 6 caracteres').required('El campo es obligatorio')
})

export const RegisterPage = () => {
    const dispatch = useAppDispatch();
    const formik = useFormik({
      initialValues: {
        nick: '',
        email: '',
        password: ''
      },
      validationSchema: loginDataSchema,
      onSubmit: (values) => {
        dispatch(seguridadIngresarThunk());
        console.log({values});
      }
    })

    return (<>
            <FormLayout
              title={'Registrarse'}
              onSubmit={formik.handleSubmit}
            ><>
                  <Stack gap={2}>
                      <TextField 
                            fullWidth 
                            type='text'      
                            label="Nick"
                            variant="outlined"
                            name='nick'
                            value={formik.values.nick}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.nick && Boolean(formik.errors.nick)}
                            helperText={formik.touched.nick && formik.errors.nick}
                      />
                      <TextField 
                            fullWidth 
                            type='text'      
                            label="Correo"
                            variant="outlined"
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                      />
                      <TextField 
                          fullWidth 
                          type='password'
                          autoComplete={''}
                          label="Contraseña"
                          variant="outlined"
                          name='password'
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.password && Boolean(formik.errors.password)}
                          helperText={formik.touched.password && formik.errors.password}
                      />
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
                                ya tienes un cuenta? <Link href={getRouteByName('ingresar')}>ingresar</Link>
                            </Typography>
                        </Box>
                      </Stack>
                  </Stack>
            </></FormLayout>
    </>)
}

