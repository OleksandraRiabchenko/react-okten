import {Link} from 'react-router-dom';

export default function User({item, item: {name, id}}) {
    return (
        <div>
            {name}
            {/*- <Link to={'/users/' + id}>user details</Link>*/}
            - <Link to={
            {
                pathname: '/users/' + id,
                state: item
            }
        }>user details</Link>
        </div>
    )
}

//в лінк замість URL ми задаемо об'єкт з властивостями: 1а - адреса URL, 2а - state зі значенням нашої змінної item (данні юзера)
// тобто state це і є наші данні про конкретного юзера (але вони спочатку потрапляють в  об'єкт history->location->state (тобто в props))
// а наш  Route у файлі Users відхоплює саме цю адресу '/users/' + id передану в об'єкт в Link з властивістю {pathname: '/users/' + id,...}