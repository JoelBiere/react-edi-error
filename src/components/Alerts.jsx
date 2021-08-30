import { Alert, Button } from 'reactstrap'
import * as alerts from '../actions/alertTypes'
import store from '../store'
import { dismissAlert } from '../actions/actions'
import { generateDepartmentLabel } from './ErrorCards/ErrCard'


const Alerts = (props) => {
    const handleDismiss = () => {
        store.dispatch(dismissAlert())
    }
    switch (props.alertType) {
        case (alerts.RESOLVED_ALERT):
            return <Alert color={props.color} style={{ fontSize: "larger", textAlign: "center" }} > Error {props.id} marked as "Resolved" <Button onClick={handleDismiss}>X</Button> </Alert>

        case (alerts.REASSIGNED_ALERT):
            return <Alert color={props.color} style={{ fontSize: "larger", textAlign: "center" }} >Error {props.id} was reassigned from  {generateDepartmentLabel(props.oldDepartment)} to {generateDepartmentLabel(props.newDepartment)}  <Button onClick={handleDismiss}>X</Button> </Alert>

        default:
            return null
    }





}

export default Alerts
