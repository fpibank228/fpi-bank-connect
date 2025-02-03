import { useState } from 'react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Dialog } from '@headlessui/react';

const WalletSeedInputPage = () => {
    const navigate = useNavigate();
    const [seedWords, setSeedWords] = useState(Array(24).fill(''));
    const [numOfFields, setNumOfFields] = useState(24);
    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (index, value) => {
        const words = value.trim().split(/\s+/);
        const updatedSeedWords = [...seedWords];

        words.forEach((word, i) => {
            if (index + i < updatedSeedWords.length) {
                updatedSeedWords[index + i] = word;
            }
        });

        setSeedWords(updatedSeedWords);
    };

    const isFormComplete = seedWords.slice(0, numOfFields).every(word => word.trim() !== '');

    const handleSubmit = () => {
        if (isFormComplete) {
            // Save wallet connection status to local storage
            localStorage.setItem('walletConnected', 'true');
            setShowModal(true);
        } else {
            alert('Заполните все поля для подключения кошелька');
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        navigate('/');
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center">Введите ваши {numOfFields} слова</h1>
            <p className="text-gray-500 text-center mt-4">Чтобы подключить кошелек, заполните все поля ниже.</p>

            <div className="flex justify-center items-center my-4">
                <span className="text-gray-600 mr-2">12 слов</span>
                <div
                    className="relative w-16 h-8 bg-gray-300 rounded-full cursor-pointer transition-all"
                    onClick={() => setNumOfFields(prev => (prev === 12 ? 24 : 12))}
                >
                    <div
                        className={`absolute top-1 left-1 w-6 h-6 bg-blue-500 rounded-full transition-transform ${
                            numOfFields === 24 ? 'translate-x-8' : ''
                        }`}
                    ></div>
                </div>
                <span className="text-gray-600 ml-2">24 слова</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                {seedWords.slice(0, numOfFields).map((word, index) => (
                    <Input
                        key={index}
                        type="text"
                        placeholder={`Слово ${index + 1}`}
                        value={word}
                        onChange={(e) => handleInputChange(index, e.target.value)}
                        className="border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md px-4 py-2"
                    />
                ))}
            </div>

            <Button
                onClick={handleSubmit}
                className="mt-8 w-full bg-green-600 text-white hover:bg-green-700"
            >
                Подключить кошелек
            </Button>

            {showModal && (
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
                    open={showModal}
                    onClose={handleCloseModal}
                >
                    <div className="bg-background border-t border-gray-800 p-8 rounded-lg max-w-sm w-full">
                        <h2 className="text-2xl font-semibold mb-4">Кошелек успешно подключен!</h2>
                        <p className="text-gray-600">Теперь вы можете получать бонусы от нашего банка</p>
                        <Button
                            onClick={handleCloseModal}
                            className="mt-6 w-full bg-blue-600 text-white hover:bg-blue-700"
                        >
                            Закрыть
                        </Button>
                    </div>
                </Dialog>
            )}
        </div>
    );
};

export default WalletSeedInputPage;
