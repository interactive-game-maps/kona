var talismans_group_name = 'Talismans';
var talismans_group_id = 'talismans';
var talismans_create_checkbox = true;

var talismans_list = createSidebarTab(talismans_group_id, talismans_group_name, '<i class="fas fa-gem"></i>');

// Create marker group
var talismans_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var talismans_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/talismans.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(talismans, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: new talismans_icon,
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: talismans_group,
            list: talismans_list,
            list_id: talismans_group_id,
            create_checkbox: talismans_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: talismans_group_id
        });
    }
}).addTo(talismans_group);
marker.get(talismans_group_id).set('group', talismans_group);
marker.get(talismans_group_id).set('name', talismans_group_name);

if (talismans_create_checkbox) {
    setColumnCount(marker.get(talismans_group_id), talismans_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(talismans_group_name);
