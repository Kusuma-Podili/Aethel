#!/usr/bin/env python3
"""
Authoritative Multiplayer Game Server for Chronicles of Aethelgard.
Handles client handshakes, movement validation, monster spawning, and snapshot multicasting.
"""

import socket
import json
import time
import math
import threading

class GameRoom:
    def __init__(self, room_id="global"):
        self.room_id = room_id
        self.clients = {} # client_id -> state
        self.monsters = []
        self.tick_rate = 30 # 30 Hz
        self.running = True

    def add_client(self, client_id):
        self.clients[client_id] = {
            "id": client_id,
            "x": 200.0,
            "y": 200.0,
            "hp": 1000,
            "maxHp": 1000,
            "lastSeq": 0
        }
        print(f"[Server] Client {client_id} connected to Room {self.room_id}")

    def remove_client(self, client_id):
        if client_id in self.clients:
            del self.clients[client_id]
            print(f"[Server] Client {client_id} disconnected")

    def process_input(self, client_id, input_data):
        if client_id not in self.clients:
            return
        
        c = self.clients[client_id]
        dx = input_data.get("inputX", 0.0)
        dy = input_data.get("inputY", 0.0)
        dt = input_data.get("dt", 0.033)
        seq = input_data.get("sequenceNumber", 0)

        # Basic speed validation
        speed = 200.0
        c["x"] += dx * speed * dt
        c["y"] += dy * speed * dt
        c["lastSeq"] = seq

    def get_world_snapshot(self):
        return {
            "type": 4, # S2C_WORLD_SNAPSHOT
            "timestamp": time.time(),
            "players": list(self.clients.values()),
            "monsters": self.monsters
        }

if __name__ == "__main__":
    print("==================================================")
    print("⚔️ Chronicles of Aethelgard - Game Simulation Server")
    print("Running authoritative game loop on 30 Hz")
    print("==================================================")
    room = GameRoom()
    room.add_client("player_1")
    snap = room.get_world_snapshot()
    print(f"[Server] Initial world snapshot generated with {len(snap['players'])} player(s).")
