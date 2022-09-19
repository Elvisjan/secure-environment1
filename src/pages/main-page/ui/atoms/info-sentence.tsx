import styled from "@emotion/styled"
interface IProps {
  primary: string;
  secondary: string;
  column?:any;
  className?: string;
}

export const InfoSentence: React.FC<IProps> = ({primary, secondary, column}) => {
  return (
    <Wrapper column={column}>
      <div className="primary">{primary}</div>
      <div className="secondary">{secondary}</div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props :Pick<IProps, 'column'>)=> props.column && 'column'};
  justify-content: ${(props :Pick<IProps, 'column'>)=> !props.column && 'space-between'};
  .primary {
    height: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #44483F
  }
  .secondary {
    font-family: 'Golos';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #1B1C18;
}
`