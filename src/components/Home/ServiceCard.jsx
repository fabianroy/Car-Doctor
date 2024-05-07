import PorpTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div>
            <div className="card md:w-90 card-compact bg-base-100 shadow-xl">
                <figure><img className='h-60 w-full' src={img} alt={title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price : ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/bookservice/${_id}`} className="btn bg-orange-600 text-white font-semibold"><button>Book</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PorpTypes.object
}