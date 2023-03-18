import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../styles/Color';
import Fonts from '../../styles/Fonts';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  innerContainer: {
    backgroundColor: Colors.defaultBlueColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: deviceSize.height / 2,
    padding: 10,
  },
  title: {
    color: Colors.defaultTitleColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    textAlign: 'center',
    fontSize: 25,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginTop: 30,
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    backgroundColor: Colors.defaultYellowColor,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
  },
  buttonPlaceHolder: {
    color: Colors.defaultDeepBlueColor,
    fontFamily: Fonts.defaultRegularFontFamily,
    fontSize: 15,
  },
});
