const createTestCafe = require('testcafe');
let testcafe = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src([
                './tests/loginTests.js', 
                './tests/docPortalSanityTests.js'
            ])
            .browsers(['chrome'])
            .run({
                speed: 0.7,
                skipJsErrors: true
            });
    })
    .then(failedCount => {
        console.log(`Tests Failed: ${failedCount}`);
        testcafe.close();
        process.exit(failedCount ? 1 : 0);
    });