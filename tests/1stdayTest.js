// Required Statements
const {Builder, By, Key} = require('selenium-webdriver');
const assert = require ("assert");

async function example1st(){
    
    // delay the time
    // const delay=(time)=>{
    //     setTimeout(async () =>{
    //         await driver.quit();
    //     },time)
    // }
    // launch browser
    let driver = await new Builder().forBrowser('firefox').build();

    // navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // add to do 
    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN);

    // assert
     let todoText = await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
     });

    // assert using node assertion
    // Passed the test
     assert.strictEqual(todoText,"Learn Selenium");
    // Failed the test
    //  assert.strictEqual(todoText,"Learn JavaScript");

    // delay & close the browser
    // await delay(10000);.
    
    setTimeout(async () =>{
        await driver.quit();
    },5000)
    
    
}
example1st()
