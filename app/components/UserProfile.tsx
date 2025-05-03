'use client';

import { trpc } from '@/utils/trpc';
import { useState } from 'react';

export function UserProfile() {
    const [userId, setUserId] = useState<string>('');
    const { data: user, isLoading } = trpc.user.getById.useQuery(
        { id: userId },
        { enabled: !!userId }
    );

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">User Profile</h2>
            <div className="mb-4">
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="Enter user ID"
                    className="border p-2 rounded"
                />
            </div>
            {isLoading && <p>Loading...</p>}
            {user && (
                <div className="border p-4 rounded">
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                </div>
            )}
        </div>
    );
} 