import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_GOOGLEMAPS_APIKEY
const mapId = process.env.REACT_APP_GOOGLEMAPS_MAPID

const MyMap = () => {
    const [open, setOpen] = useState(false);
    const [schoolSelected, setSchoolSelected] = useState(null);
    const [userPosition, setUserPosition] = useState(null);

    const getUserPosition = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                console.error('Error getting user location:', error);
            }
        );
    }

    useEffect(() => {
        getUserPosition()
    }, []);

    console.log('POSITION ==> ', userPosition)

    const MARKERS = [
        {
            name:'Colegio Escolapios',
            position: { lat: 41.648, lng: -0.88 },
        },
        {
            name:'Colegio Santa Ana',
            position: { lat: 41.635, lng: -0.881 },
        },
        {
            name: 'Colegio 3',
            position: { lat: 41.6, lng: 0.1 },
        }
    ]

    return (
        <APIProvider apiKey={apiKey}>
            <Map defaultCenter={userPosition || { lat: 41.65037928326351, lng: -0.8925806264993303 }} defaultZoom={14} mapId={mapId}>
                {
                    MARKERS.map((marker, index) => {
                        return (
                            <React.Fragment key={index}>
                                <AdvancedMarker position={marker.position} onClick={() => {setOpen(true); setSchoolSelected(index)}} />

                                {open && schoolSelected === index && (
                                    <InfoWindow position={marker.position} onCloseClick={() => { setOpen(false) }}>
                                        {marker.name}
                                    </InfoWindow>
                                )}
                            </React.Fragment>
                        )
                    })
                }
            </Map>
        </APIProvider>
    );
}

export default MyMap