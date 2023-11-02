import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">Trendy Merches</a>
          </div>
          <div className="social"> 
            <a href="https://liyu.vercel.app/" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://liyu.vercel.app/" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://liyu.vercel.app/" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:user@example.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://liyu.vercel.app/" target="_blank" rel="noopener noreferrer">Solomon T</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://liyu.vercel.app/" title="GitHub repo" target="_blank" rel="noopener noreferrer">website</a></span>
        </div>
      </div>
    );
  }
}

export default App;
