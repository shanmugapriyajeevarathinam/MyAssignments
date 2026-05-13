import {test} from "@playwright/test"
test("Create Lead in CRM",async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.getByRole("textbox",{name:"Username"}).fill("democsr2")
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click()
    await page.getByRole("link",{name:"CRM/SFA"}).click()
    await page.getByRole("link",{name:"Leads"}).click()
    await page.getByRole("link",{name:"Create Lead"}).click()
    await page.locator('//input[@id="createLeadForm_companyName"]').fill("TCS")
    await page.locator('//input[@id="createLeadForm_firstName"]').fill("Shanmugapriya")
    await page.locator('//input[@id="createLeadForm_lastName"]').fill("Jeevarathinam")
    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill("Mrs")
    await page.locator('//input[@id="createLeadForm_generalProfTitle"]').fill("Learner")
    await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill("800")
    await page.locator('//input[@id="createLeadForm_departmentName"]').fill("ITAnalyst")
    await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill("9090909090")
    await page.locator('[name="submitButton"]').click()
    let tittle = await page.title()
    console.log(tittle);
    
    await page.waitForTimeout(3000)
}

)