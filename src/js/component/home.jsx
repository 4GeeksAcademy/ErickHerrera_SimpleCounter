import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';

// Componente SimpleCounter
const SimpleCounter = ({ digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix }) => {
    return (
        <div className="counter-container bg-dark text-white py-3">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="card card-gray m-2 p-2 d-flex align-items-center">
                    <FontAwesomeIcon icon={faClock} size="4x" /> 
                </div>
                <div className="card card-gray m-2 p-2">
                    <h1 className="display-2">{digitSix % 10}</h1>
                </div>
                <div className="card card-gray m-2 p-2">
                    <h1 className="display-2">{digitFive % 10}</h1>
                </div>
                <div className="card card-gray m-2 p-2">
                    <h1 className="display-2">{digitFour % 10}</h1>
                </div>
                <div className="card card-gray m-2 p-2">
                    <h1 className="display-2">{digitThree % 10}</h1>
                </div>
                <div className="card card-gray m-2 p-2">
                    <h1 className="display-2">{digitTwo % 10}</h1>
                </div>
                <div className="card card-gray m-2 p-2">
                    <h1 className="display-2">{digitOne % 10}</h1>
                </div>
            </div>
        </div>
    );
};

let counter = 0;
setInterval(function () {
    const digitSix = Math.floor(counter / 100000);
    const digitFive = Math.floor(counter / 10000);
    const digitFour = Math.floor(counter / 1000);
    const digitThree = Math.floor(counter / 100);
    const digitTwo = Math.floor(counter / 10);
    const digitOne = Math.floor(counter / 1);

    counter++;

    ReactDOM.render(
        <SimpleCounter
            digitOne={digitOne}
            digitTwo={digitTwo}
            digitThree={digitThree}
            digitFour={digitFour}
            digitFive={digitFive}
            digitSix={digitSix}
        />,
        document.querySelector('#app')
    );
}, 1000);

export default Home;