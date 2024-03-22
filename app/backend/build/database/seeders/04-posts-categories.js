"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('posts_categories', [
            {
                post_id: 1,
                category_id: 1,
            },
            {
                post_id: 2,
                category_id: 1,
            },
            {
                post_id: 3,
                category_id: 9,
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('posts_categories', {});
    },
};
//# sourceMappingURL=04-posts-categories.js.map