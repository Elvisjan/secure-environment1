import React from "react"
import styled from "@emotion/styled"
import { Event } from "effector"
import { InfoSentence } from "../atoms"
import { ArrowDropDown } from "@mui/icons-material"

interface IProps {
  icon? : any,
  actions?: Event<null>[],
  userName: string,
  userRole: string,
}

export const UserAccount: React.FC<IProps> = ({icon,actions,userName,userRole}) => {
  const [open,setOpen] = React.useState(false)
  return (
    <Wrapper>
      {icon}
      <InfoSentence primary={userName} secondary={userRole} column />
      {actions &&<ArrowDropDown onClick={()=>setOpen(true)}/>}
      {open&&<div>asd</div>}
      <ArrowDropDown onClick={()=>setOpen(true)}/>
    </Wrapper>
  )
}
const Wrapper = styled.div`
display: flex;
padding: 0.75rem;
gap: 0.625rem;
.primary{
  font-size: 1rem;
}
.MuiSvgIcon-root:nth-of-type(1) {
  font-size: 2rem;
  fill: #406927;
}
`