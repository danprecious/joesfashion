import React from "react";
import { FaCircleNotch } from "react-icons/fa";

const AboutPage = () => {

  const services = [
    {
      name: "Modern clothing",
      icon: <FaCircleNotch />,
    },
    {
      name: "Modern clothing",
      icon: <FaCircleNotch />,
    },
    {
      name: "Modern clothing",
      icon: <FaCircleNotch />,
    },
    {
      name: "Modern clothing",
      icon: <FaCircleNotch />,
    },
  ]

  const teamMembers = [
    {
      name: "Mr Joe",
      image: "",
      role: "The Boss"
    },
    {
      name: "Mr Black",
      image: "",
      role: "Worker"
    },
    {
      name: "Mr Yenworo",
      image: "",
      role: "Apprentice"
    },
    {
      name: "Mr Wizz",
      image: "",
      role: "Apprentice"
    },


  ]

  return (
    <section className="flex lg:mx-16 md:mx-10 md:py-16">
      <div className="md:w-[25%] min-h-[60vh] hidden md:block">
        <div className="flex h-[50%]">
          <div className="w-[50%] border-t-4 border-r-4 "></div>
          <div className="w-[50%] border-t-4"></div>
        </div>
        <div className="flex h-[50%]">
          <div className="w-[50%] border-r-4 border-b-4 border-l-4 rounded-b-[4em] rounded-l-[4em]"></div>
          <div className=""></div>
        </div>
      </div>
      <div className="md:w-[75%] ">
        <div className="md:ml-10 px-5">
          <div className="mb-20">
            <h1 className="text-[2em] my-3">About us</h1>
          <p>
            Joes' Fashion is a .... Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Vitae eligendi nemo autem neque magnam tenetur
            adipisci architecto, velit impedit ducimus qui quisquam deserunt,
            cumque ex consequatur, ab inventore et veritatis nisi? Doloremque
            incidunt at quia libero. Dolore illum nisi ullam aut, distinctio
            tenetur praesentium sit totam nesciunt? Dignissimos dolores ea
            exercitationem dolorum doloremque quas aliquid sit nulla ad? Dolorum
            laborum ea pariatur maiores consequatur aliquid cum enim explicabo
            id inventore laudantium, ipsum fugit accusamus tenetur ab,
            consequuntur ad repellendus! Nemo harum tempore vero quis nostrum
            molestias sed id? Iste modi et architecto error alias eaque omnis
            deleniti est optio facere!
          </p>
          </div>
          <div className="my-20">
          <h2 className="text-[2rem] my-3">Services we offer</h2>
            <div className="custom-grid w-full justify-between py-8">
              {
                services.map((service, index) => <div key={service.name} className="bg-stone-600 lg:w-[12em] w-full h-[13em] rounded-md mx-8"></div>)
              }
            </div>
          </div>

          <div className="my-20">
            <h2 className="text-[2em] my-5">Meet the work team</h2>
            <div className="custom-grid w-full justify-between py-8">
              {
                teamMembers.map((member, index) => <div key={member.name} className="mb-8 mx-5">
                  <div className="w-[15em] h-[15em] lg:w-[10em] lg:h-[10em] rounded-full bg-stone-600"></div>
                  <p className="text-center py-3">{member.name}</p>
                </div>)
              }
            </div>
          </div>
          <div className="my-16">
            <h2 className="text-[2em]">Contact Info</h2>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
