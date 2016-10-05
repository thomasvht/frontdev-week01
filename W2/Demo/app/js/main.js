/**
* @Author: thomasvanhoutte
* @Date:   2016-10-05T11:35:30+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-05T16:24:30+02:00
*/



(function(){
    "use strict";


    var searchButton, filter, imagesList;

    function renderImages(images){
        // <li></li>
        var bobTheHTMLBuilder = "",
            l = images.photos.photo.length;

        for(var i = 0 ; i < l ; i++){
            var o = images.photos.photo[i];
            bobTheHTMLBuilder += '<li class="media">';
            bobTheHTMLBuilder += '<img src="'+parseUrl(o)+'" class="media__element" />';
            bobTheHTMLBuilder += '</li>';
        }

        imagesList.innerHTML = bobTheHTMLBuilder;
    }

    function parseUrl(flickrObject){
        return "https://farm"+flickrObject.farm+".staticflickr.com/"+flickrObject.server+"/"+flickrObject.id+"_"+flickrObject.secret+".jpg";
    }

    function handleError(error){
        console.error(error);
    }
    function loadImages(){
        var searchText = filter.value;
        var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dd7adaf769d707a0230f663c608827d0&tags="+searchText+"&format=json&nojsoncallback=1";

        $.UI.getData(url).then(renderImages, handleError);
    }


    function addEventListeners(){
        searchButton.addEventListener("click", loadImages);
    }

    function init(){
        searchButton = document.getElementById("searchButton");
        filter = document.getElementById("filter");
        imagesList = document.querySelector(".image__list");

        addEventListeners();
    }
    init();


})();
