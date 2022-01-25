import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    minWidth: 25,
    minHeight: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 100,
    marginRight: 100,
  },
  myPlaceContainer: {
    minWidth: 25,
    minHeight: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
  },
  checked: {backgroundColor: 'blue'},
  unchecked: {backgroundColor: 'white'},

});
export default styles;
