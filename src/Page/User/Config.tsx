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
        console.log(apiKey);
        console.log('userId');
        console.log(userId);
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
            <input type="text" name="value" onChange={handleChangeKey} required></input>
            <label>userId</label>
            <input type="text" name="value" onChange={handleChangeId}></input>
            <button type="submit">Update apiKey</button>
        </form>
    );
}

// function PostApiKeyData(apiKeyData: string, userId: string) {
//     const [apiKey, setApiKey] = useState<any[]>([]);
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {
//         setLoading(true);
//         postProfileUpdate(apiKeyData)
//             .then((data) => {
//                 setApiKey(data);
//             })
//             .catch((error) => {
//                 console.error(error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, [apiKeyData]);

//     return { apiKey, isLoading };
// }
