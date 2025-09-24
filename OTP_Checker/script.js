const verifyBtn = document.getElementById('verifyBtn');
const inputs = [
  document.getElementById('otp1'),
  document.getElementById('otp2'),
  document.getElementById('otp3'),
  document.getElementById('otp4')
];
const successMsg = document.getElementById('successMsg');

verifyBtn.addEventListener('click', () => {
  const otp = inputs.map(input => input.value).join('');
  const validOTP = '1234';

  if (otp === validOTP) {
    inputs.forEach(input => {
      input.style.borderColor = 'green';
    });
    successMsg.textContent = 'OTP Verified Successfully!';
  } else {
    inputs.forEach(input => {
      input.style.borderColor = 'red';
    });
    successMsg.textContent = '';
    alert('Invalid OTP');
  }
});

// Optional: auto focus next input
inputs.forEach((input, idx) => {
  input.addEventListener('input', () => {
    if (input.value && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    }
  });
});
