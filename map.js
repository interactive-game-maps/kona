var interactive_map = new InteractiveMap('map', {
    max_good_zoom: 5,
    max_map_zoom: 7,
    website_source: 'https://github.com/interactive-game-maps/kona',
    website_subdir: 'kona'
});

interactive_map.addTileLayer('Ingame map', {
    minNativeZoom: 2,
    maxNativeZoom: 5,
    attribution: '<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=887075975">Map</a> from <a href="https://steamcommunity.com/profiles/76561197998056243">rogermorse</a>'
});

interactive_map.addInteractiveLayer(getDocuments());
interactive_map.addInteractiveLayer(getFirePlaces());
interactive_map.addInteractiveLayer(getPictures());
interactive_map.addInteractiveLayer(getTalismans());
interactive_map.addInteractiveLayer(getChessGames());

interactive_map.finalize();
