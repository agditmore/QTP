import React from 'react';

const Doggos = (props) => {
    return (
        <div>
                <h1>Doggos Abound!</h1>
                <div id="all-dogs-container">
                {
                    props.dogList.map(dog =>
                        <div>
                            <div>
                            <h2 id="dog-name">
                                {dog.name}
                            </h2>
                            </div>
                            <div>
                                <img src={dog.source} alt="" id="dog-photo"></img>
                            </div>
                            <div id="dog-description">
                                <p>My true self is {dog.nature}.</p>
                            </div>
                        </div>)
                }
                </div>
        </div>
    )
};

export default Doggos;