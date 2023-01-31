/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
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

function App() {
  const [testState, setTestState] = useState('');

  const {ModuleTest} = NativeModules;

  const onHandleNativeEvent = () => {
    // 단순한 Log가 찍히는 함수
    // 동작 권한만 RN단으로 전달한 것이기 때문에 네이티브에서 동작한다. 때문에 Log가 네이티브단에서 확인 가능함
    ModuleTest.onHandleNativeEvent();
  };

  const onHandlePropsValue = () => {
    // 네이티브단에서 객체를 만들어 RN단으로 전달
    // 때문에 console로 찍었을 때 값이 전달되어 console 시에 값이 전달된 것이 확인 가능
    console.log(ModuleTest.getConstants().DEFAULT_EVENT_NAME);
  };

  // 랜더링 시점과 네이티브 모듈 관련 데이터를 들고 올 때 테스트
  // 네이티브 모듈로 들고 온 데이터에 대해서 useEffect를 하여도 이상 없음
  useEffect(() => {
    setTestState(ModuleTest.getConstants().DEFAULT_EVENT_NAME);
  }, [ModuleTest]);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />
        <View>
          <Text style={{textAlign: 'center'}}>{testState}</Text>
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

export default App;
