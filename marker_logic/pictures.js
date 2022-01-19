var pictures_layer = new InteractiveLayer('pictures', pictures, {
    name: "Pictures",
    create_checkbox: true,
    create_feature_popup: true,
    sidebar_icon_html: '<i class="fas fa-images"></i>',
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-images'),
            riseOnHover: true
        });
    }
});

interactive_layers.set(pictures_layer.id, pictures_layer);

default_layers.push(pictures_layer.name);
