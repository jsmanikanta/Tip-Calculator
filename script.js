const bill=document.getElementById("bill");
const rating=document.getElementById("service");
const people=document.getElementById("people");
const tip=document.getElementById("tipAmount");
const total=document.getElementById("totalAmount");
const personamount=document.getElementById("perPerson");
const persontip=document.getElementById("tipPerPerson");
function tipcalc(tip,bill){
    return bill*tip;
}
const calc=document.getElementById("calculateBtn").addEventListener('click',()=>{
    const amount=parseFloat(bill.value);
    const rate=rating.value
    const persons=parseInt(people.value);
    const sumartip=tipcalc(rate,amount); 
    tip.textContent=`$ ${sumartip}`;
    const totalbill=sumartip+amount;
    total.textContent=`$ ${totalbill}`;
    personamount.textContent=`$ ${totalbill/persons}`;
    persontip.textContent=`$ ${sumartip/persons}`;
});
