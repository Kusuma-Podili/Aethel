export const PacketType = {
  C2S_HANDSHAKE: 1,
  S2C_HANDSHAKE_ACK: 2,
  C2S_PLAYER_INPUT: 3,
  S2C_WORLD_SNAPSHOT: 4,
  S2C_SPAWN_ENTITY: 5,
  S2C_DESPAWN_ENTITY: 6,
  S2C_DAMAGE_EVENT: 7,
  C2S_CHAT_MESSAGE: 8,
  S2C_CHAT_BROADCAST: 9
};

export class PacketSerializer {
  static serialize(type, data) {
    return JSON.stringify({ type, data, timestamp: Date.now() });
  }

  static deserialize(rawString) {
    try {
      return JSON.parse(rawString);
    } catch (e) {
      return null;
    }
  }
}
