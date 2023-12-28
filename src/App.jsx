import {Home} from "./pages/Home.jsx";
import {Route, Routes} from "react-router-dom";
import AddProduct from "./pages/products/AddProduct.jsx";
import ListProducts from "./pages/products/ListProducts.jsx";
import UpdateProduct from "./pages/products/UpdateProduct.jsx";

function App() {

    return (
        <>
            <Routes>
                <Route path={'products'} element={<Home/>}>
                    <Route path={'create'} element={<AddProduct/>}/>
                    <Route path={'list'} element={<ListProducts/>}/>
                    <Route path={'edit/:id'} element={<UpdateProduct/>}/>
                </Route>
            </Routes>

        </>
    )
}

export default App
