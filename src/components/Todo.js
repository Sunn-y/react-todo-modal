import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

export default function Todo({ id, text, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [isWobble, setWobble] = useState(false);

  const deleteHandler = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const wobbleModal = () => {
    setWobble(true);
    setTimeout(() => {
      setWobble(false);
    }, 1000);
  };

  const deleteHTodo = () => {
    onDelete(id);
  };

  return (
    <div className='card'>
      <h2>{text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && (
        <Modal
          isWobble={isWobble}
          onCancel={closeModal}
          onConfirm={deleteHTodo}
        />
      )}
      {showModal && <Backdrop onPreventCancel={wobbleModal} />}
    </div>
  );
}
