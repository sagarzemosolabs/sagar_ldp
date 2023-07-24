
type IconComponentProps  = {
    icon: any
}

const IconComponent:React.FC<IconComponentProps> = (props) => {
  return (
    <div>
        {props.icon}
    </div>

  );
}

export default IconComponent;