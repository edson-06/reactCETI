import React, { Component } from "react";

class Footer extends Component{
  render(){
    return(
      <div>
        <footer className="blog-footer">
          <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          <p>
            <a href="www.google.com">Back to top</a>
          </p>
        </footer>
      </div>
    );
  }
}
export default Footer;