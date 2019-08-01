$(function(){
//选择游戏人数
$('#nine').one('click',function(){
   $('#ten').remove();
   $('#eleven').remove();
   $('#twelve').remove();
   $('#four').remove();
   var fours =' <i>3人</i>'
   $('#cm').append(fours);
   $('#nine').css({
       'transition':'all 1s',
       'transform':'translate(100px,20px) scale(1.5)',
})
$('#start').click(function(){
    window.location.href="../html/ninegame.html";
})
})
$('#ten').one('click',function(){
    $('#nine').remove();
    $('#eleven').remove();
    $('#twelve').remove();
    $('#ten').css({
        'transition':'all 1s',
        'transform':'translate(-100px,20px) scale(1.5)',
 })
 $('#start').click(function(){
    window.location.href="../html/tengame.html";
})
})
$('#eleven').one('click',function(){
    $('#nine').remove();
    $('#ten').remove();
    $('#twelve').remove();
    $('#three').remove();
    var fourss =' <i>4人</i>'
    $('#lr').append(fourss);
    $('#eleven').css({
        'transition':'all 1s',
        'transform':'translate(100px,-20px) scale(1.5)',
 })
 $('#start').click(function(){
    window.location.href="../html/elevengame.html";
})

 })
 $('#twelve').one('click',function(){
    $('#nine').remove();
    $('#ten').remove();
    $('#eleven').remove();
    $('#four').remove();
    var fours =' <i>5人</i>'
    $('#cm').append(fours);
    $('#three').remove();
    var fourss =' <i>4人</i>'
    $('#lr').append(fourss);
    $('#twelve').css({
        'transition':'all 1s',
        'transform':'translate(-100px,-20px) scale(1.5)',
 })
    $('#start').click(function(){
        window.location.href="../html/twelvegame.html";
    })
 })
 //end
//重新选择
$('#refer').one('click',function(){
    window.location.reload()
 })
//end
})
