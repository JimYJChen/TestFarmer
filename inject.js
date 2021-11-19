console.log("#####################")
async function StartUp() {

    /*
    * Buttons
    */
    const constantVal = {
      fee5 : "Fee: 5%"
    }
    //Map button
    const mapBtn = document.querySelector(".navbar-group--icon[alt='Smithy']");
    //Exchange button
    const exchangeRelated = {
      exgBtn : ".navbar-group--icon[alt='Exchange']",
      fee : ".withdraw-tax-tag",
      exgPage : ".exchange-navbar",
      exchangeBtn : ".button-section"
    }
    
    const exgBtn = ".navbar-group--icon[alt='Exchange']"

    //Energy related
    const energyRelated = {
      energyBtn : ".resource-energy--plus[alt='plus']",
      energyPage : ".modal-body",
      inputBox : ".modal-input",
      exchangeBtn : ".button",
      plusIcon : ".image-button[alt='Plus Icon']"
    };
    const mineRelated = {
      buttons : ".info-section .plain-button"
    }
    mapBtn.click();
    //Loop for mining
    for (const [indexItem, item] of document
                .querySelectorAll(".vertical-carousel-container img")
                .entries()) {
        console.log(item)
        item.click();
        await delay(5e3);
        let buttons = get_values(mineRelated.buttons);
        //Count down
        buttons[0].click();
        //TODO Miss ok button

        //Repuired button
        buttons[1].click();
    }

    //Energy
    //Load energy page
    get_values(energyRelated.energyBtn).click();
    if(get_values(energyRelated.energyPage) != "null"){
      for(let index = 0; index <=20; index ++){
        await get_values(energyRelated.plusIcon).click();
      }
      await delay(1e2);
      //submit energy
      await get_values(energyRelated.exchangeBtn).click();
    }
    //Check Exchange
    get_values(exchangeRelated.exgBtn).click();
    if(get_values(exchangeRelated.exgPage) != null){
      if(get_values(exchangeRelated.fee) == constantVal.fee5){
        //get Balance
        let wood_Balance = document.querySelectorAll(".resource-balance-amount")[1];
        document.querySelectorAll(".exchange-input")[1].value = wood_Balance;
        get_values(exchangeRelated.exgBtn).click();
      }
    }
    /*
    
    */

   

}
async function delay(delayTime){
  await new Promise((res) => setTimeout(res, delayTime));

}
function get_values(querySelector){
  return document.querySelector(querySelector);
}

StartUp();