import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        animated={true}
        backgroundColor={'gray'}
      />
      <View style={styles.main}>
        <Text style={styles.title}>App</Text>
      </View>
    </SafeAreaView>
  );
};

export default codePush(App);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6482AD',
  },
  title: {
    fontSize: 40,
    color: '#000',
  },
});
