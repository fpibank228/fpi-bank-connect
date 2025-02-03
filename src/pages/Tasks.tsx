import React, {useState, useEffect} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import BottomNav from "@/components/BottomNav.tsx";

const TASKS = [
    {id: 1, text: "Подписаться на канал", link: "https://t.me/fpibank", reward: 100},
    {
        id: 2,
        text: "Купить 100 токенов",
        link: "https://t.me/blum/app?startapp=memepadjetton_FPIBANK_v5hyX-ref_Y",
        reward: 100
    },
    {id: 3, text: "Подключить кошелек", link: "/qq", reward: 500},
    {id: 4, text: "Пригласить друга", link: "https://example.com/invite", reward: 200}
];

const TasksPage = () => {
    const [taskStatuses, setTaskStatuses] = useState(() => {
        const savedStatuses = localStorage.getItem('taskStatuses');
        return savedStatuses ? JSON.parse(savedStatuses) : TASKS.map(task => ({id: task.id, status: "pending"}));
    });

    const [tokens, setTokens] = useState(() => {
        return parseInt(localStorage.getItem('tokenBalance')) || 0;
    });

    useEffect(() => {
        localStorage.setItem('taskStatuses', JSON.stringify(taskStatuses));
        localStorage.setItem('tokenBalance', tokens.toString());
    }, [taskStatuses, tokens]);

    const handleTaskClick = (taskId, link) => {
        window.open(link, '_blank');
        setTaskStatuses(prevStatuses => prevStatuses.map(task =>
            task.id === taskId ? {...task, status: "check"} : task
        ));
    };

    const handleCheckTask = (taskId, reward) => {
        setTaskStatuses(prevStatuses => prevStatuses.map(task =>
            task.id === taskId ? {...task, status: "completed"} : task
        ));
        setTokens(prevTokens => prevTokens + reward);
    };

    return (
        <div className="container mx-auto px-4 py-8 bg-[#141313] min-h-screen">
            <div className="h-8"></div>

            <Card className="bg-[#141313] text-white">
                <CardHeader>
                    <CardTitle className="text-xl text-[#A2E537]">Задания</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <p className="text-lg text-[#A2E537] font-bold">Ваш баланс: {tokens} FPI</p>
                        {TASKS.map(task => {
                            const taskStatus = taskStatuses.find(status => status.id === task.id)?.status || "pending";
                            return (
                                <div key={task.id}
                                     className="flex justify-between items-center border-b border-[#A2E537] py-2">
                  <span className="text-white">
                    {task.text} - <span className="text-[#A2E537] font-bold">{task.reward} FPI</span>
                  </span>
                                    {taskStatus === "pending" && (
                                        <Button onClick={() => handleTaskClick(task.id, task.link)}
                                                className="bg-[#A2E537] text-black hover:bg-[#8DC429]">
                                            Перейти
                                        </Button>
                                    )}
                                    {taskStatus === "check" && (
                                        <Button
                                            onClick={() => setTimeout(() => handleCheckTask(task.id, task.reward), 3000)}
                                            className="bg-yellow-500 text-black hover:bg-yellow-400">
                                            Проверить
                                        </Button>
                                    )}
                                    {taskStatus === "completed" && (
                                        <Button disabled className="bg-green-500 text-white">
                                            Выполнено
                                        </Button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
            <div className="h-8"></div>

            <BottomNav/>
        </div>
    );
};

export default TasksPage;
