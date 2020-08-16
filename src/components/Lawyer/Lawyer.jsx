import React from 'react';
import './Lawyer.scss'

const Lawyer = () => {

  const Image = 'https://i.pinimg.com/originals/09/0a/63/090a63604e6f58e67a496861fcad41bd.png'

  return (
    <div className="Lawyer">
      <section className="Lawyer__Profile">
        <img className="Lawyer__Profile--Image" src={Image} alt="Foto" />
        <div className="Lawyer__Profile--Info">
          <span>
            <b>Telefono: </b> 321 321 1234
          </span>
          <span>
            <b>Email: </b> hernandobl@hotmail.com
          </span>
        </div>
      </section>
      <section className="Lawyer__Desc">
        <h2>Nombre</h2>
        <h3>Cargo</h3>
        <p>INtroduccion</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A hic deserunt nesciunt recusandae ipsa laborum laudantium necessitatibus neque debitis eveniet suscipit, quia expedita dicta obcaecati vero dolor adipisci? Nisi, repudiandae.</p>
      </section>
    </div>
  );
};

export default Lawyer;