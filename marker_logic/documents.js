var documents_group_name = 'Documents';
var documents_group_id = 'documents';
var documents_create_checkbox = true;

var documents_list = createSidebarTab(documents_group_id, documents_group_name, '<i class="fas fa-file"></i>');
var documents_group = L.featureGroup.subGroup(marker_cluster);

L.geoJSON(documents, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: getCustomIcon('fa-file'),
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        addPopup(feature, layer, {
            layer_group: documents_group,
            list: documents_list,
            list_id: documents_group_id,
            create_checkbox: documents_create_checkbox
        });
        saveMarker(feature, layer, {
            list_id: documents_group_id
        });
    }
}).getLayers().forEach(layer => {
    documents_group.addLayer(layer);
});

marker.get(documents_group_id).set('group', documents_group);
marker.get(documents_group_id).set('name', documents_group_name);

if (documents_create_checkbox) {
    setColumnCount(marker.get(documents_group_id), documents_list);
}

// Add as a default layer
// This needs the display name because the layer control don't report ids
default_layers.push(documents_group_name);
