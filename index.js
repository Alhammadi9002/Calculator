function display(value){
    const result = document.getElementById("result").value += value;
}

function clearNum(){
    document.getElementById("result").value = "";
}

function run(){
    let exp = document.getElementById("result").value;
    let result = eval(exp)
    document.getElementById("result").value = result;
}