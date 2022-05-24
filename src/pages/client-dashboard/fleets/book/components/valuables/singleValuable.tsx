import React, {Fragment,FC} from 'react'
import { XIcon } from '@heroicons/react/outline'

export interface ValuableProps {
    description: string
    setDescription: (value:any) => void
    images?: string[]
    setImages?: (value:any) => void
    handleRemove: () => void
}

const SingleValuable:FC<ValuableProps> = ({description, setDescription, handleRemove}) => {
    return (
        <Fragment>
            <div className='col-span-4'>
                <div className='grid-cols-4'>
                    <div className='col-span-3'>
                        <input
                            placeholder='Enter name/description of item' 
                            className='mt-1 block w-full border-none rounded-none shadow-sm py-2 px-3 focus:outline-none focus:ring-white bg-gray-100 focus:border-white sm:text-sm'
                            />
                    </div>
                    <div className='col-span-1 border-1 border-gold-2 rounded-md '>
                        <XIcon className='h-6 w-6'/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SingleValuable