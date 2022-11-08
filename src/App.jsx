import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Counter from './counter';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Counter />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
