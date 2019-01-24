import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Container, Button } from '../../components/index';
import { RouteComponentProps } from 'react-router';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { axiosErrorHandler } from '../utils';
import { CheckoutForm, Invoice, InvoiceBox } from './Checkout.styles';

interface CheckoutProps extends RouteComponentProps {
  match: any;
}

const Checkout = (props: CheckoutProps) => {
  const [error, setError] = useState<any>({ msg: '', error: false });
  // TODO: change state to include no default values
  const [stay, setStay] = useState({
    guest_name: '',
    house_id: 0,
    house_name: '',
    check_in: '',
    check_out: '',
    price: 0,
    diff: 0,
    cleaning_fee: 0,
    extra_guests: 0,
    extra_fee: 0,
  });
  const [stays, setStays] = useState([]);

  const token = localStorage.getItem('token');
  const headers: AxiosRequestConfig = {
    headers: { Authorization: token },
  };

  const url =
    process.env.REACT_APP_backendURL || 'https://cleaner-pos.herokuapp.com/';

  async function fetchStay() {
    const { id } = props.match.params;
    try {
      const { data }: AxiosResponse = await axios.get(
        `${url}stays/${id}`,
        headers,
      );
      setStay(data);
    } catch (e) {
      axiosErrorHandler(setError);
    }
  }

  async function triggerPayment(sum: number) {
    // const { id } = useContext(user);
    return;
    try {
      const body = {
        id: 1,
        token: '324234234234',
        amount: sum,
      };

      const { data }: AxiosResponse = await axios.post(
        `${url}connect/createpayment`,
        body,
        headers,
      );
      setStay({ ...stay, ...data });
    } catch (e) {
      axiosErrorHandler(setError);
    }
  }

  async function fetchStays() {
    // return;
    try {
      const { data }: AxiosResponse = await axios.get(
        `${url}stays?test=true`,
        headers,
      );
      setStays(data);
    } catch (e) {
      axiosErrorHandler(setError);
    }
  }

  useEffect(() => {
    fetchStay();
    fetchStays();
  }, []);

  const {
    guest_name,
    house_id,
    house_name,
    check_in,
    check_out,
    price,
    diff,
    cleaning_fee,
    extra_guests,
    extra_fee,
  } = stay;

  const total = +extra_guests * +extra_fee + diff * price + +cleaning_fee;
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <h1 data-testid='guest-name'>{guest_name}</h1>

          <div>
            Nights:{' '}
            <input
              value={diff}
              onChange={(e) =>
                // @ts-ignore
                setStay({ ...stay, diff: e.target.value })
              }
            />
          </div>
          <div>Cleaning Fee: ${cleaning_fee}</div>
          <div>
            Extra Guests:{' '}
            <input
              value={extra_guests || 0}
              onChange={(e) =>
                // @ts-ignore
                setStay({ ...stay, extra_guests: e.target.value })
              }
            />
          </div>
        </div>
        <div>
          <CheckoutForm>
            {/* TODO: implement onChange to filter through stays */}
            <label htmlFor='stay-search' style={{ display: 'hidden' }}>
              Search for different Stay
            </label>
            <input
              id='stay-search'
              name='stay'
              placeholder='Search for different stay'
            />
          </CheckoutForm>
          <Invoice>
            <h3>Invoice</h3>
            {/* TODO: implement axios call to change stay to account for new inputs */}
            <Button
              text={`Pay $${total}`}
              colour='#0aa047'
              onClick={() => triggerPayment(total)}
              datatestid='payment-button'
            />
            <InvoiceBox>
              <span>
                {diff} Nights x ${price}
              </span>
              <span>${price * diff}</span>
            </InvoiceBox>
            <InvoiceBox>
              <span>Cleaning Fee:</span>
              <span>${cleaning_fee}</span>
            </InvoiceBox>
            {extra_guests && (
              <InvoiceBox data-testid='extra-guests'>
                <span>
                  {extra_guests} Extra Guests x ${extra_fee}
                </span>
                <span>{extra_fee * extra_guests}</span>
              </InvoiceBox>
            )}
            <div data-testid='total-amount'>Total: ${total}</div>
          </Invoice>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
