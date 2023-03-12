// deposite section
// step1- add event handler on deposite btn
document.getElementById('deposite-btn').addEventListener('click',function(){
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    depositeField.value = '';
    const newDepositeAmount = Number(newDepositeAmountString);
// validation if not a number
    if(isNaN(newDepositeAmount)){
        alert('please provide a valid number');
        return;
    }
   
// ste2-get the amount of value
    const previousDeposite = document.getElementById('deposite-total');
    const previousDepositeAmount=previousDeposite.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeAmount);
// step3-added new balance
    const curentDepositeAmount = previousDepositeTotal + newDepositeAmount;
    previousDeposite.innerText = curentDepositeAmount;
// step-4:include new balance in current balance
    const curentBalance = document.getElementById('current-balance');
    const curentBalanceString = curentBalance.innerText;
    const curentBalanceAmount = parseFloat(curentBalanceString);
    const currentBalanceTotal = curentBalanceAmount + newDepositeAmount;
    curentBalance.innerText = currentBalanceTotal;
})
// withdraw section
// step1- add event handler on withdraw btn
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    withdrawField.value = '';
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// validation if not a number
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
// ste2-get the withdraw value
    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawAmount = previousWithdraw.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawAmount);


// step-4:get the current balance
    const curentBalanceElement = document.getElementById('current-balance');
    const curentBalanceElementString = curentBalanceElement.innerText;
    const previousCurrentBalance = parseFloat(curentBalanceElementString);
    if(newWithdrawAmount>previousCurrentBalance){
        alert('Tmar bank e eto taka nai');
        return;
    }
    // step3-added new withdraw balance
    const currentWithdrawAmmount = newWithdrawAmount + previousWithdrawTotal;
    previousWithdraw.innerText = currentWithdrawAmmount;
// step-5:include remaining balance in current balance
    const remainingBalance = previousCurrentBalance - newWithdrawAmount;
    curentBalanceElement.innerText = remainingBalance;

  
})