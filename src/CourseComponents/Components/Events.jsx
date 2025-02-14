import list from '../../../events.json';
import Event from './Event';
export default function Events() {
    return (
        <div>
            {list.map((e,i) => <Event key={i} event={e} />)}

        </div>
    )
}