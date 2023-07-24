import { Box, Container } from "@mui/material";


type ContentAndSidebarComponentProps = {
    main?: any;
    sidebar?: any;
}

export const ContentAndSidebarComponent: React.FC<ContentAndSidebarComponentProps> = (props) => {
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Box
                component="aside"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    bgcolor: 'background.default',
                }} >
                {props.sidebar}
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                }} >
                <Container maxWidth="lg" sx={{ flexGrow: 1 }}>
                    {props.main}
                </Container>
            </Box>
        </Box>
    )
}