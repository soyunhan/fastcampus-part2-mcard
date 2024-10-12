/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { FaChevronDown } from 'react-icons/fa'
import { useRef } from 'react'

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px; /* 너비 조정 */
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

const DateInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  border: none;
  outline: none;
  appearance: none;
  background-color: transparent;
  cursor: pointer;

  /* 기본 날짜 선택 아이콘 숨기기 */
  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`

const Icon = styled(FaChevronDown)`
  position: absolute;
  right: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`

function DateSelectBox() {
  const dateInputRef = useRef<HTMLInputElement>(null)

  // 아이콘 클릭 시 날짜 선택기 포커스
  const handleIconClick = () => {
    if (dateInputRef.current) {
      dateInputRef.current.click() // 아이콘을 클릭하면 input이 동작하도록
    }
  }

  return (
    <SelectWrapper>
      <Label htmlFor="date-select">투표 마감 날짜</Label>
      <SelectContainer>
        <DateInput id="date-select" type="date" ref={dateInputRef} />
        <Icon onClick={handleIconClick} />
      </SelectContainer>
    </SelectWrapper>
  )
}

export default DateSelectBox
