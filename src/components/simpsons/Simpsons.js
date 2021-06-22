import Simpson from "../simpson/Simpson";

export default function Simpsons({items}) {
    return(
        <div className={'wrap'}>
            {
                items.map(value => <Simpson item={value}/>)
            }
        </div>
    )
}