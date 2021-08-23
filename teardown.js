const browserstack = require('browserstack-local');

async function teardown(driver,reason,bs_local){
    let teststatus = reason + " was successful"
    await driver.executeScript(
        'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason":"'+teststatus+'"}}'
      );
    await driver.quit();
    if(reason === 'Local Test')
    {
        await bs_local.quit
    }
}

module.exports = {
    teardown
}