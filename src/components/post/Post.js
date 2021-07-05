import {Link} from 'react-router-dom';

export default function Post({item}) {
    return (
        <div>
            {item.id} - {item.title} -> <Link to={'/posts/' + item.id}>details</Link>
        </div>
    )
}
