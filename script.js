
function my_func(){

    let element = document.getElementById("rate");
    let my_value = element.value;
    document.getElementById("rangevalue").value = my_value + "%";

}

function check_form(){
    let amount = document.getElementById("principal");
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let show = document.getElementById("result");

    if (amount.value == ""){
        alert("Please enter the amount.");
        amount.focus();
        return false;
    }
    // Here is the calculation process
    let money = (amount.value * rate / 100) * years;
    
    let result = `If you deposite <mark>${amount.value}</mark>,<br>
     at an interest rate of <mark>${rate}%</mark>.<br>
     You will recieve an amount of <mark>${money}</mark>,<br>
     in year <mark>${parseInt(Number(new Date().getFullYear())) + parseInt(years)}</mark>`;

     // Add the created element to the page
     show.innerHTML = result;
    
    return false;
}

