/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const ButtonWrapper = styled.div`
  background-color: #fff;
  text-align: center;
`

const Button = styled.button`
  width: 100%;
  padding: 12px 24px;
  background-color: transparent;
  border: 1px solid #007bff;
  color: #007bff;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
`

const FooterButton = () => {
  return (
    <ButtonWrapper>
      <Button>직원 정보</Button>
    </ButtonWrapper>
  )
}

export default FooterButton
