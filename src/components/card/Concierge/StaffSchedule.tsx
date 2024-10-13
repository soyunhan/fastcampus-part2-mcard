/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

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

const StaffSchedule = () => {
  const scheduleData = {
    월: ['🇦🇹', '🇳🇬', '🇹🇭', '🇫🇷', '🇺🇦'],
    화: ['🇳🇬', '🇫🇷', '🇲🇳'],
    수: ['🇵🇭', '🇨🇳', '🇺🇸'],
    목: ['🇬🇷', '🇺🇦'],
    금: ['🇮🇳', '🇿🇦'],
    토: ['🇵🇭', '🇫🇷', '🇲🇳'],
    일: ['🇯🇵', '🇲🇳'],
  }

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
          {Object.entries(scheduleData).map(([day, flags]) => (
            <TableRow key={day}>
              <DayCell>{day}</DayCell>
              <TableCell>
                <FlagWrapper>
                  {flags.map((flag, index) => (
                    <Flag
                      key={index}
                      src={`https://flagcdn.com/w320/${flag}.png`}
                      alt={`국기 ${flag}`}
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
