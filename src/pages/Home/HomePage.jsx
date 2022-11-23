/** @format */

import axios from 'axios';
import Card from 'components/Card/Card';
import FilterSort from 'components/FilterSort/FilterSort';
import filterFunction from 'functions/filterFunction';
import handleQparams from 'functions/handleQparams';
import sortFunction from 'functions/sortFunction';
import updateUrlQparams from 'functions/updateUrlQparams';
import 'pages/Home/HomePage.scss';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

let cardsOriginal = [];
const HomePage = () => {
  // location objet
  let location = useLocation();
  // qparams object
  let searchParams = new URLSearchParams(location.search);
  // forword page
  const history = useHistory();
  // use state fetched cards
  const [cards, setCards] = useState([]);
  // get the value of search key
  const [finishFetch, setFinishFetch] = useState(false);
  // get the value of search key
  const searchQparams= searchParams.get('search');
  // get the value of sort key
  const sortQparams = searchParams.get('sort');
  // use ref for root
  const firstRender = useRef(true);
  // onload
  useEffect(() => {
    axios.get('/cards/cards').then(res => {
      setCards(res.data);
      cardsOriginal = res.data;
    });
  }, []);
  // waiting to change in cards arr
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    // finish fetching
    setFinishFetch(true);
  }, [cards]);

  // waiting to change in finishFetch
  useEffect(() => {
    if (finishFetch) {
      handleQparams(searchQparams, sortQparams, setCards, cards);
    }
  }, [finishFetch]);
  useEffect(()=>{
    if(!searchParams.get("search")&&!searchParams.get("sort")){
      filterFunction("", setCards, cardsOriginal);
    }
  },[location.search])
  

  //  filter function
  const handleFilterFunction = input => {
    filterFunction(input, setCards, cardsOriginal);
    // function to update the url(adding the key&value)
    updateUrlQparams(searchParams, 'search', input, '', history);
  };
  // sort function
  const handleSortFunction = input => {
    sortFunction(input, setCards, cards);
    // function to update the url(adding the key&value)
    updateUrlQparams(searchParams, 'sort', input, 'Sort', history);
  };
  return (
    <div className='homePage mt-3'>
      <FilterSort
        sortonchange={handleSortFunction}
        onclick={handleFilterFunction}
        searchvalue={searchQparams || ''}
        sortvalue={sortQparams || ''}
      />
      <div className='row'>
        {!cards.length ? (
          <div className='col'>
            <h3>No cards found</h3>
          </div>
        ) : null}
        {cards.map((item, indx) => (
          <div
            key={indx}
            className='col-sm-4'>
            <Card
              url={item.image.url}
              alt={item.image.alt}
              title={item.title}
              subTitle={item.subTitle}
              description={item.description}
              phone={item.phone}
              address={item.address}
              id={item._id}
              btn1={true}
              onclickMoreInfo={() => {
                history.push(`/bussinesscard/${item._id}`);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
