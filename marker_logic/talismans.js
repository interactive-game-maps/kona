var talismans_layer = new InteractiveLayer('talismans', talismans, {
    name: "Talismans",
    create_checkbox: true,
    create_feature_popup: true,
    sidebar_icon_html: '<i class="fas fa-gem"></i>',
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-gem'),
            riseOnHover: true
        });
    }
});

interactive_layers.set(talismans_layer.id, talismans_layer);

default_layers.push(talismans_layer.name);
