menu.onclick = function myfunction()
{
	var x = document.getElementById('mytopnav');

	if(x.className === "topnav"){
		x.className += " responsive";
	} else{
		x.className = "topnav";
	}
}



var client = ["1"];
function validate () {
var name1 = document.forms["mewform"] ["name"].value;
var Email1 = document.forms["mewform"] ["Email"].value;
var message1 = document.forms["mewform"] ["text"].value;

if (name1 =="") {
	alert("Укажите ваше имя");
	return false;
}else if (Email1 =="") {
alert("Укажите вашу почту");
	return false;
} else if (message1 =="") {
	alert("Поле сообщение не может быть пустым");
	

return false;
   
}

function Clientcontact(name, Email, message) {
		this.name = name;
		this.Email = Email;
		this.message = message;
} 
 client.push = new Clientcontact(name1, Email1, message1);

}


	if (client.length >2) {
		console.log("Имя:" + client[1].name);
   console.log("Почта:" + client[1].Email);
   console.log("Сообщение:" + client[1].message);
   console.log(client);
} 

   
