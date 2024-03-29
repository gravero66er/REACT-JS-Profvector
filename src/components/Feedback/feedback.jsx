import React from 'react';
import { Link } from 'react-scroll';

const settings = {
  spy: true,
  smooth: true,
  offset: -20,
  duration: 800,
};

// Settings for react-scroll

const Feedback = () => {
  return (
    <div className="feedback">
      <div className="container">
        <div className="block__title">
          <div className="line"></div>
          <div className="title">Отзывы</div>
          <div className="line"></div>
        </div>
        <div className="feedback__wrapper">
          <div className="feedback__card feedback__yellow">
            <div className="feedback__title">«Max House»‎</div>
            <div className="feedback__content">
              Настоящим письмом выражаю благодарность компании «ПрофВектор»:
              <br />
              <br />
              - за оперативную и качественную разработку программы
              производственного контроля для нашего предприятия;
              <br />
              - за разработку необходимых журналов для предприятия и обучения по
              их заполнению;
              <br />
              - за помощь в устранении выявленных нарушений на предприятии в
              ходе проверки Роспотребнадзора;
              <br />
              - за постоянную консультацию в любых вопросах, касающихся
              санитарного законодательства;
              <br />
              - за составление необходимой документации (сопроводительных писем,
              объяснений, ходатайств) в Роспотребнадзор и районый суд;
              <br />
              - за участие в нескольких судебных заседаний в качестве защитника.
              <br />
              <br />
              Хочется отметить профессионализм, ответственность и гибкий подход
              специалистов компании «ПрофВектор».
            </div>
            <div className="feedback__author">И.П. Соловьев С.А.</div>
          </div>
          <div className="feedback__card">
            <div className="feedback__title">«Дом выпечки»‎</div>
            <div className="feedback__content">
              Индивидуальный предприниматель Слепых Полина Вячеславовна выражает
              благодарность сотрудникам компании «ПрофВектор» за оказанные на
              высоком уровне услуги аудита, разработки и консультации по
              внедрению принципов ХАССП на наших предприятиях.
              <br />
              <br />
              Также благодарим за помощь по разработке и получению необходимой
              документации для наших производств (стандарты организации на
              выпускаемую продукцию, получение экспертных заключений от
              Роспотребнадзора на продление сроков годности продукции).
              <br />
              <br />
              Дополнительно хотим поблагодарить за консультационную помощь и
              непосредственное участие при проверках Роспотребнадзора.
            </div>
            <div className="feedback__author">И.П. Слепых П.В.</div>
          </div>
          <div className="feedback__card">
            <div className="feedback__title">ТПК «Флагман»‎</div>
            <div className="feedback__content">
              От лица ООО ТПК «ФЛАГМАН» выражаем благодарность организации
              «ПрофВектор» за четкую и слаженную работу по разработке системы
              ХАССП на нашем предприятии «Цех по разделки рыбной продукции».
              <br />
              <br />
              Хотим отметить профессионализм и внимательное отношение
              специалистов компании.
            </div>
            <div className="feedback__author">Директор Девятых А.С.</div>
          </div>
          <div className="feedback__card feedback__yellow">
            <div className="feedback__title">«Планета вкуса»‎</div>
            <div className="feedback__content">
              Благодарим компанию «ПрофВектор» за плодотворное сотрудничество.
              Выражаем признательность за оперативную и качественную помощь по
              разработке системы ХАССП на нашем предприятии «Планета Вкуса».
              <br />
              <br />
              Особенно хочется отметить профессионализм, ответственность и
              гибкий подход специалистов компании.
              <br />
              <br />
              Большое спасибо за оперативную работу!
            </div>
            <div className="feedback__author">И.П. Козьмаев С.З.</div>
          </div>
        </div>
      </div>
      <Link activeClass="active" to="main" {...settings}>
        {/* <div className="menu__button">
          <p>ГЛАВНОЕ МЕНЮ</p>
        </div> */}
      </Link>
    </div>
  );
};

export default Feedback;
