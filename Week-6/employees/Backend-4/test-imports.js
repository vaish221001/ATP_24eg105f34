async function test() {
    try {
        console.log('Testing mongoose...');
        const mongoose = await import('mongoose');
        console.log('mongoose ok');

        console.log('Testing express...');
        const express = await import('express');
        console.log('express ok');

        console.log('Testing bcrypt...');
        const bcrypt = await import('bcrypt');
        console.log('bcrypt ok');

        console.log('Testing jsonwebtoken...');
        const jwt = await import('jsonwebtoken');
        console.log('jsonwebtoken ok');

        console.log('Testing dotenv...');
        const dotenv = await import('dotenv');
        console.log('dotenv ok');

        console.log('Testing cookie-parser...');
        const cookieParser = await import('cookie-parser');
        console.log('cookie-parser ok');

        console.log('Testing userModel.js...');
        await import('./models/userModel.js');
        console.log('userModel.js ok');

        console.log('Testing userAPI.js...');
        await import('./APIs/userAPI.js');
        console.log('userAPI.js ok');

    } catch (e) {
        console.error('Error:', e.message);
        console.error(e.stack);
    }
}
test();
