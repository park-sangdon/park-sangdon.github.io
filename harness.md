# Harness

## Purpose

This document defines the runtime harness for a 3-agent, 3-cycle loop:

- Planner
- Generator
- Evaluator

The harness exists to keep work bounded, measurable, and convergent.

It is designed for implementation and refinement tasks where:

- a task can be planned up front,
- a concrete artifact can be generated,
- and the result can be judged against explicit criteria.

## Core Loop

The harness runs in this order:

1. Planner
2. Generator
3. Evaluator

This sequence is one cycle.

The harness runs at most 3 cycles.

```text
Cycle 1: Planner -> Generator -> Evaluator
Cycle 2: Planner -> Generator -> Evaluator
Cycle 3: Planner -> Generator -> Evaluator
```

After cycle 3, the harness must do one of the following:

- accept the result,
- recommend scope reduction,
- or hand off to a human.

## Why This Structure

This harness combines:

- manager-style coordination,
- generation,
- and explicit evaluation.

It is a practical combination of:

- manager/orchestrator patterns,
- evaluator-optimizer loops,
- and iterative refinement.

The main reason to use it is simple:

- Planner prevents drift.
- Generator creates the artifact.
- Evaluator stops self-deception.

## Agent Roles

### Planner

Planner converts the user request into:

- problem statement,
- constraints,
- acceptance criteria,
- bounded scope for the current cycle,
- and required evidence.

Planner does not write the implementation.

### Generator

Generator executes the current cycle scope.

Generator produces:

- code,
- documents,
- config changes,
- tests,
- or any other required artifact.

Generator should prefer the smallest effective change that satisfies the plan.

### Evaluator

Evaluator judges whether the generated result satisfies the plan.

Evaluator returns:

- `PASS`
- `REVISE`
- or `BLOCK`

Evaluator must be evidence-driven.

## Cycle Semantics

### Cycle 1

Goal:

- establish a viable path,
- reveal major risks,
- and get the first working version.

Rules:

- prefer the minimum viable implementation,
- expose hard constraints early,
- avoid premature generalization.

### Cycle 2

Goal:

- fix the most important failures from cycle 1,
- reduce uncertainty,
- and tighten alignment with the acceptance criteria.

Rules:

- prioritize evaluator findings,
- avoid expanding feature scope,
- improve evidence quality.

### Cycle 3

Goal:

- converge,
- close the remaining critical gaps,
- and produce a final decision.

Rules:

- do not redesign the whole system,
- only make focused changes,
- return a crisp finish state.

## State Model

Each cycle has the following state:

```text
task
cycle_number
planner_output
generator_output
evaluator_output
decision
```

Suggested decision values:

- `PASS`
- `REVISE`
- `BLOCK`

Suggested harness status values:

- `running`
- `completed`
- `needs_human`
- `failed`

## Transition Rules

### Initial

- Start at cycle 1
- Run Planner first

### After Evaluator = PASS

- Stop the harness
- Mark task as completed

### After Evaluator = REVISE

- If cycle < 3:
  - increment cycle
  - send evaluator findings back to Planner
- If cycle = 3:
  - stop
  - mark as needs_human or scope_reduction

### After Evaluator = BLOCK

- Stop the harness immediately
- Return blocker and recommended next step

## Input and Output Contracts

The harness should preserve structured handoff between agents.

### Planner -> Generator

Must include:

- problem
- constraints
- assumptions
- acceptance criteria
- current cycle scope
- evidence required

### Generator -> Evaluator

Must include:

- executed scope
- files changed
- validation performed
- known gaps
- requested checks

### Evaluator -> Planner

Must include:

- decision
- acceptance criteria pass/fail
- findings
- next cycle focus

## Recommended Stop Conditions

Stop early if:

- the task already passes acceptance criteria,
- the plan is invalid,
- the generator cannot proceed safely,
- or the evaluator finds a blocking risk.

Do not keep looping just because more improvement is possible.

The harness is for convergence, not endless polishing.

## Failure Modes

Common failure modes:

1. Planner writes vague acceptance criteria
2. Generator expands scope
3. Evaluator invents new requirements
4. The loop keeps revisiting the same failure
5. Cycle 3 still behaves like cycle 1

Mitigations:

1. Make criteria testable
2. Limit generator scope
3. Bind evaluator to planner criteria
4. Require evidence in every cycle
5. Force a final decision in cycle 3

## Minimal Harness Prompt

```text
Run a 3-agent harness with Planner, Generator, and Evaluator.

Rules:
- Maximum 3 cycles
- Planner defines measurable acceptance criteria
- Generator implements only the current cycle scope
- Evaluator returns PASS, REVISE, or BLOCK
- If PASS, stop
- If REVISE and cycle < 3, continue
- If REVISE at cycle 3, recommend scope reduction or human handoff
- If BLOCK, stop immediately
```

## Files

This harness expects these companion files:

- `planner.md`
- `generator.md`
- `evaluator.md`
- `Agents.md`
- `harness.md`

## Suggested Use

Use this harness when:

- the task is non-trivial,
- quality matters,
- and one-shot generation is too unreliable.

Avoid it when:

- the task is trivial,
- the answer is purely informational,
- or the evaluation cost is larger than the task itself.
