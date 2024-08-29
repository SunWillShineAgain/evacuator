document.addEventListener('DOMContentLoaded', () => {
	// SLIDER
	new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 10,
		grabCursor: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			// when window width is >= 480px
			// when window width is >= 640px
			767: {
				slidesPerView: 2,
				spaceBetween: 32,
			},
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.slider-next',
			prevEl: '.slider-prev',
		},
	})

	// TABS
	const listItems = document.querySelectorAll('.tabs__list li')
	const contentItems = document.querySelectorAll('.tabs__content-item')

	const makeInactive = arr => {
		arr.forEach(i => i.classList.remove('active'))
	}

	for (let i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener('click', e => {
			makeInactive(listItems)
			e.target.classList.add('active')
			makeInactive(contentItems)
			contentItems[i].classList.add('active')
		})
	}

	// SCROLL
	const topScroll = document.getElementById('to-top')

	window.addEventListener('scroll', () => {
		window.scrollY < 300
			? topScroll.classList.add('hidden')
			: topScroll.classList.remove('hidden')
	})

	topScroll.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	})
})
