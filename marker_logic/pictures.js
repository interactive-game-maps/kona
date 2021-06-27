// Create list
var pictures_list = document.createElement('ul');
pictures_list.className = 'collectibles_list';

// Add list to sidebar
var pictures_group_name = 'Pictures';
sidebar.addPanel({
    id: 'pictures',
    tab: '<i class="fas fa-images"></i>',
    title: pictures_group_name,
    pane: '<p></p>' // placeholder to get a proper pane
});
document.getElementById('pictures').appendChild(pictures_list);

// Create marekr group
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
        onEachFeature(feature, layer, {
            layer_group: pictures_group,
            list: pictures_list,
            list_name: "pictures",
            create_checkbox: true
        });
    }
}).addTo(pictures_group);
marker.get('pictures').set('group', pictures_group);
marker.get('pictures').set('name', pictures_group_name);
