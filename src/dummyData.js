import * as department from './ImcDepartments'

const departmentAssigner = () =>{
    let num = Math.floor(Math.random() * 3)

    // eslint-disable-next-line default-case
    switch(num){
        case(0):
            return department.operations
        case(1):
            return department.ediTeam
        case(2):
            return department.accounting
    }

}

const dummyData = (numOfData) =>{
    let returnData = []
    
    for( let i = 0; i < numOfData; i++) {
        returnData.push(
            {
                errorID: i,
                invoiceCode: `${i}${i+9}${i-3}${i}`,
                errorDate: `${i}'s date`,
                customer: `${i} company`,
                customerCode: `${i}${i+1}${i-4}${i}`,
                imcCompany: `This is IMCCompany relating to ${i}`,
                errMessage: `Err of ${i} had an error--fix plz!!`,
                price: `$10,${i}00`,
                department: departmentAssigner(),
                isResolved: false
            }
        )
    }
    return returnData;
}

const data = dummyData(23);


export default data;


