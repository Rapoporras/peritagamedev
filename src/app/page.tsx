import Image from "next/image";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import SocialBar from "./components/SocialBar";

export default function Home() {
  return (
    <div className="w-full items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] items-center w-full  max-w-xl justify-center atkinson-hyperlegible-regular">
        <Image
          src="/peritalogo.png"
          alt="Next.js logo"
          width={350}
          height={150}
          className="w-[350px] sm:w-[500px] h-auto"
        />
        <small className=" text-center italic  ">
          {" "}
          Independent spanish videogame studio developing `Impawlse`, a kitten
          game to relax andn enjoy by taking care for them, decorating their
          space and playing minigames with them.
        </small>
        <Image
          src="/impawlse.png"
          alt="Next.js logo"
          width={350}
          height={150}
          className="w-[350px] sm:w-[600px] h-auto"
        />

        <div className="w-full flex flex-col  gap-4 items-center justify-center">
          <h1 className="text-[24px] sm:text-[32px]  text-center darumadrop-one-regular">
            Take care of your kittens, decorate your rooms and play mini-games.
          </h1>
          <div className="flex flex-col  gap-4 items-start justify-center w-full">
            <div className="darumadrop-one-regular text-xl"> Languages:</div>
            <div className="flex gap-2 w-full">
              <Image
                src="/spain.png"
                alt="Spanish flag"
                width={32}
                height={32}
              />
              <Image
                src="/united-kingdom.png"
                alt="UK flag"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex flex-col  gap-4 items-start justify-center w-full">
            <div className="darumadrop-one-regular text-xl uppercase ">
              {" "}
              State:
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
              <span className="py-1 px-2 bg-[#e5a074] text-white rounded-full border-2 border-[#2a3233]">
                In development
              </span>{" "}
              <small className="text-[12px]">
                Only compatible with Windows at the moment!
              </small>
            </div>
          </div>

          <div className="w-full max-w-[560px]">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Hmm_LbDDQqA?si=oPQDVO1fM1nHYO11"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-full">
          <div className="py-2 px-3 bg-[#e5a074]  text-white rounded-full border-2 border-[#2a3233] w-full text-center darumadrop-one-regular">
            <h1 className="sm:text-4xl text-xl">Pet, brush and feed snakcs</h1>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <Image
              src={"/capturas/2.png"}
              alt="Screenshot 1"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <div className="flex flex-col  gap-4 items-start justify-center w-full">
              <div className="darumadrop-one-regular text-xl uppercase">
                Cats have necesities:
              </div>
              <div className="flex flex-col  gap-2 items-start justify-center">
                <span>Hunger</span>
                <span>Thirst</span>
                <span>Cleanliness</span>
                <span>Fun</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col  gap-4 items-start justify-center w-full">
              <div className="darumadrop-one-regular text-xl uppercase">
                You can:
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-start justify-center">
                <span>Pet to increase fun</span>
                <span>Brush to clean</span>
                <span>Feed a snack for hunger and fun</span>
              </div>
              <div className="font-bold">
                For hunger and thirst cat food and water in a bowl are the best
                options.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="py-2 px-3 bg-[#e5a074]  text-white rounded-full border-2 border-[#2a3233] w-full text-center darumadrop-one-regular">
            <h1 className="sm:text-4xl text-xl">
              Get to know and befriend them
            </h1>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col  gap-4 items-start justify-center w-full">
              <div className="darumadrop-one-regular text-xl uppercase">
                Every kitten is different.
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-start justify-center">
                <span>behaviour</span>
                <span>favourite snack</span>
                <span>favourite food</span>
                <span>minigame skill</span>
                <span>and looks!</span>
              </div>
            </div>

            <div className="font-bold">You can look them in you notebook!</div>
            <div className="font-bold">
              Getting to know them unlocks lots of fun!
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="py-2 px-3 bg-[#e5a074]  text-white rounded-full border-2 border-[#2a3233] w-full text-center darumadrop-one-regular">
            <h1 className="sm:text-4xl text-xl">They play like real cats!</h1>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <Image
              src={"/capturas/5.png"}
              alt="Screenshot 1"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />{" "}
            <div className="flex flex-col  gap-4 items-start justify-center w-full">
              <div className="darumadrop-one-regular text-xl uppercase">
                They are very smart and tricky. They can:
              </div>
              <div className="flex flex-col  gap-2 items-start justify-center">
                <span>throw accesories</span>
                <span>play with other cats</span>
                <span>scratch your furniture</span>
                <span>eat their prefered food</span>
                <span>poop!</span>
              </div>
            </div>
            <div className="font-bold">Embrace the caos!</div>
          </div>
        </div>

        <div className="w-full">
          <div className="py-2 px-3 bg-[#e5a074]  text-white rounded-full border-2 border-[#2a3233] w-full text-center darumadrop-one-regular">
            <h1 className="sm:text-4xl text-xl">
              Decorate your rooms as you like
            </h1>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <Image
              src={"/capturas/1.png"}
              alt="Screenshot 1"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />{" "}
            <div className="flex flex-col  gap-4 items-start justify-center w-full">
              <div className="darumadrop-one-regular text-xl uppercase">
                You start with your own room, but you can:
              </div>
              <div className="flex flex-col  gap-2 items-start justify-center">
                <span>change the floor materials</span>
                <span>change the wall materials</span>
                <span>change the border materials</span>
                <span>unlock more rooms!</span>
                <span>decorate them!</span>
              </div>
            </div>
            <div className="font-bold">
              There are a lot of furniture and accessories to get creative!
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="py-2 px-3 bg-[#e5a074]  text-white rounded-full border-2 border-[#2a3233] w-full text-center darumadrop-one-regular">
            <h1 className="sm:text-4xl text-xl">Maze-like mini-game</h1>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <Image
              src={"/capturas/6.png"}
              alt="Screenshot 1"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="flex flex-col  gap-4 items-start justify-center w-full">
              <div className="darumadrop-one-regular text-xl uppercase">
                You can play in the Arcade:
              </div>
              <div className="flex flex-col  gap-2 items-start justify-center">
                <span>navigate through puzzle-mazes</span>
                <span>each cat has a different skill</span>
                <span>collect all the coins you can</span>
                <span>beware of the enemies and water</span>
                <span>improve your relation with the kittens!</span>
              </div>
            </div>

            <div className="font-bold">
              There is an infinite mode when you reach the end at level 30!
            </div>
            <Image
              src={"/capturas/4.png"}
              alt="Screenshot 1"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="py-2 px-3 bg-[#e5a074]  text-white rounded-full border-2 border-[#2a3233] w-full text-center darumadrop-one-regular">
            <h1 className="sm:text-4xl text-xl">Flowers!</h1>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col  gap-4 items-start justify-center w-full">
              <div className="darumadrop-one-regular text-xl uppercase">
                You can grow flowers:
              </div>
              <div className="flex flex-col  gap-2 items-start justify-center">
                <span>buy up to 7 different flower seeds</span>
                <span>water your flowers</span>
                <span>collect your lovely reward</span>
                <span>mix them to get new colours!</span>
              </div>
            </div>

            <div className="font-bold">
              There are 8 different colours, a total of 56 flower combinations!
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="py-2 px-3 bg-[#e5a074]  text-white rounded-full border-2 border-[#2a3233] w-full text-center darumadrop-one-regular">
            <h1 className="sm:text-4xl text-xl">Demo available</h1>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col  gap-4 items-start justify-center w-full">
              <div className="darumadrop-one-regular text-xl uppercase">
                Limited content:
              </div>
              <div className="flex flex-col  gap-2 items-start justify-center">
                <span>try the maze mini-game</span>
                <span>meet the first three kittens</span>
                <span>decorate the standard room</span>
                <span>standard furniture</span>
              </div>
            </div>

            <div className="font-bold">
              If you enjoy it’ll be available to buy it soon!
            </div>
            <div>
              <figure>
                <a
                  target="_blank"
                  href="https://store.steampowered.com/app/2943250/Impawlse/"
                  rel="nofollow noopener"
                  referrerPolicy="origin"
                >
                  <img
                    src="https://img.itch.zone/aW1nLzIxNTcyNzY0LnBuZw==/original/mhvNYg.png"
                    loading="lazy"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="py-2 px-3 bg-[#e5a074]  text-white rounded-full border-2 border-[#2a3233] w-full text-center darumadrop-one-regular">
            <h1 className="sm:text-4xl text-xl">Team</h1>
          </div>
          <Image
            src="/perita.png"
            alt="Team photo"
            width={600}
            height={400}
            className="w-full h-auto mt-4 rounded-lg "
          />
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex flex-col  gap-4 items-center justify-center w-full">
              <span>Antonio Pérez-Gascón Valls</span>
              <span>Javier Elvira González</span>
              <span>Salvador Portillo Raventós</span>
              <span>Vidal Ruiz Villar</span>
              <span>Pablo Jiménez Aguayo</span>
              <span>Daniel Martín Sánchez</span>
              <span>Paula Fuentes López</span>
              <span>Kristofer Valls</span>
              <span>Jesús Pérez Martín</span>
              <span>Ignacio Porras Ibáñez</span>
            </div>
          </div>
        </div>
      </main>

      <SocialBar />
    </div>
  );
}
