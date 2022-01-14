import { Box } from "@mui/system";
//import of icons
import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';

export default function Footer(){
    return(
        <Box sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            color: 'white',
            bgcolor: '#1565c0'
        }}>
            <p>Created By: Toruño</p>
            <p>Derechos de Author 2022</p>
            <p>Puede Visitar el reposirotiode este proyecto en:</p>
            <p><a href="https://github.com/toruno15/store-practice" target='_blank'>repositorio en Guthub</a></p>
            <p>Gracias por su apoyo y comprensión. Que pase buen día</p>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <GitHubIcon/>
                <JavascriptIcon/>
            </Box>
        </Box>
    );
}