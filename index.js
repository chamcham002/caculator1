const display = document.getElementById("display")


function appendToDispay(input){
  display.value += input;
}

function clearDisplay(){
  display.value ="0";
}

//warning: executing js from a string is an enormous security risk
//it is far too easy for a bad actor to run arbitrary code when you use eval()
//because of its risks, we will use try/catch to handle any errors/issues
function calculate(){
  try{  
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}
