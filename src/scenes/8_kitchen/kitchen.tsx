import { strings } from './strings'
import './kitchen.scss'

const Kitchen = () => {
    return (
        <div className="kitchen">
            <p>{strings.DATE}</p>
            <p>{strings.PARA_1}</p>
            <p>{strings.PARA_2}</p>
            <p>{strings.PARA_3}</p>
            <p>{strings.PARA_4}</p>
        </div>
    )
}

export default Kitchen
