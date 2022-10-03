export const Calculator = () => {
    
    const totalCost = document.getElementById('total-cost'), 
    initialFee = document.getElementById('initial-fee'), 
    leaseTerm = document.getElementById('lease-term');

    const totalCostRange = document.getElementById('total-cost-range'), 
    initialFeeRange = document.getElementById('initial-fee-range'), 
    leaseTermRange = document.getElementById('lease-term-range');

    const totalLeaseAmount = document.getElementById('lease-amount'), 
    totalMonthlyPayment = document.getElementById('monthly-payment');
    
    const inputsRange = document.querySelectorAll('input-range');

    const assignValue = () => {
        totalCost.value = totalCostRange.value;
        initialFee.value = initialFeeRange.value;
        leaseTerm.value = leaseTermRange.value;
    }

    assignValue();

    for (let input of inputsRange) {
        console.log(input)
    }

}
