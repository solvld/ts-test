
import { useEffect } from 'react'
import { outputImage } from '../learnTS/PixelSmile'
import CharForm from '../components/CharForm'

const App = () => {

  useEffect(() => {
    outputImage()
  },[])
  return (
    <>
      <CharForm />
    </>
  )
}

export default App
