class EmployeePayrollData {

    constructor(...params) {
        this.name = params[0];
        this.profileImage = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get id() {return this._id;}
    set id(id) {
        let id = RegExp('^[1-100]+$');
        if (idRegex.test(id))
        this._id = id;
        else throw 'ID is incorrect!';
    }

    get name() {return this._name;}
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) 
        this._name = name;
        else throw 'Name is incorrect!';
    }

    get profilePic() {return this._profilePic;}
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {return this._gender;}
    set gender(gender) {
        this._gender = gender;
    }

    get department() {return this._department;}
    set department(department) {
        this._department = department;
    }

    get salary() {return this._salary;}
    set salary(salary) {
        let salaryRegex = RegExp('^[1-100000000]+$');
        if (salaryRegex.test(salary))
        this._salary = salary;
        else throw 'Salary is incorrect!';
    }

    get note() {return this._note;}
    set note(note) {
        this._note = note;
    }

    get startDate() {return this._startDate;}
    set startDate(startDate) {
        let startDateRegex = RegExp('^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$');
        if (startDateRegex.test(startDate))
        this._startDate = startDate;
        else throw 'Date is incorrect!';
    }

    toString() {
        const options = {year:'numeric', month:'long',day:'numeric'};
        const empDate = this.startDate == undefined ? "undifined" : 
        this.startDate.toLocalDateString("en-US", options);
        return "id ="+this.id+", name ="+this.name+", gender ="+this.gender+", profilePic ="+this.profilePic+", department ="+this.department+", salary ="+this.salary+", startDate ="+empDate+", note ="+this.note;
    }
}

function save() {

    let employeeName = document.querySelector('#name').value;
    let profileList = document.querySelectorAll('input[name="profile"]');
    let employeeProfileImage;
    for (let image of profileList) {
        if (image.checked) {
            employeeProfileImage = image.value;
            break;
        }
    }

    let genderList = document.querySelectorAll('input[name="gender"]');
    let employeeGender;
    for (let gender of genderList) {
        if (gender.checked) {
            employeeGender = gender.value;
            break;
        }
    }

    let departmentList = document.querySelectorAll('.checkbox:checked');
    let employeeDepartment = new Array();
    for (let department of departmentList) {
        if (department.checked) {
            employeeDepartment.push(department.value);
        }
    }

    let employeeSalary = document.querySelector('#salary').value;
    let day = document.querySelector('#day').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let employeeStartDate = new Date(year, month, day);
    let employeeNotes = document.querySelector('#notes').value;

    try {
        let employeePayrollData = new EmployeePayrollData(employeeName, employeeProfileImage, employeeGender, employeeDepartment, employeeSalary, employeeStartDate, employeeNotes);
        console.log(employeePayrollData.toString());
    } catch (e) {
        console.error(e);
    }
}

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});