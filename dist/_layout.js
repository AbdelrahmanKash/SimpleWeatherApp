"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expo_router_1 = require("expo-router");
const react_1 = __importDefault(require("react"));
const RootLayout = () => {
    return (<expo_router_1.Stack screenOptions={{ headerShown: false }}>
      <expo_router_1.Stack.Screen name="index"/>
    </expo_router_1.Stack>);
};
exports.default = RootLayout;
