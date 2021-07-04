import A from './A';
import {createContext} from 'react';
//для початку потрібно імпортувати функцію createContext() з 'react',
// потім створити змінну для цієї ф-ції (назва довільна, але обовєязково з великої літери )
// Context - це глобальний провайдер, який сам формує інформацію і сам її відхоплює, тобто сам собі пассує
// MyContext - компонента <MyContext/>, з довільною назвою MyContext
// Щоб контекст був доступний в інших місцях потрібно поставити export
export const MyContext = createContext();
export default function App() {
    const x = 'hello';
    const y = 'okten'
    return (
        //</MyContext> повинен обгортати все що ми передаємо, Provider - підоб'єкт MyContext.
        // у Provider є пропса яка називається value, куди і потрібно передавати об'єкт, який має бути доступний в інших місцях
        <MyContext.Provider value={y}>
        <div>
            <A x={x}/>
        </div>
        </MyContext.Provider>
    );
}


