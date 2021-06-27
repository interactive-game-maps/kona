// Create list
var fire_places_list = document.createElement('ul');
fire_places_list.className = 'collectibles_list';

// Add list to sidebar
var fire_places_group_name = 'Fire Places';
sidebar.addPanel({
    id: 'fire_places',
    tab: '<i class="fas fa-fire"></i>',
    title: fire_places_group_name,
    pane: '<p></p>' // placeholder to get a proper pane
});
document.getElementById('fire_places').appendChild(fire_places_list);

// Create marekr group
var fire_places_group = L.markerClusterGroup({
    maxClusterRadius: 40
});

var fire_places_icon = L.Icon.Default.extend({
    options: {
        imagePath: './',
        iconUrl: 'marker/fire_places.png',
        shadowUrl: 'marker/shadow.png'
    }
});

L.geoJSON(fire_places, {
    pointToLayer: (feature, latlng) => {
        return L.marker(latlng, {
            icon: new fire_places_icon,
            riseOnHover: true
        });
    },
    onEachFeature: (feature, layer) => {
        onEachFeature(feature, layer, {
            layer_group: fire_places_group,
            list: fire_places_list,
            list_name: "fire_places",
            create_checkbox: true
        });
    }
}).addTo(fire_places_group);
marker.get('fire_places').set('group', fire_places_group);
marker.get('fire_places').set('name', fire_places_group_name);
