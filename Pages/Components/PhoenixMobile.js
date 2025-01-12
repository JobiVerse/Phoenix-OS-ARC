```javascript
import React, { useState } from 'react';
import { Clock, Calendar, Star, CheckSquare, GameController } from 'lucide-react';

const PhoenixMobile = () => {
  const [gameVersion, setGameVersion] = useState(null);
  const [activeTab, setActiveTab] = useState('timeline');
  const [isSetup, setIsSetup] = useState(false);

  // Setup Screen Component
  const SetupScreen = () => (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-8">Choose Your Version</h1>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => {
            setGameVersion('red');
            setIsSetup(true);
          }}
          className={`p-6 rounded-lg ${
            gameVersion === 'red' 
              ? 'bg-red-500 text-white' 
              : 'bg-white border-2 border-red-500 text-red-500'
          }`}
        >
          <GameController className="w-12 h-12 mx-auto mb-2" />
          <div className="text-center font-bold">Pokemon Red</div>
        </button>
        <button
          onClick={() => {
            setGameVersion('blue');
            setIsSetup(true);
          }}
          className={`p-6 rounded-lg ${
            gameVersion === 'blue' 
              ? 'bg-blue-500 text-white' 
              : 'bg-white border-2 border-blue-500 text-blue-500'
          }`}
        >
          <GameController className="w-12 h-12 mx-auto mb-2" />
          <div className="text-center font-bold">Pokemon Blue</div>
        </button>
      </div>
    </div>
  );

  if (!isSetup) {
    return <SetupScreen />;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-xl font-bold">Phoenix OS Arc</h1>
        <p className="text-sm text-gray-600">Pokemon {gameVersion.charAt(0).toUpperCase() + gameVersion.slice(1)} Version</p>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto flex justify-around p-2">
          <button 
            onClick={() => setActiveTab('timeline')}
            className={`p-3 rounded-lg ${activeTab === 'timeline' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <Clock className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('calendar')}
            className={`p-3 rounded-lg ${activeTab === 'calendar' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <Calendar className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('milestones')}
            className={`p-3 rounded-lg ${activeTab === 'milestones' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <Star className="w-6 h-6" />
          </button>
          <button 
            onClick={() => setActiveTab('tasks')}
            className={`p-3 rounded-lg ${activeTab === 'tasks' ? 'text-blue-600' : 'text-gray-500'}`}
          >
            <CheckSquare className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default PhoenixMobile;
```
