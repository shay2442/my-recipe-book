import React from 'react'
import {useState} from 'react'

function Form({onAddItem}) {
    const initialState={
        image: '',
        name: '',
        from: '',
        category: ''
    }

    const [formData, setFormData] = useState(initialState)

    function handleChange(e) {
    setFormData( {...formData,
        [e.target.name]: e.target.value})
    }

    function handleSubmit(e)  {
        e.preventDefault()

        fetch('http://localhost:3004/recipes', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
           body: JSON.stringify(formData),
          })
            .then(r => r.json())
            .then((newItem) => {
                onAddItem(newItem)
                setFormData(initialState)})
    }

    return(
        <form onSubmit={handleSubmit}className="form">
            <label>
                Image:
                <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}>
                </input>
            </label>

            <label>
                Name:
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                ></input>
            </label>

            <label>
                From:
                <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                ></input>
            </label>

            <label>
                Category:
                <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}>
                </input>
            </label>

            <button className='submit-bttn' type="submit">Add Recipe</button>
        </form>
    )
}

export default Form;