import colors from 'constant/color';
import {StyleSheet} from 'react-native';

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
    width: '100%',
    alignItems: 'center',
    gap: 10,
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
