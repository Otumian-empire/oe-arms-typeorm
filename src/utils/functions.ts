import { Request } from "express";

import { ONE, PAGINATION } from "../constants/app.constants";
import { JWT_TTL } from "../constants/env.constants";

export function generateToken(): string {
  const SACK = "1234567890";
  const SACK_LENGTH = SACK.length;
  const TOKEN_LENGTH = 5;

  let token = "";

  for (let i = 0; i < TOKEN_LENGTH; i++) {
    token += SACK[Math.floor(Math.random() * SACK_LENGTH)];
  }

  return token;
}

export function isValidRoomNumber(roomNumber: string): boolean {
  // A room number will be five characters starting with
  // 'R' followed by the floor number and the room number
  if (!roomNumber) return false;

  const roomNumberLength = roomNumber.length;

  if (roomNumberLength !== 5) return false;

  if (!roomNumber.startsWith("R")) return false;

  return !isNaN(Number(roomNumber.substring(1, roomNumberLength)));
}

export function isValidPrice(price: number = 0): boolean {
  return price && !isNaN(Number(price));
}

export function pagination(page: number = 1, pageSize: number = 12) {
  if (page < ONE) {
    page = PAGINATION.page;
  }

  if (pageSize < ONE) {
    pageSize = PAGINATION.pageSize;
  }

  let offset = (page - ONE) * pageSize;
  let limit = pageSize;

  return { limit, skip: offset };
}

export function getJwtIat(): number {
  return Date.now() + JWT_TTL;
}

export function getTokenFromHeader(req: Request): string {
  const headerAuth = req.headers["authorization"];

  if (!headerAuth) {
    return "";
  }

  return headerAuth.split(" ")[1];
}
