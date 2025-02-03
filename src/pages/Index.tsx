import RotatingCoin from '../components/RotatingCoin';
import BottomNav from '../components/BottomNav';
import { Hash, DollarSign, Wallet, ArrowDownLeft, ArrowUpRight, ArrowLeftRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { toast } = useToast();

  const copyHash = () => {
    navigator.clipboard.writeText('EQD0KpcRMh-sKO2z5-vOjgvFjTT58tO-2Nmvxqg5ocFQFtWz');
    toast({
      description: "Hash успешно скопирован",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="container mx-auto px-4">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold pt-4">FPI Bank</h1>
          
          <div className="flex flex-col items-center">
            <RotatingCoin />
            <p className="text-4xl font-bold text-primary mt-4">1,234 FPI</p>
          </div>

          <div className="flex justify-center gap-2 px-4">
            <Button 
              variant="secondary" 
              onClick={copyHash}
              className="flex-1 max-w-[200px] bg-[#2C2B2B]"
            >
              <Hash size={20} />
              Hash
            </Button>
            <Button 
              variant="secondary"
              className="flex-1 max-w-[200px] bg-[#2C2B2B]"
            >
              <DollarSign size={20} />
              $0.05
            </Button>
            <Button 
              variant="secondary"
              className="flex-1 max-w-[200px] bg-[#2C2B2B]"
            >
              <Wallet size={20} />
              Connect
            </Button>
          </div>

          <div className="flex justify-center gap-4 px-4">
            <Button 
              variant="secondary"
              className="rounded-full w-16 h-16 p-0 flex flex-col items-center justify-center bg-[#2C2B2B]"
            >
              <ArrowDownLeft size={24} />
              <span className="text-xs mt-1">Receive</span>
            </Button>
            <Button 
              variant="secondary"
              className="rounded-full w-16 h-16 p-0 flex flex-col items-center justify-center bg-[#2C2B2B]"
            >
              <ArrowUpRight size={24} />
              <span className="text-xs mt-1">Withdraw</span>
            </Button>
            <Button 
              variant="secondary"
              className="rounded-full w-16 h-16 p-0 flex flex-col items-center justify-center bg-[#2C2B2B]"
            >
              <ArrowLeftRight size={24} />
              <span className="text-xs mt-1">Transfer</span>
            </Button>
          </div>

          <div className="mt-8">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                <CarouselItem>
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Bank Card 1"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                    alt="Bank Card 2"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Bank Card 3"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="task-grid">
            <div className="bg-[#2C2B2B] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Daily Task</h3>
              <p className="text-sm text-gray-400">Complete daily tasks to earn rewards</p>
            </div>
            <div className="bg-[#2C2B2B] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Weekly Task</h3>
              <p className="text-sm text-gray-400">Complete weekly tasks to earn rewards</p>
            </div>
            <div className="bg-[#2C2B2B] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Monthly Task</h3>
              <p className="text-sm text-gray-400">Complete monthly tasks to earn rewards</p>
            </div>
            <div className="bg-[#2C2B2B] p-4 rounded-lg">
              <h3 className="font-bold mb-2">Special Task</h3>
              <p className="text-sm text-gray-400">Complete special tasks to earn rewards</p>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;