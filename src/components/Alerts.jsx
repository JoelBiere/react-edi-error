import { Alert, Button } from 'reactstrap'
import * as alerts from '../actions/alertTypes'
import store from '../store'
import { dismissAlert } from '../actions/actions'
import { generateDepartmentLabel } from './ErrorCards/ErrCard'


const Alerts = (props) => {
   
    switch (props.alertType) {
        case (alerts.RESOLVED_ALERT):
            return <Alert color={props.color}> Error {props.id} marked as "Resolved" <CloseButton /></Alert>

        case (alerts.REASSIGNED_ALERT):
            return <Alert color={props.color}>Error {props.id} was reassigned from  {generateDepartmentLabel(props.oldDepartment)} to {generateDepartmentLabel(props.newDepartment)}  <CloseButton /> </Alert>

        default:
            return null
    }
}

const CloseButton = () => {
    const handleDismiss = () => {
        store.dispatch(dismissAlert())
    }
    return(
        <Button style={{backgroundColor: "Transparent", border: 'none'}} close onClick={handleDismiss}></Button>
    )
}
export default Alerts
