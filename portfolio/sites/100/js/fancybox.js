$(document).ready(function() {
		$("a.gallery, a.iframe").fancybox({"padding" : 10});
		

			$("a.modalbox").fancybox(
			{						
"padding" : 0, // отступ контента от краев окна
"imageScale" : true, // Принимает значение true - контент(изображения) масштабируется по размеру окна, или false - окно вытягивается по размеру контента. По умолчанию - TRUE
			"zoomOpacity" : true,	// изменение прозрачности контента во время анимации (по умолчанию false)
			"zoomSpeedIn" : 500,	// скорость анимации в мс при увеличении фото (по умолчанию 0)
			"zoomSpeedOut" : 500,	// скорость анимации в мс при уменьшении фото (по умолчанию 0)
			"zoomSpeedChange" : 1000, // скорость анимации в мс при смене фото (по умолчанию 0)
			"frameHeight":300,
			"frameWidth":420,
			"overlayShow" : true, // если true затеняят страницу под всплывающим окном. (по умолчанию true). Цвет задается в jquery.fancybox.css - div#fancy_overlay 
			"overlayOpacity" : 0.8,	 // Прозрачность затенения 	(0.3 по умолчанию)
			"hideOnContentClick" :false, // Если TRUE  закрывает окно по клику по любой его точке (кроме элементов навигации). Поумолчанию TRUE		
			"centerOnScroll" :true // Если TRUE окно центрируется на экране, когда пользователь прокручивает страницу		
				
			});
			
		


		
		});