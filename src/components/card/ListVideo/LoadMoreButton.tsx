/** @jsxImportSource @emotion/react */
import React from 'react'
import styled from '@emotion/styled'

const LoadMoreWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  cursor: pointer;
  color: #007bff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`

interface LoadMoreButtonProps {
  onClick: () => void
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return <LoadMoreWrapper onClick={onClick}>더보기</LoadMoreWrapper>
}

export default LoadMoreButton
