import { strings } from './strings'
import './opening.scss'

const Opening = () => {
    return (
        <div className="opening">
            <h1>The House on Emerald Hill</h1>

            <p>{strings.TITLE}</p>
            <p>{strings.CONDITION}</p>
            <p>{strings.TEXT1}</p>
        </div>
    )
}

export default Opening
