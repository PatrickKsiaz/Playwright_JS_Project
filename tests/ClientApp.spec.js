const {test, expect} = require('@playwright/test');

test ("@WC Client App Login", async ({page})=> {

    const productName = "Zara Coat 4";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com")
    await page.locator("#userPassword").fill("Iamking@000")
    await page.locator("[value='Login']").click();
    //await page.waitForLoadState('networkidle');
    await page.locator("card-body b").first().waitFor();
    const titles =  await page.locator("card-body b").allTextContents();
    console.log(titles);
    //Zara Coat 4
    const count = await products.count();
    
    for(let i =0; i< count; i++i)
{
     if(await products.nth(i).locator("b").textContent() === productName)
    {
        //Add to cart
        await products.nth(i).locator("text=Add to Cart").click();
        break;
    }

}

