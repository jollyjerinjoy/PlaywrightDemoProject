class Categories{
    constructor(page)
    {
        this.page=page;
       
            //  this.product=page.locator(".inventory_item_name"); card-block
       // this.productName=page.locator(".inventory_item"); card-title
       // this.productname=page.locator("Samsung galaxy s6"); 
        this.productnamephone = page.getByRole('link', { name: 'Samsung galaxy s6' });
        //this.productnamephone1 = page.getByRole('link', { name: 'Samsung galaxy s6' });
        //this.cartname1=page.locator(".inventory_item_name");
        //this.addtocartbutton=page.locator('.btn btn-success btn-lg');
        
       this.addtocartbuttonCategory = page.getByRole('link', { name: 'Add to cart' });
        
     //  this.phonelink=page.locator('#Phones');
   
      this.selectcart=page.locator("#cartur");  
      this.placeorderlink=page.locator("#cartur");
      this.placeorderproduct = page.locator('td:has-text("Samsung galaxy s6")');
      //this.placeorderproductdelete = page.locator('#Delete');
     // this.placeorderbutton=page.locator("#Place Order");
      this.placeorderbutton = page.getByRole('button', { name: 'Place Order' });
      //this.placeorderbutton= page.locator('text=Place Order');
      this.placeordername=page.locator("#name");  
      this.placeordercountry=page.locator('#country');
      this.placeordercity=page.locator('#city');
      this.placeordercard=page.locator('#card');
      this.placeordermonth=page.locator('#month');
      this.placeorderyear=page.locator('#year');
      this.placeorderpurchasebutton = page.getByRole('button', { name: 'Purchase' });
      

      this.monitorlink = page.getByRole('link', { name: 'Monitors' });
      this.productnamemonitor = page.getByRole('link', { name: 'Apple monitor 24' });
      //this.placeorderlink=page.locator("#cartur");
      this.placeorderproductmonitor = page.locator('td:has-text("Apple monitor 24")');

    }
    

    // async CategorySelectPhone1(){
    //     //await this.page.waitForLoadState("networkidle");
    //      await this.productnamephone.first().waitFor(); //wait on first product
    //      console.log(await this.productnamephone.first());
    //  //   await this.productname.waitFor();
    //    // const bool=await this.cartname.isVisible(); //assert , import expect 
    //    // console.log(bool);
    //     await this.productnamephone.click();
    //   //  await this.checkout.click();
        
    // }


async CategorySelectPhone(productName) {

  const product = this.page.getByRole('link', { name: productName });

  await product.first().waitFor();   // wait for product
  console.log(productName);

  await product.click();             // click dynamic product
}

    async CategorygetAddToCart()
    {
        //expect(await page.locator(".inventory_item_name").isVisible()).toBeTruthy(); //assert , import expect 
    await this.addtocartbuttonCategory.locator('text=Add to cart').click();
    // await this.addtocartbuttonCategory.click();
       

      //  await this.cartalert.click();
        await this.page.on('dialog',async dialog=>{
        //wait for function
        await this.page.waitForTimeout(3000);  //3seconds delay
        await dialog.accept();  //to click ok button from dialog
    })

}


async CategoryClickCart(){
    await this.selectcart.click();
        //await this.page.waitForLoadState("networkidle");
  //       await this.productnamephone1.first().waitFor(); //wait on first product
  //       console.log(await this.productnamephone1.first().textContent());
     //   await this.productname.waitFor();
       // const bool=await this.cartname.isVisible(); //assert , import expect 
       // console.log(bool);
        await this.placeorderproduct.first().click();
      //  await this.checkout.click();
      await this.placeorderbutton.click();  
        
    }
async placeOrder(pname,pcountry,pcity,pcard,pmonth,pyear){
    //await this.selectcart.click();
    
  //  await this.placeorderproduct.first().waitFor(); //wait on first product
 //console.log(await this.placeorderproduct.first().textContent());
   // await this.placeorderproduct.click();
    
    //await this.placeorderproductdelete.click();

        //await this.page.waitForLoadState("networkidle");
        // await this.proplaceorderductnamephone.first().waitFor(); //wait on first product
         //console.log(await this.productnamephone.first().textContent());
     //   await this.productname.waitFor();
       // const bool=await this.cartname.isVisible(); //assert , import expect 
       // console.log(bool);
       // await this.productnamephone.click();
      //  await this.checkout.click();

      await (this.placeordername.fill(pname));
      await (this.placeordercountry.fill(pcountry));
      await (this.placeordercity.fill(pcity));
      await (this.placeordercard.fill(pcard));
      await (this.placeordermonth.fill(pmonth));
      await (this.placeorderyear.fill(pyear));
      await this.placeorderpurchasebutton.click();

        
    }
  // async CategorySelectmonitor1(){
      
  //       await this.monitorlink.click();
  //        await this.productnamemonitor.first().waitFor(); //wait on first product
  //       console.log(await this.productnamemonitor.first())
  //         await this.productnamemonitor.click();
          
          
        
  //   }

    
    async CategorySelectmonitor(productName1) {

        await this.monitorlink.click();
       const product1 = this.page.getByRole('link', { name: productName1 });

 // await product1.first().waitFor();   // wait for product
  console.log(productName1);

  await product1.click();             // click dynamic product
}
    async CategorygetAddToCartmonitor(){
    await this.addtocartbuttonCategory.locator('text=Add to cart').click();
    
      //  await this.cartalert.click();
        await this.page.on('dialog',async dialog=>{
        //wait for function
        await this.page.waitForTimeout(3000);  //3seconds delay
        await dialog.accept();  //to click ok button from dialog
    })

            
    }
     async CategoryClickCartmonitor(){
      
      await this.selectcart.click();
      await this.placeorderproductmonitor.first().click();
      await this.placeorderbutton.click(); 
      
          
        
    }
    async placeOrdermonitor(pname,pcountry,pcity,pcard,pmonth,pyear){
      
      await (this.placeordername.fill(pname));
      await (this.placeordercountry.fill(pcountry));
      await (this.placeordercity.fill(pcity));
      await (this.placeordercard.fill(pcard));
      await (this.placeordermonth.fill(pmonth));
      await (this.placeorderyear.fill(pyear));
      await this.placeorderpurchasebutton.click();
          
        
    }
}
module.exports=Categories