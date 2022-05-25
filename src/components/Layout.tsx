import React, { useEffect, useState } from 'react';
import {Map} from './Map';
import {List} from './List';
// @ts-ignore
import {fetchHouses} from 'sreality-client';
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const MapWrapper = styled.div`
  flex: 1;
`;

const ListWrapper = styled.div`
  width: 200px;
  padding: 20px;
`;



export const Layout = () => {

  const [houses, setHouses] = useState([]);

    useEffect(()=>{
      fetchHouses(1, 10, 'municipality', 3468).then((data:any) => {
        setHouses(data)
      }); 
    }, [])

    return(
      <Wrapper>
        <MapWrapper>
          <Map properties={houses} />
        </MapWrapper>
        <ListWrapper>
          <List properties={houses}  />
        </ListWrapper>
      </Wrapper>
    )
}
