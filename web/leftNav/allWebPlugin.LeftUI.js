$(
function(){
/**公共方法**/	
    var nClick = 1;//鼠标点击次数
	var ToolBarId;
	var MenuId;

	//下拉
    var isNotLoad = true;
	$(".tableAll").click(function(){
        if(isNotLoad){
            isNotLoad = false;	 
			  var noneY = $(this).next().css("display");
			  $(".tableAll").next().css("display","none");
			  $(".tableAll").find('td:eq(0)').css({'background-color':'#E6DBEC'});
			  $(".tableAll").find('span:eq(0)').html('+');

				  if( noneY== 'none'){
					  var s = $(this).find('td:eq(0)').html();                
					  $(this).find('td:eq(0)').html(s.replace("+", "-")) ;                              
					  $(this).find('td:eq(0)').css({'background-color':'#FFFFFF'});
		              $(this).next().slideToggle(function(){isNotLoad = true;});
				  }else{
					  isNotLoad = true;
				  }
            }
			if(g_allWebPlugin.ActivateContainer)
			{
				g_allWebPlugin.ActivateContainer.UI.onUpdatePosition(1);
			}
	});
	//下拉
	var hide = false;
	$("#disPlayNone").click(function(){
		
		 if(hide){
			 $('#showTD').width('204px');
			 $(this).siblings().css("display", "")
			
			 hide = false;
		 }else{	
			 $('#showTD').width('25px');
			 $(this).siblings().css("display", "none")
			 hide = true;
		 }
		 if(g_allWebPlugin.ActivateContainer)
		 {
			g_allWebPlugin.ActivateContainer.UI.onUpdatePosition(1);
		 }
	});
})