import{test,expect} from "@playwright/test"
test("Edit Individualsin salesforce", async({page})=>{
    await page.goto("https://testleaf.my.salesforce.com/")
    await page.locator('[id="username"]').fill("dilipkumar.rajendran@testleaf.com")
    await page.locator('#password').fill("TestLeaf@2025")
    await page.locator('[class="button r4 wide primary"]').nth(0).click()
    await page.locator('//button[@class = "slds-button slds-context-bar__button slds-icon-waffle_container slds-show"]').click()
    await page.locator('//button[@class="slds-button"][1]').click()
    await page.locator('//p[text()="Individuals"]').click()
    await page.locator('//span[text()="Individuals"]/parent::a').click()
    await page.locator('//input[@name="Individual-search-input"]').fill("Shanmuga")
    await page.keyboard.press('Enter')
    //await page.locator('//input[@name="Individual-search-input"]').press('Tab')
    await page.waitForTimeout(1000)
    await page.locator('tbody tr').first().locator('td').last().click();
    await page.locator('//div[@title="Edit"]').click()
    await page.getByRole("button",{name:"Salutation"}).click()
    await page.locator('//a[@title="Mr."]').click()
    await page.getByRole("textbox",{name:"First Name"}).fill("Jeeva")
    await page.getByText("Save",{exact:true}).last().click()
    await page.locator('tbody tr').first().locator('td').last().click();
    await page.locator('//div[@title="Edit"]').click()
    //await expect.soft(page.getByRole("textbox",{name:"First Name"})).toHaveValue("Priya")//-----negative case
    await expect.soft(page.getByRole("textbox",{name:"First Name"})).toHaveValue("Jeeva")
    await page.waitForTimeout(3000)
}



)