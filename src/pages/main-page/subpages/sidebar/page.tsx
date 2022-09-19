import { Divider, Drawer } from "@mui/material"
import styled from "@emotion/styled";
import { NavigationItem } from "../../ui/atoms/navigation-item";
import { SupervisorAccount, Web, School, AccountCircle } from '@mui/icons-material';
import { InfoSentence, UserAccount } from "../../ui";
export const SideBar = () => {
  return (
    <Wrapper>
      <div className="content">
        <SideBarHeader
        />
        <div className="navigation">
          <NavigationItem title='Ученики' icon={< School />} selected />
          <NavigationItem title="Сотрудники" icon={< SupervisorAccount/>} />
          <NavigationItem title="Управление школой" icon={<Web />} />
        </div>
        <div className='info'>
        <Divider />
        <SchoolInfo />
        <Divider/>
        </div>
      </div>
      <div className="actions">
      <UserAccount userName="Бикчурин Ринат Дамирович" userRole='Директор школы' icon={<AccountCircle color="success"/>} />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  padding: 0.75rem;
  margin: 0.5rem;
  margin-right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  background: linear-gradient(0deg, rgba(64, 105, 39, 0.05), rgba(64, 105, 39, 0.05)), #FDFCF6;
  border-radius: 16px;
  .navigation {
    display: grid;
    gap: 1rem;
  }
  .info{
    padding: 0 1rem;
    box-sizing: border-box;
    margin-top: 1rem;
  }
`

const SchoolInfo = () => {
  return (
    <SchoolInfoWrapper>
      <div className="school-info_title">
        Сейчас в школе:
      </div>
      <InfoSentence primary={"Учеников:"} secondary='132' />
      <InfoSentence primary={"Сотрудников:"} secondary='32' />
    </SchoolInfoWrapper>
  )
}

const SchoolInfoWrapper = styled.div`
  margin: 1rem 0;
  box-sizing: border-box;
  .school-info_title {
  height: 20px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #44483F;
  margin-bottom:12px;
};
`
const SideBarHeader = ({}) => {
  return(
    <HeaderWrapper>
    <Logo />
    <div>
      <InfoSentence primary='Среда безопасности' secondary='Школа' column />
      </div>
    </HeaderWrapper>
  )
}
const Logo = styled.span`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background: #C6DABF;
  display: inline-block;
`
const HeaderWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
`