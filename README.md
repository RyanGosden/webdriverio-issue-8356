# webdriverio-issue-8356

Test related to issue 8356: https://github.com/webdriverio/webdriverio/issues/8356

Issue overview: Webdriver does not open Chrome if ```"browserName: 'chrome'"``` is specified in capabilities.

```Node version: v16.14.0

Mode: WDIO Testrunner

Chrome version: 101.0.4951.64

OS: Ubuntu 20.04

"@wdio/local-runner": "^7.19.7",
"@wdio/mocha-framework": "^7.19.7",
"@wdio/spec-reporter": "^7.19.7",
"wdio-chromedriver-service": "^7.3.2",
"chromedriver": "^101.0.0"
```



NPM commands: 

  ```npm run test-e2e-working```: Will remove ```"browserName: 'chrome'"``` from capabilities.

  ``` npm run test-e2e-not-working```: Will add ```"browserName: 'chrome'"``` to capabilities.
