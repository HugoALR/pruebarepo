import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputCount, setInputCount] = useState(0);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (index, value) => {
    // Puedes realizar cualquier lógica adicional con los valores de los inputs aquí
    console.log(`Input ${index + 1}: ${value}`);
  };

  const handleInputCountChange = (e) => {
    const count = parseInt(e.target.value);
    setInputCount(count || 0);
  };

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < inputCount; i++) {
      inputs.push(
        <input
          key={i}
          type="text"
          onChange={(e) => handleInputChange(i, e.target.value)}
        />
      );
    }
    return inputs;
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Abrir Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <label>Ingrese la cantidad de inputs:</label>
            <input
              type="number"
              value={inputCount}
              onChange={handleInputCountChange}
            />
            {renderInputs()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
