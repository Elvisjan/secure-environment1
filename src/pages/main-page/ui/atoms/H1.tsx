interface Props {
  title: string
}
export const H1 : React.FC<Props> = ({title}) => {
  return <h1>{title}</h1>
}