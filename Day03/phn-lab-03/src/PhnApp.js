import PhnFuncComp from "./components/PhnFuncComp";
import PhnJsxExpression from "./components/PhnJsxExpression";

function PhnApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Pham Hoang Nam</h1>

      <PhnJsxExpression />

      <hr/>
      {/* Sử dụng function components */}
      <PhnFuncComp />

      {/* Sử dụng class components */}
      <PhnFuncComp></PhnFuncComp>
    </div>
  );
}

export default PhnApp;
