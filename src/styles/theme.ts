// theme.ts
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    backGroundHeader: 'rgb(255, 102, 0)',
    backGroundMain: `#f6f6ef`,
    primaryText: '#000',
    secondText: '#828282',
  },
  typography: {
    primaryText: {
      fontSize: '13.3333px',
      lineHeight: '12px',
      fontWeight: '400',
      fontFamily: 'Verdana, Geneva, sans-serif',
    },
    secondText: {
      fontSize: '10.6667px',
      fontWeight: '400',
      fontFamily: 'Verdana, Geneva, sans-serif',
    },
    threeText: {
      fontSize: '9.33333px',
      fontWeight: '400',
      fontFamily: 'Verdana, Geneva, sans-serif',
    },
  },
};
