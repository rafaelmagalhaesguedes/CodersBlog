"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('users', [
            {
                username: 'Admin',
                role: 'admin',
                email: 'admin@admin.com',
                password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
                image: 'https://avatars.githubusercontent.com/u/8412507?s=400&u=9ee34dd1671db6517cb52587736ba529c4455d9e&v=4',
                // senha: secret_admin
            },
            {
                username: 'Gandalf The Grey',
                role: 'user',
                email: 'user@user.com',
                password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
                image: '',
                // senha: secret_user
            },
            // os logins abaixo são intencionalmente inválidos, pois serão usados nos testes
            {
                username: 'User',
                role: 'user',
                email: '@user.com',
                password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
                image: 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account',
                // senha: secret_user
            },
            {
                username: 'User',
                role: 'user',
                email: 'invalid.user@user.com',
                password: '$2a$10$HDkFwOMKOI6PTza0F7.YRu1Bqsqb9hx7XkuV7QeYB5dRL4z9DI1Mu',
                image: 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account',
                // senha: 12345
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('users', {});
    },
};
//# sourceMappingURL=01-user.js.map