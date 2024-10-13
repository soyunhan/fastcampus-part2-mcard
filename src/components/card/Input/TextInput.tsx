/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Label = styled.label`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
`

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #e1e8ed;
  outline: none;
`

function TextInput({
  label,
  placeholder,
}: {
  label: string
  placeholder: string
}) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input placeholder={placeholder} />
    </InputWrapper>
  )
}

export default TextInput
