import { getCurrentRegion } from "@/utils/geo";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import InfoModal from "../components/InfoModal";
import ReactorMarker from "../components/ReactorMarker";
import { Impact, getAllImpacts } from "../services/impactService";

export default function MapScreen() {
  const [region, setRegion] = useState<Region | null>(null);
  const [impacts, setImpacts] = useState<Impact[]>([]);
  const [selectedImpact, setSelectedImpact] = useState<Impact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const currentRegion = await getCurrentRegion();
      if (currentRegion) {
        setRegion(currentRegion);
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (region) {
        const data = await getAllImpacts(region);
        setImpacts(data);
      }
    };
    fetchData();
  }, [region]);

  if (loading || !region) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        initialRegion={region}
      >
        {region && (
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="Konumunuz"
            description=""
          />
        )}

        {impacts.map((impact, index) => (
          <ReactorMarker
            key={index}
            impact={impact}
            onPress={() => setSelectedImpact(impact)}
          />
        ))}
      </MapView>

      <InfoModal
        visible={!!selectedImpact}
        impact={selectedImpact}
        onClose={() => setSelectedImpact(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
