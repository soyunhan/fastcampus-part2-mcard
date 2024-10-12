/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`

interface SubmitButtonProps {
  onClick: () => void
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>투표 등록</Button>
}

export default SubmitButton
