/*eslint no-unused-vars: "off"*/
import { ChatSessionObject } from "./core/chatSession";
import { LogManager, LogLevel } from "./log";
global.connect = global.connect || {};
connect.ChatSession = ChatSessionObject;
connect.LogManager = LogManager;
connect.LogLevel = LogLevel;
connect.csmService = ChatSessionObject.csmService;
export const ChatSession = ChatSessionObject;
