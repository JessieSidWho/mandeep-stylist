import React from 'react';
import Coverflow from 'react-coverflow';

const Slides = () => {

    let fn = () => {
        /* do you want */  
    }


    return (
        <div className='row justify-content-md-center border'>
            <div className='col-md-12'>
                <Coverflow
                    className=''
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                >
                    <div
                        onClick={() => fn()}
                        onKeyDown={() => fn()}
                        role="menuitem"
                        tabIndex="0"
                    >
                        <img
                            src='[image/path/please_change]'
                            alt='title or description'
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                    <img src='' alt='slide 1' />
                    <img src='[image/path/please_change]' alt='slide 2' />
                </Coverflow>
            </div>
        </div>
    )
}

export default Slides