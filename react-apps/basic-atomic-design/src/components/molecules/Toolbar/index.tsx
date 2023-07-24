import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconComponent from '../../atoms/Icon';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonComponent from '../../atoms/Button';

type ToolbarComponentProps = {

}

export const ToolbarComponent: React.FC<ToolbarComponentProps> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconComponent icon={<DeleteIcon /> } />
            <ButtonComponent text='React Demo' varient='text' color='secondary'/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
