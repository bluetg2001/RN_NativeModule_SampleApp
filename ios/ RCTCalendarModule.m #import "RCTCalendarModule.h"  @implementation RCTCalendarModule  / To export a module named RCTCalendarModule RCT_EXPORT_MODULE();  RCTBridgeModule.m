// RCTCalendarModule.m
#import "RCTIOSTestModule.h"
#import <React/RCTLog.h>

@implementation RCTIOSTestModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(IOSModuleFoo);

RCT_EXPORT_METHOD(createIOSModuleEvent)
{
 RCTLogInfo(@"Pretending to create an event");
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
{
return [[UIDevice currentDevice] name];
}

@end
