import {test,expect}from "@playwright/test"
test("Create Individuals in Salesforce" , async({page})=>{
    await page.goto("https://testleaf.my.salesforce.com/")
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('[class="button r4 wide primary"]').nth(0).click()
    await page.locator('//button[@class = "slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]').click()
    await page.locator('//button[@class="slds-button"][1]').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('one-app-nav-bar-item-dropdown:has-text("Individuals")').click()
    await page.locator('//span[text()="New Individual"]').click()
    await page.getByRole("textbox",{name :"Last Name"}).fill("Shanmuga")
    await page.locator('//span[text()="Save"]').click()
    await expect(page.getByText("Shanmuga").last()).toBeVisible();
}

)