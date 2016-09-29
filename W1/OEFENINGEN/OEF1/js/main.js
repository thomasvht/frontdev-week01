/**
* @Author: thomasvanhoutte
* @Date:   2016-09-21T05:29:04+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-09-29T10:02:46+02:00
*/
(function (){
  var addProfileButton;
  var profileSelect;
  var profile;

  function addProfile(){
    var newProfile = document.createElement("li");
    newProfile.classList.add("profileList__profile");

    var profileTitle = document.createElement("span");
    var removeButton = document.createElement("button");
    removeButton.classList.add("btn");
    var removeSpan = document.createElement("span");
    removeSpan.classList.add("btn__icon");
    profile = profileSelector.selectedIndex;
    /*if(profile == 0){
      profile = "Developer";
    }
    else if(profile == 1){
      profile = "Designer";
    }
    else if(profile == 2){
      profile = "Analyst";
    }*/
    removeSpan.innerHTML = profileSelect.value + " x";

    profileSelector.remove(profile);

    removeButton.appendChild(removeSpan);
    newProfile.appendChild(profileTitle);
    newProfile.appendChild(removeButton);

    document.getElementById("profileList").appendChild(newProfile);
  }

  function initializeElements(){
    addProfileButton = document.getElementById("addProfileButton");
    profileSelect = document.getElementById("profileSelector");
  }

  function addEventsToElements(){
    addProfileButton.addEventListener("click", addProfile);
  }

  (function init(){
    initializeElements();
    addEventsToElements();
  })();
})();
