import { render } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GetItem />', () => {
    const title = 'Dragon Ball';
    const url = 'https://api.giphy.com';
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
});
