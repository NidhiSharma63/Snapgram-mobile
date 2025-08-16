import colors from 'constant/color';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  postCard: {
    padding: 10,
    flexDirection: 'column',
    gap: 10,
    alignItems: 'flex-start',
    backgroundColor: colors.secondary,
    borderRadius: 10,
    width: '100%',
  },
  postCardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 5,
  },
  headerMetadata: {
    flexDirection: 'column',
    gap: 5,
    alignItems: 'flex-start',
  },
  TextPrimary: {
    color: colors.TextPrimary,
  },
  TextSecondary: {
    color: colors.TextSecondary,
  },
  postImg: {
    width: 350,
    height: 500,
    borderRadius: 10,
    objectFit: 'contain',
    // backgroundColor: 'blue',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  userAvatar: {
    borderRadius: 50,
    width: 32,
    height: 32,
    marginRight: 10,
  },
});

export default style;
