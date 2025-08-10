import colors from 'constant/color';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: colors.secondary,
  },
  input: {
    width: '60%',
  },
  explorePost: {
    width: '100%',
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    position: 'relative',
  },
  postImage: {
    width: '100%',
    height: 200,
    backgroundColor: colors.TextPrimary,
    borderRadius: 10,
  },
  userData: {
    position: 'absolute',
    left: 30,
    flexDirection: 'row',
    gap: 10,
    bottom: 20,
  },
  textPrimary: {
    color: '#fff',
    fontSize: 16,
  },
});

export default style;
