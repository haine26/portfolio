const text = ["Wellcome to my portfolio!!!","Nice to meet you ^^ ","This is my first project"];
const typingOut = document.querySelector(".typing-out");

const displayTime = 3000; // thời gian hiển thị mỗi câu
const deleteTime = 1000; // thời gian xóa text

let deleteText = false;
var i = 0;
var j = 0;
// let timer = 0;
setInterval(function () {
    let currentText = typingOut.innerHTML;
  
    if (j === text.length) {
      j = 0;
    }
  
    if (i === text[j].length) {
      deleteText = true;
    } else if (i === 0) {
      deleteText = false;
    }
  
    if (deleteText) {
      typingOut.innerHTML = currentText.slice(0, -1);
      i--;
    } else {
      typingOut.innerHTML = text[j].slice(0, i + 1);
      i++;
    }
  
    if (i === 0 && deleteText) {
      j++;
    }
  }, 120);