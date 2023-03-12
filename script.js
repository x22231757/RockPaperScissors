function check(id_name){
	//Get the input from user
	var userGesture = String(document.getElementById(id_name).value);
	
	//Generate a choose a random gesture from the 3 available by computer:
	var computerOptions = ['rock','paper','scissors'];
	var computerChoiceNumber = Math.floor(Math.random()*3);
	var computerChoice = String(computerOptions[computerChoiceNumber]);
	
	//Determine who won:
	if(userGesture === "Select Rock"){
		if(computerChoice === 'rock'){
			document.getElementById("selection").innerHTML = "You " + userGesture + "! Computer selected "+  computerChoice + " : draw!"
		}else if(computerChoice === 'paper'){
			document.getElementById("selection").innerHTML = "You " + userGesture +"! Computer selected " +  computerChoice + " : you lost!"
		}else{
			document.getElementById("selection").innerHTML = "You " + userGesture + "! Computer selected " +  computerChoice + " : you won!"
		}
		
		
	}else if(userGesture === "Select Paper"){
		if(computerChoice === 'rock'){
			document.getElementById("selection").innerHTML = "You " + userGesture + "Computer selected rock: you won!!"
		}else if(computerChoice === 'paper'){
			document.getElementById("selection").innerHTML = "You " + userGesture + "Computer selected paper: draw!"
		}else{
			document.getElementById("selection").innerHTML = "You " + userGesture + "Computer selected scissors: you lost!"
		}
		
		
	}else{// user selects scissors
		if(computerChoice === 'rock'){
			document.getElementById("selection").innerHTML = "You " + userGesture + "Computer selected rock: you lost!"
		}else if(computerChoice === 'paper'){
			document.getElementById("selection").innerHTML = "You " + userGesture + "Computer selected paper: you won!"
		}else{
			document.getElementById("selection").innerHTML = "You " + userGesture + "Computer selected scissors: draw!"
		}
		
		
	}
	
	
}

function hide(){
	document.getElementById("selection").style.visibility = "hidden";
}

