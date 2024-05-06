import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartIndicator = () => {
  const navigate = useNavigate();

  return (
    <div className="ml-auto mt-3 mb-4">
      <Button color="primary" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="ml-2">0</span>
      </Button>
    </div>
  );
};

export default CartIndicator;
