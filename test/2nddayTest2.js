// Required Statements
const { Builder, By, Key } = require("selenium-webdriver");
// const assert = require("assert");
var should = require("chai").should();
// var expect = require("chai").expect();

// describe block
describe("add todo 2nd tests", function () {
  // it block
  it("Adding a new test for reporting", async function () {
    // delay the time
    // const delay=(time)=>{
    //     setTimeout(async () =>{
    //         await driver.quit();
    //     },time)
    // }
    // launch browser
    let driver = await new Builder().forBrowser("firefox").build();

    // navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // add to do
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn Selenium", Key.RETURN);

    // assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    // assert using chai should
    todoText.should.equal("Learn Selenium");

    // delay & close the browser
    // await delay(10000);.
    await new Promise(resolve => setTimeout(resolve, 5000));

  //  setTimeout(async () => {
    await driver.quit();
    // }, 3000);
  });
});





