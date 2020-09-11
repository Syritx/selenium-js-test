const {Builder, By, Key, util} = require("selenium-webdriver");
let driver;

async function start() {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.google.com");
    await driver.findElement(By.name("q")).sendKeys("github");
    await driver.findElement(By.name("q")).sendKeys(Key.ENTER);

    setTimeout(async function() {
        await driver.close();
    },5000);
}

start();
