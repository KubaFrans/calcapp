import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalcItem from './components/CalcItem'

export default class calcApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainKeybordArray: ["7", "4", "1", "0", "8", "5", "2", ".", "9", "6", "3", "="],
            asideArray: ["C", "/", "*", "-", "+"],
            equasion: "",
            equal: "",
        };
    }

    insert(param) {
        this.setState({ equasion: this.state.equasion + param })
    }

    remove() {
        if (this.state.equasion.length != 0) {
            let substr = this.state.equasion.substring(0, this.state.equasion.length - 1)
            this.setState({ equasion: substr })
        }
    }

    equal() {
        if (this.state.equasion[this.state.equasion.length - 1] != "/" && this.state.equasion[this.state.equasion.length - 1] != "*" && this.state.equasion[this.state.equasion.length - 1] != "-" && this.state.equasion[this.state.equasion.length - 1] != "+") {
            this.setState({ equal: eval(this.state.equasion) })
        } else {
            console.log("XX")
            this.setState({ equal: "Syntax error" })
        }
    }

    render() {
        let returnToApp = []
        let item = []
        let n = 1
        for (let i = 0; i < this.state.mainKeybordArray.length; i++) {
            if (n % 4 == 0) {
                if (n == 12)
                    item.push(<CalcItem key={i.toString()} flex={1} text={this.state.mainKeybordArray[i]} color="#3f3f3f" font="white" size={45} press={this.equal.bind(this)}></CalcItem>)
                else
                    item.push(<CalcItem key={i.toString()} flex={1} text={this.state.mainKeybordArray[i]} color="#3f3f3f" font="white" size={45} press={this.insert.bind(this, this.state.mainKeybordArray[i])}></CalcItem>)
                returnToApp.push(<View style={{ flex: 1 }}>{item}</View>)
                item = []
            } else {
                item.push(<CalcItem key={i.toString()} flex={1} text={this.state.mainKeybordArray[i]} color="#3f3f3f" font="white" size={45} press={this.insert.bind(this)}></CalcItem>)
            }
            n++
        }
        item = []
        for (let i = 0; i < this.state.asideArray.length; i++) {
            if (i == 0)
                item.push(<CalcItem key={i.toString()} flex={1} text={this.state.asideArray[i]} color="#bb4344" font="white" size={45} press={this.remove.bind(this)}></CalcItem>)
            else
                item.push(<CalcItem key={i.toString()} flex={1} text={this.state.asideArray[i]} color="#656565" font="white" size={45} press={this.insert.bind(this)}></CalcItem>)
        }
        returnToApp.push(<View style={{ flex: 1 }}>{item}</View>)
        return (
            <View style={styles.container}>
                <View style={styles.equasion}>
                    <View style={styles.eqBottom}>
                        <Text style={{ textAlign: "right", fontSize: 48, color: "white" }}>{this.state.equasion}</Text>
                    </View>
                </View>
                <View style={styles.solution}>
                    <View style={styles.eqBottom}>
                        <Text style={{ textAlign: "right", fontSize: 48, color: "white" }}>{this.state.equal}</Text>
                    </View>
                </View>
                <View style={styles.keyboard}>
                    {returnToApp}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#989898',
        display: "flex",
        flexDirection: "column"
    },
    equasion: {
        flex: 2,
        backgroundColor: "#6f6b72",
        textAlign: "left",
        position: 'relative',
    },
    eqBottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    solution: {
        flex: 1,
        backgroundColor: "#6f6b72",
        padding: 5,
        textAlign: "right",
    },
    keyboard: {
        flex: 3.5,
        backgroundColor: "#989898",
        display: "flex",
        flexDirection: "row",
    }
});