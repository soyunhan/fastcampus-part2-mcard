/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'

const ScheduleWrapper = styled.div`
  padding: 16px;
  background-color: #fff;
  margin-top: 16px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
  color: #666;
`

const TableRow = styled.tr`
  text-align: left;
`

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
  font-size: 14px;
  color: #333;
`

const Flag = styled.img`
  width: 24px;
  height: 16px;
  margin-right: 5px;
`

const StaffSchedule = () => {
  const scheduleData = {
    월: ['🇳🇬', '🇺🇦', '🇫🇷'],
    화: ['🇳🇬', '🇲🇳'],
    수: ['🇨🇳'],
    목: ['🇳🇬', '🇫🇷'],
    금: ['🇿🇦', '🇳🇬'],
    토: ['🇫🇷', '🇵🇭'],
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
              <TableCell>{day}</TableCell>
              <TableCell>
                {flags.map((flag, index) => (
                  <Flag
                    key={index}
                    src={`https://flagcdn.com/w320/${flag}.png`}
                    alt="국기"
                  />
                ))}
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ScheduleWrapper>
  )
}

export default StaffSchedule
