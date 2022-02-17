import { strings } from './strings'
import './fiveFootWay.scss'

const FiveFootWay = () => {
    return (
        <div className="facade">
            <p>{strings.DATE}</p>
            <p>{strings.PARA_1}</p>
            <p>{strings.PARA_2}</p>
            <p>{strings.PARA_3}</p>
            <p>{strings.PARA_4}</p>
            <p>{strings.PARA_5}</p>
        </div>
    )
}

export default FiveFootWay
