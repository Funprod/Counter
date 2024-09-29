import React from 'react';
import { Button } from './Button';

type CounterPropsType = {
    currentValue: number;
    onClickIncHandler: () => void;
    onClickRestHandler: () => void;
    maxValue: number;
    minValue: number;
    error: string | null;
};

export const Counter: React.FC<CounterPropsType> = ({
    currentValue,
    onClickIncHandler,
    onClickRestHandler,
    maxValue,
    minValue,
    error,
}) => {
    return (
        <div className="counter">
            <div
                className={
                    currentValue === maxValue
                        ? 'counter-value counter-red'
                        : 'counter-value'
                }
            >
                {error ? <p className="SettingError">{error}</p> : currentValue}
            </div>
            <div className="btn-container">
                <Button
                    classes="btn"
                    disabled={currentValue === maxValue || !!error}
                    onClick={onClickIncHandler}
                    title={'inc'}
                />
                <Button
                    classes="btn"
                    disabled={currentValue === minValue || !!error}
                    onClick={onClickRestHandler}
                    title={'reset'}
                />
            </div>
        </div>
    );
};
