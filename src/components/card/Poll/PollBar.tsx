/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import styled from '@emotion/styled'

const PollWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  border: 1px solid #e1e8ed;
`

const PollTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PollTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`

const PollStatus = styled.span`
  background-color: #e6f4ff;
  color: #007bff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
`

const PollOptionWrapper = styled.div`
  position: relative;
  margin-bottom: 8px;
  border-radius: 8px;
  overflow: hidden;
`

const PollBackgroundBar = styled.div<{ width: number }>`
  background-color: #eaf6ff; /* Light blue background */
  width: ${(props) => props.width}%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`

const PollOptionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: relative;
  z-index: 2;
`

const PollTextWrapper = styled.div`
  display: flex;
  align-items: center;
`

const PollOptionText = styled.span`
  font-size: 14px;
  z-index: 2;
`

const PollPercentageWrapper = styled.div`
  display: flex;
  align-items: center;
`

const PollPercentage = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: 8px;
  z-index: 2;
`

const Checkmark = styled.span<{ isVisible: boolean }>`
  color: #007bff;
  font-size: 16px;
  margin-left: 8px; /* Space between text and checkmark */
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
`

const PollFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

const PollVotes = styled.span`
  font-size: 12px;
  color: #666;
`

const PollButton = styled.button`
  width: 100%;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
`

interface PollOption {
  option: string
  percentage: number
  selected?: boolean
}

const PollResult: React.FC = () => {
  const [pollOptions, setPollOptions] = useState<PollOption[]>([
    { option: '투표항목 1', percentage: 0, selected: false },
    { option: '투표항목 2', percentage: 80, selected: true },
    { option: '투표항목 3', percentage: 0, selected: false },
    { option: '투표항목 4', percentage: 20, selected: false },
  ])

  return (
    <PollWrapper>
      <PollTitleWrapper>
        <PollTitle>투표 제목 투표 제목</PollTitle>
        <PollStatus>진행중</PollStatus>
      </PollTitleWrapper>
      {pollOptions.map((option, index) => (
        <PollOptionWrapper key={index}>
          <PollBackgroundBar width={option.percentage} />
          <PollOptionContent>
            <PollTextWrapper>
              <PollOptionText>{option.option}</PollOptionText>
              <Checkmark isVisible={option.selected || false}>✔</Checkmark>
            </PollTextWrapper>
            <PollPercentageWrapper>
              <PollPercentage>{option.percentage}%</PollPercentage>
            </PollPercentageWrapper>
          </PollOptionContent>
        </PollOptionWrapper>
      ))}
      <PollFooter>
        <PollButton>다시 투표하기</PollButton>
        <PollVotes>5표 · 2024년 8월 29일 까지</PollVotes>
      </PollFooter>
    </PollWrapper>
  )
}

export default PollResult
