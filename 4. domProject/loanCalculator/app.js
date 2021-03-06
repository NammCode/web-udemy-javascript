// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculatorResult, 1500);
  e.preventDefault();
});

// Calculate Results
function calculatorResult() {

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';
    showError();
  }

}

function showError() {

  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.appendChild(document.createTextNode('Please check your numbers'));
  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 2000);
}

function clearError() {
  document.querySelector('.alert').remove();
}