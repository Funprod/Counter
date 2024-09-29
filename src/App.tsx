import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Counter } from './component/Counter';
import { SettingsCounter } from './component/SettingsCounter';

function App() {
    let maxValue = 5;
    let minValue = 0;

    const [maxSetValue, setMaxSetValue] = useState<number>(maxValue);
    const [currentValue, setCurrentValue] = useState<number>(minValue);
    const [minSetValue, setMinSetValue] = useState<number>(minValue);
    const [error, setError] = useState<string | null>('');
    const [status, setStatus] = useState<boolean>(true);

    useEffect(() => {
        let getMaxValue = localStorage.getItem('setMaxValue');
        let getMinValue = localStorage.getItem('setStartValue');
        if (getMaxValue && getMinValue) {
            setMaxSetValue(JSON.parse(getMaxValue));
            setMinSetValue(JSON.parse(getMinValue));
            setCurrentValue(JSON.parse(getMinValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('setMaxValue', JSON.stringify(maxSetValue + 1));
        localStorage.setItem('setStartValue', JSON.stringify(minSetValue + 1));
    }, [status]);

    const onClickIncHandler = () => {
        currentValue < maxSetValue && setCurrentValue(currentValue + 1);
    };

    const onClickRestHandler = () => {
        setCurrentValue(minSetValue);
    };

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxSetValue(Number(e.currentTarget.value));
        setError('Выберите настройки и нажмите Set');
        setStatus(false);
        localStorage.setItem('setMaxValue', JSON.stringify(maxSetValue));
        if (
            Number(e.currentTarget.value) < minValue ||
            Number(e.currentTarget.value) <= minSetValue ||
            minSetValue < 0
        ) {
            setStatus(true);
            setError('Некорректное значение');
        }
    };
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinSetValue(Number(e.currentTarget.value));
        setError('Выберите настройки и нажмите Set');
        setStatus(false);
        localStorage.setItem('setStartValue', JSON.stringify(minSetValue));
        if (
            Number(e.currentTarget.value) < minValue ||
            Number(e.currentTarget.value) >= maxSetValue
        ) {
            setStatus(true);
            setError('Некорректное значение');
        }
    };

    const btnSetValue = () => {
        setStatus(!status);
        setCurrentValue(minSetValue);
        setError(null);
    };

    return (
        <div className="App">
            <div className={'container'}>
                <Counter
                    currentValue={currentValue}
                    onClickIncHandler={onClickIncHandler}
                    onClickRestHandler={onClickRestHandler}
                    maxValue={maxSetValue}
                    minValue={minValue}
                    error={error}
                />
                <SettingsCounter
                    btnSetValue={btnSetValue}
                    onChangeMaxValue={onChangeMaxValue}
                    onChangeMinValue={onChangeMinValue}
                    maxValue={maxSetValue}
                    minValue={minSetValue}
                    status={status}
                />
            </div>
        </div>
    );
}

export default App;
