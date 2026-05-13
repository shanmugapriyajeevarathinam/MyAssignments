import {test,expect} from "@playwright/test"
test("Create lead in saleforce.com", async({page})=>{
    await page.goto("https://testleaf.my.salesforce.com/")
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('[class="button r4 wide primary"]').nth(0).click()
    await page.locator('//button[@class = "slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]').click()
    await page.locator('//button[@class="slds-button"][1]').click()
    await page.locator('//p[text()="Sales"]').click()
    await page.locator('//span[text()="Leads"]/parent::a').click()
    await page.locator('//div[text()="New"]').click()    
    await page.locator('//button[@name="salutation"]').click()
    await page.locator('//span[text()="Mrs."]/parent::span').click() 
    await page.locator('//input[@name="lastName"]').fill("Shanmugapriya") 
    await page.locator('//input[@name="Company"]').fill("TCS")
    await page.locator('//button[@name="SaveEdit"]').click()
    await expect(page.getByText("Shanmugapriya",{exact: true}).nth(0)).toBeVisible();
    await page.waitForTimeout(3000)
}


)