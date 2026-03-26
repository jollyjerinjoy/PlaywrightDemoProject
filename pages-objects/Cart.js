

class Cart{
    constructor(page)
    {
        this.page=page;
        //this.checkout=page.locator("#cartur");  
            //  this.product=page.locator(".inventory_item_name"); card-block
       // this.productName=page.locator(".inventory_item"); card-title
       // this.productname=page.locator("Samsung galaxy s6"); 
        this.productname = page.getByRole('link', { name: 'Samsung galaxy s6' });
        //this.cartname1=page.locator(".inventory_item_name");
        //this.addtocartbutton=page.locator('.btn btn-success btn-lg');
        
       this.addtocartbutton = page.getByRole('link', { name: 'Add to cart' });
     
    }
    
// async selectProduct(productname)  //"Sauce Labs Backpack"
//     {
//     //idle time for login
//         await this.page.waitForLoadState("networkidle");
//         await this.product.first().waitFor(); //wait on first product
//         console.log(await this.product.allTextContents());   //get text of first product
//         //using nth of .inventory_item , first item to add cart -test('Client App Login'
//        // const productName="Sauce Labs Backpack";
//         const count=await this.product.count();
//         console.log(count);
//         for(let i=0;i<count;i++)
//         {
//             console.log(productname);
//             console.log(await this.product.nth(i).textContent());
//         if (await this.product.nth(i).textContent()===productname)
//                     {
//             console.log(productname);
//             await this.productName.nth(i).locator("text=Add to cart").click();
//             break;
//         }
//           //break;
//         }
//     }

    async selectCartItem(){
        //await this.page.waitForLoadState("networkidle");
         await this.productname.first().waitFor(); //wait on first product
         console.log(await this.productname.first());
     //   await this.productname.waitFor();
       // const bool=await this.cartname.isVisible(); //assert , import expect 
       // console.log(bool);
        await this.productname.click();
      //  await this.checkout.click();
        
    }
    async getAddToCart()
    {
        //expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
    //await this.addtocartbutton.locator('text=Add to cart').click();
     await this.addtocartbutton.click();
    }

}
module.exports=Cart