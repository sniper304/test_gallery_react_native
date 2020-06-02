import { Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const deviceDimensions = () => {
  return { width: screenWidth, height: screenHeight };
};

export { deviceDimensions };
