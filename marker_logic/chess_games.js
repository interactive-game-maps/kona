function addChessGames(map) {
    map.addInteractiveLayer('chess_games', chess_games, {
        name: "Chess games",
        create_checkbox: true,
        create_feature_popup: true,
        sidebar_icon_html: '<i class="fas fa-chess-knight"></i>',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-chess-knight'),
                riseOnHover: true
            });
        }
    });
}
