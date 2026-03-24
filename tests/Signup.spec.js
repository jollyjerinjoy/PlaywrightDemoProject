import test from "@playwright/test";
import Signup from "../pages-objects/Signup";


test('Sign Up -> Enter Data -> Click Sign Up',async({page})=>
{
 const signupobj=new Signup(page);
 await signupobj.goto();
 await signupobj.clicksignup("12345aabc12345","12345aabc12345");
 
});


test('Sign Up -> Enter Data -> Click Close  ', async({page})=>
{

   const signupobj=new Signup(page);
   await signupobj.goto();
   await signupobj.clickclose();
});