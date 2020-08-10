import React from "react";

import PageHeader from "../../components/PageHeader";

import TeacherItem from "../../components/TeacherItem";

import "./styles.css";

function Index() {
  return (
    <div id="page-teacher-list">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>

            <input id="subject" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>

            <input id="week_day" type="text" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>

            <input id="time" type="text" />
          </div>
        </form>
      </PageHeader>

      <main>
        <div id="page-teacher-list-content">
          <TeacherItem
            avatar="https://avatars2.githubusercontent.com/u/55360847?s=460&u=4dda79dcbdb462bfa41171e4d221e93db8762a25&v=4"
            name="Inácio Pires"
            subject="ReactJS, React Native e NodeJS"
            description="Entusiasta das melhores tecnologias atuais"
            text="Apaixonado por explodir a mente dos iniciantes e incentivar o
 crescimento profissional e pessoal."
          />
          <TeacherItem
            avatar="https://avatars2.githubusercontent.com/u/55360847?s=460&u=4dda79dcbdb462bfa41171e4d221e93db8762a25&v=4"
            name="Inácio Pires"
            subject="ReactJS, React Native e NodeJS"
            description="Entusiasta das melhores tecnologias atuais"
            text="Apaixonado por explodir a mente dos iniciantes e incentivar o
 crescimento profissional e pessoal."
          />
          <TeacherItem
            avatar="https://avatars2.githubusercontent.com/u/55360847?s=460&u=4dda79dcbdb462bfa41171e4d221e93db8762a25&v=4"
            name="Inácio Pires"
            subject="ReactJS, React Native e NodeJS"
            description="Entusiasta das melhores tecnologias atuais"
            text="Apaixonado por explodir a mente dos iniciantes e incentivar o
 crescimento profissional e pessoal."
          />
          <TeacherItem
            avatar="https://avatars2.githubusercontent.com/u/55360847?s=460&u=4dda79dcbdb462bfa41171e4d221e93db8762a25&v=4"
            name="Inácio Pires"
            subject="ReactJS, React Native e NodeJS"
            description="Entusiasta das melhores tecnologias atuais"
            text="Apaixonado por explodir a mente dos iniciantes e incentivar o
 crescimento profissional e pessoal."
          />
        </div>
      </main>
    </div>
  );
}

export default Index;
