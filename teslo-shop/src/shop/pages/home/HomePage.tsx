import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { CustomJumbotron } from "@/shop/Components/CustomJumbotron"
import { ProductsGrid } from "@/shop/Components/ProductsGrid"

export const HomePage = () => {
    return (
        <>
            <CustomJumbotron title="Todos los productos" />
            <ProductsGrid products={products}/>
            <CustomPagination totalPages={7} />
        </>
    )
}