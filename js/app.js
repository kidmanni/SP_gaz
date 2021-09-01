function handleParallax() {
	// $(".parallax-container").paroller({
	// 	factor: 0, // - to +
	// 	factorXs: 0, // - to +
	// 	factorSm: 0, // - to +
	// 	factorMd: 0, // - to +
	// 	factorLg: 0, // - to +
	// 	factorXl: 0, // - to +
	// 	type: 'background', // foreground
	// 	direction: 'vertical', // horizontal
	// 	transition: 'translate 0.01s ease'
	// });
	$(".parallax-container").paroller()
}
function handleMenu() {
	$(".menu-icon").click(function () {
		let $this = $(this)
		if ($(".menu-nav").hasClass("hidden")) {
			let closeIcon = $this.attr("src").replace(/menu/gi, "Menu_close")
			$this.attr("src", closeIcon)
		} else {
			let menuIcon = $this.attr("src").replace(/Menu_close/gi, "Menu")
			$this.attr("src", menuIcon)
		}
		$(".menu-nav").fadeToggle(500)
		$(".menu-nav").toggleClass("hidden")
	})
}
function elementInViewport(el) {
	var observer = new IntersectionObserver(function (entries) {
		// isIntersecting is true when element and viewport are overlapping
		// isIntersecting is false when element and viewport don't overlap
		if (entries[0].isIntersecting === true) {
			console.log('Element has just become visible in screen');
			handleParallax()
		}
	}, { threshold: [0] });

	observer.observe(document.querySelector(el));
}
function main() {
	handleMenu()
	elementInViewport(".parallax-container img")
}

// =================================================
// * INIT
// =================================================
document.addEventListener("DOMContentLoaded", main)

