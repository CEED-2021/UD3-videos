const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");

async function example() {
    // To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();
}

example()
