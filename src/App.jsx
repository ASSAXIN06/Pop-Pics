import { useState,useEffect } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard movie={{title: "Aniket's Film", release_date: "2025"}}/>
    </>
  )
}

export default App
