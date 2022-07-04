import React from 'react'
// import { useNavigate } from 'react-router-dom'

const AdminMangeProdicts = ({ tool, setTools, tools }) => {

    // const navigate = useNavigate()

    const { name, description, price, img, availableQuantity, minQuantity, _id } = tool


    const handledelete = (id) => {


        const proceed = window.confirm("Are you sure for delete")
        if (proceed) {

            const url = `https://evening-shelf-42427.herokuapp.com/tool/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = tools.filter(tool => tool._id !== id)
                    console.log(remaining)
                    setTools(remaining)

                })
        }


    }

    return (
        <div >
            <div className="card lg:max-width:md bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <h3><b>Available Quantity:{availableQuantity}</b></h3>
                    <h3><b>Miniummn Quantity:{minQuantity}</b></h3>
                    <h3><b>Price Per Qurantity:$ {price}</b></h3>
                    <p>{description}</p>

                    <div className="card-actions">
                        <button onClick={() => handledelete(_id)} className="btn btn-primary">Delete Now</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AdminMangeProdicts