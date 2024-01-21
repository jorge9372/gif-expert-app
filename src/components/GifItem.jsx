import PropTypes from 'prop-types'  

export const GifItem = ({ title, url }) => {
    

    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};


/*
    Añadir PropTypes... npm install
        title obligatorio
        url obligatorio

    Evaluar el snapshot

*/


GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired    
}
