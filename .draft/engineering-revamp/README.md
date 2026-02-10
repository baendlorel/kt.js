# KT.js Engineering Revamp

This folder collects engineering-focused proposals for improving KT.js core without changing its core philosophy (real DOM + manual updates).

## Contents

- lifecycle-and-disposal.md
- scheduler-and-batching.md
- dependency-tracking.md
- error-boundary-and-async.md
- ssr-and-hydration.md
- ecosystem-and-standards.md
- diagrams.md

## Goals

- Improve reliability in long-lived apps (disposal, leaks, async cancellation).
- Add predictable update scheduling with minimal API footprint.
- Keep the framework small and explicit.
