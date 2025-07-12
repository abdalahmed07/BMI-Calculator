function calculateBMI(event) {
  event.preventDefault();

  const feet = parseFloat(document.getElementById("feet").value) || 0;
  const inches = parseFloat(document.getElementById("inches").value) || 0;
  const weight = parseFloat(document.getElementById("weight").value);
  const results = document.getElementById("results");

  if ((feet === 0 && inches === 0) || isNaN(weight) || weight <= 0) {
    results.innerHTML = `<span>Please enter valid height and weight.</span>`;
    return;
  }

  const heightInCm = (feet * 30.48) + (inches * 2.54);
  const heightInM = heightInCm / 100;
  const bmi = (weight / (heightInM * heightInM)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  results.innerHTML = `<span>Your BMI is: <strong>${bmi}</strong> (${category})</span>`;
}