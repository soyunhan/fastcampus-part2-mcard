import styled from '@emotion/styled'
import { FaChevronDown } from 'react-icons/fa'

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; /* 너비 조정 */
`

const Label = styled.label`
  font-size: 12px;
  color: #99a1b3;
  margin-bottom: 5px;
`

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e8ed;
  padding: 5px 0;
`

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  border: none;
  outline: none;
  appearance: none; /* 기본 셀렉트박스 화살표 숨김 */
  background-color: transparent;
`

const Icon = styled(FaChevronDown)`
  position: absolute;
  right: 10px;
  font-size: 14px;
  color: #333;
`

function SelectBox() {
  return (
    <SelectWrapper>
      <Label htmlFor="country-select">국가</Label>
      <SelectContainer>
        <Select id="country-select">
          <option value="전체">전체</option>
          <option value="한국">한국</option>
          <option value="미국">미국</option>
          <option value="일본">일본</option>
        </Select>
        <Icon />
      </SelectContainer>
    </SelectWrapper>
  )
}

export default SelectBox
