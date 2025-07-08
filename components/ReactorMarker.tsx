import React from "react";
import { Marker } from "react-native-maps";
import { Impact, Reactor } from "../services/impactService";

type ReactorMarkerProps = {
  reactor: Reactor;
  impact: Impact;
  onPress: () => void;
};

const ReactorMarker: React.FC<ReactorMarkerProps> = ({
  reactor,
  onPress,
}) => {
  return (
    <Marker
      coordinate={{
        latitude: reactor.latitude,
        longitude: reactor.longitude,
      }}
      title={reactor.name}
      onPress={onPress}
      pinColor="red"
    />
  );
};

export default ReactorMarker;
