// import People from "./modules/DataObject.js";

(() => {
	console.log("fired!");


	// set up your variable stack ->
	let mobileNav = document.querySelector("#button"),
		navPanel = document.querySelector("#burgerCon"),
		closeButton = document.querySelector(".close"),
		//video buttons
		goatVid = document.querySelector('.cultureVid'),
		play = document.querySelector(".play"),
		stop = document.querySelector(".stop"),
		rewind = document.querySelector(".rewind");

		// select ALL of the nav panel anchor tags (the a element)
		navLinks = navPanel.querySelectorAll('a');

		const sigils = document.querySelectorAll('.member'),
		lightBox = document.querySelector('.lightbox'),
		teamName = document.querySelector("#member-name"),
		bioInfo1 = document.querySelector(".bio-info1"),
		bioInfo2 = document.querySelector(".bio-info2"),
		imageContainer = document.querySelector("#l-Images img"),
		closeL = document.querySelector('.close-l');

		let targetImage = "";


		const bioData = [
		["IFE OBASA", `retaking the Iron Throne following the Battle of King's Landing`, `retaking the Iron Throne following the Battle of King's Landing`],

		["DERRIK CAMPBELL", `retaking the Iron Throne following the Battle of King's Landing`, `retaking the Iron Throne following the Battle of King's Landing`],

		["DANA MARIN-GARCIA", `retaking the Iron Throne following the Battle of King's Landing`, `retaking the Iron Throne following the Battle of King's Landing`],

		["EDI GUTIERREZ", `retaking the Iron Throne following the Battle of King's Landing`, `retaking the Iron Throne following the Battle of King's Landing`],
      ];



	function toggleNav(e) {
	  // e is the event object, by default, anchor tags try to navigate somewhere (this is built-in functionality)
	  // we don't want that to happen to prevent the default behaviour and with your
	  e.preventDefault();

	  // console.log is just testing purposes... remove this when you have things working
	  console.log('should show nav dropdown');

	  // this should only
	  if (this.nodeName == "A") {
		// //we clicked on an anchor tag, o do some navigation
		// window.scrollTo ({
		//   // we can ask all the window to scroll to an element on the page => smoothscroll effect
		//   top: this.offsetTop,
		//   behavior: 'smooth'
		// })
	  }

	  // make the mobile nav show up when you click on the new link at the top right
	  // and make it go away again in a second click (so - toggle)
	  navPanel.classList.add("show-mobile-nav");
	}

	function close(event) {
		event.preventDefault();
		console.log('should show nav dropdown close');
		// make the lightbox close
		navPanel.classList.remove("show-mobile-nav");
	  }

	  function popLightBox() {
		// make the lightbox show up
		lightBox.classList.add('show-lightbox');

		imageContainer.src = "images/" + People.avatar;
	  }


	  function closeLightBox(event) {
		event.preventDefault();
		// make the lightbox close
		lightBox.classList.remove('show-lightbox');
	  }

	  function animateBanners() {
		let offset = 600,
		multiplier = this.dataset.offset;

		teamName.textContent = bioData[multiplier][0];
		bioInfo1.textContent = bioData[multiplier][1] ;
		bioInfo2.textContent = bioData[multiplier][2] ;
	  }
 //video buttons
		function playVid(){
	  	goatVid.play();
			}

			function stopVid(){
	  	goatVid.pause();
			}

			function rewindVid(){
	  	goatVid.load();
			}

	  // these are the triggers that fire off our functionality (when user clicks on something)
	mobileNav.addEventListener('click', toggleNav);
	closeButton.addEventListener("click", close);

	  sigils.forEach(sigil => sigil.addEventListener("click", popLightBox)),
	  sigils.forEach(sigil => sigil.addEventListener("click", animateBanners)),
	  closeL.addEventListener("click", closeLightBox);

		//video execute
		play.addEventListener("click", playVid);
		stop.addEventListener("click", stopVid);
		rewind.addEventListener("click", rewindVid);

  })();
