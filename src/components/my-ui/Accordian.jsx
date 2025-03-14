import React, { useState } from 'react'
import accordiandata from '../price/accordian'


const Accordian = () => {

  const [selected, setSelected] = useState(null)

  const showData = (itemId) => {
    setSelected(itemId === selected ? null : itemId)
  }

  return (
    <div className=''>

        {accordiandata && accordiandata.length > 0 ? 
        accordiandata.map((item, i) => {
          return <div key={i} className="">
            <div onClick={() => showData(i)} className="flex justify-between items-center py-2 border-t">
              <h4 className='text-xl font-[500]'>{item.title}</h4>
              <span className='text-2xl font-bold'>+</span>
            </div>
            {selected === i ? 
            (
              <div className="py-10">
                {item.content}
              </div>
            )
            : null
          }
          </div>
        })
        :
        <p>No Data Found</p>
        }
    </div>
  )
}

export default Accordian