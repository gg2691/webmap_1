'use strict'        // let the browser know we're serious

// debug statement letting us know the file is loaded
console.log('Loaded map.js')

// your mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2cyNjkxIiwiYSI6ImNqc2djM3ZnZjBjZ2UzeWs2MWxoaGFmYnEifQ.Yig6vzg4Pi8Yu11pFOD1oA'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/brianhouse/cjn0u552b52kr2spdz6yhpqj4',
    center: [-243.635980,39.909578],
    zoom: 16,
    pitch: 45
})

// create an instance of NavigationControl
let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})

// add the navigation to your map
map.addControl(navigation, 'top-left')

// create an instance of ScaleControl
let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

// add the scale to your map
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')

// this is an event handler
geolocate.on('geolocate', function(event) {
    console.log(event.coords)
})

map.on('click', function(event) {

    let lng = event.lngLat.lng
    let lat = event.lngLat.lat

    console.log("clicked:", lng, lat)

    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})



let marker = new mapboxgl.Marker()
    marker.setLngLat([-243.63320,39.90960])
    marker.addTo(map)


let popup = new mapboxgl.Popup()
  popup.setHTML('This is one of the busiest shopping malls in Beijing')
  marker.setPopup(popup)



let data = [
    {
        location: [-243.63708,39.90985],
        content: 'I spent six years of my middle school days here'
    },
    {
        location: [-243.63962,39.90855],
        content: 'There used to be a food market here where I often bought snacks'
    },
    {
        location: [116.36128,39.91099],
        content: 'This is one of the best hospitals in Beijing'
    },
    ]







 data.forEach(function(d) {

    let marker = new mapboxgl.Marker()
    marker.setLngLat(d.location)
    marker.addTo(map)

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})
