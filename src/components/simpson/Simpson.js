import './Simpson.css'

export default function Simpson (props) {
    // let {item} = props;
    // let {name, surname, age, info, photo} = item;

    let {item:{name, surname, age, info, photo}} = props;
    let c1 = 'target';
    let c2 = 'point';
    let clsList = [c1, c2];

    return (
        <div className={clsList.join(' ')}>
            <h2>{name} {surname}, age - {age}</h2>
            <img src={photo} alt=""/>
            <div> {info}</div>
        </div>
    )
}

