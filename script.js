

// import { formSubmission } from "./scriptHelper";
// require("scriptHelper")

const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// Write your JavaScript code here!
formSubmission(document)

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
       let info = pickPlanet(planets.name);
       addDestinationInfo (info);
   })
   
});