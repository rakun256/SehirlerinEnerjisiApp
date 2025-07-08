import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { Region } from 'react-native-maps';

export const getCurrentRegion = async (): Promise<Region | null> => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Konum izni reddedildi', 'Uygulama konum göstermeyecek.');
      return null;
    }

    let location = await Location.getCurrentPositionAsync({});
    const region: Region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 40,
      longitudeDelta: 40,
    };
    return region;
  } catch (error) {
    console.error("Konum alınamadı:", error);
    return null;
  }
};
