/** @jsxImportSource @emotion/react */
import React from 'react'
import SocialLinks from './SocialLinks'
import styled from '@emotion/styled'
import StaffProfile from './StaffProfile'

interface Staff {
  name: string
  country: string
  imageUrl: string
  phone: string
  mobile: string
  fax: string
  email: string
  facebook?: string
  instagram?: string
  telegram?: string
}

const MainWrapper = styled.div`
  background-color: #f7f9fc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const MainContent = styled.div`
  flex: 1;
  padding: 16px;
`

const Divider = styled.div`
  border-top: 1px solid #e0e0e0;
  margin: 32px 0; /* 구분선 상하 간격 조정 */
`

const StaffMainPage: React.FC = () => {
  const staffData: Staff[] = [
    {
      name: '타랑가',
      country: 'Kyrgyzstan, Uzbekistan',
      imageUrl: '/path/to/image1.jpg',
      phone: '1588-2266',
      mobile: '010-5725-3035',
      fax: '031-248-8193',
      email: 'tharanga.lk@jbbank.co.kr',
      facebook: 'https://www.facebook.com/jbbank',
      instagram: 'https://www.instagram.com/jbbank',
      telegram: 'https://t.me/jbbank02',
    },
    {
      name: '카말라',
      country: 'Nepal',
      imageUrl: '/path/to/image2.jpg',
      phone: '031-223-7284',
      mobile: '010-8520-1136',
      fax: '031-223-7286',
      email: 'kamalaolisaud@gmail.com',
      facebook: 'https://www.facebook.com/jbbank',
    },
    {
      name: '테이이',
      country: 'Myanmar',
      imageUrl: '/path/to/image3.jpg',
      phone: '031-223-7284',
      mobile: '010-2303-7237',
      fax: '031-223-7286',
      email: 'wizard.kslh@gmail.com',
      facebook: 'https://www.facebook.com/jbbank',
    },
  ]

  return (
    <MainWrapper>
      <MainContent>
        {staffData.map((staff, index) => (
          <div key={index}>
            <StaffProfile
              name={staff.name}
              country={staff.country}
              imageUrl={staff.imageUrl}
              phone={staff.phone}
              mobile={staff.mobile}
              fax={staff.fax}
              email={staff.email}
              title={''}
              countryFlagUrl={''}
              customerCenter={''}
              facebook={''}
            />
            <SocialLinks
              facebook={staff.facebook}
              instagram={staff.instagram}
              telegram={staff.telegram}
            />
            {index < staffData.length - 1 && <Divider />}
          </div>
        ))}
      </MainContent>
    </MainWrapper>
  )
}

export default StaffMainPage
