/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaMinusCircle } from 'react-icons/fa'

const PollItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

const PollInput = styled.input`
  width: calc(100% - 30px);
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #e1e8ed;
  outline: none;
  color: #666;
`

const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #e74c3c;
  font-size: 20px;
`

interface PollItemProps {
  id: number
  value: string
  onChange: (id: number, value: string) => void
  onRemove: (id: number) => void
}

const PollItem: React.FC<PollItemProps> = ({
  id,
  value,
  onChange,
  onRemove,
}) => {
  return (
    <PollItemWrapper>
      <PollInput
        type="text"
        placeholder="투표 항목을 입력해 주세요."
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
      />
      <RemoveButton onClick={() => onRemove(id)}>
        <FaMinusCircle />
      </RemoveButton>
    </PollItemWrapper>
  )
}

export default PollItem
