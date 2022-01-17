var fire_places_group_name = 'Fire Places';
var fire_places_group_id = 'fire_places';
var fire_places_create_checkbox = true;

var fire_places_list = createSidebarTab(fire_places_group_id, fire_places_group_name, '<i class="fas fa-fire"></i>');

var fire_places_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(fire_places, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-fire'),
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: fire_places_group,
            list: fire_places_list,
            list_id: fire_places_group_id,
            create_checkbox: fire_places_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: fire_places_group_id
        });
    }
}).addTo(fire_places_group);
marker.get(fire_places_group_id).set('group', fire_places_group);
marker.get(fire_places_group_id).set('name', fire_places_group_name);

if (fire_places_create_checkbox) {
    setColumnCount(marker.get(fire_places_group_id), fire_places_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(fire_places_group_name);
