import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from '../index';

describe("modal component", () => {

    test('component should render without error', () => {
        let close = jest.fn();
        render(<Modal show={true} content={<h1>test</h1>} onClose={close} />);
        let mainDiv: HTMLDivElement | null = document.querySelector('.default-modal-wrapper');
        let contentDiv: HTMLDivElement | null = document.querySelector('.default-modal-wrapper__content-div');

        expect(mainDiv).not.toBe(null);
        expect(mainDiv).not.toBe(undefined);
        expect(contentDiv).not.toBe(null);
        expect(contentDiv).not.toBe(undefined);
    });

    test('check show value', () => {
        let close = jest.fn();
        render(<Modal show={true} content={<h1>test</h1>} onClose={close} />);
        let mainDiv: HTMLDivElement | null = document.querySelector('.default-modal-wrapper');

        if (mainDiv) {
            fireEvent.click(mainDiv);
        }

        setTimeout(() => {
            expect(close).toHaveBeenCalledTimes(1);
            expect(mainDiv).toBeNull();
        }, 1000);
    });

    test('check div content dont close', () => {
        let close = jest.fn();
        render(<Modal show={true} content={<h1>test</h1>} onClose={close} />);
        let contentDiv: HTMLDivElement | null = document.querySelector('.default-modal-wrapper__content-div');

        if (contentDiv) {
            fireEvent.click(contentDiv);
        }

        setTimeout(() => {
            expect(close).toHaveBeenCalledTimes(0);
            expect(contentDiv).not.toBeNull();
        }, 1000);
    });
});