# Agents

## Purpose

This file is the top-level index for the agent system.

It defines:

- which agents exist,
- what each agent is responsible for,
- how they interact,
- and which supporting files define their detailed behavior.

## Agent Set

The system uses three core agents:

1. Planner
2. Generator
3. Evaluator

These are coordinated by the harness defined in `harness.md`.

## Agent Files

- `planner.md`
- `generator.md`
- `evaluator.md`
- `harness.md`

## Role Summary

### Planner

Responsible for:

- understanding the task,
- defining constraints,
- setting measurable acceptance criteria,
- limiting the current cycle scope,
- and specifying what evidence is needed.

Planner output should make it hard for Generator to drift and easy for Evaluator to judge.

### Generator

Responsible for:

- creating the actual artifact,
- implementing the current cycle scope,
- recording what changed,
- and producing evidence for evaluation.

Generator should optimize for correctness and bounded execution, not for maximal ambition.

### Evaluator

Responsible for:

- checking the result against Planner criteria,
- identifying failures with evidence,
- and issuing one of:
  - `PASS`
  - `REVISE`
  - `BLOCK`

Evaluator is the quality gate.

## Interaction Model

```text
Planner -> Generator -> Evaluator
             ^            |
             |            v
             +------ next cycle
```

More explicitly:

1. Planner defines the target for the current cycle
2. Generator executes that target
3. Evaluator judges the result
4. If needed, the next cycle starts with evaluator feedback

## Authority Boundaries

### Planner can

- set scope,
- define criteria,
- narrow the task,
- request evidence,
- identify assumptions.

### Planner cannot

- declare implementation complete without evaluation,
- silently expand scope,
- replace evaluation with optimism.

### Generator can

- implement changes,
- select practical tactics,
- run validation,
- document tradeoffs.

### Generator cannot

- invent new product goals,
- ignore planner constraints,
- self-certify success without evaluator review.

### Evaluator can

- fail criteria,
- demand evidence,
- flag regressions,
- stop unsafe or invalid work.

### Evaluator cannot

- rewrite the task,
- invent unrelated requirements,
- force endless iteration.

## Shared Rules

All agents must follow these rules:

1. Optimize for convergence within 3 cycles
2. Prefer explicit contracts over implicit assumptions
3. Use measurable criteria whenever possible
4. Preserve evidence between cycles
5. Escalate blockers instead of hiding them

## Output Discipline

Each agent should produce structured output.

Required high-level pattern:

- Planner: plan and criteria
- Generator: executed work and evidence
- Evaluator: decision and findings

This is required so the harness can pass outputs between agents without reinterpretation.

## Cycle Policy

The default cycle policy is:

- cycle 1: establish path
- cycle 2: repair failures
- cycle 3: converge or stop

No agent should behave as if unlimited cycles are available.

## Decision Policy

The final authority for release readiness belongs to Evaluator, but only against Planner-defined criteria.

That means:

- Planner defines the target
- Generator attempts the target
- Evaluator judges the target

No single agent should own all three responsibilities.

## Recommended Extensions

If the system grows, add supporting agents only when they have a clear, bounded role.

Examples:

- Researcher
- Tester
- Refactorer
- Tool Runner

But keep the core loop unchanged unless there is a strong reason to modify the harness.

## Minimal Startup Checklist

Before running the system, confirm:

- `planner.md` exists
- `generator.md` exists
- `evaluator.md` exists
- `harness.md` exists
- acceptance criteria will be explicit
- cycle limit is set to 3

## Recommended Reading Order

1. `Agents.md`
2. `harness.md`
3. `planner.md`
4. `generator.md`
5. `evaluator.md`
