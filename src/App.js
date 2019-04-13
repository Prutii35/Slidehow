import React, { Component } from 'react';
import './App.css';
import {photos} from './data.js';
import GridOfPhotos from './GridOfPhotos.js';
import FullScreenMedia from './FullScreenMedia.js'

function openFullScreen() {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.mozRequestFullScreen) { /* Firefox */
    document.body.mozRequestFullScreen();
  } else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    document.body.webkitRequestFullscreen();
  } else if (document.body.msRequestFullscreen) { /* IE/Edge */
    document.body.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      isFullScreen : false,
      slideIndex : 0
    }
  }

  exitFullscreen = () => {
    if (!document.fullscreenElement
     && !document.webkitIsFullScreen
     && !document.mozFullScreen
     && !document.msFullscreenElement) {
      this.setState({
        isFullScreen: false,
      });
    }
  }

  componentWillMount() {
    document.addEventListener('fullscreenchange', this.exitFullscreen);
    document.addEventListener('webkitfullscreenchange', this.exitFullscreen);
    document.addEventListener('mozfullscreenchange', this.exitFullscreen);
    document.addEventListener('MSFullscreenChange', this.exitFullscreen);
  }

 changeFullScreen = () => {
   closeFullscreen()
   this.setState({
     isFullScreen : false
   })
 }

  toggleFullScreen = (event) => {
    openFullScreen()
    this.setState({
      isFullScreen : true,
      slideIndex : event.target.id,
    })
  }

  moveLeft = () => {
    if(this.state.slideIndex > 0) {
      this.setState(prevState => {
        return {slideIndex: prevState.slideIndex - 1}
     })
    }
  }

  moveRight = () => {
    if(this.state.slideIndex < Object.values(photos).length - 1 ) {
      this.setState(prevState => {
        return {slideIndex: prevState.slideIndex - 1 + 2} 
     })
    }
  }

  render() {
    return (
      <div>
         {
           !this.state.isFullScreen ? 
            <GridOfPhotos 
              photos = {photos}
              handleToggleFullScreen = {this.toggleFullScreen}
            />
            :
            <FullScreenMedia 
              array = {photos[this.state.slideIndex]}
              handleMoveLeft = {this.moveLeft}
              handleMoveRight = {this.moveRight}
              handleChangeFullScreen = {this.changeFullScreen}
            />
         }
      </div>
    );
  }
}

export default App;
