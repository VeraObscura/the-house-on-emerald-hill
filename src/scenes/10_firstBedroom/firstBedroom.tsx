import { strings } from './strings'
import './firstBedroom.scss'

const FirstBedroom = () => {
    return (
        <div className="firstBedroom">
            <p>{strings.DATE}</p>
            <p>{strings.PARA_1}</p>
            <p>{strings.PARA_2}</p>
            <p>{strings.PARA_3}</p>
        </div>
    )
}

export default FirstBedroom
