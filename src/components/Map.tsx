import React from 'react';
import { Map as MapCanvas,ZoomControl ,MouseControl,CompassControl,KeyboardControl,Path,PathLayer, Marker,MarkerLayer} from 'react-mapycz'

type MapProps = {
  properties: Array<any>
}

export const Map = ({properties}: MapProps) => {
  console.log(properties)
  return (
    <MapCanvas center={{lat: 50.093739, lng:  14.542775}} height="1000px" zoom={11} >
      <MarkerLayer>
        {properties.map((property:any)=> <Marker 
          coords={{lat: property.coordinates.latitude, lng: property.coordinates.longitude}} 
          card={{
              header: `${property.locality}`,
              body: `<img src="${property.images[0]}" height="100" />${property.description}`, 
              footer: `${property.price} Kč`
            }} 
        />)}
      </MarkerLayer>
      <PathLayer>
        <Path
          coords={[
            {'lat': 49.5329453, 'lng': 15.5110686},
            {'lat': 48.5440406, 'lng': 19.4509133},
            {'lat': 49.5457367, 'lng': 18.4479764},
            {'lat': 49.5329453, 'lng': 15.5110686},
          ]}
          dynamicRoute={false}
        />
      </PathLayer>
      <CompassControl/>
      <ZoomControl/>
      <MouseControl zoom={true} pan={true} wheel={true}/>
      <KeyboardControl />
    </MapCanvas>
  )
}

