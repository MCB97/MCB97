$(function(){

//轮播图
        var index = 0;//初始话一个变量 指向下标
        var timer = setInterval(function () {
            index++;//下标变大
            if (index > 4) {
                index = 0;
            }
            $(".item").eq(index).fadeIn().siblings().fadeOut();
            //找到图片，找到现在index指向的那张图片，让他淡入，并将其他的图片淡出
        }, 1500);//定时器
//end
//登录
$(function(){
//用户名
    $('#user-reg').blur(function(){
        var user = $(this).val();
        var codes = /^[a-z0-9]{8,}$/ig;
         if(codes.test(user)){
            $('#user-error').text('输入成功');
         }else{
            $('#user-error').text('输入失败');
         }
    })
//end
//密码
$('.user1').blur(function(){
    var user = $(this).val();
    var codes = /^[a-z0-9]{8,}$/ig;
     if(codes.test(user)){
        $('#user-error1').text('输入成功');
       
     }else{
        $('#user-error1').text('输入失败');
     }
})
//本地储存
$("form").submit(function(e) {
    e.preventDefault();
    var username = $("#user-reg").val();
    var password = $("#user-pass").val();
    var obj = JSON.parse(localStorage.getItem(username))
    if(obj != null){
        if(password == obj.password){
            alert("成功");
            $(location).attr('href', './html/players.html');
        }
    }
});
})
//播放音乐
$("#audio_btn").click(function(){ 
    var music = document.getElementById("music"); 
    if(music.paused){ 
        music.play(); 
        $("#music_btn").attr("src","play.gif"); 
    }else{ 
        music.pause(); 
        $("#music_btn").attr("src","pause.gif"); 
    } 
}); 
//end



})