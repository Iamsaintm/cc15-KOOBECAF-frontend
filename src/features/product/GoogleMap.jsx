import { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import InputForm from "../../components/InputForm";

const GoogleMapInput = ({ className }) => {
    const [center, setCenter] = useState({
        lat: 14.015413,
        lng: 99.993387,
    });

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAD2cnxbl_ndhGSO6emJt0oSrs_Y3aRO3Q",
    });

    if (!isLoaded) {
        return <div>Loading</div>;
    }

    return (
        <div className={className}>
            <GoogleMap
                onClick={(e) => {
                    console.log(e.latLng.toJSON());
                    setCenter({
                        lat: e.latLng.lat(),
                        lng: e.latLng.lng(),
                    });
                }}
                zoom={12}
                center={center}
                // mapContainerClassName={""}
                mapContainerStyle={{ width: "100%", height: 250 }}
            >
                <MarkerF position={center} />
            </GoogleMap>
        </div>
    );
};

export default GoogleMapInput;
