/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { useState } from 'react'

const LocationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 16px;
`

const LocationButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? '#007bff' : '#f1f1f1')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border-radius: 20px;
  border: ${(props) => (props.active ? '2px solid #007bff' : '1px solid #ccc')};
  cursor: pointer;
  font-weight: bold;
`

const locations = ['고객센터', '수원', '동대문', '전주', '부산', '안산']

const LocationSelector = () => {
  const [activeLocation, setActiveLocation] = useState('고객센터')

  return (
    <LocationWrapper>
      {locations.map((location) => (
        <LocationButton
          key={location}
          active={activeLocation === location}
          onClick={() => setActiveLocation(location)}
        >
          {location}
        </LocationButton>
      ))}
    </LocationWrapper>
  )
}

export default LocationSelector
