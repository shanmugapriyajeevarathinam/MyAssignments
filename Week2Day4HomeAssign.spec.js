import {test,chromium,firefox} from "@Playwright/test";

test("Launch Redbus in Edge and Flipcart in Firefox", async({})=>{
    const browser1 = await chromium.launch({headless:false,channel:"msedge"})
    const browserInstance1 = await browser1.newContext();
    const page1 = await browserInstance1.newPage();
    await page1.goto("https://www.redbus.in/");
    console.log(await page1.title());
    console.log(await page1.url());
    

    const browser2 = await firefox.launch({headless:false})
    const browserInstance2 = await browser2.newContext();
    const page2= await browserInstance2.newPage();
    await page2.goto("https://www.flipkart.com/");
    console.log(await page2.title());
    console.log(await page2.url());
}
    

);
