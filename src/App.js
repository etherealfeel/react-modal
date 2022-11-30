import Modal from './Modal/Modal';
import {useState} from 'react';

function App() {

  const [modalActive, setModalActive] = useState(true);

  return (
    <>
      <button className='modalBtn' onClick={() => setModalActive(true)}>Click me!</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="modalContent">
          <img src='https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png' alt='modalImage'/>
          <h2 className="modalTitle">Lorem, ipsum dolor!</h2>
          <p className="modalText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, non qui dolores provident maiores quam fuga quia tenetur libero doloribus!</p>
        </div>
        <div className="modalBtns">
          <button className="btnPrimary">
              Subscribe
          </button>
          <button className="btnSecondary">
              Ignore
          </button>
        </div>
      </Modal >
    </>
  );
}

export default App;
