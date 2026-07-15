class PacketService {
  constructor() {
    this.queue = [];
    this.processing = false;
  }

  enqueue(packet) {
    this.queue.push(packet);
  }

  dequeue() {
    if (this.queue.length === 0) {
      return null;
    }

    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  getQueue() {
    return this.queue;
  }

  size() {
    return this.queue.length;
  }
}

export default new PacketService();
