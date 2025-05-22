import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Slider from '../src/components/Slider';
import RangeSlider from '../src/components/RangeSlider';

const App = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeValue, setRangeValue] = useState({low: 20, high: 80});
  const [labelPosition, setLabelPosition] = useState<'top' | 'bottom'>('top');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>React Native Product Sliders</Text>

        {/* Label Position Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Label Position:</Text>
          <Text
            style={[
              styles.toggleButton,
              labelPosition === 'top' && styles.activeToggle,
            ]}
            onPress={() => setLabelPosition('top')}>
            Top
          </Text>
          <Text
            style={[
              styles.toggleButton,
              labelPosition === 'bottom' && styles.activeToggle,
            ]}
            onPress={() => setLabelPosition('bottom')}>
            Bottom
          </Text>
        </View>

        {/* Slider with Top/Bottom Label */}
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderTitle}>
            Slider with {labelPosition} Label
          </Text>
          <Slider
            min={0}
            max={100}
            value={sliderValue}
            onValueChange={setSliderValue}
            labelPosition={labelPosition}
            renderLabel={value => (
              <View
                style={[
                  styles.label,
                  labelPosition === 'bottom' && styles.labelBottom,
                ]}>
                <Text style={styles.labelText}>{value}</Text>
              </View>
            )}
          />
        </View>

        {/* Range Slider with Top/Bottom Labels */}
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderTitle}>
            Range Slider with {labelPosition} Labels
          </Text>
          <RangeSlider
            min={0}
            max={100}
            lowValue={rangeValue.low}
            highValue={rangeValue.high}
            onRangeChange={(low, high) => setRangeValue({low, high})}
            labelPosition={labelPosition}
            renderLabel={value => (
              <View
                style={[
                  styles.rangeLabel,
                  labelPosition === 'bottom'
                    ? styles.labelBottom
                    : styles.labelTop,
                ]}>
                <Text style={styles.rangeLabelText}>{value}</Text>
              </View>
            )}
          />
        </View>

        {/* Slider with Different Label Positions */}
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderTitle}>
            Slider with Mixed Label Positions
          </Text>
          <Slider
            min={0}
            max={100}
            value={sliderValue}
            onValueChange={setSliderValue}
            labelPosition="top"
            renderLabel={value => (
              <View style={styles.label}>
                <Text style={styles.labelText}>Top: {value}</Text>
              </View>
            )}
          />
          <View style={{height: 30}} />
          <Slider
            min={0}
            max={100}
            value={sliderValue}
            onValueChange={setSliderValue}
            labelPosition="bottom"
            renderLabel={value => (
              <View style={[styles.label, styles.labelBottom]}>
                <Text style={styles.labelText}>Bottom: {value}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  toggleText: {
    marginRight: 10,
    color: '#666',
  },
  toggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    color: '#333',
  },
  activeToggle: {
    backgroundColor: '#2f80ed',
    color: 'white',
  },
  sliderContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sliderTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: '#444',
  },
  label: {
    backgroundColor: '#2f80ed',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    position: 'absolute',
    top: 5,
    left: -10,
  },
  labelTop: {
    top: 10,
  },
  labelBottom: {
    top: 0,
  },
  labelText: {
    color: 'white',
    fontSize: 12,
  },
  rangeLabel: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    position: 'absolute',
  },
  rangeLabelText: {
    color: 'white',
    fontSize: 10,
  },
});

export default App;
