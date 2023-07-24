import { Box, Button, Card, CardActions, CardContent } from "@mui/material"
import { ImageComponent } from "../../atoms/Image"
import { LableComponent } from "../../atoms/Label";

type CardComponentProps = {
    text: string
    maxWidth: number
}
export const CardComponent: React.FC<CardComponentProps> = (props) => {
    const imageLink = 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2';
    return (
        <Box sx={{ width: '100%', maxWidth: props.maxWidth }}>
            <Card>
                <CardContent>
                    <ImageComponent link= {imageLink} />
                    <LableComponent variant="h4" text={props.text} />
                </CardContent>
                <CardActions>
                    <Button variant="contained">Click here</Button>
                </CardActions>
            </Card>
        </Box>
    )
}