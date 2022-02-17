import { strings } from './strings'
import './diningRoom.scss'

const DiningRoom = () => {
    return (
        <div className="diningRoom">
            <p>{strings.DATE}</p>
            <p>{strings.PARA_1}</p>
            <p>{strings.PARA_2}</p>
            <p>{strings.PARA_3}</p>
            <p>{strings.PARA_4}</p>
            <p>{strings.PARA_5}</p>
            <p>{strings.PARA_6}</p>
            <p>{strings.PARA_7}</p>
        </div>
    )
}

export default DiningRoom
