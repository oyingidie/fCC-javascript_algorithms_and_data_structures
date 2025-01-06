const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const validateUserInput = () => {
  if (!textInput.value.trim()) {
    result.innerHTML = ``;
    alert("Please input a value.");
  } else {
    result.innerHTML = `<p>Ooops! Wanna try again?</p>`;
  }
};

const getAlphamericText = (str) => {
  const requiredPattern = /[a-z0-9]/gi;

  if (requiredPattern.test(textInput.value)) {
    return str.toLowerCase().match(requiredPattern);
  } else {
    validateUserInput();
  }
};

const reverseTextInput = (str) => {
  return getAlphamericText(str).reverse();
};

const isPalindrome = () => {
  const userInput = textInput.value;
  const cleanString = getAlphamericText(userInput).join("");
  const reversedString = reverseTextInput(userInput).join("");

  if (cleanString === reversedString) {
    result.innerHTML = `<p>${userInput} is a palindrome.</p>`;
  } else {
    result.innerHTML = `<p>${userInput} is not a palindrome.</p>`;
  }

  result.classList.remove("hide");
  textInput.value = "";
};

const resetChecker = (e) => {
  if (e.target.value) {
    result.innerHTML = ``;
  }
};

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    isPalindrome();
  }
});

checkButton.addEventListener("click", isPalindrome);

textInput.addEventListener("input", resetChecker);
