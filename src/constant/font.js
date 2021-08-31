import React from 'react';
import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export const Fonts = {
  IRANSansMobile: 'IRANSansMobile',
  IRANSansMobileBlack: 'IRANSansMobileBlack',
  IRANSansMobileBold: 'IRANSansMobileBold',
  IRANSansMobileLight: 'IRANSansMobileLight',
  IRANSansMobileMedium: 'IRANSansMobileMedium',
  IRANSansMobileUltraLight: 'IRANSansMobileUltraLight',
  Shabnam: 'Shabnam',
  ShabnamFD: 'Shabnam-FD',
  ShabnamBold: 'Shabnam-Bold',
  ShabnamLight: 'Shabnam-Light',
  ShabnamMedium: 'Shabnam-Medium',
  ShabnamThin: 'Shabnam-Thin',
};

export const FontSize = {
  small: responsiveFontSize(1),
  normal: responsiveFontSize(1.5),
  medium: responsiveFontSize(1.8),
  larg: responsiveFontSize(2.1),
  xlarg: responsiveFontSize(2.5),
  xxlarg:responsiveFontSize(3.5),
};

export const IconSize = {
  small: responsiveWidth(5),
  medium: responsiveWidth(6),
  big: responsiveWidth(8),
};
