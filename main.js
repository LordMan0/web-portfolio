let myPhoto = false

function MyHead() {
    return(
        <div className="card container text-white bg-dark mb-3">
            <div className="row g-0">
                <div className="image col-md-4">
                    <img className="myphoto" src="./src/wallpaper/devwallpaper.png" />
                </div>
                <div className="text-on-card col-md-8">
                <div className="card-body">
                    <h5 className="card-title">
                        <p className="display-5">LordMan0</p>
                        <p className="display-6">Gabriel Domingues Manoel</p>
                    </h5>
                    <p className="card-text">
                            <li>E-mail: gabrieldmanoel20@gmail.com</li>
                    </p>
                    <p className="card-text"><small className="text-muted">Última atualização 19/03/2021</small></p>
                    <div className="row g-5">
                        <a className="col-1" href="https://github.com/LordMan0">
                        <img className="github" src="./src/icons/github-icon.png"/>
                        </a>
                        <a className="col-1" href="https://www.linkedin.com/in/gabrieldmanoel/">
                        <img className="linkedin" src="./src/icons/linkedin-icon.png" />
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

function ButtonForApps() {
    return(
        <div className="scrollBtn container text-center">
            <button type="button" className="btn btn-outline-light btn-lg"
                onClick={ () => { scrollTo({ top: 935, behavior: 'smooth' }) } }
            >
                Ver aplicações
            </button>
        </div>
    )
}

function Menu() {
    return(
        <div className="main">
            <MyHead />
            <ButtonForApps />
        </div>
    )
}

ReactDOM.render(
    <Menu />,
    document.getElementById('root')
)

function ListPanel() {
    return(
        <div className="container row row-cols-1 row-cols-md-2 g-4">
            <div className="col text-center">
                <div className="app-card card mx-auto text-white bg-dark">
                    <img src="./src/icons/MusicQuizIcon.jpg" className="card-img-top mx-auto" />
                    <div className="card-body">
                        <h5 className="card-title">Music Quiz</h5>
                        <p className="card-text">Aplicação de quiz sobre conhecimento musicais (em especial música internacional).</p>
                        <a href="https://lordman0-music-quiz.netlify.app/" className="btn btn-outline-secondary">Ver aplicação</a>
                    </div>
                </div>
            </div>
            <div className="col text-center">
                <div className="app-card card mx-auto text-white bg-dark">
                    <img src="./src/icons/TodoIcon.jpg" className="card-img-top mx-auto" />
                    <div className="card-body">
                        <h5 className="card-title">To-do List</h5>
                        <p className="card-text">Aplicação de lista de afazeres para anotar suas tarefas do dia a dia.</p>
                        <a href="https://lordman0-todo-list.netlify.app/" className="btn btn-outline-secondary">Ver aplicação</a>
                    </div>
                </div>
            </div>
            <div className="col text-center">
                <div className="app-card card mx-auto text-white bg-dark">
                    <img src="./src/icons/WAppIcon.jpg" className="card-img-top mx-auto" />
                    <div className="card-body">
                        <h5 className="card-title">Weather App</h5>
                        <p className="card-text">Aplicação de informar o clima de qualquer cidade do mundo (além de também mostrar se está de dia ou de noite).</p>
                        <a href="https://lordman0-weather-app.netlify.app/" className="btn btn-outline-secondary">Ver aplicação</a>
                    </div>
                </div>
            </div>
            <div className="col text-center">
                <div className="app-card card mx-auto text-white bg-dark">
                    <img src="./src/icons/CurrencyConverterIcon.jpg" className="card-img-top mx-auto" />
                    <div className="card-body">
                        <h5 className="card-title">Currency Converter</h5>
                        <p className="card-text">Aplicação para obter as taxas de câmbio de acordo com o moeda desejada.</p>
                        <a href="https://lordman0-currency-converter.netlify.app/" className="btn btn-outline-secondary">Ver aplicação</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Panel() {
    return(
        <ListPanel />
    )
}

ReactDOM.render(
    <Panel />,
    document.getElementById('panel')
)
