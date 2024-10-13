/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaArrowLeft, FaBars } from 'react-icons/fa'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
`

const HeaderButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderButton>
        <FaArrowLeft />
      </HeaderButton>
      <Title>센터 찾기</Title>
      <HeaderButton>
        <FaBars />
      </HeaderButton>
    </HeaderWrapper>
  )
}

export default Header
