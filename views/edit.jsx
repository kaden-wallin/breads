const React = require('react')
const baker_seed = require('../models/baker_seed')
const Default = require('./layouts/Default')

function Edit ({bread, index}) {
    return (
      <Default>
        <h2>Edit a bread</h2>
        <form action={`/breads/${bread.id}?_method=PUT`} method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bread.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
            defaultValue={bread.image}
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <label htmlFor="baker">Baker</label>
          <select name="baker" id="baker">
            {bakers.map((baker) => {
              return(
                <option value={baker.id} key={baker.id}>{baker.name}</option>
              )
            })}
          </select>
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit
