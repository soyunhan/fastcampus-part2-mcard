/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Label = styled.label`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
`

const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #e1e8ed;
  outline: none;
  height: 120px;
  resize: none;
`

function TextareaInput({
  label,
  placeholder,
}: {
  label: string
  placeholder: string
}) {
  return (
    <TextareaWrapper>
      <Label>{label}</Label>
      <Textarea placeholder={placeholder} />
    </TextareaWrapper>
  )
}

export default TextareaInput
