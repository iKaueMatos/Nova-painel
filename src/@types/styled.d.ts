import 'style-components';
import { defaultTheme } from '../assets/styles/default';

//Sobreescrevendo a estilização do styled-components Theme para aplicar o DefaultTheme
type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}