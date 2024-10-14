import React from 'react'
import styled from '@emotion/styled'

// 국가 코드와 해당하는 국기 URL을 만드는 함수
const getFlagUrl = (countryCode: string) =>
  `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`

const ScheduleWrapper = styled.div`
  padding: 16px;
  background-color: #fff;
  margin-top: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`

const TableHeader = styled.th`
  text-align: left;
  font-size: 0;
  border-top: none;

  /* Hide the headers */
  visibility: hidden;
  height: 0;
  padding: 0;
`

const TableRow = styled.tr`
  text-align: left;
  &:nth-of-type(even) {
    background-color: #f7f9fc;
  }
`

const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: #333;
  border: 1px solid #e0e0e0;
  vertical-align: middle;
  text-align: center;
`

const FlagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const Flag = styled.img`
  width: 24px;
  height: 16px;
  margin: 0 5px;
`

const DayCell = styled.td`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  text-align: center;
  vertical-align: middle;
`

// 국가 코드를 사용하는 스케줄 데이터
const scheduleData = {
  월: ['AT', 'NG', 'TH', 'FR', 'UA'],
  화: ['NG', 'FR', 'MN'],
  수: ['PH', 'CN', 'US'],
  목: ['GR', 'UA'],
  금: ['IN', 'ZA'],
  토: ['PH', 'FR', 'MN'],
  일: ['JP', 'MN'],
}

const StaffSchedule = () => {
  return (
    <ScheduleWrapper>
      <h3>요일별 근무 직원</h3>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>요일</TableHeader>
            <TableHeader>국기</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Object.entries(scheduleData).map(([day, countryCodes]) => (
            <TableRow key={day}>
              <DayCell>{day}</DayCell>
              <TableCell>
                <FlagWrapper>
                  {countryCodes.map((code, index) => (
                    <Flag
                      key={index}
                      src={getFlagUrl(code)}
                      alt={`국기 ${code}`}
                    />
                  ))}
                </FlagWrapper>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ScheduleWrapper>
  )
}

export default StaffSchedule
