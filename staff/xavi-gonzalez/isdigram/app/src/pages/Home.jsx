import { Component } from "react";

class Home extends Component {
    constructor () {
        super()
    }

    render() {
        return <body>
            <main className="main">

                <h1>Hello, Ricky Fort!</h1>

                <nav>
                    <button>💬</button>
                    <button>🚪</button>
                </nav>

                <section>
                    <article>
                        <h3>xavigs</h3>
                        <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExamRvYThzZ2t3YXd6c2dwcWFyaW1wdmVua3d2ZXgzMjNhcnZ3NGgydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XreQmk7ETCak0/giphy.gif" alt="palante" />
                        <p>cambio de carpetas? palante</p>
                        <time>2024-03-21</time>
                    </article>

                    <article>
                        <h3>snoopdogg</h3>
                        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmxtY2dma2FycGpkamQxcTR1a2Z3NnlsdWJ1cmJjcDVuYWNkdjV1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SXOZY9erxavfELiyqv/giphy.gif" alt="snoop" />
                        <p>fo sho</p>
                        <time>2024-03-21</time>
                    </article>

                    <article>
                        <h3>wellintonq</h3>
                        <img src="https://media.tenor.com/zbf8Sc_v_7AAAAAM/wellington.gif" alt="wellintonq e el campeon" />
                        <p>aqui un corito sano, ya tu sabe</p>
                        <time>2024-03-20</time>
                    </article>

                    <article>
                        <h3>rickyf</h3>
                        <img src="https://media.tenor.com/4vEak67C7BoAAAAe/fort-ricardo-fort.png" alt="el comandante" />
                        <p>Miameeeeeeeeeee!!!!!</p>
                        <time>2024-03-20</time>
                        <button>📝</button>
                        <button>🗑️</button>
                    </article>
                </section>

                <footer className="footer">
                    <button>➕</button>
                </footer>

            </main>
            
        </body>
    }
}

export default Home