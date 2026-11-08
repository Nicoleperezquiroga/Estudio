import { tesloApi } from "@/api/tesloApi"
import type { ProductsResponse } from "@/interfaces/products.reponse";

interface Options {
    limit?: number | string;
    offset?: number | string;
    sizes?: string;
    gender?: string;
    minPrice?: number;
    maxPrice?: number;
    q?: string;
}


export const getProductosAction = async(options: Options):Promise<ProductsResponse> =>{
    const {limit, offset,gender, sizes, minPrice, maxPrice, q} = options;
    console.log("GENDER", gender)
    const{data} = await tesloApi.get <ProductsResponse>('/products',{params:{limit, offset, gender, sizes, minPrice, maxPrice, q}});
    
    const productWithImageUrls = data.products.map(product => ({
        ...product,
        images: product.images.map(
            image => `${import.meta.env.VITE_API_URL}/files/product/${image}`
        )
    }));

    return {...data, products: productWithImageUrls};
}