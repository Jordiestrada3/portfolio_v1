import { LettersPullUp } from "./animations/letters-pull-up";
import { WordsPullUp } from "./animations/words-pull-up";
import Image from "next/image";


export default function Home() {

  const logos = [
    "/logos/HTML.png",
    "/logos/CSS.png",
    "/logos/JavaScript.png",
    "/logos/TypeScript.png",
    "/logos/React.png",
    "/logos/Next.js.png",
    "/logos/Node.js.png",
    "/logos/GitHub.png",
    "/logos/Agile.png"
  ]

  return (
    <div>
      {/* <header>
        <h1>Jordi Estrada Ylla</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        
      </header> */}
      <main>
        <section className="presentation-section">
          <h3>Hi, my name is</h3>
          <div style={{ padding: 70 }}>
            <LettersPullUp text='Jordi' className="main-title"></LettersPullUp>
          </div>
          <h3>I'm a full stack developer</h3>
        </section>
        <section className="about-me-section" >
          <div style={{
            display: 'flex',
            gap: 50,
            width: '80%',
            alignItems: 'flex-start',
          }}>
            <h2 style={{
              width: '50%',
              textAlign: 'end',
              position: 'sticky',
              top: '40%',
            }}
            >
              <WordsPullUp text="About Me" className="skill-set-title"></WordsPullUp>
              {/* About Me */}
            </h2>
            <div className="vertical-line"></div>
            <div style={{ width: '50%', gap: 20, flexDirection: 'column', display: 'flex' }}>
              <p>
                Hey, I'm Jordi Estrada Ylla, a Full Stack Developer.

                I've been working with React and Node for the past two years, building web applications that are fast, scalable and user-friendly.

                I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.
              </p>
              <p>
                Hey, I'm Jordi Estrada Ylla, a Full Stack Developer.

                I've been working with React and Node for the past two years, building web applications that are fast, scalable and user-friendly.

                I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.
              </p>
              <p>
                Hey, I'm Jordi Estrada Ylla, a Full Stack Developer.

                I've been working with React and Node for the past two years, building web applications that are fast, scalable and user-friendly.

                I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.
              </p>
            </div>
          </div>
        </section>
        <section className="tech-set-section" >
          <div style={{
            display: 'flex',
            gap: 50,
            alignItems: 'flex-start',
          }}>
            <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap', gap: 30 }}>
              {logos.map((logo, index) => {

                const alt = `Logo ${logo.split('/').pop().split('.')[0]}`
                const tech = logo.split('/').pop().split('.')[0]

                return <div key={index} className="logo-card">
                  <img
                    key={index}
                    src={logo}
                    alt={alt}
                    width={100}
                    height={100}
                  />
                  <p className="logo-text">{tech}</p>
                </div>
              })}
            </div>
            <div className="vertical-line"></div>
            <h2 style={{
              position: 'sticky',
              top: '40%',
              width: '50%'
            }}
            >
              <WordsPullUp text="Skill Set" className="skill-set-title"></WordsPullUp>
              {/* Skill Set */}
            </h2>
          </div>
        </section>
      </main>
    </div >
  );
}
