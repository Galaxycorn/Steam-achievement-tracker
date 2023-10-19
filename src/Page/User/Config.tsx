import React, { useEffect, useState } from 'react';
import { postProfileUpdate } from '../../Services/PostApiKeyService';

interface Form {
    value: string;
}

export default function Config() {
    const [apiKey, setApiKey] = useState<Form>({ value: '' });
    const [userId, setUserId] = useState<Form>({ value: '' });

    const handleChangeKey = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setApiKey({ ...apiKey, [name]: value });
    };

    const handleChangeId = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserId({ ...userId, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('apiKey');
        console.log('userId');
        postProfileUpdate(apiKey.value, userId.value)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>apiKey : </label>
            <input type="text" name="value" onChange={handleChangeKey} required></input> <br />
            <label>userId</label>
            <input type="text" name="value" onChange={handleChangeId}></input> <br />
            <button type="submit">Update apiKey</button>
        </form>
    );
}
