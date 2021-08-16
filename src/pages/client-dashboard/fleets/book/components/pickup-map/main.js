import React, { useEffect, useState, Fragment } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import AutoComplete from "./autoComplete";
import Marker from "./marker";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const MainMapComponent = () => {
  const [mapApiLoaded, setMapApiLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [mapApi, setMapApi] = useState(null);
  const [geoCoder, setGeoCoder] = useState(null);
  const [places, setPlaces] = useState([]);
  const [center, setCenter] = useState([]);
  const [zoom, setZoom] = useState(9);
  const [address, setAddress] = useState("");
  const [draggable, setDraggable] = useState(true);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  // get user's current location
  useEffect(() => {
    setCurrentLocation();
  }, []);

  // Get Current Location Coordinates
  function setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter(position.coords.latitude, position.coords.longitude);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  }

  // generate user address
  function _generateAddress() {
    const geocoder = new mapApi.Geocoder();

    geocoder.geocode(
      { location: { lat: lat, lng: lng } },
      (results, status) => {
        console.log(results);
        console.log(status);
        if (status === "OK") {
          if (results[0]) {
            setZoom(12);
            setAddress(results[0].formatted_address);
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }

  const apiHasLoaded = (map, maps) => {
    setMapApiLoaded(true);
    setMapInstance(map);
    setMapApi(maps);

    _generateAddress();
  };

  const addPlace = (place) => {
    setPlaces(place);
    setLat(place.geometry.location.lat());
    setLng(place.geometry.location.lng());

    _generateAddress();
  };

  const onMarkerInteraction = (childKey, childProps, mouse) => {
    setDraggable(false);
    setLat(mouse.lat);
    setLng(mouse.lng);
  };
  const onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
    setDraggable(true);
    _generateAddress();
  };

  const _onChange = ({ center, zoom }) => {
    setCenter(center);
    setZoom(zoom);
  };

  const _onClick = (value) => {
    setLat(value.lat);
    setLng(value.lng);
  };

  return (
    <Fragment>
      <Wrapper>
        {mapApiLoaded && (
          <div className=" grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <AutoComplete
                map={mapInstance}
                mapApi={mapApi}
                addplace={addPlace}
              />
            </div>

            <div className="sm:col-span-3 ">
              <div className="font-medium text-sm mt-3">
                Address: <span>{address}</span>
              </div>
              <div className="flex flex-row items-center my-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="text-xs">
                  lat: <span>{lat}</span>, long: <span>{lng}</span>
                </div>
              </div>
              <div className="text-xs">
                Zoom: <span>{zoom}</span>
              </div>
            </div>
          </div>
        )}
        <GoogleMapReact
          center={center}
          zoom={zoom}
          draggable={draggable}
          onChange={_onChange}
          onChildMouseDown={onMarkerInteraction}
          onChildMouseUp={onMarkerInteractionMouseUp}
          onChildMouseMove={onMarkerInteraction}
          onChildClick={() => console.log("child click")}
          onClick={_onClick}
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
            libraries: ["places", "geometry"],
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
        >
          <Marker text={address} lat={lat} lng={lng} />
        </GoogleMapReact>
      </Wrapper>
    </Fragment>
  );
};

export default MainMapComponent;
