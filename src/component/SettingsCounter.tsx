import { Button } from './Button';
import React, { ChangeEvent, useState, useEffect } from 'react';

type SettingsCounterType = {
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void;
    btnSetValue: () => void;
    maxValue: number;
    minValue: number;
    status: boolean;
};

export const SettingsCounter: React.FC<SettingsCounterType> = ({
    onChangeMaxValue,
    onChangeMinValue,
    maxValue,
    minValue,
    btnSetValue,
    status,
}) => {
    return (
        <div className={'settings'}>
            <div className={'settings-value'}>
                <span>max value</span>
                <input
                    type="number"
                    value={maxValue}
                    onChange={onChangeMaxValue}
                />
                <span>start value</span>
                <input
                    type="number"
                    value={minValue}
                    onChange={onChangeMinValue}
                />
            </div>
            <div className={'btn-container'}>
                <Button
                    classes={'btn'}
                    title={'set'}
                    onClick={btnSetValue}
                    disabled={status}
                />
            </div>
        </div>
    );
};
