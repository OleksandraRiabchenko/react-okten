import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function UserDetails(props) {
//const {match:{params:{id}}} = props;
// або другий спосіб деструктуризації данних з (props) history->match->params за доп ф-ції useParams()
    const {id} = useParams();
    console.log(id);

    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(response => {
                setUserDetails({...response});
            });
    }, [id])
    // передаемо [id] для того щоб useEffect слідкував за id, якщо id зміниться useEffect перезапуститься
    return (
        <div>
            {
                JSON.stringify(userDetails)
            }
        </div>
    )
}
