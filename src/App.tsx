import React, { createContext } from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';

const AppContext = createContext<AppContextInterface | null>(null)

interface AppContextInterface {
  name: string;
  age: number;
  country: string
}

const App: React.FC = () => {
  const contextValue: AppContextInterface = {
    name: "Suryanshu",
    age: 18,
    country: 'India'
  }


  return (
    <AppContext.Provider value={contextValue} >
      <div className="App">
        <Person name='Suryanshu' email='suryanshu@gmail.com' age={18} hairColor={HairColor.Black} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
