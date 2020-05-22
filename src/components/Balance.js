import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import CountUp from 'react-countup';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 className="balance">$
                <CountUp start={0} end={parseFloat(total)} duration={2.00} separator="," />
            </h1>
        </>
    )
}

export default Balance
