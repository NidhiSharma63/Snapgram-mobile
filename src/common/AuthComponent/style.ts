import colors from 'constant/color';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.TextPrimary,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.TextSecondary,
  },
  inputContainer: {
    flexDirection: 'column',
    padding: 5,
    gap: 5,
    width: '70%',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.TextPrimary,
  },
  input: {
    width: '100%',
    borderColor: colors.TextPrimary,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
  },
  signupText: {
    color: colors.Primary,
  },
});

export default style;
