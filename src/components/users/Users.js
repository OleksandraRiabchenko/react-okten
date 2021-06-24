import { useEffect, useState } from "react";

export default function Users() {

    // let state = useState([]);
    // let usersList = state[0]; // массив юзеров, который будем перебирать с помощью map()
    // let setUsersList = state[1]; // сеттер - функция, кот. будет изменять состояние usersList
    // это то же самое что и выше

    let [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                setUsersList(response);
            });
    }, []);

    return(
        <div>
            {
                usersList.map(value => <div>{value.id} - {value.name}</div>)
            }
        </div>
    )
}
