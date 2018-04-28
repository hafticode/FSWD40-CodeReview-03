
 function calculateInsurance() {
    var a = parseInt(document.getElementById("age").value, 10);
    var c = document.getElementById("country").value;
    var h = parseInt(document.getElementById("horsepower").value, 10);
    var n = document.getElementById("name").value;

    var insurance=calculateInsurancePerCountry(h, a, c);

    document.getElementById("result").innerHTML = n + ", your insurance is " + insurance;
 }

 function calculateInsurancePerCountry(horse_power, age, country)  {
 	var insurance=0;
 	 if (country = "Austria") {
         insurance = horse_power * 100 / age + 50;
     } else if (country = "Germany") {
         insurance = horse_power * 120 / + 100;
     } else {
         insurance = horse_power * 150 / (age+2) + 150;
     }
     return insurance;
 }

 function loadTeammembers() {
 	var teamMemberListe= JSON.parse(teamMembers);
	for(var i = 0; i < teamMemberListe.length; i++) {
	    var teamMember = teamMemberListe[i];
	    var caption_id = i + "_caption";
	    var img_id = i + "_img";
	    document.getElementById(img_id).setAttribute("src", teamMember.image);
	    document.getElementById(caption_id).innerHTML = teamMember.name + "<br>" + teamMember.email;
	} 	
 }

 //{"name":"Fran", "email":"fran@index.com","image":"images/person1.png"}