// Required Statements
const { Builder, By, Key } = require("selenium-webdriver");
const ltCapability = require("../capabilities");
// const assert = require("assert");
var should = require("chai").should();
// var expect = require("chai").expect();



// describe block 1
describe("add todo tests", function () {
  // initialize the driver variable
  var driver;
  // username
  const USERNAME = ltCapability.capability.username;

  // key
  const KEY = ltCapability.capability.accessKey;

  // host
  const GRID_HOST = "hub.lambdatest.com/wd/hub";

  const gridUrl = "https://" + USERNAME + ":" + KEY + "@" + GRID_HOST;

  beforeEach(function(){
    driver = new Builder()
    .usingServer(gridUrl)
    .withCapabilities(ltCapability)
    .build();
  });

  afterEach(async function(){
    // delay some time
    await new Promise(resolve => setTimeout(resolve, 5000));
    // Close the browser
    await driver.quit();

  });


  // it block 1
  it("successfully adds a todo to application", async function () {
    // delay the time
    // const delay=(time)=>{
    //     setTimeout(async () =>{
    //         await driver.quit();
    //     },time)
    // }
    // launch browser individually
    // let driver = await new Builder().forBrowser("firefox").build();

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
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // setTimeout(async () => {
      // await driver.quit();
    // }, 3000);
  });

  // it block 2
  it("successfully adds a todo to application", async function () {
    // delay the time
    // const delay=(time)=>{
    //     setTimeout(async () =>{
    //         await driver.quit();
    //     },time)
    // }
    // launch browser individually
    // let driver = await new Builder().forBrowser("firefox").build();

    // navigate to our application
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // add to do
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("Learn JavaScript", Key.RETURN);

    // assert
    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (value) {
        return value;
      });

    // assert using chai should
    todoText.should.equal("Learn JavaScript");

    // delay & close the browser
    // await delay(10000);.
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // setTimeout(async () => {
      // await driver.quit();
    // }, 3000);
  });

});

