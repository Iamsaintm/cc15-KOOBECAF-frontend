import React, { useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, CircleF } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { GOOGLE_MAPS_API_KEY } from "../../config/env";

const SubscribeGoogleMap = ({ className }) => {
    const { inputProduct, loading } = useSelector((state) => state.product);

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
            <GoogleMap zoom={16} center={geometry} mapContainerStyle={{ width: "100%", height: 300 }}>
                <MarkerF position={geometry} />
                <CircleF radius={5000} />
            </GoogleMap>
        </div>
    );
};

export default SubscribeGoogleMap;

// export default function SubscribeGoogleMap() {
//     const [mapRef, setMapRef] = useState();
//     const [isOpen, setIsOpen] = useState(false);
//     const [infoWindowData, setInfoWindowData] = useState();

//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: GOOGLE_MAPS_API_KEY,
//     });

//     const onMapLoad = (map) => {
//         setMapRef(map);
//         const bounds = new google.maps.LatLngBounds();
//         markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
//         map.fitBounds(bounds);
//     };

//     const handleMarkerClick = (id, lat, lng, address) => {
//         mapRef?.panTo({ lat, lng });
//         setInfoWindowData({ id, address });
//         setIsOpen(true);
//     };

//     return (
//         <div>
//             {/* <div>SubscribeGoogleMap</div> */}
//             {/* <GoogleMap
//           zoom={16}
//           // center={geometry}
//           onLoad={handleOnLoad}
//           onClick={() => setActiveMarker(null)}
//           mapContainerStyle={{ width: "100%", height: 200 }}
//         >
//           {markers.map(({ id, name, position }) => (
//             <MarkerF
//               key={id}
//               position={position}
//               onClick={() => handleActiveMarker(id)}
//             >
//               {activeMarker === id ? (
//                 <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//                   <div>{name}</div>
//                 </InfoWindow>
//               ) : null}
//             </MarkerF>
//           ))}
//         </GoogleMap> */}
//             {!isLoaded ? (
//                 <div>Loading</div>
//             ) : (
//                 <GoogleMap
//                     zoom={16}
//                     mapContainerStyle={{ width: "100%", height: 300 }}
//                     onLoad={onMapLoad}
//                     onClick={() => setIsOpen(false)}
//                 >
//                     {markers.map(({ address, lat, lng }, ind) => (
//                         <MarkerF
//                             key={ind}
//                             position={{ lat, lng }}
//                             onClick={() => {
//                                 handleMarkerClick(ind, lat, lng, address);
//                             }}
//                         >
//                             {isOpen && infoWindowData?.id === ind && (
//                                 <InfoWindow
//                                     onCloseClick={() => {
//                                         setIsOpen(false);
//                                     }}
//                                 >
//                                     <h3>{infoWindowData.address}</h3>
//                                 </InfoWindow>
//                             )}
//                         </MarkerF>
//                     ))}
//                 </GoogleMap>
//             )}
//         </div>
//     );
// }
