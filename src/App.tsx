import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';


function App() {

  return (
    <>
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} width={'100vw'} height={'100vh'} overflow={'auto'}>
        <Box maxWidth={480}>
            <Grid container gap={3} padding={2}>
                <Grid item xs={12}>
                  <Box display={'flex'} gap={1} marginBottom={5} paddingBottom={2} alignItems={'center'}>
                      <Typography variant='h5' fontWeight={'bold'} color='primary'>
                        Ingresar al sistema
                      </Typography>
                      <Box>
                          <LoginIcon color='primary' fontSize={'large'} />
                      </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                      fullWidth 
                      type='email'
                      id="outlined-basic"
                      label="Correo"
                      variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                      fullWidth 
                      type='password'
                      id="outlined-basic"
                      label="Contraseña"
                      variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} textAlign={'right'}>
                  <Button variant='contained' sx={{padding: '10px 20px'}} >Ingresar</Button>
                </Grid>
            </Grid>
        </Box>
    </Box>
    </>
  )
}

export default App
