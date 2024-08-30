import { Box, Card, CardContent, Chip, Divider, Link, Stack, Typography } from '@mui/material';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import LoginIcon from '@mui/icons-material/Login';
import { getRouteByName } from '../../../router/helpers';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';

export function InicioPage(){
    return <>
        <Box>
            <Box style={{backgroundColor: '#0371DF',
                background: 'linear-gradient(90deg, rgba(3,113,223,1) 0%, rgba(3,113,223,1) 20%, rgba(10,95,181,1) 43%, rgba(10,76,143,1) 71%)'}
            }>
                <Stack 
                    direction='row' 
                    alignItems={'center'} 
                    gap={2} padding={2}
                    maxWidth={800} 
                    marginX='auto'
                    justifyContent={'flex-end'}
                >
                    <LinkWithIcon  label='Ingresar' icon={<LoginIcon fontSize='small'/>} url={getRouteByName('ingresar')}/>
                    <LinkWithIcon  label='Registrarse' icon={<RecentActorsIcon fontSize='small'/>} url={getRouteByName('registrarse')}/>
                </Stack>
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    height='auto'
                    paddingX={1}
                    paddingBottom={5}
                    minHeight={380} 
                    color='#fff' 
                    textAlign={'center'}
                >                    
                    <Typography fontSize={'.8em'} fontWeight={'light'}>
                        Bienvenido a
                    </Typography>
                    <Typography fontSize={'3em'} fontWeight={'bold'}>
                        UNIVERSIDAD NACIONAL DE ASUNCIÓN
                    </Typography>
                </Stack>
            </Box>
            <Box component={'header'} style={{transform: 'translateY(-50%)'}} paddingX={1}>
                <Box sx={{ boxShadow: 3 }}  maxWidth={900} margin={'auto'} borderRadius={10} style={{background: '#fff'}}>
                    <Stack direction='row' alignItems={'center'} gap={1.6} paddingY={1.2} paddingX={3}>     
                        <Box paddingTop={1}>
                                <SearchIcon fontSize='large' color={'primary'}/>
                        </Box>
                        <Box style={{width:'100%'}}>                            
                            <input
                                style={{
                                    width:'100%',
                                    outline: 'none',
                                    border: 'none',
                                    background: 'none',
                                    fontSize: '1.2em'
                                }}
                                placeholder='Buscar contenido...'
                            />
                        </Box>                       
                    </Stack>
                </Box>
            </Box>
        </Box>
        <Box>
            <Stack direction={'row'} gap={1} overflow={'auto'} paddingBottom={1} paddingX={2} marginBottom={2}>
                <Chip
                    variant='filled'
                    color='primary'
                    label='redes'
                />
                <Chip
                    variant='outlined'
                    color='primary'
                    label='programación'
                />
                <Chip
                    variant='outlined'
                    color='primary'
                    label='calculo II'
                />
                <Chip
                    variant='outlined'
                    color='primary'
                    label='Investigación de operaciones I'
                />
            </Stack>
        </Box>
        <Box paddingBottom={2} paddingX={1}>
            <Stack direction={'row'} flexWrap={'wrap'} gap={1} justifyContent={'center'}>
                <Box style={{width: '100%', height: '100%'}} maxWidth={'380px'}>
                    <ContentCard
                        title='Llamado a Concurso Externo: Auxiliar Administrativo para el Departamento Operativo de Contrataciones ' 
                        publishedDate='12/12/2024' 
                        shortDescrition='Auxiliar Administrativo para el Departamento Operativo de Contrataciones (CE-FP-UNA-27-2024)...'
                        image='https://i0.wp.com/www.pol.una.py/wp-content/uploads/llamado-a-concurso.jpg?resize=768%2C768&ssl=1'
                    />
                </Box>
                <Box style={{width: '100%', height: '100%'}} maxWidth={'380px'}>
                    <ContentCard
                        title='Estudiantes de Ingeniería en Energía Presentan Trabajo Final de Grado sobre Diésel Renovable en el Transporte Público' 
                        publishedDate='12/12/2024' 
                        shortDescrition='El pasado martes 27 de agosto de 2024, a las 17:00 horas, en el aula B02 de la Facultad Politécnica...'
                        image='https://i0.wp.com/www.pol.una.py/wp-content/uploads/IMG_3343-scaled.jpg?resize=768%2C665&ssl=1'
                    />
                </Box>
                <Box style={{width: '100%', height: '100%'}} maxWidth={'380px'}>
                    <ContentCard
                        title='Estudiantes de Ingeniería en Energía Presentan Trabajo Final de Grado sobre Diésel Renovable en el Transporte Público' 
                        publishedDate='12/12/2024' 
                        shortDescrition='El pasado martes 27 de agosto de 2024, a las 17:00 horas, en el aula B02 de la Facultad Politécnica...'
                        image='https://i0.wp.com/www.pol.una.py/wp-content/uploads/IMG_3343-scaled.jpg?resize=768%2C665&ssl=1'
                    />
                </Box>
                <Box style={{width: '100%', height: '100%'}} maxWidth={'380px'}>
                    <ContentCard
                        title='Llamado a Concurso Externo: Auxiliar Administrativo para el Departamento Operativo de Contrataciones ' 
                        publishedDate='12/12/2024' 
                        shortDescrition='Auxiliar Administrativo para el Departamento Operativo de Contrataciones (CE-FP-UNA-27-2024)...'
                        image='https://i0.wp.com/www.pol.una.py/wp-content/uploads/llamado-a-concurso.jpg?resize=768%2C768&ssl=1'
                    />
                </Box>
            </Stack>
        </Box>
    </>
}

interface LinkWithIconProps{
    label: string,
    url: string,
    icon: React.ReactElement
}
function LinkWithIcon({
    label, icon, url,
}: LinkWithIconProps){
    const navigate = useNavigate();

    const goTo = (url: string) => {
        navigate(url);
    }

    return  <Link onClick={(e) => {e.preventDefault(); goTo(url)}}  style={{textDecoration: 'none', background:'#ffffff1f', padding: '2px 8px', borderRadius:3}} color='#fff'>
        
        <Stack direction='row' alignItems={'center'} gap={1}>
            <Box paddingTop={.5}>
                {icon}
            </Box>
            <Box>
                {label}
            </Box>
        </Stack>
    </Link>
}


interface ContentCardProps{
    title: string,
    publishedDate: string,
    shortDescrition: string, 
    image: string
}
function ContentCard({
    title, publishedDate, shortDescrition, image
}: ContentCardProps){
    return <>
        <Card>
            <CardContent>
                <Stack gap={2}>
                    <Box style={{width:'100%', height: 280}} maxWidth={'250px'} textAlign={'center'} marginX={'auto'}>
                        <img   
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                            src={`${image}`}
                        />
                    </Box>
                    <Stack>
                        <Stack>
                            <Typography fontWeight={'Bold'}>{title}</Typography>
                            <Typography fontWeight={'light'} fontSize={'.7em'}>publicado el {publishedDate}</Typography>
                        </Stack>
                        <Box paddingTop={1} paddingBottom={3}>
                            <Divider/>
                        </Box>
                        <Typography  fontSize='.95em'>
                            {shortDescrition} <Link style={{cursor: 'pointer'}}>leer mas</Link>
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    </>
}