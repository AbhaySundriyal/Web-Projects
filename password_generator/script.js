const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+~<>?/";

document.getElementById("length").addEventListener("input", function () {
  document.getElementById("lengthValue").innerText = this.value;
});

function getRandomChar(set) {
  return set[Math.floor(Math.random() * set.length)];
}

function generatePassword() {
  const length = document.getElementById("length").value;
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  let charSet = "";
  if (useUpper) charSet += upperSet;
  if (useLower) charSet += lowerSet;
  if (useNumbers) charSet += numberSet;
  if (useSymbols) charSet += symbolSet;

  if (charSet === "") {
    alert("Please select at least one character set.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomChar(charSet);
  }

  document.getElementById("passwordOutput").value = password;
}

function copyPassword() {
  const output = document.getElementById("passwordOutput");
  output.select();
  output.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
