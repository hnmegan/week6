(() => {
// stub 
	console.log('fired'); 

	let mainHeadline = document.querySelector(".main-headline"),
		swapTextButton = document.querySelector(".switch-type"),
		allImages = document.querySelectorAll("#icons img");


	function logMyId() {
		console.log(this.id);

	}

	function swapText(){
		mainHeadline.textContent = "I am a princess. All girls are. Even if they dress in rags, even if they think they aren't pretty, or smart, or young. They are still princesses. You are a princess!";
		mainHeadline.classList.toggle("selected");

	}

	function logTheSVG() {
		console.log(this.previousElementSibling.id);
	}

	swapTextButton.addEventListener("click", swapText);


	allImages.forEach(item => {
		item.addEventListener("click", logMyId);
	});


})();