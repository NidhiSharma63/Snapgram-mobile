import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppConstants} from 'constant/keys';

const getUserDetails = async () => {
  const AUTH_DETAILS = await AsyncStorage.getItem(AppConstants.USER_DETAILS);
  if (!AUTH_DETAILS) {
    return null;
  } // ya '' return karo
  try {
    const parsed = JSON.parse(AUTH_DETAILS);
    return parsed;
  } catch (e) {
    console.error('Error parsing USER_DETAILS:', e);
    return null;
  }
};
export default getUserDetails;
