const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
  //console.log(bread.name)
    return (
      <Default>
        <h3>{bread.name}</h3>
        <p>
            and it
            {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <p>{bread.getBakedBy()}</p>
        <li><a href="/breads">Go Home</a></li>
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form>
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
      </Default>
    )
}

module.exports = Show
