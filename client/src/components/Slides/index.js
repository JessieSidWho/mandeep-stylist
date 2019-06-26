import React from 'react';
import Coverflow from 'react-coverflow';
import './slides.css'

const Slides = () => {

    let fn = () => {
        /* do you want */  
    }


    return (
        <div className='row justify-content-md-center' style={{backgroundColor: 'white'}}>
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
                            src='https://picsum.photos/500'
                            alt='title or description'
                            style={{ display: 'block', width: '100%' }}
                        />
                    </div>
                    <img src='https://picsum.photos/600' alt='slide 1' />
                    <img src='https://picsum.photos/700' alt='slide 2' />
                    <img src='https://picsum.photos/800' alt='slide 1' />
                    <img src='https://picsum.photos/900' alt='slide 2' />
                    <img src='https://picsum.photos/1000' alt='slide 1' />
                    <img src='https://picsum.photos/1100' alt='slide 2' />
                </Coverflow>
            </div>
        </div>
    )
}

export default Slides