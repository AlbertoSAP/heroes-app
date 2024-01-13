import { useHeroe } from './Hook/UseHeroe';
import Card from './component/Card';

const App = () => {
  const {state} = useHeroe()
  return (
    <>
    <div className='container mt-5' >
    <Card img={''}/>
    </div>
    </>
  );
}

export default App;
