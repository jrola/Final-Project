Final-Project
=============

The purpose of this project is to have a user agree to the terms and conditions before they can continue.  The user must click on the links to view a document.  They must also agree to the terms and condition of the scroll box agreement. Once the user agrees they can click continue and a confirmation message should appear.
Requirements:
1.	The user is required to click on both links.  Keep track if the links have been clicked on or not.
2.	Before the user can agree to one of the radio buttons they must scroll down the div box.
a.	You can use this logic to help you know if the scroll box has been scrolled to the bottom.
b.	var objDiv = document.getElementById("agreeScroll");
c.	 if ( objDiv.scrollTop == (objDiv.scrollHeight-objDiv.offsetHeight) )
d.	You can use the onscroll (scroll) event to determine if it has been fully scrolled.
3.	Once the user has scrolled down the agreement, un-disable the radio buttons.
4.	Once a radio selection has been made the continue button should show a message that the user is clear to continue.
a.	if( document.getElementById(“agree”).checked )


 http://jrola.github.io/Final-Project
