/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  NativeModules,
  Button,
} from 'react-native';

import {Header, LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';

function App() {
  const {ModuleTest} = NativeModules;

  const onHandleNativeEvent = () => {
    ModuleTest.createCalendarEvent();
    // console.log('We will invoke the native module here!', typeof ModuleTest);
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Button title="호출" onPress={onHandleNativeEvent} />
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
