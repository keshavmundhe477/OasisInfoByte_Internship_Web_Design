document.getElementById('convertBtn').addEventListener('click', function () {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temp)) {
        resultDiv.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let convertedTemp;
    let resultText;

    switch (unit) {
        case "fahrenheit":
            convertedTemp = (temp - 32) * (5 / 9);
            resultText = `${convertedTemp.toFixed(4)} °C`;
            break;
        case "celsius":
            convertedTemp = (temp * 9 / 5) + 32;
            resultText = `${convertedTemp.toFixed(4)} °F`;
            break;
        case "kelvin":
            convertedTemp = temp - 273.15;
            resultText = `${convertedTemp.toFixed(4)} °C`;
            break;
    }

    resultDiv.innerHTML = resultText;
});
