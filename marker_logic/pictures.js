function getPictures() {
    return new InteractiveLayer('pictures', pictures, {
        name: "Pictures",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<i class="fas fa-images"></i>',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-images'),
                riseOnHover: true
            });
        }
    });
}
