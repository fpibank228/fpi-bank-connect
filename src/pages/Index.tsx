import RotatingCoin from '../components/RotatingCoin';
import BottomNav from '../components/BottomNav';
import { Wallet } from 'lucide-react';

const Index = () => {
  const tasks = Array(16).fill({
    title: 'Task',
    reward: '100 FPI'
  });

  return (
    <div className="min-h-screen pb-20">
      <header className="p-4">
        <h1 className="text-2xl font-bold text-primary">FPI Bank</h1>
      </header>

      <main>
        <RotatingCoin />
        
        <div className="text-center mb-8">
          <p className="text-3xl font-bold mb-2">1,000 FPI</p>
          <p className="text-sm text-gray-400 mb-4">Hash: 0x1234...5678</p>
          <p className="text-xl mb-4">1 FPI = $0.05</p>
          <button className="bg-primary text-background px-6 py-2 rounded-full flex items-center justify-center mx-auto gap-2">
            <Wallet size={20} />
            Connect Wallet
          </button>
        </div>

        <div className="task-grid">
          {tasks.map((task, index) => (
            <div key={index} className="bg-secondary/10 p-4 rounded-lg text-center">
              <h3 className="font-medium mb-2">{task.title} {index + 1}</h3>
              <p className="text-primary">{task.reward}</p>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;