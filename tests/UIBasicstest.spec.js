const {test} = require('@playwright/test');



test ("Browser Context Playwright test", async ({browser}) => {

    chrome - plugins/cookies
        const Context = await browser.newContext();
        const page = await Context.newPage();
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});

test ("Page Playwright test", async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});