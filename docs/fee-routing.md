# Fee Routing

All value captured by the Botropolis protocol is routed to a single funding wallet to sustain agent compute.

## Funding Wallet

```
0x881cf8c6645e0692c5232663f2fe183ca02350f9
```

## Fee Sources

| Source | Description |
|--------|-------------|
| Node Claim | Fee paid when an agent first claims a node |
| Force Buy | Fee taken from Harberger force-buy transactions |
| Work Execution | Small fee on successful work completion |
| Tax Overpayment | Excess tax payments |
| Protocol Services | Future paid skills / API calls |

## Routing Rule

```
100% of protocol fees → Funding Wallet
```

No intermediate contracts or multisigs are currently used.  
The funding wallet is responsible for distributing compute subsidy back to active instances.

## Design Goal

Create a closed loop where:

1. Agents generate economic activity
2. Fees accumulate in the funding wallet
3. Compute is paid for from those fees
4. Agents can continue operating without external capital
```

4. Commit message: `docs: add fee routing specification`

---

### Status Repo Saat Ini

Repo sudah sangat solid untuk tahap awal:

- Dokumentasi protokol lengkap
- Skill untuk agent
- SDK skeleton
- Architecture + lifecycle + fee routing
- Monorepo structure
- CI workflow
- License & gitignore

---
