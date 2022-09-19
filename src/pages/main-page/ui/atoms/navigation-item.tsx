//@ts-nocheck
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { ListItemIcon, ListItemText } from "@mui/material"

interface IProps {
  icon?: any,
  title: string,
  info?: string
  selected?: boolean
}

export const NavigationItem: React.FC<IProps> = ({title, info, icon, selected}) => {
  return (
    <Wrapper selected={selected}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText sx={{fontSize:'14px'}} primary={title} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
width: 336px;
height: 56px;
display: flex;
flex-direction: row;
align-items: center;
font-size: 14px;
background-color: ${props=>props.selected && '#DBE7CD' } ;
border-radius: 100px;
padding: 0 1rem;
box-sizing: border-box;
&:hover {
  cursor: pointer;
}
`
