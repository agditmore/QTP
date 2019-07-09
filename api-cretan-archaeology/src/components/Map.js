import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showInfoWindow: false,
            currentMarker: {},
            selectedSite: {},
        }
    }

    handleMarkerClick = (site, marker, e) => {
        this.setState({
            showInfoWindow: true,
            currentMarker: marker,
            selectedSite: site,
        })
    }
    
    render(){
        return(
            <Map 
                google={this.props.google} 
                zoom={11}
                initialCenter={{
                    lat: 35.1708712,
                    lng: 25.7314087
                }} 
                >
                {this.props.displayedSiteList.map(site => {
                    return(
                        <Marker
                            name={site.name}
                            position={site.location}
                            onClick={this.handleMarkerClick}
                        />
                    )
                })}
                 <InfoWindow
                    marker={this.state.currentMarker}
                    visible={this.state.showInfoWindow}
                >
                <div>
                    <h2>
                        {this.state.selectedSite.name}
                    </h2>
                </div>
                </InfoWindow>
            </Map>
        )
    }
}

// export default GoogleApiWrapper({apiKey: })(MapContainer) removed API key