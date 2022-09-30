import { useLoaderData } from "react-router-dom"
import { getProducts } from "../../services/getProducts"
import { CardMedia, Paper, Typography,Box, useMediaQuery} from "@mui/material"
import { Container } from "@mui/system"

export const loader= async ({params})=>{
    const product= await getProducts(params.productID)

    if(!product) throw Error('Product Not Found')

    return product

}

const ProductPage=()=>{

    const product=useLoaderData()
    const matches = useMediaQuery('(min-width:600px)');    
    return (
    <Container sx={{display:'flex',width:'100vw',minHeight:'90vh',alignItems:'center',justifyContent:'center',padding:0}}>
        <Paper sx={{display:matches?'flex':'block',maxWidth:"850px",padding:'1rem',alignItems:'center'}}>
            
            <Box> 

                <Typography variant="h4" color="text.primary" component="h2">
                    {product.title}
                </Typography>

                <Typography variant="subtitle1" gutterBottom color="text.secondary"  component="span">
                    {product.description}
                </Typography>
            </Box>
            
            <CardMedia
                component="img"
                height="400px"
                image={product.image}
            />
        </Paper>
    </Container>
)
}

export default ProductPage