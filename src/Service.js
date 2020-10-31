import React from 'react';
import Card from './Card';
import Card_Data from './Card_Data';

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                           { Card_Data.map((currentVal)=>{
                                return(
                                    <Card
                                        key={currentVal.id}
                                        imgsrc={currentVal.imgsrc}
                                        title={currentVal.title}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
