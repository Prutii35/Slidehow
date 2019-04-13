import React from 'react';
import {useSwipeable, Swipeable} from 'react-swipeable';

export default function FullScreenMedia(props) {
  return( 
    <div className = "ContainerFullScreen">
      <i className="arrowLeft fas fa-arrow-circle-left" onClick = {props.handleMoveLeft}></i>
      <i className="arrowRight fas fa-arrow-circle-right" onClick = {props.handleMoveRight}></i>
      <i className="exitIcon far fa-times-circle" onClick = {props.handleChangeFullScreen}></i>
        
      <Swipeable onSwipedLeft = {props.handleMoveRight} onSwipedRight = {props.handleMoveLeft} className = "ContainerImageFullScreen">
        <div className = "Title">{props.array.title}</div>
        <img
          src = {require("" + props.array.url)}
          key = {props.array.id}
          alt = ""
          title = {props.array.title}
          description = {props.array.description}
          id = {props.array.id} 
        ></img>
        <div className = "Description">{props.array.description}</div>
      </Swipeable> 
    </div>
  );
}