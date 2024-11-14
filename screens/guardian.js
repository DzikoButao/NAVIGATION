import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const GuardianScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="person" size={40} color="#007bff" />
        <Text style={styles.headerText}>Guardian</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Icon name="location-pin" size={40} color="#007bff" />
        <Text style={styles.buttonText}>Find my loved one</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="file-copy" size={40} color="#007bff" />
        <Text style={styles.buttonText}>Generate Report</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007bff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007bff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#007bff',
    marginTop: 10,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});

export default Guardian