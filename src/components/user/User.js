import {Link} from 'react-router-dom';

export default function User({item}) {
    return (
        <div>
            {item.id} - {item.name} - <Link to={'/users/' + item.id}>user details</Link>
        </div>
    )
}
