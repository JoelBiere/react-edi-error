import Card from './Card'
import DepartmentLabel from './DepartmentLabel'
import Date from './Date'
import ErrID from './ErrID'
import CompanyLabel from './CompanyLabel'
import Price from './Price'


  const ErrCard = () => {
      return(
          <div>
              <Card>
                  <DepartmentLabel>
                      Operations
                  </DepartmentLabel>
                  <Date>
                      8.23.2021
                  </Date>
                  <ErrID>
                      103444
                  </ErrID>
                  <CompanyLabel>
                      FedEx
                  </CompanyLabel>
                  <Price> 
                      $1,000
                    </Price>
              </Card>
          </div>
      )
  }

  export default ErrCard