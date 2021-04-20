function MyHead() {
  return /*#__PURE__*/React.createElement("div", {
    className: "card container text-white bg-dark mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row g-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image col-md-4"
  }, /*#__PURE__*/React.createElement("img", {
    className: "myphoto",
    src: "./src/wallpaper/devwallpaper.png"
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-on-card col-md-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title"
  }, /*#__PURE__*/React.createElement("p", {
    className: "display-5"
  }, "LordMan0"), /*#__PURE__*/React.createElement("p", {
    className: "display-6"
  }, "Gabriel Domingues Manoel")), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, /*#__PURE__*/React.createElement("li", null, "E-mail: gabrieldmanoel20@gmail.com")), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, /*#__PURE__*/React.createElement("small", {
    className: "text-muted"
  }, "\xDAltima atualiza\xE7\xE3o 27/03/2021")), /*#__PURE__*/React.createElement("div", {
    className: "row g-5"
  }, /*#__PURE__*/React.createElement("a", {
    className: "col-1",
    href: "https://github.com/LordMan0"
  }, /*#__PURE__*/React.createElement("img", {
    className: "github",
    src: "./src/icons/github-icon.png"
  })), /*#__PURE__*/React.createElement("a", {
    className: "col-1",
    href: "https://www.linkedin.com/in/gabrieldmanoel/"
  }, /*#__PURE__*/React.createElement("img", {
    className: "linkedin",
    src: "./src/icons/linkedin-icon.png"
  })))))));
}

function ButtonForApps() {
  return /*#__PURE__*/React.createElement("div", {
    className: "scrollBtn container text-center"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-outline-light btn-lg",
    onClick: () => {
      document.getElementById('hide-page').classList.remove('d-none');
      scrollTo({
        top: +700,
        behavior: 'smooth'
      });
    }
  }, "Ver aplica\xE7\xF5es"));
}

function Menu() {
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement(MyHead, null), /*#__PURE__*/React.createElement(ButtonForApps, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Menu, null), document.getElementById('root'));

function ListPanel() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cardbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardcontainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardvow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardcontent"
  }, /*#__PURE__*/React.createElement("h2", null, "01"), /*#__PURE__*/React.createElement("h3", null, "Music Quiz"), /*#__PURE__*/React.createElement("p", null, "Aplica\xE7\xE3o de quiz sobre conhecimento musicais (em especial m\xFAsica internacional)."), /*#__PURE__*/React.createElement("a", {
    href: "https://lordman0-music-quiz.netlify.app/"
  }, "Ver aplica\xE7\xE3o")))), /*#__PURE__*/React.createElement("div", {
    className: "cardvow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardcontent"
  }, /*#__PURE__*/React.createElement("h2", null, "02"), /*#__PURE__*/React.createElement("h3", null, "To-do List"), /*#__PURE__*/React.createElement("p", null, "Aplica\xE7\xE3o de lista de afazeres para anotar suas tarefas do dia a dia."), /*#__PURE__*/React.createElement("a", {
    href: "https://lordman0-todo-list.netlify.app/"
  }, "Ver aplica\xE7\xE3o"))))), /*#__PURE__*/React.createElement("div", {
    className: "cardcontainer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardvow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardcontent"
  }, /*#__PURE__*/React.createElement("h2", null, "03"), /*#__PURE__*/React.createElement("h3", null, "Weather App"), /*#__PURE__*/React.createElement("p", null, "Aplica\xE7\xE3o de informar o clima de qualquer cidade do mundo (al\xE9m de tamb\xE9m mostrar se est\xE1 de dia ou de noite)."), /*#__PURE__*/React.createElement("a", {
    href: "https://lordman0-weather-app.netlify.app/"
  }, "Ver aplica\xE7\xE3o")))), /*#__PURE__*/React.createElement("div", {
    className: "cardvow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cardcontent"
  }, /*#__PURE__*/React.createElement("h2", null, "04"), /*#__PURE__*/React.createElement("h3", null, "Currency Converter"), /*#__PURE__*/React.createElement("p", null, "Aplica\xE7\xE3o para obter as taxas de c\xE2mbio de acordo com o moeda desejada."), /*#__PURE__*/React.createElement("a", {
    href: "https://lordman0-currency-converter.netlify.app/"
  }, "Ver aplica\xE7\xE3o"))))));
}

function Panel() {
  return /*#__PURE__*/React.createElement(ListPanel, null);
}

ReactDOM.render( /*#__PURE__*/React.createElement(Panel, null), document.getElementById('panel'));
