import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'

describe('Counter', () => {
    test('Test render', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
    test('increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
        fireEvent.click(screen.getByTestId('btn-increment'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    test('decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } })
        fireEvent.click(screen.getByTestId('btn-decrement'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})
