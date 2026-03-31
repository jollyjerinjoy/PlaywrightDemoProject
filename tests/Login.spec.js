const { test, expect } = require("@playwright/test");
const PoManager = require("../pages-objects/PoManager");
const { assert } = require("node:console");


test('3.Verify login with valid credentials',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("12345aabc12345","12345aabc12345");
//.clicksignup("12345aabc12345","12345aabc12345");
//await expect(page.locator('#nameofuser')).toHaveText('Welcome 12345aabc12345');
await expect(page.getByRole('link', { name: 'Welcome 12345aabc12345' })).toBeVisible();  //use special locator for text with space

});


test('4.Verify login with valid username and invalid password',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("12345aabc12345","0");
await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
 
});

test('5.Verify login with invalid username and valid password',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("05","12345aabc1234");
//.clicksignup("12345aabc12345","12345aabc12345");
await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});

test('6.Verify login with invalid username and invalid password ',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("05","05");
//.clicksignup("12345aabc12345","12345aabc12345");
await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});

test('10.Login with valid credentials -> Logout',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("12345aabc12345","12345aabc12345");
await loginobj.clicklogout();
await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});
