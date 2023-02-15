//
//  RCTIOSTestModule.m
//  ReactNativeNativeModuleSample
//
//  Created by user on 2023/02/15.
//
#import "RCTIOSTestModule.h"
#import <React/RCTLog.h>

@implementation RCTIOSTestModule

RCT_EXPORT_MODULE(IOSTestModule);

RCT_EXPORT_METHOD(createNativeEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

// getDeviceName으로 함수명 선언
RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getDeviceName)
{
return [[UIDevice currentDevice] name];
}

@end
