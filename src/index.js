import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import ReactDOM from 'react-dom';
import App from './App';
import Spinner from './Spinner';

class App extends React.Component {

  state = {lat: null, errMessage: '' }
    
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((position) => this.setState({lat: position.coords.latitude }), (err) => this.setState({errMessage: err.message}) 
    );
  }

  renderContent() {
    if(!this.state.errMessage && this.state.lat) {
      return(
        <div> <SeasonDisplay lat={this.state.lat} /> </div>
      );
    }
    if(this.state.errMessage && !this.state.lat) {
      return(
        <div>error: ${this.state.errMessage}</div>
      );
    }
    return <div><Spinner message="location request" /></div>
  }
  render() {
    return (
      <div>
          {this.renderContent()}
        </div>
    );
  };
}




ReactDOM.render(
  
    <App />, document.getElementById('app')
  
);
