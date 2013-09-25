	//Jack Rola
	// Final Project
	
	var document1;		// set varible for document 1 link
	var document2; 		// set varible for document 2 link
		$(document).ready(function ()  // jquery function to disable the continue button
	{
		$("#submitAgreement").attr("disabled", true);  // disable continue button.
		scrollCheck();			// function call for scroll check
		continueButton();		// function call for continue button
		
		$("#agreeLink1").click(function(e) {	// if link 1 is clicked
			document1 = true; 					// link 1 is set to true.
			
			console.log("document 1 clicked"); 	// prints to console that link one is clicked
		});

		$("#agreeLink2").click(function(e){		// if link 2 is clicked
			document2 = true; 					// link 2 is set to true
			
			console.log("document 2 clicked2"); 	// prints to console that link two is clicked
		});
			scrollCheck();				// function call of scroll event
	});
	  
	var objDiv = document.getElementById("agreeScroll");		// variable set to the agreeScroll div
	function scrollCheck() {									// function that checks if both links are clicked
		if(document1 == true && document2 == true){				// both links have to be clicked to pass the test
		if (objDiv.scrollTop == (objDiv.scrollHeight-objDiv.offsetHeight)) { 	// if scroll bar hit the bottom
			console.log("scrolled through agreement"); 							// prints to console that scroll bar has been scrolled to the bottom
			$("#agree").attr("disabled", false); 								// change radio buttons to active
			$("#notagree").attr("disabled", false); 
		}
	}else{
		objDiv.scrollTop = 0;				// if documents has not been clicked scrol bar is locked at the top
	}
}
	objDiv.addEventListener("scroll", scrollCheck);		// checks to see if scroll bar has been scrolled to the bottom
	
	
	var agreeRadio = document.getElementById("agree");		// variable set to agree div
	var notagreeRadio = document.getElementById("notagree");	// variable set to notagree div
	
	function continueButton()		// continue button function
	{
		if (agreeRadio.checked)		// if one of the radio buttons are clicked then the continue button is active
		{
			alert("You have agreed to the terms and conditions\n\n\n Press OK then Continue");		// message box displays when radio button is clicked.
			$("#submitAgreement").attr("disabled", false);		// changes continue button from disabled to active
			console.log("agree selected"); 						// prints to console that radio button agree has been checked.
		}
		else if(notagreeRadio.checked)				// if not agree radio button is checked
		{
			alert("You have not agreed to the terms and conditions\n\n\n Press OK then Continue");  // message box displays when radio button is clicked.
			$("#submitAgreement").attr("disabled", false); 											// changes continue button from disabled to active
			console.log("not agree selected"); 														// prints to console that radio button notagree has been checked.		
		}
			 document.getElementById('submitAgreement').onclick = function() 						// if the continue button is pressed a conformation page will display
			{
				var ContButton = document.getElementById("submitAgreement");			// variable set to submitAgreement div.
					if(ContButton.click)												// if continue button is clicked then display a conformation page.
				{
					var confirmation = document.getElementById('confirmation');					
					confirmation.style.display = "block";
					var section_1 = document.getElementById('section1');				// clear out sections 
					section_1.style.display = "none";	
					var section_2 = document.getElementById('section2');
					section_2.style.display = "none";	
				}
			}
	
	}
	
	agreeRadio.addEventListener("click", continueButton);			// check if radio button is clicked 
	notagreeRadio.addEventListener("click", continueButton);
	
	
