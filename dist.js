// function MyImg() {
//     return(
//         <div className="bg-myphoto">
//         </div>
//     )
// }
function MyHead() {
  return /*#__PURE__*/React.createElement("div", {
    className: "card container text-white bg-dark mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row g-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image col-md-4"
  }, /*#__PURE__*/React.createElement("img", {
    className: "myphoto",
    src: "./src/img/myphoto.jpg"
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
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "E-mail: gabrieldmanoel20@gmail.com"), /*#__PURE__*/React.createElement("li", null, "Telefone: (19) 99459-9748"))), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, /*#__PURE__*/React.createElement("small", {
    className: "text-muted"
  }, "Last updated 19/03/2021")), /*#__PURE__*/React.createElement("div", {
    className: "row g-0"
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
    src: "./src/icons/linkedin-icon.png",
    href: ""
  })))))));
}

function Menu() {
  return /*#__PURE__*/React.createElement("div", {
    className: "main container"
  }, /*#__PURE__*/React.createElement(MyHead, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Menu, null), document.getElementById('root'));
