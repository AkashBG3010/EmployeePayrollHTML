let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp_count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
    JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    const headerHtml = `
      <th></th>
      <th>Name</th>
      <th>Gender</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Start Date</th>
      <th>Actions</th>`;

    if (empPayrollList.length == 0) return;
    let innerHtml = `${headerHtml}`;
    for (const employeePayrollData of empPayrollList) {
        innerHtml = `$${headerHtml}
    <tr>
    <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
    <td>${empPayrollData._name}</td>
    <td>${employeePayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    _
    <td>
      <img src="../assets/icons/delete-black-18dp.svg" alt="delete" image name="${empPayrollData._id}" onclick="remove(this)">
      <img src="../assets/icons/create-black-18dp.svg" alt="edit" image name="${empPayrollData._id}" onclick="update(this)">
    </td>
  </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}
}
const getDeptHtml = (deptList) => {
    let deptList = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class= 'dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmpPayrollJASON = () => {
    let empPayrollListData = [
        {
        _name: 'Akash BG',
        _gender: 'Male',
        _department: ['Engineering', 'Finance'],
        _salary: '500000',
        _startDate: '16 jun 2021',
        _note: '',
        _id: new Date().getTime(),
        _profilePic: '../assets/profile-images/Ellipse -2.png'
        },
        {
        _name: 'Sameep Pai',
        _gender: 'Male',
        _department: ['Sales'],
        _salary: '500000',
        _startDate: '15 Dec 2020',
        _note: '',
        _id: new Date().getTime() +1,
        _profilePic: '../assets/profile-images/Ellipse -4.png'
        }
    ];
    return empPayrollListData;
}