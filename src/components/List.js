import React, { useState, Fragment } from 'react';

import reviews from '../data/data';

import Card from './Card';
import Title from './Title';

const List = () => {
  const [allData, setData] = useState(reviews);
  const [countData, setCountData] = useState(0);

  const forwardHandlerBtn = () => {
    setCountData(prevCount => prevCount + 1);

    if (countData === 3) {
      setCountData(0);
    }
  };

  const backHandlerBtn = () => {
    setCountData(prevCount => prevCount - 1);

    if (countData === 0) {
      setCountData(3);
    }
  };

  const randomHandlerBtn = () => {
    const randomPerson = Math.floor(Math.random() * allData.length);
    setCountData(randomPerson);
  };

  return (
    <Fragment>
      <Title />
      <Card
        data={allData}
        count={countData}
        onForwardHandler={forwardHandlerBtn}
        onBackHandler={backHandlerBtn}
        onRandomHandler={randomHandlerBtn}
      />
    </Fragment>
  )
};

export default List;