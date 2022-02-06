window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = `
      <th></th>
      <th>Name</th>
      <th>Gender</th>
      <th>Department</th>
      <th>Salary</th>
      <th>Start Date</th>
      <th>Actions</th>`;
    
    let innerHtml = `${headerHtml}`;
    let employeePayrollData = createEmployeePayrollJASON();
    for (const employeePayrollData of employeePayrollList) {
        innerHtml = `$${headerHtml}
    <tr>
    <td><img class="profile" src="${employeePayrollData._profilePic}" alt=""></td>
    <td>${employeePayrollData._name}</td>
    <td>${employeePayrollData._gender}</td>
    <td>${getDeptHtml(employeePayrollData._department)}</td>
    <td>${employeePayrollData._salary}</td>
    <td>${employeePayrollData._startDate}</td>
    _
    <td>
      <img src="../assets/icons/delete-black-18dp.svg" alt="delete" image name="${employeePayrollData._id}" onclick="remove(this)">
      <img src="../assets/icons/create-black-18dp.svg" alt="edit" image name="${employeePayrollData._id}" onclick="update(this)">
    </td>
  </tr>`;
document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptList = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml}<div class= 'dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJASON = () => {
    let employeePayrollListData = [
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
    return employeePayrollListData;
}