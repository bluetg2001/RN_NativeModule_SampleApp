import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  NativeModules,
  Button,
  Text,
  Platform,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

function IosContainer() {
  const {RCTIOSTestModule} = NativeModules;

  console.log(RCTIOSTestModule, 'hihi');
  // console.log(NativeModules, 'hihi');

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Text style={{textAlign: 'center'}}>hihi</Text>
          <Button title="Call In Native Code" />
          <Button title="Call In React Native Code" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default IosContainer;
