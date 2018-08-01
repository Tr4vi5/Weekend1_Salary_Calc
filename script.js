console.log('JS');

class Employee{
 constructor(firstName, lastName, employeeId, employeeTitle, employeeSalary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = employeeId;
    this.title = employeeTitle;
    this.salary = employeeSalary;
 }
}

let employeeGroup = [
    new Employee('Travis','Dunn','1234','Junior Developer','120000'),
    new Employee('Kurt', 'Vonnegut', '5678', 'Writer', '120000'),
    new Employee('Mark', 'Zuckerberg', '666', 'Robot', '0')
];

let monthlyCost = 0;

$(readyNow);

function readyNow() {
    console.log('JQ');
    // Event Handlers
    $('#employee-grab').on('click', newEmployee);
    $('#employee-list').on('click', '.remove-btn', removeEmployee);
    
    function newEmployee(){
        let fName = $('#first-name').val();
        let lName = $('#last-name').val();
        let eId = $('#employee-id').val();
        let eTitle = $('#title').val();
        let eSalary = $('#salary').val();

        if (fName != '' && lName != '' && eId != '' && eTitle != '' && eSalary != '') {
            employeeGroup.push(new Employee(fName, lName, eId, eTitle, eSalary));
            clearInputs();
            appendArrayToDom();
        } else {
            $('#error-message').text('Please correctly enter employeee information.')
        }
    }

    function clearInputs() {
        $('#first-name').val('');
        $('#last-name').val('');
        $('#employee-id').val('');
        $('#title').val('');
        $('#salary').val('');
    }

    function appendArrayToDom(){
        $('#employee-list').empty();

        for (let employee of employeeGroup){
            $('#employee-list').append(`
                <tr data-index="` + employee.id + `">
                    <td>` + employee.firstName + `</td>
                    <td>` + employee.lastName + `</td>
                    <td>` + employee.id + `</td>
                    <td>` + employee.title + `</td>
                    <td>` + employee.salary + `</td>
                    <td><button class="remove-btn">Remove</button></td>
                </tr>`
            );
        }
        salaryCalculation();
        $('#monthly-cost').text('Monthly Costs: $' + monthlyCost.toFixed(2));
       
    }

    function salaryCalculation(){
        monthlyCost = 0;
        for (let employee of employeeGroup){
            monthlyCost += employee.salary / 12;
        }
        if (monthlyCost > 20000){
            $('#monthly-cost').addClass('errorRed');
            return monthlyCost;
        } else {
            return monthlyCost;
        }
    }

    function removeEmployee(/*index*/){
        // employeeGroup.splice(index, 1);
        // appendArrayToDom();
        for (let i=0; i < employeeGroup.length; i++){
            if ($(this).closest('tr').data('index') == employeeGroup[i].id){
                employeeGroup.splice(i, 1);
            }
        }
    }

    function updateDOM(){
        // removeEmployee($(this).data(index));
    }
}
