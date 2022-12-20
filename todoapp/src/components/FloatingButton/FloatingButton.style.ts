import {StyleSheet} from 'react-native';
import Colors from '../../styles/Color';
export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.defaultYellowColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    right: 30,
    bottom: 60,
  },
  icon: {
    fontSize: 50,
  },
});
