import {Dimensions} from 'react-native';
import {scale} from 'react-native-size-matters';

export const colors = {
  primary: 'rgba(253,140,96,1)',
  lightPrimary: 'rgba(253,140,96,0.8)',
  secondPrimary: 'rgba(251,87,117,1)',
  black: 'black',
  lightBlack: 'rgba(0,0,0,0.5)',
  oldTheme: 'rgba(97,54,248,1)',
  white: 'white',
  grey: 'grey',
  silver: 'silver',
  welcome: '#404040',
  lightGrey: '#808080',
  lightSilver: '#D2D2D2',
  orange: '#F99E4D',
  lightWhite: '#FAFAFA',
  darkSilver: '#D9D9D9',
  semiWhite: '#F8F8F8',
};

export const FontSize = {
  ExtraThin: scale(8),
  Thin: scale(10),
  Small: scale(12),
  Regular: scale(14),
  Medium: scale(16),
  Bold: scale(18),
  SemiBold: scale(20),
  ExtraBold: scale(24),
  XL4: scale(26),
  XL5: scale(36),
  XL6: scale(48),
  XL7: scale(64),
};

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;

export const FontFamily = {
  Bold: 'Poppins-Bold',
  ExtraBold: 'Poppins-ExtraBold',
  ExtraLight: 'Poppins-ExtraLightBold',
  Light: 'Poppins-Light',
  Medium: 'Poppins-Medium',
  Regular: 'Poppins-Regular',
  SemiBold: 'Poppins-SemiBold',
  Thin: 'Poppins-Thin',
};
