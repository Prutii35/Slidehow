import React from 'react';

export default function GridOfPhotos(props) {
  return( 
    <div className="Container">
      <div className="inner-width">
        <h1>Gallery of photos</h1>
        <div className="gallery">
            {
              props.photos.map(data =>
                <img
                  src = {require("" + data.url)}
                  key = {data.id}
                  alt = ""
                  title = {data.title}
                  description = {data.description}
                  onClick = {props.handleToggleFullScreen}
                  id = {data.id}
                ></img>)
            }
        </div>
      </div>
    </div>
  );
}

