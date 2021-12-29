import React, { Component } from "react";
class MainHeader extends Component{
  render(){
    return(
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a className="link-secondary" href="www.google.com">Subscribe</a>
                </div>
                <div className="col-4 text-center">
                    <a className="blog-header-logo text-dark" href="www.google.com">Large</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a className="link-secondary" href="www.google.com" aria-label="Search">
                    
                    </a>
                    <a className="btn btn-sm btn-outline-secondary" href="www.google.com">Sign up</a>
                </div>
            </div>
        </header>
    );
  }
}
export default MainHeader;