const { test } = require("@playwright/test");
const PoManager = require("../pages-objects/PoManager");


test('Verify login with valid credentials',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("12345aabc12345","12345aabc12345");
//.clicksignup("12345aabc12345","12345aabc12345");
});


test('Verify login with valid username and invalid password',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("12345aabc12345","0");
//.clicksignup("12345aabc12345","12345aabc12345");
});

test('Verify login with invalid username and valid password',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("05","12345aabc1234");
//.clicksignup("12345aabc12345","12345aabc12345");
});

test('Verify login with invalid username and invalid password ',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("05","05");
//.clicksignup("12345aabc12345","12345aabc12345");
});

test('Login with valid credentials -> Logout',async({page})=>
{
const pomanager=new PoManager(page);  //calling obj from PoManager
const loginobj=pomanager.getLogin();   //PoManager returns
//await loginobj.goto();
await loginobj.clicklogin("12345aabc12345","12345aabc12345");
await loginobj.clicklogout();
});
