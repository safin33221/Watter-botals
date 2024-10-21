import PropTypes from "prop-types";
import "./Bottols.css"
const Bottols = ({bottol,handleAddToCart}) => {
    const {name,img,price} = bottol;
    return (
        <div className="bottol">
            <img src={img} alt="" />
            <h4>bottols:{name}</h4>
            <p>price:{price}</p>
            <button onClick={()=>handleAddToCart(bottol)}>Purches</button>
        </div>
    );
};
Bottols.propTypes ={
    bottol:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired

}
export default Bottols; 