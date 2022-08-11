import 'bootstrap/dist/css/bootstrap.min.css';
// import DataComponent from './components/DataComponent';
// import PdfComponent from './components/PdfComponent';
// import PrintPDF from './components/PrintPDF';
import { Routes, Route } from "react-router-dom";
import DhakaDistrictCouncil from './components/Dhaka-District-Council/DhakaDistrictCouncil';
import DhakaDivision from './components/DhakaDivision/DhakaDivision';

function App() {

  return (
    <div className="App">
      {/* <DhakaDivision></DhakaDivision> */}
      {/* <DataComponent></DataComponent> */}
      {/* <PdfComponent></PdfComponent> */}

      <Routes>
        <Route path="/" element={<DhakaDivision />} />
        <Route path="dhakadistrictcouncil" element={<DhakaDistrictCouncil />} />
      </Routes>

    </div>
  );
}

export default App;
