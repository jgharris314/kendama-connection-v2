import Content from './Content'
import NavBar from './NavBar'

function App() {
  return (
    <div className="h-screen">
      <div className=" w-full h-16 md:h-32 bg-blue-50 flex justify-center items-center text-2xl md:text-4xl font-bold fixed">Kendama Connection</div>
      <div className="flex flex-col md:flex-row pt-16 md:pt-32 overflow-hidden h-full">
        <NavBar />
        <Content />
    </div>
    </div>
  );
}

export default App;
