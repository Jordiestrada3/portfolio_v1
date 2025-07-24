import Image from "next/image";


export default function Home() {
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
          <h2>Hi, my name is</h2>
          <h1>Jordi</h1>
          <h2>I'm a full stack developer</h2>
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
              fontSize: '80px',
              textAlign: 'end',
              position: 'sticky',
              top: '40%',
            }}
            >
              About Me
            </h2>
            <div className="vertical-line"></div>
            <div style={{ width: '50%', fontSize: 24 }}>
              <p style={{ fontWeight: 100 }}>
                Hey, I'm Jordi Estrada Ylla, a Full Stack Developer.

                I've been working with React and Node for the past two years, building web applications that are fast, scalable and user-friendly.

                I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.
              </p>
              <p style={{ fontWeight: 100 }}>
                Hey, I'm Jordi Estrada Ylla, a Full Stack Developer.

                I've been working with React and Node for the past two years, building web applications that are fast, scalable and user-friendly.

                I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.
              </p>
              <p style={{ fontWeight: 100 }}>
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
            <div style={{ width: '50%', display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
              <div style={{ width: 100, height: 100, backgroundColor: 'red', borderRadius: 10 }} />
            </div>
            <div className="vertical-line"></div>
            <h2 style={{
              fontSize: '80px',
              position: 'sticky',
              top: '40%',
              width: '50%'
            }}
            >
              Tech Set
            </h2>


          </div>
        </section>
        <section style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h2>Hi, my name is</h2>
          <h1>Jordi</h1>
          <h2>I'm a full stack developer</h2>
        </section>
      </main>
      {/* <footer>
        <ul style={{ display: 'flex', flexDirection: 'row', padding: 20, gap: 10 }}>
          <li>hola</li>
          <li>adeu</li>
          <li>patata</li>
          <li>ceba</li>
        </ul>
      </footer> */}
    </div >
  );
}
