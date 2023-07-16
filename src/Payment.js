import React, {useContext, useState, useEffect} from 'react'
import Header from './Header'
import './Payment.css';
import { StateContext } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

export default function Payment() {
    const {basket, user} = useContext(StateContext);
    const basketTotal = basket.length > 0 ? basket.map((item) => (item.price)).reduce((acc, item) => acc+=item).toFixed(2) : 0; 
    
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payment/create?total=${basketTotal * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            navigate('/orders')
        })
        
    }

    const handleChange = e => {
        e.preventDefault();
        setDisabled(e.empty);
        setError(e.error ? e.message : " ");
    }

    return (
    <div>
        <Header />
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.multiFactor.user.email}</p>
                        <p>House no 145</p>
                        <p>DHA Lahore, Punjab Pakistan</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}        
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <p>
                                            Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
                                        </p>
                                        <small className='subtotal__gift'>
                                            <input type='checkbox' /> This order contains a gift
                                        </small>
                                    </>
                                )} 
                                decimalScale={2}
                                value={basketTotal}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                            </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
