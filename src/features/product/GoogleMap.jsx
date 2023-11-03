import { useSelector } from "react-redux";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../config/env";

const GoogleMapInput = ({ className }) => {
    const { inputProduct, loading } = useSelector((state) => state.product);
    console.log(inputProduct);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    });

    const geometry = useMemo(() => {
        return {
            lat: inputProduct.latitude,
            lng: inputProduct.longitude,
        };
    }, [inputProduct.latitude, inputProduct.longitude]);

    if (!isLoaded) {
        return <div>Loading</div>;
    }
    return (
        <div className={className}>
            <GoogleMap zoom={16} center={geometry} mapContainerStyle={{ width: "100%", height: 250 }}>
                <MarkerF position={geometry} />
            </GoogleMap>
        </div>
    );
};

export default GoogleMapInput;
