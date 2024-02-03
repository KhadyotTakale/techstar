import React from 'react';
import vg from "../Assets/2.webp"

const Home = () => {
    return (
        <>
            <div className="home">Home
                <main>
                    <h1>Techystar</h1>
                    <p>solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto doloribus, est ab laborum eaque ullam nisi aliquid suscipit eveniet voluptatem quasi quam vero assumenda eos? Necessitatibus repellendus in aliquid suscipit corporis nisi, amet asperiores animi ex et enim consequuntur facilis deleniti facere soluta aut eaque, velit aspernatur beatae cumque. Laborum, autem? Alias eaque fugiat sed, saepe voluptas, facilis iure in eveniet nemo cumque animi, sapiente dignissimos expedita magni voluptates! Repellat laboriosam unde at iusto velit dignissimos ratione nesciunt harum atque illo possimus eveniet illum minima autem, et praesentium ex, numquam voluptas in molestias quo. Quidem adipisci accusamus deleniti aut non?</p>
                </div>
            </div>
        </>


    )
}

export default Home