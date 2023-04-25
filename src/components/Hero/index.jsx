import content from "./data";

const Intro = () => {
  return (
    <section id="about" className="">
      <div className="my-5">
        <h1 className="text-4xl my-5">
          A web design service for small businesses owners and creatives.
        </h1>
        <p className="my-5 mx-1">
          Welcome! Laughing Coyote Development is a digital studio which brings
          small businesses online. orem ipsum dolor sit, amet consectetur
          adipisicing elit. Quaerat sequi atque fugit error illo deleniti nobis
          praesentium rerum veniam optio? Consequuntur vel tempora quo maiores
          fugiat ipsam dolores cupiditate maxime! Various designs available
          for...
        </p>
        {/* //todo */}
        <>
          <div className="py-5 mt-5">
            <div className="grid 2xl:grid-cols-2 gap-10 sm:grid-cols-1">
              {content.map((item, index) => (
                <div key={index}>
                  <h3 className="pl-1 pb-1 text-2xl">{item.title}</h3>

                  <div id="border">
                    <img src={item.image} alt="" />
                  </div>

                  {/* <p>{item.paragraph1}</p> */}
                </div>
              ))}
            </div>
          </div>
        </>
        {/* //todo end*/}
      </div>
    </section>
  );
};

export default Intro;
