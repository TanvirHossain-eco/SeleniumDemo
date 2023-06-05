// Required Statements
const {Builder} = require('selenium-webdriver');
// required("chromedriver");

(async function example2(){
    // launch browser
    let driver = await new Builder().forBrowser('chrome').build();

    // navigate to our application
    await driver.get("https://www.facebook.com");


   // wait & close the browser
    setTimeout(async () =>{
        await driver.quit();
    },5000)
})();
