function information(){
    //getting the value of the year
    var year=document.getElementById("yearInput").value; 

    //getting the value of the year
    var month=document.getElementById("monthInput").value; 

    //getting the value of the year
    var day=document.getElementById("dayInput").value; 

    //if male is checked true is returned and false if not
    var male=document.getElementById("maleInput").checked;

    //if female is checked true is returned and false if not
    var female=document.getElementById("femaleInput").checked;

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

    //VALIDATION OF THE FORM


    //ensures user enters a date and validates date entered for months with 31 days
    //if (day <= 0 || day > 31) { 
		//document.getElementById("error-text").innerText = "Please enter a valid date!"//replaces the please enter valid dates and shows the error message
    //}

     //ensures user selects a month
     if (month === "------") {
		document.getElementById("error-text").innerText = "Please select a month!" //shows error message by replacing please enter valid dates
    }

    //ensures user enters a year and the year entered is valid and doesn't exceed 2020
    else if (year <= 0 || year > 2020) { 
        document.getElementById("error").innerText = "Please enter a valid year!" // replacing the please enter valid dates with the error text
    }
    else if (male === true) { //styling of results for a male user
        document.getElementById("displayName").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!"
    }
    else if (female === true) { //styling results of a female user
        document.getElementById("displayName").innerHTML = "You were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!"
    }        



}

