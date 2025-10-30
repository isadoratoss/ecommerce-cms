import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { BrandDataTable } from "./data-table/brand-data-table"

export function BrandLayout() {
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
                        <BreadcrumbPage>Marcas</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div>
                <BrandDataTable />
            </div>
        </div>
    )
}