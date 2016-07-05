/**
 * Created by mak on 7/5/16.
 */
import React from "react";
import { Link } from "react-router";

export const Navbar = () => (
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
      {/* <!-- Brand and toggle get grouped for better mobile display --> */}
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Snack Machine</a>
      </div>
      {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><Link to="home">Home <span class="sr-only">(current)</span></Link></li>
          <li><Link to="not-found-page">test NotFound</Link></li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search"/>
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><Link to="/">Begin</Link></li>
          <li><a href="https://github.com/daggerok">Github</a></li>
        </ul>
      </div>{/* <!-- /.navbar-collapse -->*/}
    </div>
  </nav>
);
