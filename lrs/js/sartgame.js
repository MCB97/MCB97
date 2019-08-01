$(function(){
$('a').click(function(){
	if($(this).attr('href') == 'javascript:;'){
		$(this).nextAll().toggle()
		if($(this).nextAll().css('display') == 'none'){
			$(this).addClass('sh')
		}else{
			$(this).removeClass('sh')
		}
	}
})





   

 

	
  })
	  
   


