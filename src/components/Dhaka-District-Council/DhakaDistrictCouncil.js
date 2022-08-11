import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Link } from 'react-router-dom';

const DhakaDistrictCouncil = () => {

  const downloadData = () => {

    const pdf = new jsPDF();
    pdf.autoTable({ html: '#table' })
    pdf.save('ঢাকা-জেলা-পরিষদ.pdf');

  }

  return (
    <div className='container bg-light mt-5'>
      <h1 className='text-center pt-4 pb-2 text-primary fw-bold' style={{textDecoration:'underLine'}}>ঢাকা জেলা পরিষদের জনপ্রতিনিধিদের নাম</h1>
      
      <button className='btn btn-primary btn-md fw-bold'
        onClick={downloadData}>
        ডাউনলোড
      </button>

      <table class="table text-center" id='table'>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>123456789</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>123456789</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>123456789</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark</td>
            <td>123456789</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>123456789</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>123456789</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Mark</td>
            <td>123456789</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Jacob</td>
            <td>123456789</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Larry</td>
            <td>123456789</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Mark</td>
            <td>123456789</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Jacob</td>
            <td>123456789</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>Larry</td>
            <td>123456789</td>
            <td><a target={"_blank"} href='https://responsive-menu-demo.netlify.app/' rel="noreferrer">Responsive Menu</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DhakaDistrictCouncil;