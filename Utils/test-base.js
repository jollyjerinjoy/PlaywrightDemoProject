const base=require('@playwright/test'); //declare base extend test from playwright test package
exports.customtest=base.test.extend({ //customtest, custom fixtures, extend test from base
    //custom fixtures
    //login
    //dashboard
    testDataForOrder:{ //variable name for test data from json file , one of paramater of test
          
            productnamemonitor:"Apple monitor 24"

    }
});

//reading data fron json file and using it in test.
//placeOrderTestData.json file created in Utils folder, read data from json file and use it in test . thi sis used for bulk dat a tests.

