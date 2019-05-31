import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
 
export default () => {
  return (
    <AlgoliaPlaces
      placeholder='Write an address here'
 
      options={{
        appId: 'plSIO1Q9Q2U5',
        apiKey: '21f9754dbf4d09b7e88de94ce3ff3582',
        language: 'en',
        countries: 'de',
        type: 'address'
      }}
    />
  );  
}