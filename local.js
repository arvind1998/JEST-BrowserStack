const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const browserstack = require('browserstack-local');
const Driverfactory = require('./driverfactory');
const Teardown = require('./teardown')


async function local() {

  // Creates an instance of Local
  var bs_local = await Driverfactory.startLocal()

  //Adding some sleep
  await sleep(5000);

  //Create the Driver Instance 
  let driver = await Driverfactory.createDriver('Local Test')

  //Visiting a locally hosted URL
  await driver.get('http://localhost:3000/');

  //Adding some sleep
  await sleep(10000);

  //Calling Teardown method to mark test and close Local Binary Instance
  await Teardown.teardown(driver, 'Local Test', bs_local)
    
}


//Function for making webdriver sleep
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}  


//Exporting Modules
module.exports = {
    local
}