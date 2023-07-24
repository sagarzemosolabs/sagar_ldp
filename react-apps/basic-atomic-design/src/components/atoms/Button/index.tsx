import Button from "@mui/material/Button";

type ButtonComponentProps  = {
  text: string
  varient?: "text" | "outlined" | "contained" | undefined
  disabled?: boolean
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  onClick?: any
}

const ButtonComponent:React.FC<ButtonComponentProps> = (props) => {
  return (
    <div>
      <Button onClick={props.onClick} variant={props.varient} disabled={props.disabled} color={props.color}>{props.text}</Button>
    </div>
  );
}

export default ButtonComponent;