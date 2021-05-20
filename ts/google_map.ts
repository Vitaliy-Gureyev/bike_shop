/*google map initialization*/
function initMap() {
    const location = { lat: 50.439752507846244, lng: 30.518353980237237 };
    // @ts-ignore
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    // @ts-ignore
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}