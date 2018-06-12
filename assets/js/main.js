var filterItems = document.getElementsByClassName("filter__container-block-item"),
		themesItem = document.getElementsByClassName("aside__item"),
		filterCounter = 0;

// Sidebar animation

var dropdown = document.querySelector('.dropdown-button'),
sidebar = document.querySelector('.sidebar');

dropdown.addEventListener('click', function () {
	dropdown.classList.toggle('is-active');
	sidebar.classList.toggle('is-active');
});

// Svg notification link animation 

var notification = document.getElementsByClassName("container__link");

for(let i = 0; i < notification.length; i++) {
	
	notification[i].addEventListener('click', function() {
		notification[i].classList.toggle('is-active');
	});
	
}

// Left bar toggle

var leftBar = document.querySelector('.header__left-bar'),
themesBlock = document.querySelector('.aside');

leftBar.addEventListener('click', function () {
	themesBlock.classList.toggle('is-active');
});

// Tab toggle (middle content)
// Themes active state

for(let i = 0; i < themesItem.length; i++) {
	
	themesItem[i].addEventListener('click', function() {
		themesItem[i].classList.toggle('is-active');
		
	});
	
}

// Dropdown user info

var acc = document.querySelector('.header__user-account'),
		accInfo = document.querySelector('.user-account-block');

acc.addEventListener('click', function () {
	accInfo.classList.toggle('is-active');
});

// Add checkbox to filter

filterItems[0].addEventListener('click', function () {
	filterCounter++

	if (filterCounter % 2) {

		for (let i = 0; i < filterItems.length; i++) {
			filterItems[i].classList.add('is-active');
		}

	} else {
		for (let i = 0; i < filterItems.length; i++) {
			filterItems[i].classList.remove('is-active');
		}

	}

});

// Add check to every filter

for (let i = 1; i < filterItems.length; i++) {

	filterItems[i].addEventListener('click', function () {
		filterItems[i].classList.toggle('is-active');
		filterItems[0].classList.remove('is-active');
	});

}
