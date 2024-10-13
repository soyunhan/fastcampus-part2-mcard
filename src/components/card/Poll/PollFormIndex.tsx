/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from 'react'
import PollItem from './PollItem'
import AddItemButton from '../AddItemButton'
import SubmitButton from '../SubmitButton'

const FormWrapper = styled.div`
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
`

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #e1e8ed;
  margin-bottom: 20px;
  outline: none;
  color: #666;
`

const Label = styled.label`
  font-size: 14px;
  color: #99a1b3;
  margin-bottom: 5px;
`

function PollForm() {
  const [title, setTitle] = useState('')
  const [items, setItems] = useState([
    { id: 1, value: '' },
    { id: 2, value: '' },
  ])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleItemChange = (id: number, value: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, value } : item)),
    )
  }

  const addItem = () => {
    const newItem = { id: Date.now(), value: '' }
    setItems([...items, newItem])
  }

  const removeItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const handleSubmit = () => {
    // 폼 제출 시 처리 로직
    console.log('투표 제목:', title)
    console.log('투표 항목들:', items)
    // 폼 제출 후 초기화
    setTitle('')
    setItems([
      { id: 1, value: '' },
      { id: 2, value: '' },
    ])
  }

  return (
    <FormWrapper>
      <Title>투표 등록</Title>

      <Label>투표 제목</Label>
      <Input
        type="text"
        placeholder="투표 제목을 입력해 주세요."
        value={title}
        onChange={handleTitleChange}
      />

      <Label>투표항목</Label>
      {items.map((item) => (
        <PollItem
          key={item.id}
          id={item.id}
          value={item.value}
          onChange={handleItemChange}
          onRemove={removeItem}
        />
      ))}

      <AddItemButton onClick={addItem} />
      <SubmitButton onClick={handleSubmit} />
    </FormWrapper>
  )
}

export default PollForm
