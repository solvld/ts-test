import React, { FC } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: hsl(220, 80%, 80%);
  padding: 15px;
  border-radius: 24px;
  width: 15%;
`
const Button = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  border-radius: 15px;
  border: none;
  width: 50%;

  background-color: #7b9ccb;
  &:hover {
    background-color: #7b9ccb58
  }
`
const Input = styled.input`
  border-radius: 4px;
  border: none;
  padding: 6px 4px;
  width: 50%;
`

const CharForm: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="onChar">on char</label>
      <Input id="onChar" type="text" />
      <label htmlFor="offChar">off char</label>
      <Input id="offChar" type="text" />
      <Button type="submit">Y0</Button>
    </Form>
  )
}

export default CharForm
