// Create list
var chess_games_list = document.createElement('ul');
chess_games_list.className = 'collectibles_list';

// Add list to sidebar
var chess_games_group_name = 'Chess Games';
sidebar.addPanel({
    id: 'chess_games',
    tab: '<i class="fas fa-chess-knight"></i>',
    title: chess_games_group_name,
    pane: '<p></p>' // placeholder to get a proper pane
});
document.getElementById('chess_games').appendChild(chess_games_list);

// Create marekr group
var chess_games_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var chess_games_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/chess_games.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(chess_games, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: new chess_games_icon,
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        onEachFeature(feature, layer, {
            layer_group: chess_games_group,
            list: chess_games_list,
            list_name: "chess_games",
            create_checkbox: true
        });
    }
}).addTo(chess_games_group);
marker.get('chess_games').set('group', chess_games_group);
marker.get('chess_games').set('name', chess_games_group_name);
