
const {test } = require("@playwright/test");
const PoManager = require("../pages-objects/PoManager");




test('8.Login with valid credentials -> Select a product under Phones-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase',async({page})=>
{
const pomanager=new PoManager(page); 
const categoriesobj=pomanager.getCategories(); //PoManager returns
const loginobj2=pomanager.getLogin();
await loginobj2.clicklogin("12345aabc12345","12345aabc12345");
await categoriesobj.CategorySelectPhone();
await categoriesobj.CategorygetAddToCart();
await categoriesobj.CategoryClickCart();
const pname="jo";
const pcountry="IND";
const pcity="cochin";
const pcard="c23";
const pmonth="mar";
const pyear="2003";

await categoriesobj.placeOrder(pname,pcountry,pcity,pcard,pmonth,pyear);
page.on('dialog', async (dialog) => {
    // Assertion
    expect(dialog.message()).toContain('Thank you for your purchase!');
    
    await dialog.accept(); // click OK
  });
//await categoriesobj.placeorderproductdelete();
//expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
//await cartobj.checkOut();

});


test('9. Login with valid credentials -> Select a product under Monitors-> Add to Cart -> Click "ok" on the popup -> Add details -> Purchase',async({page})=>
{
const pomanager=new PoManager(page); 
const categoriesobj=pomanager.getCategories(); //PoManager returns
const loginobj2=pomanager.getLogin();
await loginobj2.clicklogin("12345aabc12345","12345aabc12345");
await categoriesobj.CategorySelectmonitor();  
await categoriesobj.CategorygetAddToCartmonitor();
await categoriesobj.CategoryClickCartmonitor();


const pname="jo";
const pcountry="IND";
const pcity="cochin";
const pcard="c23";
const pmonth="mar";
const pyear="2003"; 
await categoriesobj.placeOrdermonitor(pname,pcountry,pcity,pcard,pmonth,pyear);
//Thank you for your purchase!
page.on('dialog', async (dialog) => {
    // Assertion
    expect(dialog.message()).toContain('Thank you for your purchase!');
    
    await dialog.accept(); // click OK
  });

});
