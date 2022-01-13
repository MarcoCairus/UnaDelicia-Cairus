import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
const CarWidget = () => {
    let cont= 2;
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{cont}</span>
        </div>
    )
}

export default CarWidget

