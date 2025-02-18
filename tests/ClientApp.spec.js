const {test, expect} = require('@playwright/test');

test("@WC Client App Login", async ({page})=> {

    const productName = "Zara Coat 4";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com")
    await page.locator("#userPassword").fill("Iamking@000")
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles =  await page.locator("card-body b").allTextContents();
    console.log(titles);
    //Zara Coat 4
    const count = await products.count();
    for(let i=0; i < count; ++i)
    {
     if(await products.nth(i).locator("b").textContent() === productName)
    {
        //Add to cart
        await products.nth(i).locator("text=Add to Cart").click();
        break;
    }
}
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
expect(bool).toBeTruthy();
await page.locator("text=Checkout").click();

await page.locator("[placeholder='Country']").pressSequentially("ind",{delay:100});
const dropdown = page.locator(".ta-results");
await dropdown.waitFor();
const optionsCount = await dropdown.locator("button").count();
for(let i=0; i<optionsCount; ++i)
{
const text = await dropdown.locator("button").nth(i).textContent();
    if(text == " India")
    {
        await dropdown.locator("button").nth(i).click();
        break;
    }
}
expect.(page.locator(".user__name ['[type=]'")).toHaveText("anshika@gmail.com");

});