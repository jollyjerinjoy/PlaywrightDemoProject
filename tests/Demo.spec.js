const PoManager = require("../pages-objects/PoManager");
const { customtest } = require("../Utils/test-base");


customtest('Monitor test using fixture', async ({ page, testDataForOrder }) => { //testDataForOrder - fixture  is added
    
  const pomanager = new PoManager(page);
  const categoriesobj = pomanager.getCategories();
  const loginobj = pomanager.getLogin();

  await loginobj.clicklogin("12345aabc12345","12345aabc12345");

  const productName = testDataForOrder.productnamemonitor;

 // await categoriesobj.selectCategory("Monitors");
await categoriesobj.CategorySelectmonitor(productName);
await categoriesobj.CategorygetAddToCartmonitor();
await categoriesobj.CategoryClickCartmonitor();


const pname="jo";
const pcountry="IND";
const pcity="cochin";
const pcard="c23";
const pmonth="mar";
const pyear="2003"; 
await categoriesobj.placeOrdermonitor(pname,pcountry,pcity,pcard,pmonth,pyear);

});