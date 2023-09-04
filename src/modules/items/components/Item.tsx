import { Button, Card } from 'react-bootstrap';
import { ItemType } from '../types/ItemTypes';

export function Item(item: ItemType) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={item.imgUrl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{item.title}</span>
          <span className="ms-2 text-muted">{item.price}</span>
        </Card.Title>
        <div className="mt-auto">
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: '.5rem' }}
          >
            <p>{item.description}</p>
            <p>{item.category}</p>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ gap: '.5rem' }}
            ></div>
            <Button variant="success" size="sm">
              add to Cart
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
