/** @format */

import axios from 'axios';
import Card from 'components/Card/Card';
import FilterSort from 'components/FilterSort/FilterSort';
import filterFunction from 'functions/filterFunction';
import { useEffect, useRef, useState } from 'react';
import 'pages/MyCards/Mycards.scss';
import sortFunction from 'functions/sortFunction';
import { useHistory, useLocation } from 'react-router-dom';
import handleQparams from 'functions/handleQparams';
import updateUrlQparams from 'functions/updateUrlQparams';
let cardsOriginal = [];
const MyCards = () => {
  // location objet
  let location = useLocation();
  // qparams object
  let searchParams = new URLSearchParams(location.search);
  // forword page
  const history = useHistory();
  // state for updating when finish fetching
  const [finishFetch, setFinishFetch] = useState(false);
  // get the value of search key
  const searchQparams = searchParams.get('search');
  // get the value of sort key
  const sortQparams = searchParams.get('sort');
  // use ref for root
  const firstRender = useRef(true);
  // use state fetched cards
  const [cards, setCards] = useState([]);
  // onload
  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios.get('/cards/my-cards').then(res => {
        setCards(res.data);
        cardsOriginal = res.data;
      });
    }
  }, []);
  // waiting to change in cards arr
  useEffect(() => {
    // ignore first render
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
  //   filter function
  const handleFilterFunction = input => {
    filterFunction(input, setCards, cardsOriginal);
    // function to update the url(adding the key&value)
    updateUrlQparams(
      searchParams,
      'search',
      input,
      '',
      history,
      location.pathname
    );
  };
  // delete card from my cards
  const handleDeleteCard = id => {
    axios.delete(`/cards/${id}`).then(res => {
      let copyCard = cards.filter(item => item._id != id);
      setCards(copyCard);
    });
  };
  // sort function
  const handleSortFunction = input => {
    sortFunction(input, setCards, cards);
    // function to update the url(adding the key&value)
    updateUrlQparams(
      searchParams,
      'sort',
      input,
      'Sort',
      history,
      location.pathname
    );
  };

  return (
    <div className='myCards mt-3'>
      <FilterSort
        sortonchange={handleSortFunction}
        onclick={handleFilterFunction}
        searchvalue={searchQparams||""}
        sortvalue={sortQparams||""}
      />
      <div className='row w-100'>
        {!cards.length ? (
          <div className='col'>
            <h3>No cards found</h3>
          </div>
        ) : null}
        {cards.map((item, indx) => {
          let query=JSON.stringify(item)
          query=query.replaceAll("&",`trushTrushtrush`)
         return <div
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
              btn2={true}
              onclickDeleteBtn={handleDeleteCard}
              onclickEditBtn={()=>{history.push(`/createcard?id=${item._id}&obj=${query}`)}}
            />
          </div>
})
        }
      </div>
    </div>
  );
};

export default MyCards;
