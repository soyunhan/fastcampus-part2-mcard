/** @jsxImportSource @emotion/react */
import Header from './Header'
import LocationSelector from './LocationSelector'
import Map from './Map'
import ContactInfo from './ContactInfo'
import WorkingHours from './WorkingHours'
import StaffSchedule from './StaffSchedule'
import FooterButton from './FooterButton'
import styled from '@emotion/styled'

const MainWrapper = styled.div`
  background-color: #f7f9fc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.div`
  flex: 1;
`

const ConciergeIndex = () => {
  return (
    <MainWrapper>
      <Header />
      <MainContent>
        <LocationSelector />
        <Map />
        <ContactInfo />
        <WorkingHours />
        <StaffSchedule />
      </MainContent>
      <FooterButton />
    </MainWrapper>
  )
}

export default ConciergeIndex
