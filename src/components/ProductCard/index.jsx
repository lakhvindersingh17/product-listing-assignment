import Card from '@mui/material/Card';
import { Link } from "react-router-dom"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const ProductCard=({product})=>{

    return <>
    <Link to={`/product/${product.id}`} style={{textDecoration:'none'}} >
    <Card sx={{ maxWidth: 400}}>
      <CardMedia
        component="img"
        height="200px"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="span" color="text.secondary" component="div">
          {product.title}
        </Typography>
      </CardContent>
    </Card>
    </Link>
    </>
}

export default ProductCard