import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GetItem />', () => {
    const title = 'Dragon Ball';
    const url = 'https://api.giphy.com/dragonball.jpg';
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debde de mostrar la imagen con el url y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe mostrar el titulo en el compoente', () => {
        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    });
});
