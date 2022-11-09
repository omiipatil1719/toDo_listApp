

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EventClick({ show, setitems, items, onHide, edittextId, edittitle }) {
  const [textState, settextState] = useState('');


  const edittext = (e) => {
    settextState(e.target.value)
  }

  const saveClick = () => {
    const newItems = items?.map(item => {
      if (item.id === edittextId) {
        return {
          ...item,
          title: textState,
        };
      }
      else {
        return item;
      }
    });

    setitems(newItems);
    onHide();
  }


  return (
    <>

      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input defaultValue={edittitle} onChange={edittext} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={saveClick}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventClick;
