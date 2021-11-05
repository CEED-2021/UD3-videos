const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");


function expect(expected, received) {
    if(expected==received) {
        console.log('assertion passed');
        return
    }
    throw `Assertion error. Expected ${expected}, received ${received}`
}

async function example() {
    const URL = 'https://duckduckgo.com/';

    let driver = await new Builder()
        .forBrowser('chrome')
        .build();
    // To move the browser:
    //await driver.manage().window().setRect( {x: -10000, y:0})


    await driver.get(URL);

    const SEARCH_STRING = 'banana';
    await driver.findElement(By.name("q")).sendKeys(SEARCH_STRING,Key.RETURN);

    const title = await driver.getTitle();
    expect(title, 'banana at DuckDuckGo');

    await driver.quit();
}

example()
