/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const MapWrapper = styled.div`
  background-color: #f7f9fc;
  border-radius: 12px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const MapImage = styled.img`
  width: 100%;
  border-radius: 12px;
`

const Map = () => {
  return (
    <MapWrapper>
      <MapImage src="/path/to/map.png" alt="지도" />
    </MapWrapper>
  )
}

export default Map
