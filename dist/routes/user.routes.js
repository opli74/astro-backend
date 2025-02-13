"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const express_1 = __importDefault(require("express"));
const user_middleware_1 = require("../middlewares/user.middleware");
const admin_middleware_1 = require("../middlewares/admin.middleware");
const router = express_1.default.Router();
// TODO: Add other authentication endpoints
// Such as reset password, forget password, etc
router.post('/register', user_controller_1.register);
//  router.post('/login', login);
router.get('/', user_middleware_1.protectUserRoutes, admin_middleware_1.protectAdminRoutes, user_controller_1.getUsers);
//router.get('/profile', protectUserRoutes, getUserProfile);
//router.put('/profile', protectUserRoutes, updateUserProfile);
router.delete('/:id', user_middleware_1.protectUserRoutes, admin_middleware_1.protectAdminRoutes, user_controller_1.deleteUser);
router.get('/:id', user_middleware_1.protectUserRoutes, admin_middleware_1.protectAdminRoutes, user_controller_1.getUserById);
//router.put('/:id', protectUserRoutes, protectAdminRoutes, updateUser);
exports.default = router;
