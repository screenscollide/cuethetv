/** -----------------------------------------------------------
* Global Helper Functions
* -----------------------------------------------------------
* Description: 
* - ---------------------------------------------------------
* Created by: mail@chrisaiv.com
* Modified by: 
* Date Modified: Jan 20, 2013
* - ---------------------------------------------------------
* Copyright 2013
* - ---------------------------------------------------------
*
*/

function includeFooter( date ){
	var now = date;
	var testPatterns = [
		'yyyy','yy','MMMM','MMM','MM','M','dd','d','EEEE','EEE','a',
		'HH','H','hh','h','mm','m','ss','s','S',
		'EEEE MMMM, d yyyy hh:mm:ss.S a',
		'M/d/yy HH:mm'
	];
	$("footer span").append( $.formatDate( now, 'yyyy' ) );	
}

includeFooter( new Date() );

//Navigation Highlighter
//http://stackoverflow.com/questions/303956/jquery-select-a-which-href-contains-some-string
function setActiveTab(){
	console.log( window.location.pathname );
	switch( window.location.pathname ){
		case "/tv":
		//$('ul.nav a[href$="' + window.location.pathname + '"]').parent().addClass("active");
		$('ul.nav a[href$="/"]').parent().addClass("active");
		break;
		case "/remote":
		//$('ul.nav a[href$="' + window.location.pathname + '"]').parent().addClass("active");
		$('ul.nav a[href$="/"]').parent().addClass("active");
		break;
		case "/":
		//$('ul.nav a[href$="' + window.location.pathname + '"]').parent().addClass("active");
		$('ul.nav a[href$="/tv"]').parent().addClass("active");
		break;
		default:
	}
}
setActiveTab();
