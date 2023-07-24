import { IconButton, IconButtonProps } from "@mui/material";

type IconButtonComponentProps  = {
    icon: any
    disabled?: boolean
    label?: string
    size?: 'small' | 'medium' | 'large'
}

const IconButtonComponent:React.FC<IconButtonComponentProps> = (props) => {
  return (
    <div>
        <IconButton size={props.size}>
            {props.icon}
        </IconButton>
    </div>

  );
}

export default IconButtonComponent;