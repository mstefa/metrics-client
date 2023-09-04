import { Row, Col } from 'react-bootstrap';
import { Item } from '../modules/items/components/Item';
import { useItemsContext } from '../modules/items/context/ItemsContext';

export function Store() {
  const { items } = useItemsContext();

  return (
    <Row md={2} xs={1} lg={3} className="g-3">
      {items.map((item) => (
        <Col key={item.id}>
          <Item {...item} />
        </Col>
      ))}
    </Row>
  );
}
