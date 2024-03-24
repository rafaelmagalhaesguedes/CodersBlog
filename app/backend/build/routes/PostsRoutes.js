"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
const PostsController_1 = require("../controllers/PostsController");
const PostsMiddleware_1 = require("../middlewares/PostsMiddleware");
const PostUpdateMiddleware_1 = require("../middlewares/PostUpdateMiddleware");
class PostsRoutes {
    constructor() {
        //
        this.router = (0, express_1.Router)();
        this.postsController = new PostsController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        //
        this.router.post('/', AuthMiddleware_1.default, PostsMiddleware_1.default, (req, res) => this.postsController.createPost(req, res));
        this.router.get('/search', (req, res) => this.postsController.searchPost(req, res));
        this.router.get('/user', AuthMiddleware_1.default, (req, res) => this.postsController.getPostsByUser(req, res));
        this.router.get('/', (req, res) => this.postsController.getPosts(req, res));
        this.router.get('/:id', (req, res) => this.postsController.getPostById(req, res));
        this.router.put('/:id', AuthMiddleware_1.default, PostUpdateMiddleware_1.default, (req, res) => this.postsController.updatePost(req, res));
        this.router.delete('/:id', AuthMiddleware_1.default, (req, res) => this.postsController.deletePost(req, res));
    }
}
exports.default = new PostsRoutes().router;
//# sourceMappingURL=PostsRoutes.js.map