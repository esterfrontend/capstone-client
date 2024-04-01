import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

const apiKey = process.env.REACT_APP_GOOGLEMAPS_APIKEY
const mapId = process.env.REACT_APP_GOOGLEMAPS_MAPID

const MyLocation = ({position}) => {
    return (
        <APIProvider apiKey={apiKey}>
            <Map defaultCenter={position} defaultZoom={14} mapId={mapId}>
                <AdvancedMarker position={position} />
            </Map>
        </APIProvider>
    )
}

export default MyLocation