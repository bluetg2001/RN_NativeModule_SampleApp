package com.reactnativenativemodulesample;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.util.Log;

// 모듈화하여 보낼 패키지

public class ModuleTest extends ReactContextBaseJavaModule {
    ModuleTest(ReactApplicationContext context) {
        super(context);
    }

//    모듈 네이밍 선언
    @Override
    public String getName() {
        return "ModuleTest";
    }

//    아래 이하로 함수 선언문s
    @ReactMethod
    public void onHandleNativeEvent() {
        Log.d("ModuleTest", "Create event called with name");
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("DEFAULT_EVENT_NAME", "New Event");
        return constants;
    }

}
