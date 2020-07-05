import React, { Component } from 'react';

class Music extends Component {
  render() {
    return (
      <div style={{margin: "10px"}}>
        <iframe title="Love Speaks EP" style={{margin: "20px", border: 0, width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=775872602/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://anarchysrainbow.bandcamp.com/album/love-speaks-ep">Love Speaks EP by Anarchy&#39;s Rainbow</a></iframe>
        <iframe title="Homeward Bound EP" style={{margin: "20px", border: 0, width: "350px", height: "470px"}} src="https://bandcamp.com/EmbeddedPlayer/album=100595120/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://anarchysrainbow.bandcamp.com/album/homeward-bound-ep">Homeward Bound EP by Anarchy&#39;s Rainbow</a></iframe>
      </div>
    );
  }
}

export default Music;
