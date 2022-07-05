const bill = document.querySelector('#bill')
const service = document.querySelector('#service')
const people = document.querySelector('#people')
const button = document.querySelector(".calculate")
const result = document.querySelector(".result")
const each = document.querySelector(".each")

button.addEventListener('click', function(){
   let tip = (service.value * bill.value)/100 
   tip = tip/people.value
   tip = tip.toFixed(2)
   if(people.value >1){
    result.innerText = tip+" Each"
   }else if(people.value == 0 || bill.value == 0){
       alert("Please enter values")

   }else{
    result.innerText = tip
   }
   

})