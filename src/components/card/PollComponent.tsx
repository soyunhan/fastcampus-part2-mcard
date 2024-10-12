/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const PollWrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const PollTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`

const PollItem = styled.div`
  background-color: #e9eff6;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
`

const PollStatus = styled.span`
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 14px;
  margin-left: 10px;
`

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  margin-top: 20px;
`

const Footer = styled.div`
  font-size: 12px;
  color: gray;
  margin-top: 10px;
`

interface PollComponentProps {
  pollTitle: string
  pollItems: Array<string>
  endDate: string
}

const PollComponent: React.FC<PollComponentProps> = ({
  pollTitle,
  pollItems,
  endDate,
}) => {
  return (
    <PollWrapper>
      <PollTitle>
        {pollTitle} <PollStatus>진행중</PollStatus>
      </PollTitle>

      {pollItems.map((item, index) => (
        <PollItem key={index}>{item}</PollItem>
      ))}

      <Button>투표하기</Button>

      <Footer>🗳️ {endDate} 까지</Footer>
    </PollWrapper>
  )
}

export default PollComponent
