import './Main.css'

function Main(props: any) {
    return (
         <div className="container-fluid main-container d-flex justify-content-center overflow-hidden px-0">
             <div className="player-wrapper wrap">
                <iframe className="iframe"
                        src={props.link}
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture">
                </iframe>
                <h1 className={"text-size"}>{props.title}</h1>
                <div className="d-flex flex-row" id="box">
                    <a className="nav-link" href="https://vk.com/f1free">VK Group</a>
                    <a className="nav-link ms-2" href="https://t.me/f1tv_free">Telegram</a>
                </div>
            </div>
        </div>
    )
}

export default Main;
