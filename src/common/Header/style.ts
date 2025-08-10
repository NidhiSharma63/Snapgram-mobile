import colors from 'constant/color';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.secondary,
  },
  gap: {
    gap: 20,
  },
});

export default style;
