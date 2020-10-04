carLoanPayment.onshow=function(){
 NSB.MsgBox("Please enter the requested information:"); 
 }
 
 let carPrincipalValue = ""
 let carMonthlyInterestValue = ""
 let carTotalMonthsValue = ""

 submitCar.onclick=function(){
 carPrincipalValue = carPrincipalAmount.value
 carMonthlyInterestValue = carMonthlyInterest.value
 carTotalMonthsValue = carTotalMonths.value
 let totalCarPayment = carPrincipalValue*(carMonthlyInterestValue*((1+carMonthlyInterestValue)**carTotalMonthsValue))/(((1+carMonthlyInterestValue)**carTotalMonthsValue)-1)
 ChangeForm(homePage)
 alert(totalCarPayment)   
}
 



