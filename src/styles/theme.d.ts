import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backGroundHeader: string;
      primaryText: string;
      secondText: string;
    };
    typography: {
      primaryText: {
        fontSize: string;
        lineHeight: string;
        fontWeight: string;
        fontFamily: string;
      };
      secondText: {
        fontSize: string;
        fontWeight: string;
        fontFamily: string;
      };
      threeText: {
        fontSize: string;
        fontWeight: string;
        fontFamily: string;
      };
    };
  }
}
