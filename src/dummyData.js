
const dummyData = (numOfData) =>{
    let returnData = []
    
    for( let i = 0; i < numOfData; i++) {
        returnData.push(
            {
                errorID: i,
                errorDate: `${i}'s date`,
                customer: `The ${i}'th customer/company`,
                customerCode: `The ${i} company`,
                imcCompany: `This is IMCCompany relating to ${i}`,
                errMessage: `Err of ${i} had an error--fix plz!!`,
                price: `$10,${i}00`
            }
        )
    }
    return returnData;
}

const data = dummyData(100);


export default data;


