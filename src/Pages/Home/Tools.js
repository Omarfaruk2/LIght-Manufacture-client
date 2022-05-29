import React from 'react'
import useToos from '../Share/useToos'
import SingleTool from './SingleTool'

const Tools = () => {

    const [tools] = useToos()

    // console.log(tools)

    return (
        <div className=''>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 bg-base-300 mx-auto pb-7'>

                {
                    tools.map(tool => <SingleTool
                        tool={tool}
                        key={tool._id}
                    ></SingleTool>)
                }

            </div>
        </div>
    )
}

export default Tools