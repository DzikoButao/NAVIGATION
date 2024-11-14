import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Client() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>

      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('../assets/icons8_route.png')} />
        <Text style={styles.buttonText}>Plan Route</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Journey')}>
        <Image style={styles.icon} source={require('../assets/icons8_walking.png_32.png')} />
        <Text style={styles.buttonText}>Begin Journey</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 50,
  },
  button: {
    width: '80%',
    height: 190,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
});

/*import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Camera , CameraType, FlashMode} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function Client() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      
    /*  if (cameraStatus.status === 'granted') {
        setType(Camera.Constants.Type.back); // Set default type here
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('../assets/icons8_route.png')} />
        <Text style={styles.buttonText}>Plan Route</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} source={require('../assets/icons8_walking.png_32.png')} />
        <Text style={styles.buttonText}>Begin Journey</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 28,
    marginBottom: 50,
  },
  button: {
    width: '80%',
    height: 190,
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    marginTop: 10,
  },
  icon: {
    width: 60,
    height: 60,
  },
});*/
