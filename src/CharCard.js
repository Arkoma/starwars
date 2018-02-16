import React from 'react';
import { Link } from 'react-router-dom';


export default class CharCard extends React.Component {

    state = {
        characters: []
    }
    componentDidMount() {
        fetch('https://swapi.co/api/people')
        .then(res => {
          return res.json();
        })
        .then(data => {
          this.setState({ characters: data.results });
        })
        .catch(err => {
          throw new Error(err);
        });
    }
    findCharCard(props) {
        for (let i = 0; i < this.state.characters.length; i++) {
            if (this.state.characters[i]['name'] === this.props.match.params.name) {
                return this.state.characters[i][props];
            }
        }
    }
    render() {
        console.log('this state: ', this.state.characters[0]);
        return (
            <div className="card-container">
                <h2>{this.props.match.params.name}</h2>
                <div className="cc">
                    <div>Eye Color: {this.findCharCard('eye_color')}</div>
                    <div>Gender: {this.findCharCard('gender')}</div>
                    <div>Hair Color: {this.findCharCard('hair_color')}</div>
                    <div>Height: {this.findCharCard('height')}</div>
                    <div>Mass: {this.findCharCard('mass')}</div>
                    <div>Skin Color: {this.findCharCard('skin_color')}</div>
                </div>
                <blockquote>
                    <Link to="/"> Return Home </Link>
                </blockquote>
            </div>
        )
    }
}


