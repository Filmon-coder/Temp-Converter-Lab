

function Celsius() {
    var valueToConvert = document.getElementById("inputFahrenheit").value;
    var answer = (valueToConvert - 32) * 5/9;
    document.getElementById("answer").innerHTML = answer;

}
document