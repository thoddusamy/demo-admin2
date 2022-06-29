import './App.css'
import Mainpage from './Components/Mainpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loginpage from './Components/Loginpage'
import Dashboard from './Components/Dashboard'
import CreateNewUser from './Components/CreateNewUser'
import ViewStudent from './Components/ViewStudent'
import EditStudent from './Components/EditStudent'
import Products from './Components/Products'
import CreateProduct from './Components/CreateProduct'
import ViewProduct from './Components/ViewProduct'
import EditProduct from './Components/EditProduct'
import Students from './Components/Students'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage />} />
        <Route path='/mainpage' element={<Mainpage />}>
          <Route path='/mainpage' element={<Dashboard />} />
          <Route path='/mainpage/dashboard' element={<Dashboard />} />
          <Route path='/mainpage/students' element={<Students />} />
          <Route path='/mainpage/students/createstudent' element={<CreateNewUser />} />
          <Route path='/mainpage/students/viewstudent/:id' element={<ViewStudent />} />
          <Route path='/mainpage/students/editstudent/:id' element={<EditStudent />} />
          <Route path='/mainpage/products' element={<Products />} />
          <Route path='/mainpage/products/createproduct' element={<CreateProduct />} />
          <Route path='/mainpage/products/view/:id' element={<ViewProduct />} />
          <Route path='/mainpage/products/edit/:id' element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
