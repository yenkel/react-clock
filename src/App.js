import React, { Component } from 'react';
import './App.css';
import ElevationBorder from './ElevationBorder';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        var date = this.state.date;
        if (date.getMonth() > 5 && date.getFullYear() >= 2017) {
            return null;
        } else {
            return (
                <div>
               <h1>Hello, {(date.getMonth() > 6 && date.getFullYear() >= 2017) && "Cohort5" || "Cohort4"}!</h1>
                <ElevationBorder>
                  <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </ElevationBorder>  
            </div>
            );
        }
    }
}

export default Clock;
