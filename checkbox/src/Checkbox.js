import React, { useState } from 'react';

function Checkbox() {
  const [isCitizen, setIsCitizen] = useState(false);
  const [isOver21, setIsOver21] = useState(false);

  function handleCitizenChange(event) {
    setIsCitizen(event.target.checked);
  }
  function handleOver21Change(event) {
    setIsOver21(event.target.checked);
  }

  return (
    <div>
      <h1>Checklist</h1>
      <div>
        <label>
          Are you a Citizen?
          <input
            type="checkbox"
            checked={isCitizen}
            onChange={handleCitizenChange}
          />
        </label>
        <br />
        <label>
          Are you over 21?
          <input
            type="checkbox"
            checked={isOver21}
            onChange={handleOver21Change}
          />
        </label>
      </div>
      <div>
        <p>Are you a Citizen: {isCitizen ? 'Yes' : 'No'}</p>
        <p>Are you over 21: {isOver21 ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
}

export default Checkbox;
