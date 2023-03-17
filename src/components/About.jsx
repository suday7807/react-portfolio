import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sint
          nemo fuga inventore suscipit ea animi ducimus, ad asperiores aut
          voluptatibus nesciunt at odit? Deserunt iste eveniet facere qui animi
          ipsum tempore unde vitae!
        </p>
        <br />
        <p className="text-xl mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          vitae quam reiciendis vero cum repudiandae soluta non placeat quod
          dolorum autem quae aperiam earum quaerat, dolores voluptatum
          blanditiis, quos necessitatibus pariatur fuga nulla veniam. Minima
          libero, illo tempora quas at laboriosam fugit reiciendis iure maiores
          quis, beatae doloremque. Et, deleniti.
        </p>
      </div>
    </div>
  );
};

export default About;
