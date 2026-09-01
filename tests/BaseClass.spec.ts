import {test,expect} from 'playwright/test';
// test('title of the test',funtion it might be arrow or normal function{write your test code here})
// https://parabank.parasoft.com/
//fixture  - global variable : page,context,browser 
test('BaseClass',async({page}) => {
    await page.goto('https://parabank.parasoft.commm/');
    let title: string=await page.title();
    console.log(title);
    await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
})
