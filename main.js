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
                    <p className="card-text"><small className="text-muted">Última atualização 27/03/2021</small></p>
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
                onClick={ () => {
                    document.getElementById('hide-page').classList.remove('d-none') 
                    scrollTo({ top: +700 , behavior: 'smooth' }) 
                } }
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
        <div className="cardbody">
           <div className="cardcontainer">
                <div className="cardvow">
                    <div className="cardbox">
                        <div className="cardcontent">
                            <h2>01</h2>
                            <h3>Music Quiz</h3>
                            <p>Aplicação de quiz sobre conhecimento musicais (em especial música internacional).</p>
                            <a href="https://lordman0-music-quiz.netlify.app/">Ver aplicação</a>
                        </div>
                    </div>
                </div>
                <div className="cardvow">
                    <div className="cardbox">
                        <div className="cardcontent">
                            <h2>02</h2>
                            <h3>To-do List</h3>
                            <p>Aplicação de lista de afazeres para anotar suas tarefas do dia a dia.</p>
                            <a href="https://lordman0-todo-list.netlify.app/">Ver aplicação</a>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="cardcontainer">
                <div className="cardvow">
                    <div className="cardbox">
                        <div className="cardcontent">
                            <h2>03</h2>
                            <h3>Weather App</h3>
                            <p>Aplicação de informar o clima de qualquer cidade do mundo (além de também mostrar se está de dia ou de noite).</p>
                            <a href="https://lordman0-weather-app.netlify.app/">Ver aplicação</a>
                        </div>
                    </div>
                </div>
                <div className="cardvow">
                    <div className="cardbox">
                        <div className="cardcontent">
                            <h2>04</h2>
                            <h3>Currency Converter</h3>
                            <p>Aplicação para obter as taxas de câmbio de acordo com o moeda desejada.</p>
                            <a href="https://lordman0-currency-converter.netlify.app/">Ver aplicação</a>
                        </div>
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
