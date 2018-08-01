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
    new Employee('Travis','Dunn','1234','Junior Developer','60000'),
    new Employee('Kurt', 'Vonnegut', '5678', 'Writer', '70000'),
    new Employee('Lao', 'Tzu', '7890', 'Philosopher', '50000')
];

let monthlyCost = 0;

$(readyNow);

function readyNow() {
    console.log('JQ');
    appendArrayToDom()
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
            $('#error-message').empty();
        } else {
            $('#error-message').text('Please correctly enter employee information.')
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
                <tr class="table-row" data-index="` + employee.id + `">
                    <td>` + employee.firstName + `</td>
                    <td>` + employee.lastName + `</td>
                    <td>` + employee.id + `</td>
                    <td>` + employee.title + `</td>
                    <td>` + employee.salary + `</td>
                    <td class="remove-column"><button class="remove-btn btn btn-warning">Remove</button></td>
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

    function removeEmployee(){
        for (let i=0; i < employeeGroup.length; i++){
            if ($(this).closest('tr').data('index') == employeeGroup[i].id){
                employeeGroup.splice(i, 1);
            }
        }
        appendArrayToDom();
    }
}
