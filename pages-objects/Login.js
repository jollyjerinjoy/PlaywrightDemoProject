class Login{
    constructor(page)
    {
        this.page=page;
        this.loginlink=page.locator('#login2');
        this.loginusername=page.locator('#loginusername');
        this.loginpassword=page.locator('#loginpassword');
       // this.loginbutton=page.locator("#Log in");
        this.loginbutton = page.getByRole('button', { name: 'Log in' });
       // this.logoutlink = page.getByRole('button', { name: 'Log out' });
        this.logoutlink =page.locator("#logout2");
        

    }

    async clicklogin(logusername,logpassowrd)
    {
          await this.page.goto("https://www.demoblaze.com/");
          await this.loginlink.click();
          await this.loginusername.waitFor();
          await this.loginusername.fill(logusername);
          await this.loginpassword.fill(logpassowrd); 
          await this.loginbutton.click();

    }

   async clicklogout(logusername1,logpassowrd1)
    {
        await this.logoutlink.waitFor();
          await this.logoutlink.click();

    }

}
module.exports=Login