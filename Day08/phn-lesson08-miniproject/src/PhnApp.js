import React, { Component } from "react";
import PhnControl from "./components/PhnControl";
import PhnStudentList from "./components/PhnStudentList";
import PhnForm from "./components/PhnForm";

class PhnApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phnStudents: JSON.parse(localStorage.getItem("phnStudents")) || [
        { phnId: "SV001", phnStudentName: "Pham Hoang Nam", phnAge: 20, phnGender: "Nam", phnBirthday: "2005-10-25", phnBirthPlace: "HN", phnAddress: "Lang Sinh Vien Hacinco, 3 Le Van Thiem" },
        { phnId: "SV002", phnStudentName: "Nguyen Manh Hung", phnAge: 19, phnGender: "Nam", phnBirthday: "2006-05-20", phnBirthPlace: "HN", phnAddress: "Lang Sinh Vien Hacinco, 3 Le Van Thiem" },
      ],
      phnStudent: null,
      phnSearchTerm: "",
      phnSortType: "",
    };
  }

  componentDidMount() {
    const storedStudents = localStorage.getItem("phnStudents");
    if (storedStudents) {
      this.setState({ phnStudents: JSON.parse(storedStudents) });
    }
  }

  updateLocalStorage = (students) => {
    localStorage.setItem("phnStudents", JSON.stringify(students));
  };

  phnHandleAddNew = () => this.setState({ phnStudent: null });

  phnHandleSearch = (phnSearchTerm) => this.setState({ phnSearchTerm });

  phnHandleSort = (phnSortType) => this.setState({ phnSortType });

  phnHandleView = (phnStudent) => {
    alert(`Thông tin sinh viên:\n\nMã: ${phnStudent.phnId}\nTên: ${phnStudent.phnStudentName}\nTuổi: ${phnStudent.phnAge}`);
  };

  phnHandleDelete = (phnId) => {
    this.setState(
      (prevState) => {
        const updatedStudents = prevState.phnStudents.filter(student => student.phnId !== phnId);
        return { phnStudents: updatedStudents };
      },
      () => this.updateLocalStorage(this.state.phnStudents)
    );
  };

  phnHandleAddOrUpdate = (student) => {
    this.setState(
      (prevState) => {
        const students = [...prevState.phnStudents];
        const index = students.findIndex(s => s.phnId === student.phnId);

        index !== -1 ? (students[index] = student) : students.push(student);
        return { phnStudents: students, phnStudent: null };
      },
      () => this.updateLocalStorage(this.state.phnStudents)
    );
  };

  phnHandleEdit = (phnStudent) => this.setState({ phnStudent });

  render() {
    let filteredStudents = this.state.phnStudents.filter(student =>
      student.phnStudentName.toLowerCase().includes(this.state.phnSearchTerm.toLowerCase())
    );

    const sortMethods = {
      "name-asc": (a, b) => a.phnStudentName.localeCompare(b.phnStudentName),
      "name-desc": (a, b) => b.phnStudentName.localeCompare(a.phnStudentName),
      "age-asc": (a, b) => a.phnAge - b.phnAge,
      "age-desc": (a, b) => b.phnAge - a.phnAge,
    };

    if (this.state.phnSortType) {
      filteredStudents.sort(sortMethods[this.state.phnSortType]);
    }

    return (
      <div>
        <h1 className="text-center">Quản lý sinh viên</h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                <PhnControl 
                  onPhnHandleSearch={this.phnHandleSearch} 
                  onPhnHandleSort={this.phnHandleSort} 
                  onPhnHandleAddNew={this.phnHandleAddNew}
                />
                <PhnStudentList
                  renderPhnStudents={filteredStudents}
                  onPhnHandleView={this.phnHandleView}
                  onPhnHandleEdit={this.phnHandleEdit}
                  onPhnHandleDelete={this.phnHandleDelete}
                />
              </div>
            </div>
            <div className="col-5 grid-margin">
              <PhnForm 
                renderPhnStudent={this.state.phnStudent} 
                onPhnHandleAddOrUpdate={this.phnHandleAddOrUpdate}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PhnApp;