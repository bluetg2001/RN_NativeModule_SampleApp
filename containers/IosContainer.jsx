import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  NativeModules,
  Button,
  Text,
} from 'react-native';

import {Header} from 'react-native/Libraries/NewAppScreen';

function IosContainer() {
  const {IOSTestModule} = NativeModules;

  const onHandleNativeEvent = () => {
    IOSTestModule.createNativeEvent(
      '네이티브에서 생성한 함수입니다.',
      'console은 xcode에서 찍힙니다.',
    );
  };

  // return을 네이티브에서 선언하였지만 RN단에도 return 값을 받을 수 있다.
  const onHandlePropsValue = () => {
    console.log(IOSTestModule.getDeviceName());
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Text style={{textAlign: 'center'}}>iOS Native Modules Test</Text>
          <Button title="Call In Native Code" onPress={onHandleNativeEvent} />
          <Button
            title="Call In React Native Code"
            onPress={onHandlePropsValue}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default IosContainer;
