var chess_games_group_name = 'Chess Games';
var chess_games_group_id = 'chess_games';
var chess_games_create_checkbox = true;

var chess_games_list = createSidebarTab(chess_games_group_id, chess_games_group_name, '<i class="fas fa-chess-knight"></i>');

// Create marker group
var chess_games_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

L.geoJSON(chess_games, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-chess-knight'),
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: chess_games_group,
            list: chess_games_list,
            list_id: chess_games_group_id,
            create_checkbox: chess_games_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: chess_games_group_id
        });
    }
}).addTo(chess_games_group);
marker.get(chess_games_group_id).set('group', chess_games_group);
marker.get(chess_games_group_id).set('name', chess_games_group_name);

if (chess_games_create_checkbox) {
    setColumnCount(marker.get(chess_games_group_id), chess_games_list);
}
