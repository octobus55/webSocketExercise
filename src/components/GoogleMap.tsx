import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { ICoordinates } from "../types";

interface IGoogleMapComponentProps {
  coordinates: ICoordinates;
}

const GoogleMapComponent: React.FC<IGoogleMapComponentProps> = ({
  coordinates,
}) => {
  const [, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new (window as any).google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const markerCoordinates = {
    lat: parseFloat(coordinates.latitude),
    lng: parseFloat(coordinates.longitude),
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="AIzaSyD7qAyFtrRNL5XN4gaqXkfBvGAVtSUO664">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "300px",
          }}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={markerCoordinates} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default React.memo(GoogleMapComponent);
