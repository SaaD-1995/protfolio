import { Container, Typography, Button } from '@mui/material';
function Protfolio(){
    return(
        <>
            <Container>
                <div> 
                    <Typography variant='h1'  color='#fff' sx={{fontSize:'35px', fontWeight:'700'}} >Protfolio</Typography>
                    <Button variant="contained">Contained</Button>
                </div>
            </Container>
        </>
    );
}
export default Protfolio;