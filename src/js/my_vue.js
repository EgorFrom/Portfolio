function initProject (num, name, type, time, cost, descr, href, img){
	return {
		num, name, type, time, cost, descr, href, img
	}
}
const arrayProjects = [
	initProject('0', 'BTG', 'Корпоративный сайт', '10 дней', '9000', 'Сайт для компании, позволяющий принимать 2 вида заявок, при оформлении заявки данные отправляются на почту в письме с HTML-разметкой, реализованы слайдеры, анимация в меню, фиксированные формы, всплывающие в любом месте страницы. ', 'http://nagibine.ru/BTG', 'img/portfolio/btg.jpg'),
	initProject('1', 'Добрый картон','Одностраничный сайт Landing page', '4 дня', '5000', 'Сайт описывающий сферу дейтельности компании, позволяющий оставить заявку, которая при отправке приходит на почту, полностью адаптивен, подключены гео-карты от Яндекс, возможны подключения карт от Google и 2Gis', 'http://nagibine.ru/dk', 'img/portfolio/dk.jpg'),
	initProject('2', 'Фазенда','Корпоративный сайт','1 месяц',  '32000', 'Сайт для строительной компании Фазенда, реализация фильтра  проектов по нескольким параметрам, возможна реализация на js/vue.js, реализация множества форм обратной связи, в том числе с возможностью прикрепления файлов, с указанием адреса страницы откуда отправлена форма, посадка на CMS Wordpress и запись видео-инструкций владельцу.', 'http://fazenda-dom.ru', 'img/portfolio/qween.jpg'),
	initProject('3', 'Верстка и настройка формы входа','Страница','4 часа',  '1100', 'Верстка страницы позволяющей зарегестрироваться/войти/восстановить пароль и настройка js, проверка сложности пароля, таймер для смс-пароля', 'http://nagibine.ru/loginpage', 'img/portfolio/login.jpg'),
	initProject('4', 'Истиная королева','Одностраничный сайт Landing page','2 часа',  '2000', 'Сайт илюстрирующий работу Bootstrap сетки', 'http://nagibine.ru/lesson_7/', 'img/portfolio/rqween.jpg'),
	initProject('5', 'Адаптивная верстка','Всплывающая форма','1.5 часа',  '600', '-', '', 'img/portfolio/chooseRegion.jpg'),
	initProject('6', 'Адаптивная верстка','Всплывающая форма','1.5 часа',  '600', '-', '', 'img/portfolio/chooseTechnics.jpg'),
	initProject('7', 'Резиновая верстка','Страница','1 час',  '600', '', '', 'img/portfolio/tooth.jpg')
]

new Vue({
	el: '#works',
	data: {
		Projects: arrayProjects,
		Project: arrayProjects[0],
		selectedProjectItems: 0,
		hrefVisibility: false,
		modalShowed: false,
		flagReadMoreDescr: false,
		search: '',
		classEye: 'eyeOpen'
	},
	methods: {
		selectProject: function(index) {
			this.hrefVisibility = false;
			this.flagReadMoreDescr = false;
			this.Project = arrayProjects[index];
			this.selectedProjectItems = index;
			this.animationForProjects();
		},
		changeEye_closing() {
			this.classEye = 'eyeClose';
		},
		changeEye_opening() {
			this.classEye = 'eyeOpen';
		},
		animationForProjects(){
			if (document.documentElement.clientWidth > 1024)
			{
			  $('.detailed').css('margin-left','99px');
	//		  $('.detailed').css('opacity','0');
				var start = Date.now(); // сохранить время начала

				var timer = setInterval(function() {
				  // вычислить сколько времени прошло с начала анимации
				  var timePassed = Date.now() - start;
				  if (timePassed >= 500) {
				    clearInterval(timer); // конец через 2 секунды
				    return;
				  }

				  // рисует состояние анимации, соответствующее времени timePassed
				  draw(timePassed);

				}, 20);

				// в то время как timePassed идёт от 0 до 500
				// принимает значения от 0 до 99px
				function draw(timePassed) {
				  $('.detailed').css('transform','translateX(-'+ timePassed / 5+'px)');
//				  $('.detailed').css('opacity',timePassed / 475);
				}

			}
		}
	},
	computed: {
		hrefBtnText() {
			return this.hrefVisibility ? 'Скрыть ссылку' : 'Показать ссылку';
		},
		filteredProjects() {
			var self = this
			const filtered = this.Projects.filter(function(project) {
				return project.name.toLowerCase().indexOf(self.search.toLowerCase()) > -1 || project.type.toLowerCase().indexOf(self.search.toLowerCase()) > -1 
			})
			return filtered;
		},
		subDescr(){
			return this.Project.descr.substring(0,150);
		}
	}
})