const {test, expect} = require('@playwright/test');
const exp = require('constants');



test ("Browser Context Playwright test", async ({browser}) => {

    chrome - plugins/cookies

        const Context = await browser.newContext();
        const page = await Context.newPage();

        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

});

test ("Page Playwright test", async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    //get titlte of the page - assertion
    console.log(await page.title());
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();

});


test ("Wrong Credentials", async ({page}) => {
    
        const userName = page.locator("#username");
        const signIn = page.locator("#signInBtn");
        const cardTitles = page.locator(".card-body a");
    
        await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
        //get titlte of the page - assertion
        console.log(await page.title());
        await userName.type("rahulshetty");
        await page.locator('#password').fill('learning');
        await signIn.click();
        //check for error message
        console.log(await page.locator('.alert').textContent());
        //assertion
        //await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
        //type - fill
        await userName.fill("");
        await userName.fill("rahulshettyacademy");
        await signIn.click();
        console.log(await cardTitles.nth(0).textContent());
        console.log(await cardTitles.nth(1).textContent());
        const allTitles = await cardTitles.allTextContents();
        console.log(allTitles);
    });

test ("UI Controls", async ({page}) => {   

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator("#username");
    const signIn = page.locator("#signInBtn");
    const dropdown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='document-request']");
    dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    //console.log (await page.locator("radiotextsty").last().isChecked());
    await expect (page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect (await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");



    //await page.pause();
});

test.only ("@Child Window hadling", async ({browser}) => 
{
    const Context = await browser.newContext();
    const page = await Context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("[href*='document-request']");

    const [newPage]=await Promise.all(
    [
    Context.waitForEvent('page'),   //listen for any new page pending,rejected,fulfilled
    documentLink.click(),           //listen for any new page opened
    ]) //new page is opened 
    text = await newPage.locator(".red").textContent();
    console.log(text);
});