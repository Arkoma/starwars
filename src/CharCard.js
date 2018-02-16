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
    render() {
        console.log('this state: ', this.state);
        return (
            <div className="container">
                <div>{this.props.match.params.name}</div>
                <div>{this.state.birth_year}</div>
                <div>{this.state.characters.eye_color}</div>
                <Link to="/"> Return Home </Link>
            </div>
        )
    }
}