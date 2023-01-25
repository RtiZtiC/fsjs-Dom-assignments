function countCharacters() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    let arr=input.split(" ");
    console.log(arr);
    output.innerHTML = "Number of words: " + arr.length;
  }