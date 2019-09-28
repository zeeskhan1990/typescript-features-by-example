export interface Mappable {
    markerContent(): string
    location: {
        lat: number,
        lng: number
    }
    color: string
}

export class CustomMap {
    private googleMap: google.maps.Map

    constructor(mapMount: string) {
        this.googleMap = new google.maps.Map(document.querySelector(mapMount), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                ...mappable.location
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }

};
