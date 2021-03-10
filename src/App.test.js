import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import App from './App'

describe('App', () => {
    test('it should render', () => {
        render(<App />)
        expect(screen.getByText(/(welcome to react-materialui-sandbox)/i)).toBeInTheDocument()
        cleanup()
    })
})
