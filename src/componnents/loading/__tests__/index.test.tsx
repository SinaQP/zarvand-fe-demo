import React from 'react';
import { render } from 'react-dom';
import Loading from '../index';

let div: HTMLDivElement;
describe('tesing loading component', () => {
    beforeEach(()=>{
        div = document.createElement('div');
        document.body.appendChild(div);
    })
    afterEach(()=>{
        div.remove();
    });
    
    it('should render component', () => {
        render(<Loading loading={true}/> , div);
        const loading = document.querySelector('.fullscreen-loading-component') as HTMLDivElement;
        expect(loading).not.toBeUndefined();
        expect(loading).not.toBeNull();
    });
    
    it('should not render component', () => {
        render(<Loading loading={false}/> , div);
        const loading = document.querySelector('.fullscreen-loading-component') as HTMLDivElement;
        expect(loading).not.toBeUndefined();
        expect(loading).toBeNull();
    });
  
    it('massage should be exist', () => {
        render(<Loading loading={true} massage={"hello"}/> , div);
        const loading = document.querySelector('.fullscreen-loading-component') as HTMLDivElement;
        expect(loading).not.toBeUndefined();
        expect(loading).not.toBeNull();
    });
});