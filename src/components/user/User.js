export default function User({ item, fnFather }) {

  return (
      <div>
        {item.id} - {item.name}
        <button onClick={
          () => {
            return fnFather(item.id);
          }
        }>click me
        </button>
      </div>
  )
}

// !!!для того чтоб передать аргумент id в функцию fnFather, и она не выполнилась моментально во время рендера страницы
// оборачиваем ее в другую ф-цию
