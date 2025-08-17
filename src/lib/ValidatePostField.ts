import Toast from 'react-native-toast-message';

const validateField = (fieldName: string, value?: string): boolean => {
  if (!value || value.trim().length < 2) {
    Toast.show({
      type: 'error',
      text1: `${fieldName} must be at least 2 characters long`,
    });
    return false;
  }
  return true;
};

export default validateField;
