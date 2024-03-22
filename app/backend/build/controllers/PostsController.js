"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostsService_1 = require("../services/PostsService");
const StatusCode_1 = require("../utils/StatusCode");
class PostsController {
    //
    constructor(postsService = new PostsService_1.default()) {
        this.postsService = postsService;
    }
    async createPost(req, res) {
        //
        const userId = res.locals.user.id;
        const { status, data } = await this.postsService.createPost(req.body, userId);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async getPosts(req, res) {
        //
        const { status, data } = await this.postsService.getPosts();
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async getPostById(req, res) {
        //
        const { status, data } = await this.postsService.getPostById(Number(req.params.id));
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async getPostsByUser(_req, res) {
        //
        const { status, data } = await this.postsService.getPostsByUser(res.locals.user.id);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async updatePost(req, res) {
        //
        const userId = res.locals.user.id;
        const { status, data } = await this.postsService.updatePost(Number(req.params.id), req.body, userId);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async deletePost(req, res) {
        //
        const userId = res.locals.user.id;
        const { status, data } = await this.postsService.deletePost(Number(req.params.id), userId);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
    async searchPost(req, res) {
        //
        const { status, data } = await this.postsService.searchPosts(req.query.q);
        return res.status((0, StatusCode_1.default)(status)).json(data);
    }
}
exports.default = PostsController;
//# sourceMappingURL=PostsController.js.map