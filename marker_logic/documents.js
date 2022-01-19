var documents_layer = new InteractiveLayer('documents', documents, {
    name: "Documents",
    create_checkbox: true,
    create_feature_popup: true,
    sidebar_icon_html: '<i class="fas fa-file"></i>',
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-file'),
            riseOnHover: true
        });
    }
});

interactive_layers.set(documents_layer.id, documents_layer);

default_layers.push(documents_layer.name);
