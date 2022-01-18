var pictures_group_name = 'Pictures';
var pictures_group_id = 'pictures';
var pictures_create_checkbox = true;

var pictures_list = createSidebarTab(pictures_group_id, pictures_group_name, '<i class="fas fa-images"></i>');
var pictures_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(pictures, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-images'),
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
}).getLayers().forEach(layer => {
    pictures_group.addLayer(layer);
});

marker.get(pictures_group_id).set('group', pictures_group);
marker.get(pictures_group_id).set('name', pictures_group_name);

if (pictures_create_checkbox) {
    setColumnCount(marker.get(pictures_group_id), pictures_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(pictures_group_name);
