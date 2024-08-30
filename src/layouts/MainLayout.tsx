import { Box } from '@mui/material';
import { Outlet } from 'react-router';


export function MainLayout(){
    return <Box style={{background: '#F5F7F9', height:'100vh', width: '100vw', overflow: 'auto'}} >
      <Outlet />
    </Box>
}