import {MyContext} from './App'

export default function C({x}) {
    return (
        <MyContext.Consumer>
        {/*для передачі об'єкта з провайдера викликаємо підоб'єкт Consumer,
        в якому викликаємо функцію, яка в якості аргумента приймає пропсу з Provider (val)  (назва довільна)*/}
            {/*x - наша змінна передана за допомогою propertyDrill*/}
            {
                // (val) => {
                //     return <div>{x} {val.name}</div> або 2й варіант одразу до проперті name
                ({name}) => {
                    return <div>{x} {name}</div>
                }
            }
        </MyContext.Consumer>
    )
}
