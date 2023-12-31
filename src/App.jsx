
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemCount from "./components/ItemCount/ItemCount"
import ItemListContainer from './components/cards/ItemListContainer'
import ItemDetailContainer from './components/cards/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <>
      <BrowserRouter>
        
        <NavBar/>
        
        <Routes>
          <Route path='/' element = {<ItemListContainer/>}/>
          <Route path='/Item/:id' element = {<ItemDetailContainer />}/>
          <Route path='/productos' element = {<ItemListContainer />}/>
          <Route path='/productos/:category' element = {<ItemListContainer />}/>
        </Routes>
      
      </BrowserRouter>  
      
      {/* <ItemCount stock = {10}/> */}
    </>
  )
}

export default App
