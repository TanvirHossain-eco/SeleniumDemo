// Required Statements
const {Builder} = require('selenium-webdriver');
// required("chromedriver");

(async function example3(){
    // launch browser
    let driver = await new Builder().forBrowser('chrome').build();

    // navigate to our application
    await driver.get("https://s4.conversion-uplift.co.uk/s4/");

    setTimeout(async () =>{
        
        },5000)

    // setTimeout(async () =>{
        await driver.get("https://s4.conversion-uplift.co.uk/s4/our-services/");
    // },5000)


   // wait & close the browser
    setTimeout(async () =>{
        await driver.quit();
    },5000)


})();
