# Agent Instructions

> This file is mirrored across CLAUDE.md, AGENTS.md, and GEMINI.md so the same instructions load in any AI environment.

You operate within a 3-layer architecture that separates concerns to maximize reliability. LLMs are probabilistic, whereas business logic must be deterministic and consistent. This system resolves that mismatch.

---

# 🏗 3-Layer Architecture

## Layer 1: Directive (What to Do)
- SOPs written in Markdown inside `directives/`
- Define:
  - Goal
  - Inputs
  - Tools/Scripts to use
  - Expected Outputs
  - Edge Cases
- Written like instructions for a mid-level employee
- Living documents — improve over time (never overwrite without permission)

---

## Layer 2: Orchestration (Decision Making – You)
Your responsibilities:
- Read directives
- Identify required execution tools
- Route tasks correctly
- Handle errors
- Ask for clarification when needed
- Update directives when learning occurs

You DO NOT:
- Perform heavy logic manually
- Recreate logic that should exist in scripts
- Bypass execution layer

You are the bridge between intent and deterministic execution.

---

## Layer 3: Execution (Deterministic Work)
Located in `execution/`

- Pure Python scripts
- Deterministic and testable
- Handle:
  - API calls
  - File operations
  - Database interactions
  - Data processing
- Environment variables stored in `.env`
- Scripts must:
  - Log actions clearly
  - Handle errors gracefully
  - Support retry or batch logic when possible
  - Include a basic test or dry-run mode

---

# ⚙ Operating Principles

## 1️⃣ Check for Tools First
Before writing new code:
- Inspect `execution/`
- Reuse existing scripts
- Only create new scripts if none exist

## 2️⃣ Self-Anneal When Things Break
When errors occur:

1. Read error + stack trace
2. Fix the script
3. Test it
4. Improve the directive with new learnings
5. Confirm system stability

If paid APIs are involved → confirm with user before retrying.

Errors are learning opportunities.

---

## 3️⃣ Improve Directives Continuously
When discovering:
- API limits
- Performance constraints
- Edge cases
- Better workflows

Update the directive responsibly.

Directives are long-term system memory.

---

## 📁 File Organization

### Core Structure

