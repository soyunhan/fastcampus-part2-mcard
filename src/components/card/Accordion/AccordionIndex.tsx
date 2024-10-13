/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import styled from '@emotion/styled'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

// Define the type for the props
interface AccordionItemProps {
  title: string
  content: string
}

// Accordion Wrapper
const AccordionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border-bottom: 1px solid #e1e8ed;
  overflow: hidden;
`

// Accordion Item Wrapper
const AccordionItemWrapper = styled.div`
  border-bottom: 1px solid #e1e8ed;
  &:last-child {
    border-bottom: none;
  }
`

// Accordion Header
const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: #ffffff;
  transition: background-color 0.3s ease;

  /* &:hover {
    background-color: #f7f9fc;
  } */
`

// Accordion Title
const AccordionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #333;
`

// Accordion Icon
const AccordionIcon = styled.div`
  font-size: 12px;
  color: #333;
`

// Accordion Content
const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: 16px;
  font-size: 14px;
  color: #666;
  background-color: #f7f9fc;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: max-height 0.3s ease;
`

// Accordion Item Component with props typed
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <AccordionItemWrapper>
      <AccordionHeader onClick={toggleAccordion}>
        <AccordionTitle css={{ color: isOpen ? '#007bff' : '#333' }}>
          {title}
        </AccordionTitle>
        <AccordionIcon>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </AccordionIcon>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{content}</AccordionContent>
    </AccordionItemWrapper>
  )
}

// Main Accordion Component
const Accordion = () => {
  return (
    <AccordionWrapper>
      <AccordionItem
        title="본인명의 휴대폰이 아닌 경우 금융상품 가입이 가능한가요?"
        content="네, 본인명의의 휴대폰이 아니더라도 대체 인증 수단을 이용해 금융상품에 가입할 수 있습니다."
      />
      <AccordionItem
        title="가입 가능한 국가는 어디인가요?"
        content="2024년 3월 13일 기준, 16개국이 가입 가능하며, 국가는 아래와 같습니다: 캄보디아, 사우디아라비아, 태국, 베트남, 일본, 중국, 대만, 스위스, 헝가리, 나이지리아, 인도, 미얀마, 독일, 영국, 프랑스, 미국."
      />
      <AccordionItem
        title="직접 상담 받고 싶은데 영업점은 어떻게 운영하나요?"
        content="직접 상담을 원하시면 가까운 영업점에 방문하여 상담을 받을 수 있습니다. 운영 시간과 예약 가능 여부는 각 영업점에 문의하세요."
      />
    </AccordionWrapper>
  )
}

export default Accordion
