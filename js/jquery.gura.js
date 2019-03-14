
		// (function($){})(jQuery) => jQuery인자를 전달하는 함수를 만들고 $로 전달해 실행. 
		(function($){
			// .gura()라는 동작 정의하기
			$.fn.gura=function(options){
				// default 값 정의하기
				var settings=$.extend({
					msg:"안녕! 나는 구라야!!!!!",
					width:"200px",
					height:"200px"
				},options);

				this
				.text(settings.msg)
				.css("width",settings.width)
				.css("height",settings.height)
				.css("border","10px solid red")
				.click(function(){
					$(this).animate({marginLeft:"+=100px"});
				});

				// chain 형태로 동작 가능하게 하기
				return this;

			};

		})(jQuery);
