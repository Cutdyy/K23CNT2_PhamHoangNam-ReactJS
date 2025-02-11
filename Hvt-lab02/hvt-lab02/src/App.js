// src/App.js
import React from "react";
import HvtCompInfor from "./HvtCompInfor";

function App() {
  const personalInfo = {
    name: "Phạm Hoàng Nam",
    studentId: "2310900074",
    birthDate: "25/10/2005",
    phone: "0369405630",
    class: "K23CNT2"
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <HvtCompInfor info={personalInfo} />
    </div>
  );
}

export default App;
// src/HvtCompInfor.js
