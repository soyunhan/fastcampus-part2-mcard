/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from 'react'

const VoteWrapper = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
`

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`

const VoteInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 10px;
  border: 1px solid #e1e8ed;
`

const AddButton = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid #007bff;
  background-color: transparent;
  color: #007bff;
  font-size: 14px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 5px;
`

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 18px;
  cursor: pointer;
`

function VoteForm() {
  const [voteItems, setVoteItems] = useState<string[]>([''])

  const handleAddItem = () => {
    setVoteItems([...voteItems, ''])
  }

  const handleRemoveItem = (index: number) => {
    setVoteItems(voteItems.filter((_, i) => i !== index))
  }

  return (
    <VoteWrapper>
      <Label>투표 항목</Label>
      {voteItems.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <VoteInput placeholder="투표 항목을 입력해주세요" />
          {voteItems.length > 1 && (
            <RemoveButton onClick={() => handleRemoveItem(index)}>
              -
            </RemoveButton>
          )}
        </div>
      ))}
      <AddButton onClick={handleAddItem}>+ 항목 추가하기</AddButton>
    </VoteWrapper>
  )
}

export default VoteForm
