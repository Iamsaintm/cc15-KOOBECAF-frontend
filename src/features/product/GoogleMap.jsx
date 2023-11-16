import { useSelector } from "react-redux";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useMemo } from "react";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_CONFIG } from "../../config/env";
import { useEffect } from "react";
import { useRef } from "react";

const GoogleMapInput = ({ className }) => {
    const { inputProduct, loading } = useSelector((state) => state.product);

    const { isLoaded } = useJsApiLoader(GOOGLE_MAPS_CONFIG);

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
            <GoogleMap zoom={16} center={geometry} mapContainerStyle={{ width: "100%", height: 200 }}>
                <MarkerF position={geometry} />
            </GoogleMap>
        </div>
    );
};

export default GoogleMapInput;
