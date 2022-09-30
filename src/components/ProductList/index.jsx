import { Paper,Grid ,Box, Typography} from "@mui/material"
import { noProduct } from "../../constants"
import ProductCard from "../ProductCard";
const ProductList=({products})=>{

    return(<>
            <Box style={{marginTop:'2%'}} >

            {  
                (products && products.length>0)?
                    
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map((product)=> (
                            <Grid item xs={2} sm={4} md={4} key={product.id}>
                                <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
        
                :
                <Paper sx={{width:'100vw',height:'90vh',display:'flex',alignItems:'center',justifyContent:'center'}} >
                    <Typography variant="h5" component={'div'}>
                        {noProduct}
                    </Typography>
                </Paper>
            }
            </Box>    
    
        </>
    )
}

export default ProductList;