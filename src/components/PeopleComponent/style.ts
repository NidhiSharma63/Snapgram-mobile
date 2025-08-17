import colors from 'constant/color';
import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  pplCard: {
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    gap: 10,
    width: screenWidth - 40,
  },
  button: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  textPrimary: {
    color: colors.TextPrimary,
    fontWeight: '600',
    fontSize: 16,
  },
  textSecondary: {
    color: colors.TextSecondary,
    fontWeight: '400',
    fontSize: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
export default style;
