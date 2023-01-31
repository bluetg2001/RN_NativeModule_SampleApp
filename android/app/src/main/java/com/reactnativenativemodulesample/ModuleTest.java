package com.reactnativenativemodulesample;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.util.Log;


public class ModuleTest extends ReactContextBaseJavaModule {
    ModuleTest(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "ModuleTest";
    }

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
