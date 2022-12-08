const React = require('react')
const baker_seed = require('../models/baker_seed')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <h2>Add a new bread</h2>
        <form action="/breads" method="POST">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            pattern="https?://.+" title="Include http://" />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked
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
        <div className="backButton">
            <a href="/breads"><button>Go back to the index</button></a>
        </div>
      </Default>
    )
}

module.exports = New
