import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { fetchGeocoding } from "../stores/slices/productSlice";
import { debounce } from "lodash";

export default function Autocomplete({
    // onChange, placeholder
    handleSearchLocation,
}) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const onChangeInputLocation = useCallback(
      async (e) => {
          if (typeof e.target.value === "undefined") return;
          if (e.target.value === "") return;
          dispatch(fetchGeocoding(e.target.value));
      },
      [dispatch],
    );

    const handleDebounceInputLocation = useMemo(
      () => debounce(onChangeInputLocation, 1000, { leading: false }),
      [onChangeInputLocation],
    );

    const handleSelectLocation = async (address) => {
        console.log(address,"hello");

        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = getLatLng(results[0]);
        console.log({ lat, lng });

        handleSearchLocation({ lat, lng });
    };

    if (!ready) return null;

    return (
        <div>
            <input
                className="z-10 w-full p-2 bg-white rounded shadow-md border-2 border-cyan-500"
                value={value}
                disabled={!ready}
                onChange={(e) => setValue(e.target.value)}
                // onChange={onChange}
                placeholder={placeholder}
            />
            <div className="bg-white">
                {status === "OK" &&
                    data.map(({ place_id, description }) => {
                        return (
                            <div key={place_id} className="item" onClick={() => handleSelectLocation(description)}>
                                {description}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
