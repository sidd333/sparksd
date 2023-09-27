import "./App.css";

function App() {
  return (
    <>
      <div className="h-screen bg-[url('bgg.jpg')]">
        {" "}
        <h2 className="pt-64 text-center text-3xl text-white">
          This application is fully rendered <b>server side </b>and could take
          upto a<b> few minutes to load</b>{" "}
        </h2>
        <div className="w-fit mx-auto pt-10 ">
          <a href="https://ww-48uz.onrender.com/">
            <button className="bg-blue-500 p-2 rounded hover:bg-blue-600">
              Continue
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
