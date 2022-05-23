import React, {Fragment,FC,Dispatch,SetStateAction} from 'react'

export interface ValuableProps {
    description: string
    setDescription: Dispatch<SetStateAction<string>>
    images?: [string]
}

const SingleValuable:FC<ValuableProps> = ({description, setDescription}) => {
    return (
        <Fragment>
            <h2>Single Valuable</h2>
        </Fragment>
    )
}

export default SingleValuable