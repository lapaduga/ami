$(document).ready(function () {
	const orderCall = document.querySelector('.header__order-call');
	const body = document.body;
	const callback = document.querySelector('#callback');
	const close = document.querySelector('.popup__close');
	const popupArea = document.querySelector('.popup__area');
	const form = document.getElementById('form');
	const alert = document.querySelector('.popup__alert');


	//burger
	$('.header__burger').click(function () {
		$('.header__burger, .header__menu').toggleClass('active');
		$('.header__city').fadeOut(300);
		body.classList.toggle('lock');
	});


	//callback popup
	orderCall.onclick = function () {
		callback.classList.add('active');
		body.classList.add('lock');
	}
	close.onclick = function () {
		if ($('.header__menu').hasClass('active')) {
			callback.classList.remove('active');
		} else {
			callback.classList.remove('active');
			body.classList.remove('lock');
		}
	}
	popupArea.onclick = function () {
		if ($('.header__menu').hasClass('active')) {
			callback.classList.remove('active');
		} else {
			callback.classList.remove('active');
			body.classList.remove('lock');
		}
	}


	//callback form validation
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			alert.classList.remove('active');
			form.reset();
		} else {
			alert.classList.add('active');
		}
	}
	
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	//questions form validation
	$('.questions__button').on('click', function (e) {
		if($('.questions__input-name').val() === '' || $('.questions__input-phone').val() === ''){
			e.preventDefault();
			$('.questions__input').addClass('_error');
			$('.questions__alert').addClass('active');
		} 
	});


	//choosing city function
	$('.header__arrow').on('click', function () {
		$('.header__city').fadeToggle(300);
	});


	//header height on scroll behaviour
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
		if (document.documentElement.clientWidth > 992) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header").style.backgroundColor = "#fff";
				document.getElementById("header__body").style.height = "70px";
				document.getElementById("header__logo").style.flex = "0 0 100px";
			} else {
				document.getElementById("header").style.backgroundColor = "transparent";
				document.getElementById("header__body").style.height = "110px";
				document.getElementById("header__logo").style.flex = "0 0 192px";
			}
		}
	}


	//testimonials and certificates slider
	$('.slider').slick({
		slidesToShow: 3,
		infinite: false,
		adaptiveHeight: true,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					centerMode: true,
					initialSlide: 2
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	//clients slider
	$('.clients__slider').slick({
		arrows: false,
		slidesToShow: 4,
		rows:2,
		autoplay: true,
		responsive:[
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 601,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});