import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./screens/Landing";
import Teachers from "./screens/TeacherList";
import TeacherStore from "./screens/TeacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={Teachers} />
      <Route path="/give-classes" component={TeacherStore} />
    </BrowserRouter>
  );
}

export default Routes;
