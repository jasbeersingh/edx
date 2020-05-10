/*
 * Implement all your JavaScript in this file!
 */
// var var1 = "";
// var var2 = "";
var var_num = "";
var eval_str = "";
var operator = NaN;
var result = NaN;
var last_operator;
var last_var_num;



$('button').click(function(){

    // if num button is pressed.
    if(/^button[0-9]$/.test(this.id)){
        if(eval_str){
            if(/[/+*-]$/.test(eval_str)){
                var_num = this.value;
            }
            else{
                var_num = var_num + this.value;
            }
        }else{
            var_num = this.value;
        }
        eval_str = eval_str + this.value;
        $('#display').val(var_num);
    }

    if (/^[asmd][a-z]*Button$/.test(this.id)){
        if(this.id == "divideButton"){
            operator = "/";
        }else{
            operator = this.textContent;
        }
        if(eval_str){
            if(/^[0-9]+[/*+-][0-9]+$/.test(eval_str)){
                temp = eval(eval_str);
                eval_str = temp + operator;
                $('#display').val(temp);
            }
            else if(/[^/+*-]$/.test(eval_str)){
                eval_str = eval_str + operator;
            }else{
                eval_str = eval_str.replace(/[/*+-]$/, this.textContent)
            }
        }
        else{
            if(res){
                eval_str = res + operator;
            }
        }
    }

    // if equals is pressed.
    if(this.id == "equalsButton"){
        if(/^[0-9][0-9/+*-]*[0-9]$/.test(eval_str)){
            res = eval(eval_str);
            last_operator = operator;
            last_var_num = var_num;
        }else{
            if(res){
                res = eval(res + last_operator + last_var_num);
            }
        }
        $("#display").val(res)
        var_num = "";
        eval_str = "";
        operator = NaN;
    }

    // if clear button is pressed.
    if(this.id == "clearButton"){
        $("#display").val("");
        var_num = "";
        eval_str = "";
        operator = NaN;
        console.log("cleared");
    }

});