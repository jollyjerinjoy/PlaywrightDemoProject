//const Cart = require("./Cart");

//const ShippingDetails = require("./ShippingDetails");
const Signup = require("./Signup");
const Login = require("./Login");
const Cart = require("./Cart");
const Categories = require("./Categories");


class PoManager{
    constructor(page){
       this.page=page;
        this.sign=new Signup(page);
        this.login=new Login(page);
        this.cart=new Cart(page);
        this.categories=new Categories(page);
       
                
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
    getCategories()
    {
        return this.categories;

   }
  
}
module.exports=PoManager
