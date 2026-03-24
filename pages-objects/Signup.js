class Signup{
    constructor(page)
    {
        this.page=page;
        this.clicksignuplink=page.locator('#signin2'); 
        this.username=page.locator('#sign-username');
        this.password=page.locator('#sign-password'); 
        this.signup = page.getByRole('button', { name: 'Sign up' });
        this.closebutton = page.getByRole('button', { name: 'Close' });
        
    }
    async goto()
    {
        await this.page.goto("https://www.demoblaze.com/");
        await this.clicksignuplink.click();

    }
    async clicksignup(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signup.click();
      
    }
   async clickclose()
   {

    await this.closebutton.first().click();
       
    }
}
module.exports=Signup