import React, { useContext } from 'react';
import PropertiesContext from '../contexts/PropertiesContext';
import { Property } from './Property';

type ListProps = {
  properties: Array<any>
}

export const List = ({properties}: ListProps) => {
  const { activePropertyId } = useContext(PropertiesContext);
  const handleActiveProperty = () => {
  }

  return (
    <div onClick={() => handleActiveProperty(property.propertyId)}>
      {properties.map((property:any,index: number)=> <Property property={property} key={index} />)}
    </div>
  )
}

