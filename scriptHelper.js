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
    window.addEventListener("load", function () {
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
          let pilotName = document.querySelector("input[name=pilotName]");
          let copilotName = document.querySelector("input[name=copilotName");
          let fuelLevel = document.querySelector("input[name=fuelLevel");
          let cargoMass = document.querySelector("input[name=cargoMass");
           if (validateInput(pilotName.value) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
           }
           if (validateInput(copilotName.value) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
           }
           
           if (validateInput(fuelLevel.value) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
           }
           if (validateInput(cargoMass.value) === "Empty") {
            alert("All fields are required!");
            event.preventDefault();
           }
           if (validateInput(pilotName.value) === "Is a Number") {
            alert("Pilot Name must be a name.")
            event.preventDefault()
           }
           if (validateInput(copilotName.value) === "Is a Number") {
            alert("Copilot Name must be a name.")
            event.preventDefault()
           }
           if (validateInput(fuelLevel.value) === "Not a Number") {
            alert("Fuel level input must be a number.");
            event.preventDefault();
           }
           if (validateInput(cargoMass.value) === "Not a Number") {
            alert("Cargo Mass input must be a number.");
            event.preventDefault();
           }
        const faultyItems = document.getElementById("faultyItems")
        console.log("AHHH")
        console.log(faultyItems)
        const liPilotName = faultyItems.getElementsByTagName("li")[0];
        liPilotName.textContent = pilotName.value
        const liCopilotName = faultyItems.getElementsByTagName("li")[1];
        liCopilotName.textContent = copilotName.value
        console.log(fuelLevel.value)
        document.getElementById("faultyItems").style.visibility = "visible";
        
        
        if (fuelLevel.value < 10000) {
          //fuel status- not enough fuel for journey
          document.getElementById("faultyItems").style.visibility = "visible";
          //update faultyItems to say shuttle not ready for launch
          document.getElementById("launchStatus")('Shuttle not ready for launch.')
          //change color to red
          launchStatusElement.style.backgroundColor = red
        }
        else if (fuelLevel.value > 10000) {
          //fuel status- too much mass for the shuttle to take off
          faultyItems.style.visibility = "visible";
          //change text to "Shuttle not ready for launch."
          document.getElementById("launchStatus")('Shuttle not ready for launch.')
         //change color to specific shade of red
          launchStatusElement.style.backgroundColor = rgb(199, 37, 78)
          console.log(faultyItems)
        }
        else {
          //change launchstatus to green
          launchStatusElement.style.backgroundColor = rgb(65, 159, 106)
          //change text to shuttle is ready for launch
          document.getElementById("launchStatus")('Shuttle is ready for launch.')
        }
     });
   }
  )};
 

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
    return response.json("https://handlers.education.launchcode.org/static/planets.json");
}

function pickPlanet(planets) {
  let planet = myFetch(planetsReturned.name[Math.Random*planetsReturned.length])

  return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
