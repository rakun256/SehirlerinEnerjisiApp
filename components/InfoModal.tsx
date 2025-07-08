import React from 'react';
import { Button, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Impact } from '../services/impactService';

type InfoModalProps = {
  visible: boolean;
  impact: Impact | null;
  onClose: () => void;
};

const InfoModal: React.FC<InfoModalProps> = ({ visible, impact, onClose }) => {
  if (!impact) return null;

  const { reactor } = impact;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>{reactor.name}</Text>
            <Text style={styles.label}>Ülke: <Text style={styles.value}>{reactor.country}</Text></Text>
            <Text style={styles.label}>Tip: <Text style={styles.value}>{reactor.type}</Text></Text>
            <Text style={styles.label}>Termal Güç: <Text style={styles.value}>{reactor.thermalPower} MW</Text></Text>
            <Text style={styles.label}>Aktif mi?: <Text style={styles.value}>{reactor.active ? 'Evet' : 'Hayır'}</Text></Text>
            <Text style={styles.label}>Koordinat: <Text style={styles.value}>{reactor.latitude}, {reactor.longitude}</Text></Text>

            <View style={styles.divider} />

            <Text style={styles.label}>Uzaklık: <Text style={styles.value}>{impact.distanceKm.toFixed(1)} km</Text></Text>
            <Text style={styles.label}>Etkilenme Skoru: <Text style={styles.value}>{impact.impactScore}</Text></Text>
            <Text style={styles.label}>Etkilenme Seviyesi: <Text style={styles.value}>{impact.impactLevel}</Text></Text>
          </ScrollView>

          <View style={styles.buttonContainer}>
            <Button title="Kapat" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '85%',
    maxHeight: '80%',
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginVertical: 2,
    fontWeight: '500',
  },
  value: {
    fontWeight: 'normal',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 12,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
