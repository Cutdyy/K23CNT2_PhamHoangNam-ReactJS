// PhnApp.js
import PhnClassComp from "./Components/PhnClassComp";
import PhnFuncComp from "./Components/PhnFuncComp";
import PhnFuncComp1 from "./Components/PhnFuncComp1";

function PhnApp() {
  // Object chứa thông tin user
  const user = {
    fullName: "Hoang Nam",
    age: 20,
    phone: "0123456789",
  };

  return (
    <div className="container border mt-3">
      <h1>Demo component - Props - State</h1>
      <hr />
      <div className="alert alert-danger">
        <PhnFuncComp name="Hoang Nam" address="05 Le Van Thiem" company="Home" />
        <hr />
        <PhnFuncComp name="Hoang Nam" address="K23CNT2" company="Fit-NTU" />
      </div>
      <div className="alert alert-info">
        <PhnFuncComp1 renderInfo={user} />
      </div>
      <PhnClassComp />
      <PhnClassComp renderName="K23CNT2" renderUsers={user} />
    </div>
  );
}

export default PhnApp;
