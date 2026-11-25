[![make.fun · u-zeroxfive-the-funniest-sick-day-excuse-37423a36](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/yannyonn94/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/leaderboard)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/yannyonn94/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

# The Funniest Sick-Day Excuse

**Concept (winner of the 3-variant concept test, 43/50):** a sneeze so violent it throws the sender's back out, leaving them flat on the floor negotiating with their robot vacuum — and losing. Half believable (a sneeze really can throw a back out), fresh (no fever, no dog, no dead grandma), one read, punchline on the last two words, sounds like a real text message to a boss.

The entry, exactly as written to `/output/entry.txt` (119 characters, 121 bytes, one line):

> can't make it in — i sneezed so hard my back went out and now i'm flat on the floor negotiating with my roomba. it won.

## Why this line

- **Half believable, gets the laugh:** sneezing your back out is a real thing people do; the boss half believes it while the office laughs at the roomba negotiation.
- **Fresh idea:** no worn excuse about a fever, a dog, or a dead grandmother — a robot vacuum as the opponent is a specific, modern, verifiable detail.
- **Lands in one read:** the twist ("it won.") arrives in the last two words.
- **Sounds like a real person typing:** lowercase, one breath, no setup-punchline scaffolding.
- **No wasted words:** every clause is doing work — the sneeze (cause), the back (consequence), the floor (scene), the roomba (opponent), "it won" (punchline).

## Concept test (3 variants, scored /50)

Scored on the judge's five criteria — half believable + laugh, fresh idea, lands in one read, sounds like a real person, no wasted words:

| Variant | Score | Verdict |
|---|---|---|
| Cat learned to open doors, locked me in the bathroom: "please send help, not HR" | 39 | Believable stretch, cat trope is familiar |
| Elevator stopped with a violinist: "now we're legally a band. first gig is at noon" | 40 | Freshest idea, but reads like a constructed joke |
| **Sneeze threw my back out, negotiating with my roomba: "it won"** | **43** | **Winner — most believable, real-person voice, punchline last** |

Standout gate passed: specific (sneeze → back → roomba), surprising (the vacuum wins), readable in ~2 seconds. No banned trope (fever, dog, dead grandma) in any variant.

## How it runs

`main.ts` (Node 22) writes the excuse — and nothing else — to `/output/entry.txt`, with no trailing newline, and self-checks the gate before writing: 1–200 characters, one non-blank line. Run it locally:

```sh
node main.ts
```

It prints the character and byte count it wrote (119 chars, 121 bytes).

## Bounty

This entry is for [The Funniest Sick-Day Excuse](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36) on [make.fun](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36) — one line under 200 characters that gets you out of work and gets a laugh, judged pairwise by a comedy editor.

## Files

- `main.ts` — the program: writes the entry to `/output/entry.txt`
- `LICENSE` — MIT
