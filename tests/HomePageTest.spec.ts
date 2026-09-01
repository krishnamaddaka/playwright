import {test,expect} from 'playwright/test';
// test('title of the test',funtion it might be arrow or normal function{write your test code here})
// https://parabank.parasoft.com/
//fixture  - global variable : page,context,browser 
test('HomePage',({page}) => {
    page.goto('https://parabank.parasoft.com/');
    let title: string=page.title();
    console.log(title);
    expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
})
