const webdriver = require('selenium-webdriver');
const browserstack = require('browserstack-local');

//You can also pass BROWSERSTACK_USERNAME AND BROWSERSTACK_ACCESS_KEY below in form of hard coded string
const BROWSERSTACK_ACCESS_KEY = process.env.BROWSERSTACK_ACCESS_KEY //Fetching BROWSERSTACK_ACCESS_KEY FROM THE ENVIRONMENT
const BROWSERSTACK_USERNAME = process.env.BROWSERSTACK_USERNAME //Fetching BROWSERSTACK_USERNAME FROM THE ENVIRONMENT


async function createDriver(x) {

//If Test is Local Test, do this
if(x === 'Local Test'){
    var capabilities = {
        'os' : 'Windows',//OS Name
        'browserName' : 'Chrome',//BrowserName
        'name': x, // test name
        'build': 'JEST+SELENIUM', // CI/CD job or build name
        'browserstack.local': 'true' //Setting Browserstack local to true
    }
}

//If test is not a Local Test, do this
else{
    
    var capabilities = {
        'os' : 'Windows',//OS Name
        'browserName' : 'Chrome',//BrowserName
        'name': x //CI/CD job or build name
    }
    if (process.env.BROWSERSTACK_BUILD_NAME == null)
        capabilities['build'] = 'JEST+SELENIUM'
    else
        capabilities['build'] = process.env.BROWSERSTACK_BUILD_NAME
}

   
//Creating RemoteDriver By Poiniting Hub URL to BrowserStack's Remote Hub
let driver = new webdriver.Builder()
    .usingServer('http://'+BROWSERSTACK_USERNAME+':'+BROWSERSTACK_ACCESS_KEY+'@hub-cloud.browserstack.com/wd/hub')
    .withCapabilities(capabilities)
    .build();

    return driver;
    
}

//Function to Start Local via Code Bindings
async function startLocal() {

    console.log("Local Test In Progress")

    // Creates an instance of Local
    const bs_local = await new browserstack.Local()
    
    // You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
    //const bs_local_args = await { key: 'BROWSERSTACK_ACCESSKEY' }

    const bs_local_args = { BROWSERSTACK_ACCESS_KEY}
    
    // Starts the Local instance with the required arguments
    await bs_local.start(bs_local_args, function () {
    console.log('Started BrowserStackLocal')

})

    return bs_local

}


//Exported Modules
module.exports = {
    createDriver,
    startLocal
}
