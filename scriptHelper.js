// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  let missionDestination = document.getElementById("missionTarget")
  missionDestination.innerHTML = `<h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter}</li>
      <li>Star: ${star}</li>
      <li>Distance from Earth: ${distance} </li>
      <li>Number of Moons: ${moons} </li>
  </ol>
  <img src="${imageUrl}">`
  
  
  
  
  
  
  // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}



function validateInput(testInput) {
  if (testInput === "") {
    return "Empty"
  } else if (isNaN(Number(testInput))) {
    return "Not a Number"
  } else {
    return "Is a Number"
  } 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");
   
      if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required!");
      } else if  (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Enter valid information for each field.");
      } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch.`
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`
        let launchStatus = document.getElementById("launchStatus");
//if the fuel level is less than 10000 and cargo level is less than or equal to 10000, check fuel level and cargo level at the same time
//update variable names
//change inner html of the fuel, cargo, and launch status simultaneously
//check if fuel bad, cargo good; cargo good, fuel bad; both bad; both good
      if (fuelLevel < 10000 && cargoMass <= 10000) {
        //update both fuel and cargo won't work
        console.log('fuel level is: ' + fuelLevel + ' and is type ' + typeof fuelLevel)
        console.log('cargo level is: ' + cargoMass + ' and is type ' + typeof cargoMass)
        fuel.innerHTML = ('Fuel level too low for launch.')
        cargo.innerHTML = ('Cargo mass low enough for launch.')
        //change color to red
        launchStatus.style.color = "red"
        launchStatus.innerHTML = "Shuttle not ready for launch."
      } if (cargoMass > 10000 && fuelLevel >= 10000) {
        console.log('fuel level is: ' + fuelLevel + ' and is type ' + typeof fuelLevel)
        console.log('cargo level is: ' + cargoMass + ' and is type ' + typeof cargoMass)
        cargo.innerHTML = ('Cargo mass too high for launch.')
        fuel.innerHTML = ('Fuel level high enough for launch.')
        launchStatus.style.color = "rgb(199, 37, 78)"
        launchStatus.innerHTML = "Shuttle not ready for launch."
      } if (fuelLevel < 10000 && cargoMass > 10000) {
        console.log('fuel level is: ' + fuelLevel + ' and is type ' + typeof fuelLevel)
        console.log('cargo level is: ' + cargoMass + ' and is type ' + typeof cargoMass)
        fuel.innerHTML = ('Fuel level too low for launch.')
        cargo.innerHTML = ('Cargo mass too high for launch.')
        launchStatus.style.color = "red"
        launchStatus.innerHTML = "Shuttle not ready for launch."
      }if (fuelLevel >= 10000 && cargoMass <= 10000) {
        console.log('fuel level is: ' + fuelLevel + ' and is type ' + typeof fuelLevel)
        console.log('cargo level is: ' + cargoMass + ' and is type ' + typeof cargoMass)
          //change launchstatus to green
          fuel.innerHTML = ('Fuel level high enough for launch.')
          cargo.innerHTML = ('Cargo mass low enough for launch.')
          launchStatus.style.color = "rgb(65, 159, 106)"
          launchStatus.innerHTML = "Shuttle is ready for launch."
          //keep text to shuttle is ready for launch, don't need to change in innerHTML
        // } else {
        //   console.log("error")
        //   console.log(fuelLevel)
        //   console.log(cargoMass)
        }
   }
  };
 

async function myFetch() {

    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
  });


    return planetsReturned;
}

function pickPlanet(planets) {
  
  let planet = Math.floor(Math.random() * planets.length)

  return planets[planet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
