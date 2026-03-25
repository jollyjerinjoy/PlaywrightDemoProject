const { test } = require("@playwright/test");
const PoManager = require("../pages-objects/PoManager");


test('Login with valid credentials -> Select a product -> Add to Cart -> Click "ok" on the popup',async({page})=>
{
const pomanager=new PoManager(page); 
const cartobj=pomanager.getCart(); //PoManager returns
const loginobj1=pomanager.getLogin();
await loginobj1.clicklogin("12345aabc12345","12345aabc12345");
await cartobj.selectCartItem();
await cartobj.getAddToCart();
//expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
//await cartobj.checkOut();

});