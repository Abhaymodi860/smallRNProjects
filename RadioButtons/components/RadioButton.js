import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  onPress = () => {
    const {selected} = this.state;
    this.setState({selected: !selected});

    // Pass the selected value to the parent component
    this.props.onSelect(!selected);
  };

  render() {
    const {selected} = this.state;
    const {label, labelStyle, radioStyle, selectedRadioStyle} = this.props;

    return (
      <TouchableOpacity onPress={this.onPress} style={radioStyle}>
        <View style={[styles.radioOuter, selected && selectedRadioStyle]}>
          {selected && <View style={styles.radioInner} />}
        </View>
        <Text style={labelStyle}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
};

export default RadioButton;
