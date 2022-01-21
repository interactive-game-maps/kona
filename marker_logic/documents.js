function getDocuments() {
    return new InteractiveLayer('documents', documents, {
        name: "Documents",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<i class="fas fa-file"></i>',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-file'),
                riseOnHover: true
            });
        }
    });
}
