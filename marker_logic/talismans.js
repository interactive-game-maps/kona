function getTalismans() {
    return new InteractiveLayer('talismans', talismans, {
        name: "Talismans",
        create_checkbox: true,
        create_feature_popup: true,
        is_default: true,
        sidebar_icon_html: '<i class="fas fa-gem"></i>',
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, {
                icon: Utils.getCustomIcon('fa-gem'),
                riseOnHover: true
            });
        }
    });
}
