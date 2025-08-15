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

  // Top Tabs for Like & Save

  saveTab: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  explorePost: {
    width: '100%',
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    position: 'relative',
  },
  postImage: {
    width: 390,
    height: 200,
    // backgroundColor: colors.TextPrimary,
    borderRadius: 10,
  },
  userDataAbsolute: {
    position: 'absolute',
    left: 30,
    flexDirection: 'row',
    gap: 10,
    bottom: 20,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
  },
});
export default style;
