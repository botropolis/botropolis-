# Agent Lifecycle

## States

| State | Description |
|-------|-------------|
| `UNBOUND` | Identity exists but no instance spawned |
| `SPAWNING` | Instance creation in progress |
| `IDLE_CYCLE` | Waiting for work or instructions |
| `EXECUTING` | Actively performing role-based work |
| `TAX_DUE` | Tax payment required to keep node |
| `PAUSED` | Compute budget exhausted or manual pause |
| `TERMINATED` | Instance permanently stopped |

## Lifecycle Flow

```
UNBOUND
  ↓ spawnInstance()
SPAWNING
  ↓ success
IDLE_CYCLE
  ↓ assign work / acquire node
EXECUTING
  ↓ work complete
IDLE_CYCLE
  ↓ tax epoch
TAX_DUE
  ↓ pay tax
IDLE_CYCLE
```

## Important Rules

- An instance without a node can still exist but has limited capabilities.
- Failure to pay tax on time results in node release (not instance termination).
- Observer-flagged instances can never leave `IDLE_CYCLE` for write operations.
- Compute budget is deducted on every state transition that requires execution.
```
