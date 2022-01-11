var pictures_group_name = 'Pictures';
var pictures_group_id = 'pictures';
var pictures_create_checkbox = true;

var pictures_list = createSidebarTab(pictures_group_id, pictures_group_name, '<i class="fas fa-images"></i>');

// Create marker group
var pictures_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var pictures_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/pictures.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(pictures, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: new pictures_icon,
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: pictures_group,
            list: pictures_list,
            list_id: pictures_group_id,
            create_checkbox: pictures_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: pictures_group_id
        });
    }
}).addTo(pictures_group);
marker.get(pictures_group_id).set('group', pictures_group);
marker.get(pictures_group_id).set('name', pictures_group_name);

if (pictures_create_checkbox) {
    setColumnCount(marker.get(pictures_group_id), pictures_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(pictures_group_name);
