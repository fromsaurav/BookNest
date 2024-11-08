import React from 'react'
import { Routes, Route } from 'react-router-dom';
import CreateBooks from './pages/CreateBooks';
import Home from './pages/Home';
import DeleteBooks from './pages/DeleteBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';

const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/delete/:id' element={<DeleteBooks/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
    </Routes>
  )
}

export default App