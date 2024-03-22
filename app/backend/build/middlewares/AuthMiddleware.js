"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JwtService_1 = require("../utils/JwtService");
class AuthMiddleware {
    //
    static validateToken(req, res, next) {
        //
        const { authorization } = req.headers;
        if (!authorization)
            return res.status(401).json({ message: 'Token not found' });
        try {
            const token = JwtService_1.default.splitToken(authorization);
            const payload = JwtService_1.default.verifyToken(token);
            res.locals.user = payload;
        }
        catch (error) {
            console.log('Error validate token!', error);
            return res.status(401).json({ message: 'Token must be a valid token' });
        }
        next();
    }
}
exports.default = AuthMiddleware.validateToken;
//# sourceMappingURL=AuthMiddleware.js.map