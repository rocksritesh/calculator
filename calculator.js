//FUNCTION FOR NUMBER AND SIGN 
function ab(number){
    document.getElementById("display").value+=number
    }
    
    //FUNCTION FOR clearInterval
    function bc(){
        document.getElementById("display").value= ""
    }
    
    //FUNCTION FOR DLT 
    function bt(){
        var display1 = document.getElementById("display").value
        var ra = display1.slice(0,-1)
        document.getElementById("display").value = ra 
    }
    
    //FUNCTION FOR OUTPUT
    function bts(){
    var a = document.getElementById("display").value
    var res = eval(a)
    document.getElementById('display').value = res
    }