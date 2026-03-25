const config=({
  testDir: './tests',
    timeout:60*1000,
    expect:{
      timeout:5000,
    
    },
    reporter:'html',
    use:{
      browserName:'chromium',
      headless:false,
      screenshot:'on'
      
    },

})
module.exports=config;
