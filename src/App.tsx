import { createTheme, ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import '@fontsource/roboto'; /* استيراد الخط في CSS */
import svg from '/icon .svg';
import './App.css';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <img src={svg} />
      <h1 className='text-3xl font-bold underline'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aspernatur et, iusto
        totam alias rerum! Deleniti cumque nobis recusandae consequatur illo sint earum
        ipsa, dolorem sed doloremque cupiditate possimus deserunt!
      </h1>
      ;
    </ThemeProvider>
  );
}

export default App;
