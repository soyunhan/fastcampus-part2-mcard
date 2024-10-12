/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: transparent;
  border: 1px solid #007bff;
  color: #007bff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`

interface AddItemButtonProps {
  onClick: () => void
}

const AddItemButton: React.FC<AddItemButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>+ 항목 추가하기</Button>
}

export default AddItemButton
