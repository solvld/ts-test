import { useEffect, useState } from 'react'

const ArrivalTime = () => {
  const [data, setData] = useState([])
  const [stopId, setStopId] = useState('')
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetch(
      `https://transfer.msplus.ge:2443/otp/routers/ttc/stopArrivalTimes?stopId=${stopId}`
    )
      .then(response => response.json())
      .then(data => setData(data['ArrivalTime']))
  }, [stopId])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStopId(inputValue)
  }

  const handleChange = ({ target }) => setInputValue(target.value)

  let message

  if (!stopId) {
    message = <p>Please enter the bus station code</p>
  } else {
    message = <p>Loading...</p>
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="bus station code"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>

      {data.length === 0 ? (
        message
      ) : (
        <table>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr key={index}>
                  <td>{row['RouteNumber']}</td>
                  <td>{row['DestinationStopName']}</td>
                  <td>{row['ArrivalTime']}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </>
  )
}

export default ArrivalTime
