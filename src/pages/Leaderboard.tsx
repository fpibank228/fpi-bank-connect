import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Trophy} from 'lucide-react';
import BottomNav from "@/components/BottomNav.tsx";

const Leaderboard = () => {
    const [currentBalance, setCurrentBalance] = useState(0);

    useEffect(() => {
        const storedBalance = localStorage.getItem('tokenBalance');
        setCurrentBalance(parseInt(storedBalance) || 0);
    }, []);

    // Mock data for top 10 users
    const topUsers = [
        {username: "cryptoking", tokens: 387654},
        {username: "blockchain", tokens: 342891},
        {username: "satoshi", tokens: 298765},
        {username: "defimaster", tokens: 276543},
        {username: "tokenwhale", tokens: 254321},
        {username: "hodlgang", tokens: 198765},
        {username: "moonshot", tokens: 176543},
        {username: "diamond", tokens: 154321},
        {username: "rocketman", tokens: 132109},
        {username: "cryptonaut", tokens: 98765}
    ];

    // Mock current user with balance from localStorage
    const currentUser = {
        username: "yourwallet",
        tokens: currentBalance,
        rank: 7
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="h-8"></div>
            {/* Общая статистика */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Всего пользователей</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">4,563</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Ваш баланс</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-green-500">
                            {currentUser.tokens.toLocaleString()}
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Таблица лидеров */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Trophy className="text-yellow-500"/>
                        Топ 10 пользователей
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-16">Место</TableHead>
                                <TableHead>Пользователь</TableHead>
                                <TableHead className="text-right">Токены</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topUsers.map((user, index) => (
                                <TableRow key={user.username}
                                          className={user.username === currentUser.username ? "bg-muted" : ""}>
                                    <TableCell className="font-medium">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell className="text-right text-green-500">
                                        {user.tokens.toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            <BottomNav/>

        </div>
    );
};

export default Leaderboard;
