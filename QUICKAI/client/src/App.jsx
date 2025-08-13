import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import WriteArticle from './pages/WriteArticle'

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ai' element={<Layout />}>
            <Route path='write-article' element={<WriteArticle />} />
            <Route path='blog-titles' element={<BlogTitles />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App