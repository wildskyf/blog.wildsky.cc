---
title: "SyntaxError: Unexpected token when using react-script test"
date: 2019-05-22T15:11:55
slug: "syntax-error-unexpected-token-when-react-script-test"
excerpt: "<p>Environment I created my project by create-react-app, a&#8230;</p>
"
feature_image: 螢幕快照-2019-05-22-15.06.12.png.webp
guid: "http://blog.wildsky.cc/?p=929"
---
Environment
-----------

I created my project by create-react-app, and running test using its `react-script test`.

*   node version: 10.15.3
*   npm version: 6.4.1
*   react-scripts: 3.0.1

What happened?
--------------

When running test command (`npm run test`), I got this error message:

      ● Test suite failed to run

        Jest encountered an unexpected token

        This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.

        By default, if Jest sees a Babel config, it will use that to transform your files, ignoring "node_modules".

        Here's what you can do:
         • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
         • If you need a custom transformation specify a "transform" option in your config.
         • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

        You'll find more details and examples of these config options in the docs:
        https://jestjs.io/docs/en/configuration.html

        Details:

        /Users/wildsky/Projects/ailabs/pttai.js/node_modules/webrtc-adapter/src/js/adapter_core5.js:12
        import {adapterFactory} from './adapter_factory.js';
               ^

        SyntaxError: Unexpected token {

          at ScriptTransformer._transformAndBuildScript (node_modules/@jest/transform/build/ScriptTransformer.js:471:17)
          at ScriptTransformer.transform (node_modules/@jest/transform/build/ScriptTransformer.js:513:25)
          at Object.<anonymous> (node_modules/react-qr-reader/lib/index.js:28:1)

Okay, it seems that jest would not transform files below `node_modules`. (And here is the jest config used by react-script: [createJestConfig.js#L50](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/scripts/utils/createJestConfig.js#L50))

Therefore, we need to overwrite that configure. Lots of information would tell you add `transformIgnorePatterns` config into `package.json`, but you will find you can’t do it with this error.

    Out of the box, Create React App only supports overriding these Jest options:

      • collectCoverageFrom
      • coverageReporters
      • coverageThreshold
      • extraGlobals
      • globalSetup
      • globalTeardown
      • resetMocks
      • resetModules
      • snapshotSerializers
      • watchPathIgnorePatterns.

    These options in your package.json Jest configuration are not currently supported by Create React App:

      • transformIgnorePatterns

    If you wish to override other Jest options, you need to eject from the default setup. You can do so by running npm run eject but remember that this is a one-way operation. You may also file an issue with Create React App to discuss supporting more options out of the box.

    error Command failed with exit code 1.
    info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

but no worry, jest provide cli option for you, just add this into the test script command:

    --transformIgnorePatterns 'node_modules/(?!(<package-need-to-transform>|<other-package-need-to-transform>)/)'

so it will become like this:

    // package.json

    {
    ...
      "scripts": {
        ...
        "test": react-scripts test --env=jsdom --transformIgnorePatterns 'node_modules/(?!(<package-need-to-transform>|<other-package-need-to-transform>)/)'
        ...
      }
    ...
    }

and jest will run without the SyntaxError. That’s it!

References
----------

*   [https://github.com/facebook/create-react-app/issues/2537#issuecomment-390341713](https://github.com/facebook/create-react-app/issues/2537#issuecomment-390341713)
*   [https://github.com/facebook/create-react-app/issues/5241#issuecomment-426986623](https://github.com/facebook/create-react-app/issues/5241#issuecomment-426986623)
*   [https://facebook.github.io/create-react-app/docs/running-tests](https://facebook.github.io/create-react-app/docs/running-tests)
