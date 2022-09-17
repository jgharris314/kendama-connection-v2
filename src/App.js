import Content from './Content'
import NavBar from './NavBar'

function App() {
  return (
    <div className="h-screen">
      <div className="w-full h-32 bg-blue-50 flex justify-center items-center text-2xl md:text-4xl font-bold fixed">Kendama Connection</div>
      <div className="flex flex-col md:flex-row pt-32 overflow-hidden h-full">
        {/* <div className="flex md:flex-col md:w-1/6 max-w-sm bg-red-50">Nav</div> */}
        <NavBar />
        <Content />
    </div>
    </div>
  );
}

export default App;
