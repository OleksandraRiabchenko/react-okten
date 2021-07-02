import UserPost from '../userPost/UserPost'

export default function Posts({items}) {
    return (
        <div>
            {items.map(value => <UserPost key={value.id} item={value}/>)}

        </div>
    )
}
