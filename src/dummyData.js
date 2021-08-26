
const dummyData = (numOfData) =>{
    let returnData = []
    
    for( let i = 0; i < numOfData; i++) {
        returnData.push(
            {
                errorID: i,
                invoiceCode: `${i}${i+9}${i-3}${i}`,
                errorDate: `${i}'s date`,
                customer: `The ${i}'th company`,
                customerCode: `${i}${i+1}${i-4}${i}`,
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


