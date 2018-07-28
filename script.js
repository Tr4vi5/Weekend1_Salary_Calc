console.log('JS');

let employeeGroup = [];
let monthlyCost = 0;


class Employee{
    constructor(fName, lName, id, title, salary){
        this.firstName = fName;
        this.lastName = lName;
        this.id = id;
        this.title = title;
        this.salary = salary;
    }// end constructor
}// end employee class

$(readyNow);

function readyNow() {
    console.log('JQ');
    $('#employeeInBtn').on('click', submitEmployee);
    $('#tableBody').on('click', '#deleteRow', removeEmployee);


    function submitEmployee() {
        let firstName = $('#firstNameIn').val();
        let lastName = $('#lastNameIn').val();
        let id = parseInt($('#employeeIDIn').val());
        let title = $('#titleIn').val();
        let salary = parseInt($('#salaryIn').val());

        if (firstName != '' && lastName !='' && id !='' && title !='' && salary !=''){
           
            employeeGroup.push( new Employee(firstName, lastName, id, title, salary));
            
            let employeeOut = $('#employeeBody');
            employeeOut.empty();
            monthlyCost = 0;

            for (let employee of employeeGroup){ 
                employeeOut.append(
                    `<tr id="tableRow">
                        <td>` + employee.firstName + `</td>
                        <td>` + employee.lastName + `</td>
                        <td>` + employee.id + `</td>
                        <td>` + employee.title + `</td>
                        <td>` + employee.salary + `</td>
                        <td id="deleteRow">X</td>
                    </tr>`  
                );
                
                $('#firstNameIn').val('');
                $('#lastNameIn').val('');
                $('#employeeIDIn').val('');
                $('#titleIn').val('');
                $('#salaryIn').val('');

                let monthlySal = employee.salary / 12;

                monthlyCost += monthlySal
            }  
            $('#employeeFoot').html(`<td id="totalCost">Monthly Cost:` + monthlyCost.toFixed(2) +`</td>`);
            console.log(monthlyCost);
            if (monthlyCost.toFixed(2) > 20000){
                $('#totalCost').css({'background-color': 'red', 'color': 'white'});
            }
        }
    }

    function removeEmployee(){
        $(this).remove();
    }
}





// Notes/ideas:
// use jQ to assign each employee.Id to the table row ID as the row is created  <tr id="`employee.id`">
// delete button last column in a row, make a function to delete parent