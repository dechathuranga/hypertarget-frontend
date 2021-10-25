


//////On Click funtion
document.onclick= function(event) {
    // Compensate for IE<9's non-standard event model
    //
	
	var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
var myScript = scripts[index];
var queryString = myScript.src.replace(/^[^\?]+\??/,'');
	
    if (event===undefined) event= window.event;
    var target= 'target' in event? event.target : event.srcElement;
	var target1= 'target1' in event? event.target1 : event.path;

	console.log(" ** - ",event)
	console.log(target1[0].innerHTML)
	console.log(target1[0].innerText)

	var innerTextVal = "";
	if(!target1[0].innerText){
		innerTextVal = target.value;
	}else{
		innerTextVal = target1[0].innerText;
	}
	
	const Http = new XMLHttpRequest();
	const url='http://localhost:3000/api/script-data';
	Http.open("POST", url, true);
	Http.setRequestHeader("Content-Type", "application/json");
	Http.setRequestHeader("Accept", "application/json, text/plain, */*");
	
	let data = {
		url:window.location.href,
		scriptToken:"adaef1245",
		tagName:target.tagName,
		value:target.value,
		type:event.type,
		alt:event.altKey,
		name:target.name,
		elementId:target.id,
		eventType:event.srcElement.type,
		innerText:innerTextVal,
		scriptToken:queryString
		
		
		};
	// Http.send(JSON.stringify(data));
	

	Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
	}
};