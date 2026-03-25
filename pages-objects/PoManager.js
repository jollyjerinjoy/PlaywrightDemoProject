//const Cart = require("./Cart");

//const ShippingDetails = require("./ShippingDetails");

const Cart = require("./Cart");
const Login = require("./Login");
const Signup = require("./Signup");

class PoManager{
    constructor(page){
       this.page=page;
        this.sign=new Signup(page);
        this.login=new Login(page);
        this.cart=new Cart(page);
       // this.shipping=new ShippingDetails(page);
       
                
    }
    getSignup()
    {
        return this.sign;
    }
    
    getLogin() //async not used
    {
        return this.login;   //only return stmt in function, hence async not added
    
    }

    
    getCart()
    {
       return this.cart;
    }
    //getShippingDetails()
    //{
    //    return this.shipping;

   // }
  
}
module.exports=PoManager
