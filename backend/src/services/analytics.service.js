class AnalyticsService {
  constructor() {
    this.stats = {
      packetsSent: 0,
      packetsDelivered: 0,
      packetsDropped: 0,
      totalLatency: 0,
      totalHops: 0,
    };
  }

  packetSent() {
    this.stats.packetsSent++;
  }

  packetDelivered(packet) {
    this.stats.packetsDelivered++;
    this.stats.totalLatency += Date.now() - packet.createdAt;
    this.stats.totalHops += packet.route.length - 1;
  }

  getStats() {
    return {
      packetsSent: this.stats.packetsSent,
      packetsDelivered: this.stats.packetsDelivered,
      packetsDropped: this.stats.packetsDropped,

      averageLatency:
        this.stats.packetsDelivered === 0
          ? 0
          : Math.round(this.stats.totalLatency / this.stats.packetsDelivered),

      averageHops:
        this.stats.packetsDelivered === 0
          ? 0
          : (this.stats.totalHops / this.stats.packetsDelivered).toFixed(1),
    };
  }
}

export default new AnalyticsService();
