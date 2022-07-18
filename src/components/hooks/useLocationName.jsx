import { useState } from "react";
import toast from "react-hot-toast";

export const useLocationName = () => {
  const [loading, setLoading] = useState(false);

  const fetchLocationName = async (lat, lng) => {
    setLoading(true);
    try {
      let results = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&result_type=street_address&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
        {
          method: "POST",
        }
      );

      let res = await results?.json();
      return res?.results[0]?.formatted_address;
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Error occured fetching location");
    } finally {
      setLoading(false);
    }
  };

  return { loading, fetchLocationName };
};
