function handleParallax() {
	$(".parallax-container").paroller({
		factor: 0, // - to +
		factorXs: 0, // - to +
		factorSm: 0, // - to +
		factorMd: 0, // - to +
		factorLg: 0, // - to +
		factorXl: 0, // - to +
		type: 'background', // foreground
		direction: 'vertical', // horizontal
		transition: 'translate 0.01s ease'
	});
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
function main() {
	handleMenu()
	handleParallax()
}

// =================================================
// * INIT
// =================================================
document.addEventListener("DOMContentLoaded", main)

