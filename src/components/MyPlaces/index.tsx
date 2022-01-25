import React from 'react';
import {Image, StyleProp, ImageStyle} from 'react-native';

const purpleIcon = require('../../../assets/MyPlacePurple.png');


const colors = {
  purple: purpleIcon,
  transparent: undefined,
};

type props = {
  width: number;
  height: number;
  color: 'purple' | 'transparent';
  style?: StyleProp<ImageStyle>;
};
const MyPlacesIcon: React.FC<props> = ({
  width,
  height,
  color,
  style,
}): JSX.Element => (
  <Image
    source={colors[color || 'black']}
    style={[{width, height, resizeMode: 'cover'}, style]}
  />
);

export default MyPlacesIcon;
