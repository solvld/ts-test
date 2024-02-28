
import { useEffect } from 'react'
import { outputImage } from '../learnTS/PixelSmile'
import './style.css'
import CharForm from '../components/CharForm'

const App = () => {

  useEffect(() => {
    outputImage()
  },[])
  return (
    <>
      <h1>Hello world</h1>
      <CharForm />
    </>
  )
}

export default App
