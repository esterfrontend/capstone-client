import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import React, { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_GOOGLEMAPS_APIKEY
const mapId = process.env.REACT_APP_GOOGLEMAPS_MAPID

const MyMap = ({schools}) => {
    const [open, setOpen] = useState(false);
    const [schoolSelected, setSchoolSelected] = useState(null);
    const [userPosition, setUserPosition] = useState(null);
    const [isGeolocated, setIsGeolocated] = useState(false);
    

    const getUserPosition = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
                setIsGeolocated(true)
            },
            (error) => {
                console.error('Error getting user location:', error);
            }
        );
    }

    useEffect(() => {
        getUserPosition()
    }, [isGeolocated]);

    return isGeolocated === true 
        ? (
        <APIProvider apiKey={apiKey}>
            <Map defaultCenter={userPosition || { lat: 41.65037928326351, lng: -0.8925806264993303 }} defaultZoom={14} mapId={mapId}>
                {
                    schools.map((school, index) => {
                        return (
                            <React.Fragment key={index}>
                                <AdvancedMarker position={school.position} onClick={() => {setOpen(true); setSchoolSelected(index)}} />

                                {open && schoolSelected === index && (
                                    <InfoWindow position={school.position} onCloseClick={() => { setOpen(false) }}>
                                        {school.name}
                                    </InfoWindow>
                                )}
                            </React.Fragment>
                        )
                    })
                }
            </Map>
        </APIProvider>
    ) : (<>Cargando Google Maps...</>)
}

export default MyMap