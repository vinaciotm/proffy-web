import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {
  avatar?: string;
  name: string;
  subject: string;
  description: string;
  text: string;
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={props.avatar} alt="Inácio" />
        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>

      <p>
        {props.description}
        <br></br>
        {props.text}
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>

        <button>
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
