import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const center = {
    lat: 14.015413140679303,
    lng: 99.99338795637618,
};

function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAD2cnxbl_ndhGSO6emJt0oSrs_Y3aRO3Q",
    });

    if (!isLoaded) {
        return <div>Loading</div>;
    }
    return (
        <>
            <GoogleMap zoom={13} center={center} mapContainerClassName={"google-map"}>
                <MarkerF position={center} />
            </GoogleMap>
        </>
    );
}

export default Map;
