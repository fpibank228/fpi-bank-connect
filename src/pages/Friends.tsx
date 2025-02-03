import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Users, Gift} from 'lucide-react';
import BottomNav from "@/components/BottomNav.tsx";

const FriendsPage = () => {
    // Mock данные для приглашённых друзей
    const friendsList = [
        {username: "-", tokensEarned: 0},
    ];

    // Данные текущего пользователя
    const currentUser = {
        totalInvited: 0,
        referralTokens: 0,
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="h-8"></div>

            {/* Общая статистика */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Приглашённые друзья</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold">{currentUser.totalInvited}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Ваши реферальные токены</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-green-500">{currentUser.referralTokens.toLocaleString()}</p>
                    </CardContent>
                </Card>
            </div>

            {/* Таблица друзей */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="text-indigo-500"/>
                        Друзья и заработок
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-16">#</TableHead>
                                <TableHead>Пользователь</TableHead>
                                <TableHead className="text-right">Полученные токены</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {friendsList.map((friend, index) => (
                                <TableRow key={friend.username}>
                                    <TableCell className="font-medium">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>{friend.username}</TableCell>
                                    <TableCell className="text-right text-green-500">
                                        {friend.tokensEarned.toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Дополнительные бонусы */}
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Gift className="text-purple-500"/>
                        Бонусы и награды
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-base text-gray-700">Приглашайте больше друзей и получайте дополнительные токены и
                        эксклюзивные награды!</p>
                </CardContent>
            </Card>

            <BottomNav/>
        </div>
    );
};

export default FriendsPage;
