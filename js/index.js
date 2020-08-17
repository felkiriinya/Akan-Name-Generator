function inputInfo(){
    //getting the value of the year
    var year=document.getElementById("yearInput").value; 

    //getting the value of the year
    var month=document.getElementById("monthInput").value; 

    //getting the value of the year
    var day=document.getElementById("dayInput").value; 

    //if male is checked true is returned and false if not
    var male=document.getElementById("maleInput").checked;

    //if female is checked true is returned and false if not
    var male=document.getElementById("femaleInput").checked;

    //array for days of the week
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
    
    //array  for male Akan names
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; 
    
    //array for female Akan names
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; 

    //getting the birthday in dd/mm/yy
    var birthDate = new Date(day+ '/' +month + '/' + year);

    //calculating the day of the week in 0 1 2 3 4 5 6
	var dayOfTheWeek = birthDate.getDay(); 
}
