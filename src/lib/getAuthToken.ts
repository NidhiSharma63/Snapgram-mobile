import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppConstants} from 'constant/keys';

// const getAuthToken = async () => {
//   const AUTH_TOKEN = await AsyncStorage.getItem(AppConstants.USER_DETAILS);
//   return JSON.parse(AUTH_TOKEN ?? '')?.tokens[0].token;
// };

// export default getAuthToken;

const getAuthToken = async () => {
  const AUTH_TOKEN = await AsyncStorage.getItem(AppConstants.USER_DETAILS);
  if (!AUTH_TOKEN) {
    return null;
  } // ya '' return karo
  try {
    const parsed = JSON.parse(AUTH_TOKEN);
    const token = parsed?.tokens?.[0]?.token;
    console.log(token, 'token');
    return token;
  } catch (e) {
    console.error('Error parsing USER_DETAILS:', e);
    return null;
  }
};
export default getAuthToken;
