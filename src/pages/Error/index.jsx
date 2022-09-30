import { Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ErrorPage=()=>{

    return(<Container>

        <Typography variant="h2" component={'h1'}>
            Page Not Found 
        </Typography>

        <Typography variant="h5">
            <Link to='/'>
            Click Here to go to HomePage
            </Link>
        </Typography>


    </Container>)
}

export default ErrorPage