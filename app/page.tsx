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
        <section style={{backgroundColor:'lightgrey', width:'100vw', height:'100vh', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
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
    </div>
  );
}
