"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "swimming pool",
		category: "master",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "gym",
		category: "specialist",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "kids club",
		category: "instructor",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "fight club",
		category: "master",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "gym",
		category: "instructor",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "swimming pool",
		category: "specialist",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "fight club",
		category: "instructor",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "kids club",
		category: "specialist",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "gym",
		category: "master",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "swimming pool",
		category: "specialist",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "fight club",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "kids club",
		category: "instructor",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "gym",
		category: "specialist",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "swimming pool",
		category: "instructor",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "fight club",
		category: "specialist",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "kids club",
		category: "master",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "swimming pool",
		category: "master",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "gym",
		category: "specialist",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "kids club",
		category: "instructor",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "fight club",
		category: "master",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "gym",
		category: "instructor",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "swimming pool",
		category: "specialist",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "kids club",
		category: "master",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "fight club",
		category: "specialist",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];


//ВИВІД ІНФОРМАЦІЇ НА СТОРІНКУ ТА МОДАЛЬНЕ ВІКНО


document.addEventListener("DOMContentLoaded", function () {
	

	const trainerCardTemplate = document.getElementById("trainer-card");
	const trainersContainer = document.querySelector(".trainers-cards__container");
	const sortingButtons = document.querySelectorAll('.sorting__btn');
    const filters = document.querySelectorAll('.filters__input');

  
	function displayTrainers(trainers) {
	  trainersContainer.innerHTML = "";
  
	  trainers.forEach(function (trainer) {
		const trainerCard = trainerCardTemplate.content.cloneNode(true);
		const trainerName = trainerCard.querySelector(".trainer__name");
		const trainerImage = trainerCard.querySelector(".trainer__img");
		const showMoreButton = trainerCard.querySelector(".trainer__show-more");
  
		trainerName.textContent = `${trainer["first name"]} ${trainer["last name"]}`;
		trainerImage.setAttribute("src", trainer.photo);
		trainerImage.setAttribute("alt", `${trainer["first name"]} ${trainer["last name"]}`);
  
		showMoreButton.addEventListener("click", function () {
		  showModal(trainer);
		});
  
		trainersContainer.appendChild(trainerCard);
	  });
	}
  
	function showModal(trainer) {
	  const modalTemplate = document.querySelector('#modal-template').content.cloneNode(true);
	  document.body.appendChild(modalTemplate);
	  const modal = document.querySelector('.modal');
	  modal.querySelector('.modal__img').src = trainer.photo;
	  modal.querySelector('.modal__name').textContent = trainer["first name"] + " " + trainer["last name"];
	  modal.querySelector('.modal__point--category').textContent = "Категорія: " + trainer.category;
	  modal.querySelector('.modal__point--experience').textContent = "Досвід: " + trainer.experience;
	  modal.querySelector('.modal__point--specialization').textContent = "Напрям тренера: " + trainer.specialization;
	  modal.querySelector('.modal__text').textContent = trainer.description;
	  document.body.classList.add('modal-open');

	  modal.querySelector('.modal__close').addEventListener('click', function() {
		  modal.remove();
		  document.body.classList.remove('modal-open');
	  });
	}


	const sortingBlock = document.querySelector('.sorting');
	const sidebarBlock = document.querySelector('.sidebar');

	if (sortingBlock) {
		sortingBlock.removeAttribute('hidden');
	}

	if (sidebarBlock) {
		sidebarBlock.removeAttribute('hidden');
	}


   // Сортування
   function displaySortedTrainers(sortFunction) {
	trainersContainer.innerHTML = '';
	const sortedTrainers = [...DATA].sort(sortFunction);
		displayTrainers(sortedTrainers);
	}


	// Фільтрація за категорією
	function filterByCategory(filterData, category) {
		if (category === 'all') {
		return filterData;
		}
		
		return filterData.filter(trainer => trainer.category === category);
	}

	// Фільтрація за напрямом
	function filterBySpecialization(filterData, specialization) {
		if (specialization === 'all') {
		return filterData;
		}
		
		return filterData.filter(trainer => trainer.specialization === specialization);
	}

filters.forEach(filter => {
		filter.addEventListener('change', () => {
			const specialization = document.querySelector('.filters__input[name="direction"]:checked').value;
			const category = document.querySelector('.filters__input[name="category"]:checked').value;
		
			let filterData = DATA;
		
			filterData = filterByCategory(filterData, category);
			filterData = filterBySpecialization(filterData, specialization);
		
			
			displayTrainers(filterData);
		  
		});
		
	  });
	  

	// Додавання обробників подій для кнопок сортування
	sortingButtons.forEach(button => {
		
		button.addEventListener('click', () => {
			sortingButtons.forEach(btn => btn.classList.remove('sorting__btn--active'));
			button.classList.add('sorting__btn--active');

			if (button.textContent.includes('ПРІЗВИЩЕМ')) {
				displaySortedTrainers((a, b) => a['last name'].localeCompare(b['last name']));
			} else if (button.textContent.includes('ДОСВІДОМ')) {
				displaySortedTrainers((a, b) => parseInt(b.experience) - parseInt(a.experience));
			}
		});
	});

	
	displayTrainers(DATA);
});



