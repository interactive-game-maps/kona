var documents_layer = new InteractiveLayer('documents', documents, {
    name: "Documents",
    create_checkbox: true,
    create_feature_popup: true,
    is_default: true,
    sidebar_icon_html: '<i class="fas fa-file"></i>',
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-file'),
            riseOnHover: true
        });
    }
});

interactive_layers.set(documents_layer.id, documents_layer);
