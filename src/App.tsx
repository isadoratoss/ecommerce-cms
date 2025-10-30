import { Routes } from "react-router-dom"
import { CategoryLayout } from "./cases/categories/components/category-layout"
import { Route } from "lucide-react"
import { BrandLayout } from "./cases/brands/components/brand-layout"
import { ProductLayout } from "./cases/products/components/product-layout"

function App() {

  return (
    <div className="wrapper">
      <main>
        <Routes>
          <Route path="/categories" element={ <CategoryLayout />} />
          <Route path="/brands" element={ <BrandLayout />} />
          <Route path="/products" element={ <ProductLayout />} />
          
        </Routes>
      </main>
    </div>
  )
}

export default App
