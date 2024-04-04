import { logger, showFeedback } from "../utils";

import logic from "../logic.mjs";

import { Component } from "react";

class Chat extends Component {
  constructor() {
    logger.debug("Chat");

    super();

    try {
      const user = logic.retrieveUser();
      const users = logic.retrieveUsersWithStatus();

      this.state = { users, view: null, stamp: null };

      this.user = user;
    } catch (error) {
      showFeedback(error);
    }
  }

  render() {
    return (
      <main className="main">
        <h1>Hello, {this.user.name}!</h1>
        <nav>
          <button
            onClick={(event) => {
              event.preventDefault();

              this.props.onHomeClick();
            }}
          >
            🏠
          </button>

          <button
            onClick={(event) => {
              event.preventDefault();

              this.props.onLogout();
            }}
          >
            🚪
          </button>
        </nav>

        <section>
          <ul>
            {this.state.users.map((user) => (
              <li key={user.id}> {user.username} </li>
            ))}
          </ul>
          <h3>Hello</h3>
          <ul className="message-list">
            <li></li>
          </ul>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label>Text</label>
            <input id="text" type="text" />
            <button class="round-button submit-button" type="submit">
              Send
            </button>
          </form>
        </section>
      </main>
    );
  }
}

export default Chat;

/*
import { logger } from '../utils'

import logic from '../logic'

import { Component } from 'react'


class Chat extends Component {
    constructor() {
        logger.debug('Chat')

        super()

    
    }

    render() {
        return <main className='main'>

            <h3>Hello, payaso</h3>
            <nav>
                <button
                onClick={(event => {
                    event.preventDefault()

                    this.props.onHomeClick()
                })}
                
                >🏡</button>
                <button
                onClick={event => {
                    event.preventDefault()
                    
                this.props.onLogoutClick()

                }
            }
                >🚪</button>
            </nav>

            <section>

            <ul>
                    <li className="user-list__item user-list__item--online">
                        "xavigs"
                    </li>
                    <li className="user-list__item user-list__item--offline">
                        "pepe"
                    </li>
                    <li className="user-list__item user-list__item--offline">
                        "perico"
                    </li>
                    <li className="user-list__item user-list__item--offline">
                        "snoop"
                    </li>
                    <li className="user-list__item user-list__item--offline">
                        "wellintonq"
                    </li>
                </ul>
                <h3>wellintonq</h3>
                <ul className="message-list">
                    <li className="message-list__item--left">payaso</li>
                    <li className="message-list__item--left">comepipas</li>
                    <li className="message-list__item--right">personaje</li>
                </ul>
                <form action="">
                    <label htmlFor="">Text</label>
                    <input type="text" id="text" />
                    <button className="round-button submit-button" type="submit">Send</button>
                </form>

            </section>

        </main> 
        
    }

}

export default Chat
*/