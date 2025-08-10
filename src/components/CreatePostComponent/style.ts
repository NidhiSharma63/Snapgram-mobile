import colors from 'constant/color';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
    width: '100%',
    gap: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.TextPrimary,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 5,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 20,
    width: '100%',
  },
});

export default style;
