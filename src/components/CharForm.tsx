import React, {FC} from 'react'

const CharForm: FC = () => {

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
}

  return (
    <form onSubmit={handleSubmit}>
      <input id="onChar" type="text" />
      <label htmlFor="onChar">on char</label>
      <input id="offChar" type="text" />
      <label htmlFor="offChar">off char</label>
      <button type="submit">Y0</button>
    </form>
  )
}

export default CharForm