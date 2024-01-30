import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

import PropTypes from 'prop-types';

export const GifGrid = ({ category, onDelete }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <div className="card-grid-header">
                <h2>{category}</h2>
                <button onClick={() => {onDelete(category)}}>Eliminar</button>
            </div>
            {isLoading && <h3>Cargando...</h3>}
            <div className="card-grid">
                {images.map((image) => (
                    <GifItem key={image.id} {...image} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};
