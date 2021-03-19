// function MyImg() {
//     return(
//         <div className="bg-myphoto">
            
//         </div>
//     )
// }

function MyHead() {
    return(
        <div className="card container text-white bg-dark mb-3">
            <div className="row g-0">
                <div className="image col-md-4">
                    <img className="myphoto" src="./src/img/myphoto.jpg" />
                </div>
                <div className="text-on-card col-md-8">
                <div className="card-body">
                    <h5 className="card-title">
                        <p className="display-5">LordMan0</p>
                        <p className="display-6">Gabriel Domingues Manoel</p>
                    </h5>
                    <p className="card-text">
                        <ul>
                            <li>E-mail: gabrieldmanoel20@gmail.com</li>
                            <li>Telefone: (19) 99459-9748</li>
                        </ul>   
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 19/03/2021</small></p>
                    <div className="row g-0">
                        <a className="col-1" href="https://github.com/LordMan0">
                        <img className="github" src="./src/icons/github-icon.png"/>
                        </a>
                        <a className="col-1" href="https://www.linkedin.com/in/gabrieldmanoel/">
                        <img className="linkedin" src="./src/icons/linkedin-icon.png" href=""/>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

function Menu() {
    return(
        <div className="main container">
            <MyHead />
        </div>
    )
}

ReactDOM.render(
    <Menu />,
    document.getElementById('root')
)