//验证码start
var code;
function createCode() {  //函数体
    code = "";
    var codeLength = 5; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++)
    {
        var charNum = Math.floor(Math.random() * 52);//设置随机产生
        code += codeChars[charNum];
    }
    if (checkCode)
    {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}

function GetDom(){
    if(document.getElementById("YZ").value==""){
            alert("验证码不能为空！");
            createCode();//输错一次或提交一次都将会刷新一次验证码
            return false; //结束本次会话
          }else if(document.getElementById("YZ").value.toUpperCase()!=code.toUpperCase()){ //toUpperCase不区分大小写
            alert("您输入的验证码有误，请重新输入！！");
            createCode();//读取文件
          }                  
      else{
            alert("ok");
        }
      
  } 
//验证码end


var succ = false;
var succ1 = false;
var succ2 = false;
var succ3 = false; 
var allright = false;



//用户名
$(function(){
$('#user-reg').blur(function(){
    var user = $(this).val();
    var codes = /^[a-z0-9]{8,}$/ig;
     if(codes.test(user)){
        $('#user-error').text('验证成功');
        succ = true;    
     }else{
        $('#user-error').text('验证失败');
     }
})
})
//end
//密码
$(function(){
    $('#user-pass').blur(function(){
        var user = $(this).val();
        var codes = /^[a-z0-9]{8,}$/ig;
         if(codes.test(user)){
            $('#user-error1').text('验证成功');
             succ1 =true;
         }else{
            $('#user-error1').text('验证失败');
         }
    })
   
//end
//密码再次验证
$('#user-pass-1').blur(function(){
    if($('#user-pass-1').val()==$('#user-pass').val()){
        $('#Determine-password-error').text('密码一致')
         succ2 = true;
    }else{
        $('#Determine-password-error').text('密码不一致,请重新输入')
    }
})
//密码再次验证
//end
//QQ邮箱
$('#user-emal').blur(function(){
    var email = $(this).val();
    var _email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if(_email.test(email)){
        $('#user-error-email').text('格式正确');
         succ3 = true;
    }else{
         $('#user-error-email').text('格式错误');
    }
})
//QQ邮箱






//本地储存 
 function asasdsa() {
    if (succ && succ1 && succ2 && succ3) {
        allright = true;
    }
}
$("form").submit(function(e) {
    e.preventDefault();
    asasdsa();
    if (allright) {
        var username = $("#user-reg");
        var password = $("#user-pass");
        var phone = $("#user-pass-1");
        var email = $("#user-emal");

        var obj = {
            password: password.val(),
            phone: phone.val(),
            email: email.val(),
        }
        localStorage.setItem(username.val(), JSON.stringify(obj));
            alert("成功");
        $(location).attr('href', '../index.html');
    }
 });
//end
 })
