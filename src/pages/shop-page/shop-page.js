import React, { useEffect, useContext } from 'react';
import { ProductContext } from '../../contexts/product-context';
import { API_URL } from '../../helpers/config';
import { AJAX } from '../../helpers/helpersFns';
import {
  fetchStart,
  fetchSuccess,
  fetchError,
} from '../../actions/product-actions';

const ShopPage = () => {
  const { state, dispatch } = useContext(ProductContext);
  console.log(state);
  useEffect(() => {
    let subscribed = true;

    (async () => {
      try {
        dispatch(fetchStart());

        if (subscribed) {
          const data = await AJAX(`${API_URL}`);
          const products = [...data.products];
          dispatch(fetchSuccess(products));
        }
      } catch (err) {
        dispatch(fetchError(err));
      }
    })();

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <div className="shop__page">
      <p>Shop Page</p>
    </div>
  );
};

export default ShopPage;
