let mymap = L.map('mapid').setView([46.4774700, 30.7326200], 15);

let marker1 = L.marker([46.48302603007099, 30.7389164380267])
.bindPopup("Здесь готовят лучшую пиццу в Одессе.")
.addTo(mymap);

let marker2 = L.marker([46.48248916803548, 30.737497572629984])
.bindTooltip("Очень старый музей.")
.addTo(mymap);

let marker3 = L.marker([46.48409006529386, 30.7363385983878])
.bindTooltip("Ярманка, Одесский колорит.")
.addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam9yamVlZSIsImEiOiJja21mY2FmMXkwbXV1MnVwam41OW53OGUyIn0.SIbgJqSoAlskeq2l48o1Yg'
}).addTo(mymap);
