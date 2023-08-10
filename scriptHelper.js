// Write your helper functions here!
require('isomorphic-fetch');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuel = document.getElementById("fuelStatus");
    let cargo = document.getElementById("cargoStatus");
   
      if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
      } else if  (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Enter valid information for each field.");
      } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML= `Pilot: ${pilot} is ready for launch.`
        copilotStatus.innerHTML = `Copilot: ${copilot} is ready for launch.`
        let launchStatus = document.getElementById("launchStatus");
//if the fuel level is less than 10000 and cargo level is less than or equal to 10000, check fuel level and cargo level at the same time
//update variable names
//change inner html of the fuel, cargo, and launch status simultaneously
//check if fuel bad, cargo good; cargo good, fuel bad; both bad; both good
      if (fuelLevel < 10000 && cargoLevel.value > 10000) {
        launchStatus.innerHTML('Shuttle not ready for launch.')
        //change color to red
        launchStatus.style.backgroundColor = red
      } else if (fuelLevel < 10000 && cargoLevel.value < 10000) {
        launchStatus.innerHTML('Shuttle not ready for launch.')
        //change color to red
        launchStatus.style.backgroundColor = red
      } else if (fuelLevel > 10000 && cargoLevel.value < 10000) {
        launchStatus.innerHTML('Shuttle not ready for launch.')
        //change color to shade of red
        launchStatus.style.backgroundColor = rgb(199, 37, 78)
      } else {
          //change launchstatus to green
          launchStatus.style.backgroundColor = rgb(65, 159, 106)
          //change text to shuttle is ready for launch
          launchStatus.innerHTML('Shuttle is ready for launch.')
        }
   }
  };
 

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return response.json(planetsReturned);
}

function pickPlanet(planets) {
  let numberOfPlanets = planetsReturn.length
  let planet = myFetch(planetsReturned.name[Math.Random*numberOfPlanets])

  return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
