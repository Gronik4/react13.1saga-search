import React from 'react';
import gif from '../load.gif';
import { useSelector, useDispatch } from 'react-redux';
import { detailChoice } from '../actions/actionCreator';

export const ShowDetails = ({ details_result }) => {
  const { item } = useSelector((state) => state.searching);
  const { data, loading, error, choice} = details_result;
  console.log(details_result);
  const dispatch = useDispatch();

  function reloadDetails() {
    console.log(`choice= ${choice}`);
    dispatch(detailChoice(choice));
  }
  
  const note = data? data.name: 'выберите услугу';
  const head = item? <p>Детали услуги:{note}</p>: null;
  const load = <p className='li_load'>Loading... <img className='load' src={gif} alt='loading'/></p>;
  const err = <div className='error'>
    Произошла ошибка сервера! <button className='btn' onClick={reloadDetails}>Повторить запрос</button>
  </div>;
  const selecting = data? <div className='service'>
  <p className='det'>ID: {data.id}</p>
  <p className='det'>Услуга: {data.name}</p>
  <p className='det'>Цена: {data.price}</p>
  <p className='det'>Описание: {data.content}</p>
</div>: null;
  return (
    <div>
     {head}
     {error? err: loading? load: selecting} 
    </div>
  )
}

