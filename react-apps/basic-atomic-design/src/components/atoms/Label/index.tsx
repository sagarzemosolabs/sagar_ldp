import { Typography } from "@mui/material"


type LableComponentProps = {
    text: string
    variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "inherit" | undefined
}

export const LableComponent: React.FC<LableComponentProps> = (props) => {
    return <Typography variant={props.variant} gutterBottom component="p">
        {props.text}
    </Typography>
}