$(document).ready(function(){
	var body=document.body,html=document.documentElement;
	var scrollHeight=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);
	function getDocumentHeight(){
		return Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);
	}
	
	// $('.work_btn_want').click(function(){
	// 	$('.overlayS').show();
	// });
	// $(".overlayS-form__close").hover(
	//   function() {
	//     $(this).css('background','transparent url(img/interface/eye-closed.svg) center no-repeat');
	//     $(this).parent().css('opacity','0.6');
	//   }, function() {
	//     $(this).css('background','transparent url(img/interface/eye-opened.svg) center no-repeat');
	//     $(this).parent().css('opacity','1');
	//   }
	// );
	// $(".overlayS-form__close").click(function(){
	// 	$('.overlayS').hide();
	// });
	$(".image").click(function(){   
		var img = $(this);    // Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
		$("body").append("<div class='_popup'>"+ //Добавляем в тело документа разметку всплывающего окна
		"<div class='_popup_bg'>"+ // Блок, который будет служить фоном затемненным
		"<img src='"+src+"' class='_popup_img' />"+ // Само увеличенное фото
		"</div></div>");
		$("._popup").fadeIn(800); // Медленно выводим изображение
		$("._popup_bg").click(function(){    // Событие клика на затемненный фон      
			$("._popup").fadeOut(800);    // Медленно убираем всплывающее окно
			setTimeout(function() {    // Выставляем таймер
				$("._popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
		$("._popup_img").click(function(){       
			$("._popup").fadeOut(800);    // Медленно убираем всплывающее окно
			setTimeout(function() {    // Выставляем таймер
				$("._popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
		});
	});
	$('.overlay-portfolio-close').click(function()
		{
			$("iframe").each(function(){
			$(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}','*')});
			$(this).parent().hide();});
	$('.go_to_portfolio').click(function(){
		var scroll_el=$(this).attr('href');
		if($(scroll_el).length!=0)
			{
				$('html, body').animate({scrollTop:$(scroll_el).offset().top-90},500);
			}
			return false;});
	$('.go_to_cooperation').click(function(){
		var scroll_el=$(this).attr('href');
		if($(scroll_el).length!=0){
			$('html, body').animate({
				scrollTop:$(scroll_el).offset().top},500);
		}
		return false;});
	$('.go_to_skills').click(function(){
		var scroll_el=$(this).attr('href');
		if($(scroll_el).length!=0){
			$('html, body').animate({scrollTop:$(scroll_el).offset().top},500);
		}return false;});$('.go_to_link').click(function(){
			var scroll_el=$(this).attr('href');
			if($(scroll_el).length!=0){$('html, body').animate({scrollTop:$(scroll_el).offset().top},500);
		}
		return false;});
		$('form').submit(function(event){
			event.preventDefault();$.ajax({
				type:"POST",url:"mailer/smart.php",data:$(this).serialize()}).done(function(){
					});
			});
		$('form').submit(function(event){
			event.preventDefault();$.ajax({
				type:"POST",url:"mailer/to_user.php",data:$(this).serialize()}).done(function(){
					$(this).find("input").val("");$('#modal-success').show();
					setTimeout("$('#modal-success').hide()",3000);
					$("form").trigger("reset");});return false;});
		
		var schLeft=0;var schRight=0;$('.choose_left').click(function(){
			if(document.documentElement.clientWidth<992){$('.choose_right').hide();}
			if(schLeft==0){$('.p3-1').css('display','block');
			$(this).css('display','none');
		}if(schLeft==1){$('.p4-1').css('display','block');
		$(this).css('display','none');}
		if(schLeft==2){$('.p5-1').css('display','block');$(this).css('display','none');$('.wantworkwithyou').css('display','block');}schLeft++;});$('.choose_right').click(function(){if(document.documentElement.clientWidth<992){$('.choose_left').hide();}if(schRight==0){$('.p3-2').css('display','block');$(this).css('display','none');}if(schRight==1){$('.p4-2').css('display','block');$(this).css('display','none');}if(schRight==2){$('.p5-2').css('display','block');$(this).css('display','none');$('.wantworkwithyou').css('display','block');}schRight++;});

		$('.btn-d').click(function(){
			var scroll_el=$(this).parent();
			$('html, body').animate({scrollTop:$(scroll_el).offset().top},500);
		});
	});