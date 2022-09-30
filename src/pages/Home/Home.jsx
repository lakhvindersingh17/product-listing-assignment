import { useEffect, useState } from "react"
import ProductList from "../../components/ProductList"
import Search from "../../components/Search/Search"

import { getProducts } from "../../services/getProducts"
import './styles.css'

const Home=()=>{

    const [products,setProducts]=useState([])
    const [searchedProduct,setSearchedProduct]=useState([])

    useEffect(()=>{

        getProducts().then(products=>{
            setProducts(products) 
            setSearchedProduct(products)
            
        }).catch(e=>console.log(e))

    },[])

    const updateSearchResult=(query)=>
        setSearchedProduct(products.filter(product=>product?.title?.toLowerCase().includes(query.toLowerCase())))

    return (
        <>
        <div className="header">
            <Search data={products.map(product=>product.title)} onSearch={updateSearchResult}  />
        </div>
            
        <ProductList products={searchedProduct}/>
        
        </>
    )
}

export default Home