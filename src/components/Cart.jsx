import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'

const Cart = ({ cart = [] }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: 'none' }}>
        {cart.map((book, i) => (
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => {}}>
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold mb-3 ml-4">
        TOTAL:{' '}
        {cart.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
        $
      </Col>
    </Row>
  </Row>
)

export default Cart
