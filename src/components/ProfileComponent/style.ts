import colors from 'constant/color';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  userData: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  textPrimary: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.TextPrimary,
  },
  textSecondary: {
    color: colors.TextPrimary,
    fontSize: 16,
  },

  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 10,
  },
  stat: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
  },
  count: {
    color: colors.Primary,
    fontWeight: 600,
    fontSize: 16,
  },
  label: {
    fontWeight: 400,
    fontSize: 16,
  },
});
export default style;
