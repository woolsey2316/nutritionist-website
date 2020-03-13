{this.state.hover 
    ? <InfoBox 
       onClick={()=>{this.setPinAsCenter({
                       lat: this.state.lat, 
                       lng: this.state.lng
               })}
       lat={this.state.lat}
       lng={this.state.lng}
       facility={this.state.facility}
   : null
 }