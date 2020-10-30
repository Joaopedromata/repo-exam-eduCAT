import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import ModalClassroom from '../components/ModalClassroom'

describe('Tests for ModalClassroom component', () => {
    it('Should alternate state of student', async () => {
        const { getByTestId } = render(<ModalClassroom />)
        const button = await waitFor(() => getByTestId('wrapper-button'))

        const click = fireEvent.click(button)
    
        expect(click).toBe(true)
    })    
})