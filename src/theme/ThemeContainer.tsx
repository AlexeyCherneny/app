import { ThemeProvider, CssBaseline } from '@mui/material';

import theme from './theme';

const ThemeContainer: React.FC<React.PropsWithChildren> = (props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    {props.children}
  </ThemeProvider>
);

export default ThemeContainer;
