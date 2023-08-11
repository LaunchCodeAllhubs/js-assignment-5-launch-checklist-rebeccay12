
window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let info = pickPlanet(listedPlanets);
       addDestinationInfo (document, info.name, info.diameter, info.star, info.distance, info.moons, info.image);
   })

let form = document.getElementById("launchForm")
   
form.addEventListener("submit", function (event) {
    event.preventDefault();
    let list = document.getElementById("faultyItems");
    let pilotName = document.querySelector("input[name=pilotName]");
    let pilot = pilotName.value
    let copilotName = document.querySelector("input[name=copilotName");
    let copilot = copilotName.value
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let fuel = Number(fuelLevel.value)
    let cargoMass = document.querySelector("input[name=cargoMass");
    let cargo = Number(cargoMass.value)

    formSubmission(document, list, pilot, copilot, fuel, cargo);
})


});