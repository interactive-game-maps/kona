var chess_games_layer = new InteractiveLayer('chess_games', chess_games, {
    name: "Chess games",
    create_checkbox: true,
    create_feature_popup: true,
    sidebar_icon_html: '<i class="fas fa-chess-knight"></i>',
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-chess-knight'),
            riseOnHover: true
        });
    }
});

interactive_layers.set(chess_games_layer.id, chess_games_layer);
