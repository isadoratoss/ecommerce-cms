import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ProductDataTable } from "./data-table/product-data-table"

export function ProductLayout() {
    return (
        < div className="py-4">
            <BreadCrumb
        </div>
        <div className="flex flex-col py-4 gap-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />                    
                    <BreadcrumbItem>
                        <BreadcrumbPage>Produtos</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div>
                <ProductDataTable />
            </div>
        </div>
    )
}