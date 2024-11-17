var stackNum = [];
var stackOp = [];


const numHandler = (num) => {
  const display = document.getElementById('display');
  display.value += num; 
};


const opHandler = (oper) => {
  const display = document.getElementById('display');
  
  if (display.value !== '') {
    stackNum.push(parseFloat(display.value)); 
    stackOp.push(oper); 
    display.value = ''; 
  }
};

//Fun to do coding
const eqHandler = () => {
  const display = document.getElementById('display');
  
  
  if (display.value !== '') {
    stackNum.push(parseFloat(display.value));
  }

  
  let result = stackNum[0];
  for (let i = 0; i < stackOp.length; i++) {
    const operator = stackOp[i];
    const nextNum = stackNum[i + 1];

    switch (operator) {
      case '+':
        result += nextNum;
        break;
      case '-':
        result -= nextNum;
        break;
      case '*':
        result *= nextNum;
        break;
      case '/':
        if (nextNum === 0) {
          alert('Division by zero is not allowed');
          return;
        }
        result /= nextNum;
        break;
      default:
        alert('Unknown operator');
        return;
    }
  }
  display.value = result;
  stackNum = [];
  stackOp = [];
};


const Clear = () => {
  const display = document.getElementById('display');
  display.value = ''; 
  stackNum = []; 
  stackOp = [];
};
