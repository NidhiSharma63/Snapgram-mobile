import colors from 'constant/color';
import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    // alignItems: 'center',  ❌ ye hatao
  },
  postCard: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    width: '100%',
    padding: 10,
  },
  postCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
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
    width: screenWidth - 40, // screen width - (padding * 2)
    height: 500,
    borderRadius: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  userAvatar: {
    borderRadius: 50,
    width: 32,
    height: 32,
    marginRight: 10,
  },
  explorePost: {
    width: '100%',
    backgroundColor: colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  postImage: {
    width: screenWidth - 40,
    height: 200,
    backgroundColor: colors.TextPrimary,
    borderRadius: 10,
    alignSelf: 'center',
  },
  userData: {
    position: 'absolute',
    left: 20,
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
