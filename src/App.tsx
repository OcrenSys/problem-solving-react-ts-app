import './App.css';
import Media from './components/media';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl p-4">
        <section className="mb-16">
          <h1 className="text-2xl font-bold text-center">
            Problem Solving excercises
          </h1>
        </section>
        <div className="grid grid-cols-3 gap-6">
          <section>
            <Media>
              <Media.InputMedia />
              <Media.ContentMedia />
              <Media.ResultMedia />
              <Media.ButtonMedia />
            </Media>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
