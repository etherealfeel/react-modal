import React from 'react';
import './modal.css';

const Modal = ({active, setActive, children}) => {
    if(!active) return null;
  return (
    <div className='overlay' onClick={() => setActive(false)}>
        <div className='modalContainer' onClick={e => e.stopPropagation()}>
            <p className="closeBtn" onClick={() => setActive(false)}>&times;</p>
            {children}
        </div>
    </div>
  )
}

export default Modal