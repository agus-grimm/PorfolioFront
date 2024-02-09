'use client';

export default function Home() {
  
  const buttonPress = () => {
    console.log("a")
    fetch("http://127.0.0.1:4000/").then(response => response.text()).then((data) => console.log(data))
  }
   
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

      <button onClick={buttonPress}>text</button>

      </div>
    </main>
  );
}
