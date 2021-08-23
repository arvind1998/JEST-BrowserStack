const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const Driverfactory = require('./driverfactory');
const Teardown = require('./teardown')

async function SingleTestAddition(x, y) {

    let driver = await Driverfactory.createDriver("Addition Test")

    //Going To Google
    await driver.get('http://www.google.com/ncr');

    //Locate SearchBar, Type Calculator And Click ENTER
    await driver.findElement(By.name('q')).sendKeys('calculator', Key.RETURN);

    //Pass 1st Parameter in Calculator and Click it
    let num1 =  await driver.findElement(By.xpath("//*[text()="+String(x)+"]"))
    await num1.click();

    //Find add Button and Click on it
    let addition =  await driver.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[5]/td[4]/div/div'));
    await addition.click();

    //Pass 2nd Parameter in Calculator and Click it
    let num2 =  await driver.findElement(By.xpath("//*[text()="+String(y)+"]"))
    await num2.click();

    //Click on equals button
    let equals = await driver.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div/div[1]/div/div/div[3]/div/table[2]/tbody/tr[5]/td[3]/div/div'));
    await equals.click();

    //Fetch Result that is Generated
    let result = await (await driver.findElement(By.id('cwos'))).getText();
    
    //await teardown(driver,"Addition");
    await Teardown.teardown(driver, "Addition")

    return result; 

}


module.exports = {
    SingleTestAddition
}