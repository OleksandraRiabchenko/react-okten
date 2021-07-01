import Post from '../post/Post'

export default function Posts({items, showComments}) {
    return (
        <div>
          {items.map(value => <Post key={value.id} item={value} showComments={showComments}/>)}
        </div>
    )
}
