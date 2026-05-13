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
    await page.getByTitle("shanmugapriya").nth(0).click()
    await page.getByText("Edit",{exact:true}).click()
    const kompany = "BBBB"
    await page.getByRole("textbox",{name:"Company"}).fill(kompany)
    await page.locator('//button[@name="SaveEdit"]').click()
    await page.getByText("Edit",{exact:true}).click()
    const result = await page.getByRole("textbox",{name:"Company"}).inputValue();
    console.log(result);
    if(kompany ===  result)
    {
       console.log("Edit Successfull");
       
    }
    else{
        console.log("Edit failed");
        
    }
    await page.waitForTimeout(3000)
}

)