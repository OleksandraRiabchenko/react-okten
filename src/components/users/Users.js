import User from '../user/User';

export default function Users({items, showPost}) {

    return(
        <div>
            {
                items.map(value => <User key={value.id} item={value} showPost={showPost}/>)
            }
        </div>
    )
}
