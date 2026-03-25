//import test from "@playwright/test";
//import Signup from "../pages-objects/Signup";

import test from "@playwright/test";
import PoManager from "../pages-objects/PoManager";


test('1.Sign Up -> Enter Data -> Click Sign Up',async({page})=>
{
 //const signupobj=new Signup(page);
 //await signupobj.goto();
 //await signupobj.clicksignup("12345aabc12345","12345aabc12345");
 
const pomanager=new PoManager(page);  //calling obj from PoManager
const signobj=pomanager.getSignup();   //PoManager returns
await signobj.goto();
await signobj.clicksignup("12345aabc12345","12345aabc12345");
 
});


test('2.Sign Up -> Enter Data -> Click Close  ', async({page})=>
{

 // const signupobj=new Signup(page);
  // await signupobj.goto();
  // await signupobj.clickclose();
const pomanager=new PoManager(page);  //calling obj from PoManager
const signobj=pomanager.getSignup();   //PoManager returns
await signobj.goto();
await signobj.clickclose();

});