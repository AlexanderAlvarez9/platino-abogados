import React from 'react';
import './Lawyer.scss'

const Lawyer = () => {
  return (
    <div className="Lawyer">
      <section className="Lawyer__Profile">
        <img src="" alt="Foto" />
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