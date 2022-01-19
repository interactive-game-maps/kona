var fire_places_layer = new InteractiveLayer('fire_places', fire_places, {
    name: "Fire places",
    create_checkbox: true,
    create_feature_popup: true,
    is_default: true,
    sidebar_icon_html: '<i class="fas fa-fire"></i>',
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-fire'),
            riseOnHover: true
        });
    }
});

interactive_layers.set(fire_places_layer.id, fire_places_layer);
