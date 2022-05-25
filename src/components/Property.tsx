import React from 'react';
import styled from 'styled-components';

type PropertyProps = {
  property: any
}

const Wrapper = styled.div`
  padding: 20px 0;
  border-bottom: solid 1px #eee

`;
const Images = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: auto;

`;
const Image = styled.img`
  height: 100px;
  margin-right: 3px;

`;

export const Property = ({property}: PropertyProps) => {
  return (
    <Wrapper>
      <Images>{property.images.map((image:string)=> <Image src={image} />)}</Images>
      <div>lat: {property.coordinates.latitude}</div>
      <div>lng: {property.coordinates.longitude}</div>
    </Wrapper>
  )
}

