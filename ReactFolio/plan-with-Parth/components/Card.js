
function Card(id, image, info, price, name){
    return(
        <div className="card">
            <img src={image} alt="" className="image"></img>
            <div className="tour-details">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    );
}

export default Card;