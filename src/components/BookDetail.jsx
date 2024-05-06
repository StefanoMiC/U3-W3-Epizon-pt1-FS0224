import { Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const BookDetail = ({ bookSelected }) => {
  const dispatch = useDispatch();
  // useDispatch() ritorna la nostra funzione dispatch() che utilizzeremo per inviare l'ACTION al reducer
  // di conseguenza, chiamarla avvierà il processo di modifica dello stato globale (redux store), risvegliando il reducer di competenza.
  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img className="book-cover" src={bookSelected.imageUrl} alt="book selected" />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="font-weight-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="font-weight-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              <Button
                color="primary"
                onClick={() => {
                  // l'oggetto passato come argomento alla dispatch è sempre un oggetto ACTION:
                  // di conseguenza ci vuole un TYPE obbligatorio e forse un PAYLOAD (in questo caso ci servirà di sicuro!)
                  dispatch({ type: "ADD_TO_CART", payload: bookSelected });
                }}
              >
                ADD TO CART
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Start by clicking on a book!</h3>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default BookDetail;
