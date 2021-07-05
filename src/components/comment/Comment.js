import {Link} from 'react-router-dom';

export default function Comment({item}) {
    return (
        <div>
            {item.id} - {item.name} -> <Link to={
            {
                pathname: '/comments/' + item.id,
                state: item
            }
        }> details </Link>
        </div>
    )
}
