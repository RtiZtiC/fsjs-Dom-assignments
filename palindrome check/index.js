var button = document.getElementById("check-button");


button.addEventListener("click", function() {
    var input = document.getElementById("user-input").value;

    if (checkPalindrome(input)) {
      document.getElementById("ot-text").innerHTML="The Element Is Palindrome";
    } else {
        document.getElementById("ot-text").innerHTML="The Element Is NOT Palindrome";
    }
  });

  
function checkPalindrome(input) {
    var reversed = input.split('').reverse().join('');
    if (reversed === input) {
      return true;
    } else {
      return false;
    }
  }


  