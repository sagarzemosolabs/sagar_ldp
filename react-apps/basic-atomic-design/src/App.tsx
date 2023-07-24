import { ToolbarComponent } from './components/molecules/Toolbar';
import { createTheme, PaletteColorOptions } from '@mui/material';
import { CardComponent } from './components/organism/Card';
import { ContentAndSidebarComponent } from './components/templates/ContentAndSidebar';
import { LableComponent } from './components/atoms/Label';
import { DefaultPage } from './components/pages/DefaultPage';

declare module '@mui/material/styles' {
  interface CustomPalette {
    anger: PaletteColorOptions;
    apple: PaletteColorOptions;
    steelBlue: PaletteColorOptions;
    violet: PaletteColorOptions;
    white: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    anger: true;
    apple: true;
    steelBlue: true;
    violet: true;
  }
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    anger: createColor('#5DBA40'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
    white: createColor('#BC00A3'),
  },
});

function App() {
  return <DefaultPage />
}

export default App;
