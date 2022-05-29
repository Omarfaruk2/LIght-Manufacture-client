import React from 'react'
import useToos from '../Share/useToos'
import AdminMangeProdicts from './AdminMangeProdicts'

const ManageProducts = () => {

    const [tools, setTools] = useToos()

    console.log(tools)

    return (
        <div className='my-20'>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 bg-base-300 mx-auto pb-7'>

                {
                    tools.map(tool => <AdminMangeProdicts
                        tools={tools}
                        setTools={setTools}
                        tool={tool}
                        key={tool._id}
                    ></AdminMangeProdicts>)
                }

            </div>
        </div>
    )
}

export default ManageProducts