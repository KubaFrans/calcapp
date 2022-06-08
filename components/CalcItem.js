import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class CalcItem extends Component {
    handle() {
        this.props.press(this.props.text)
    }

    render() {
        return (
            <TouchableOpacity onPress={this.handle.bind(this)} style={{ flex: this.props.flex, backgroundColor: this.props.color, padding: 10 }}>
                <Text style={{ fontSize: this.props.size, textAlign: "center", color: this.props.font }}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

CalcItem.propTypes = {

};
