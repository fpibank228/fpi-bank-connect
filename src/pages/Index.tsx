import RotatingCoin from '../components/RotatingCoin';
import BottomNav from '../components/BottomNav';
import { Hash, DollarSign, Wallet } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const tasks = Array(16).fill({
    title: 'Task',
    reward: '100 FPI'
  });

  const copyHash = () => {
    navigator.clipboard.writeText('EQD0KpcRMh-sKO2z5-vOjgvFjTT58tO-2Nmvxqg5ocFQFtWz');
    toast({
      description: "Hash copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen pb-20">
      <header className="p-4">
        <h1 className="text-2xl font-bold text-primary">FPI Bank</h1>
      </header>

      <main>
        <RotatingCoin />
        
        <div className="text-center mb-8">
          <p className="text-3xl font-bold mb-2 text-primary">1,000 FPI</p>
          
          <div className="flex justify-center gap-2 mb-4 px-4">
            <Button 
              variant="secondary" 
              onClick={copyHash}
              className="flex-1 max-w-[200px]"
            >
              <Hash size={20} />
              Hash
            </Button>
            <Button 
              variant="secondary"
              className="flex-1 max-w-[200px]"
            >
              <DollarSign size={20} />
              $0.05
            </Button>
            <Button 
              variant="secondary"
              className="flex-1 max-w-[200px]"
            >
              <Wallet size={20} />
              Connect
            </Button>
          </div>
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