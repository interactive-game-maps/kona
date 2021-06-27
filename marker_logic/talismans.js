// Create list
var talismans_list = document.createElement('ul');
talismans_list.className = 'collectibles_list';

// Add list to sidebar
var talismans_group_name = 'Talismans';
sidebar.addPanel({
    id: 'talismans',
    tab: '<i class="fas fa-gem"></i>',
    title: talismans_group_name,
    pane: '<p></p>' // placeholder to get a proper pane
});
document.getElementById('talismans').appendChild(talismans_list);

// Create marekr group
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
        onEachFeature(feature, layer, {
            layer_group: talismans_group,
            list: talismans_list,
            list_name: "talismans",
            create_checkbox: true
        });
    }
}).addTo(talismans_group);
marker.get('talismans').set('group', talismans_group);
marker.get('talismans').set('name', talismans_group_name);
