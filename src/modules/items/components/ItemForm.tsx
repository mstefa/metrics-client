import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function ItemForm() {
  const [input, setInput] = useState({
    title: '',
    price: '',
    category: [{}],
  });

  const handleInputChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeOptions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = Array.from(e.target.selectedOptions, (option) => {
      return { id: option.id, name: option.value };
    });
    setInput({
      ...input,
      category: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.title && input.title.length > 0) {
      console.error(input);
    } else {
      window.alert('Revisa los datos');
    }
  };

  const category = [
    {
      id: '1',
      name: 'type1',
    },
    {
      id: '2',
      name: 'type2',
    },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Cual es el nombre de tu Producto?</Form.Label>
        <Form.Control
          type="text"
          placeholder="Product Title"
          name="title"
          onChange={handleInputChange}
          value={input.title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          onChange={handleInputChange}
          value={input.price}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select
          aria-label="Default select example"
          id="category"
          name="category"
          // multiple
          onChange={handleChangeOptions}
        >
          {category.map((e) => {
            return (
              <option id={e.id} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        {' '}
        Submit
      </Button>
    </Form>
  );
}
