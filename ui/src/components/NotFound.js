/**
 * Created by mak on 7/5/16.
 */
import React from "react";
import {Link} from "react-router";

export const NotFound = () => (
  <section class="container-fluid">
    <h3>:(</h3>
    <span>sorry, but page you are looking wasn't found. <Link to="home">want go home?</Link></span>
  </section>
);
