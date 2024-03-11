import { useEffect } from 'react'
import { outputImage } from '../learnTS/PixelSmile'
// import CharForm from '../components/CharForm'
import ArrivalTime from '../components/ArrivalTime'

const App = () => {
  useEffect(() => {
    outputImage()
  }, [])
  return (
    <>
      <ArrivalTime />
      <div>k</div>
    </>
  )
}

export default App
