import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Rout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>}>
            <Route index element={<></>} />
            <Route path="" element={<></>} />
            <Route path="" element={<></>} />
            <Route path="" element={<></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Rout;
