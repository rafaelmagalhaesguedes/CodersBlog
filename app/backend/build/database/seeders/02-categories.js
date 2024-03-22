"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('categories', [
            {
                id: 1,
                name: 'Language',
            },
            {
                id: 2,
                name: 'Database',
            },
            {
                id: 3,
                name: 'Framework',
            },
            {
                id: 4,
                name: 'Library',
            },
            {
                id: 5,
                name: 'DevOps',
            },
            {
                id: 6,
                name: 'Testing',
            },
            {
                id: 7,
                name: 'Mobile',
            },
            {
                id: 8,
                name: 'Web',
            },
            {
                id: 9,
                name: 'Software',
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('categories', {});
    },
};
//# sourceMappingURL=02-categories.js.map