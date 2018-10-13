import React, { Component } from 'react';

// import Card from '@material-ui/core/Card';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';

import { Card, Button, TextField, Select, MenuItem } from '@material-ui/core';

import './Home.scss';

export default class Home extends Component{

    constructor() {
        super();
        this.state = {
            name: "",
            age: 0
        }
    }

    handleInputChange(input, e) {
        this.setState({ [input] : e.target.value})
    }


    render() {
        return (<div>
            <Card className="welcome-card">
                <h1>Bienvenido a App!</h1>
                <Button className="button" variant="contained" size="large" color="primary">Hola</Button>
                <TextField value={this.state.name} onChange={(e) => this.handleInputChange("name", e)}  placeholder="Ingresa tu nombre" variant="filled"></TextField>
                <Select value={this.state.age} onChange={(e)=>this.handleInputChange("age", e)}>
                    <MenuItem value="1">1 año</MenuItem>
                    <MenuItem value="2">2 años</MenuItem>
                    <MenuItem value="3">3 años</MenuItem>
                    <MenuItem value="4">4 años</MenuItem>
                    <MenuItem value="5">5 años</MenuItem>
                </Select>
            </Card>
        </div>)
    }
}