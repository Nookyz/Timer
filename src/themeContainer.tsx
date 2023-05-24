import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './store/hooks';
import { getTheme } from './utils/styles/theme';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ThemeContainer = ({ children }: Props) => {
  const { counterState, isDark } = useAppSelector((state) => state.state);
  const theme = getTheme(counterState, isDark);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeContainer;
