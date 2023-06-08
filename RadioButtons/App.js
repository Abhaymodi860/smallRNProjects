import React from 'react';
import {View, StyleSheet} from 'react-native';
import RadioButton from './components/RadioButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleOptionSelect = option => {
    this.setState({selectedOption: option});
  };

  render() {
    const {selectedOption} = this.state;

    return (
      <View style={styles.container}>
        <RadioButton
          label="Option 1"
          labelStyle={styles.label}
          radioStyle={styles.radio}
          selectedRadioStyle={styles.selectedRadio}
          onSelect={this.handleOptionSelect}
        />
        <RadioButton
          label="Option 2"
          labelStyle={styles.label}
          radioStyle={styles.radio}
          selectedRadioStyle={styles.selectedRadio}
          onSelect={this.handleOptionSelect}
        />
        {/* Add more RadioButton components for other options */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  selectedRadio: {
    borderColor: '#000',
    backgroundColor: '#000',
  },
});

export default App;
