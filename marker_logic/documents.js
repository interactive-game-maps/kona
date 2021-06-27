// Create list
var documents_list = document.createElement('ul');
documents_list.className = 'collectibles_list';

// Add list to sidebar
var documents_group_name = 'Documents';
sidebar.addPanel({
    id: 'documents',
    tab: '<i class="fas fa-file"></i>',
    title: documents_group_name,
    pane: '<p></p>' // placeholder to get a proper pane
});
document.getElementById('documents').appendChild(documents_list);

// Create marekr group
var documents_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var documents_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/documents.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(documents, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: new documents_icon,
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        onEachFeature(feature, layer, {
            layer_group: documents_group,
            list: documents_list,
            list_name: "documents",
            create_checkbox: true
        });
    }
}).addTo(documents_group);
marker.get('documents').set('group', documents_group);
marker.get('documents').set('name', documents_group_name);
