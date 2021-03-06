import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Grid, Section, Block } from 'react-native-responsive-layout';

const styles = StyleSheet.create({
  element: {
    height: 100,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#02326b',
    fontSize: 30,
  },
  hiddenBlock: {
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    justifyContent: 'center',
  },
  hiddenText: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 20,
  },
});

export default () => (
  <Grid>
    <Section>
      <Block xsSize="1/2" smSize="1/4">
        <View style={[styles.element, { backgroundColor: '#b2d4fe' }]}>
          <Text style={styles.text}>Left</Text>
        </View>
      </Block>
    </Section>
    <Section>
      <Block size="stretch">
        <View style={styles.hiddenBlock}>
          <Text style={styles.hiddenText}>Stretch</Text>
        </View>
      </Block>
      <Block xsSize="1/2" smSize="1/4">
        <View style={[styles.element, { backgroundColor: '#91c2fd' }]}>
          <Text style={styles.text}>Center</Text>
        </View>
      </Block>
      <Block size="stretch">
        <View style={styles.hiddenBlock}>
          <Text style={styles.hiddenText}>Stretch</Text>
        </View>
      </Block>
    </Section>
    <Section>
      <Block size="stretch">
        <View style={styles.hiddenBlock}>
          <Text style={styles.hiddenText}>Stretch</Text>
        </View>
      </Block>
      <Block xsSize="1/2" smSize="1/4">
        <View style={[styles.element, { backgroundColor: '#6faffd' }]}>
          <Text style={styles.text}>Right</Text>
        </View>
      </Block>
    </Section>
    <Section>
      <Block xsSize="1/3" smSize="1/4">
        <View style={[styles.element, { backgroundColor: '#6faffd' }]}>
          <Text style={styles.text}>Left</Text>
        </View>
      </Block>
      <Block size="stretch">
        <View style={styles.hiddenBlock}>
          <Text style={styles.hiddenText}>Stretch</Text>
        </View>
      </Block>
      <Block xsSize="1/3" smSize="1/4">
        <View style={[styles.element, { backgroundColor: '#4e9dfc' }]}>
          <Text style={styles.text}>Right</Text>
        </View>
      </Block>
    </Section>
  </Grid>
);

