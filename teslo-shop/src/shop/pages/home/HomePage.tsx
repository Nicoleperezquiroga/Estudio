import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomJumbotron } from "@/shop/Components/CustomJumbotron"
import { ProductsGrid } from "@/shop/Components/ProductsGrid"
import { useProducts } from "@/shop/hooks/useProducts"

export const HomePage = () => {
    const {data} = useProducts();
    return (
        <>
            <CustomJumbotron title="Todos los productos" />
            <ProductsGrid products={data?.products || []}/>
            <CustomPagination totalPages={data?.pages || 0} />
        </>
    )
}