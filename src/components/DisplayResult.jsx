import React, {useState, useEffect } from 'react';
import { checkSubHeading, replaceHeading } from '../subHeading';

const DisplayResult = ({answer, key}) => {
    const [heading, setHeading] = useState('false');
    const [paragraph, setParagraph] = useState(answer);

    useEffect(()=>{
        if(checkSubHeading(answer)){
            setHeading(true);
            setParagraph(replaceHeading(answer))
        }
    },[])


    return(
        <>
        <div>
            {
            heading?<span className="pt-1 text-lg block text-white">{paragraph}</span>:<span className='pl-5'>{paragraph}</span>

            }
        </div>
        </>
    )
}

export default DisplayResult;