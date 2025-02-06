
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import View from './Pages/View'
import ViewUserList from './Pages/ViewUserList'
import ViewEvents from './Pages/ViewEvents'
import AddEvent from './Components/AddEvent'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/view' element={<View/>} />
        <Route path='/viewUserList' element={<ViewUserList/>} />
        <Route path='/viewEvent/:id' element={<ViewEvents/>} />
        <Route path='/addEvent/:id' element={<AddEvent/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
