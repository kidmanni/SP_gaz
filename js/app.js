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
		transition: 'translate 0.1s ease'
	});
}
function handleMenu(){
	$(".menu-icon").click(function(){
		$(".menu-nav").fadeToggle(500)
		$(".menu-nav").toggleClass("hidden")
	})
}
function main(){
	handleMenu()
	handleParallax()
}

// =================================================
// * INIT
// =================================================
document.addEventListener("DOMContentLoaded", main)

