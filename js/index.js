$.fn.xiala =  function(){
			this.stop().animate({height:"180px"},1000)
		}
		
		
		$(".btn1").click(function(e){
			$(this).hide()
			$(".list1").xiala()
			e.stopPropagation()
		})
		$(".btn").click(function(e){
			$(".btn1").show()
			$(".list1").stop().animate({height:"0px"},1000)
			e.stopPropagation()
			
		})
		$(".list1 li").click(function(e){
			$(".text").val( parseInt($(this).html()) )
			$(".list1").stop().animate({height:"0px"},1000)
			$(".btn1").show()
			e.stopPropagation()
			
		})
		$(document).on("click",function(){
			$(".list1").stop().animate({height:"0px"},1000)
			$(".btn1").show()
			
		})