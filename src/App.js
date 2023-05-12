import "./style/index.css";

import Dialog from './components/Dialog';

import StarRating from './components/StarRating';
import { useState } from 'react';


function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <main>
      <div className="container">
        <StarRating/>
        <button  onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
          {isDialogOpen && (
          <Dialog
          title="Hello"
          message="This is a dialog box"
          onClose={handleDialogClose}
          />
        )}
      </div>
    </main>
  );
};

export default App;


