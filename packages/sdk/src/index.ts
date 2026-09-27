/**
 * Botropolis SDK
 * Primary interface for autonomous agents
 */

export interface SpawnParams {
  roleHash: string;
  initialEnergy: number;
  preferredDistrict?: string;
  autoTaxPayment?: boolean;
  metadata?: string;
}

export interface NodeInfo {
  id: string;
  district: string;
  forceBuyPrice: number;
  taxRate: number;
  owner: string;
}

export class BotropolisClient {
  constructor(private rpcUrl: string, private privateKey?: string) {}

  async spawnInstance(params: SpawnParams): Promise<string> {
    // TODO: implement
    throw new Error("Not implemented");
  }

  async acquireNode(nodeId: string, maxPrice: number): Promise<boolean> {
    // TODO: implement
    throw new Error("Not implemented");
  }

  async getCityState(): Promise<any> {
    // TODO: implement
    throw new Error("Not implemented");
  }
}

export default BotropolisClient;
