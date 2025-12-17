# AI Challenge Card Game - Scoring System Materials

**Course**: Generative AI for Business and Creative Professionals  
**Sessions**: 3 & 4  
**Instructor**: Mike Behar

---

## Table of Contents

1. [Leaderboard Template](#leaderboard-template)
2. [Quick Scoring Checklists](#quick-scoring-checklists)
3. [Point Calculation Examples](#point-calculation-examples)
4. [Tie-Breaker Rules](#tie-breaker-rules)
5. [First-Timer Bonus Tracker](#first-timer-bonus-tracker)
6. [Final Grade Calculation](#final-grade-calculation)

---

## Leaderboard Template

### Google Sheets Template (Recommended)

**Setup Instructions:**
1. Create new Google Sheet named "AI Card Game Leaderboard - Session [3/4]"
2. Share with "Anyone with link can view"
3. Project on classroom screen
4. Update after each card scored

**Template:**

```
╔═══════════════════════════════════════════════════════════════╗
║     AI CHALLENGE CARD GAME - SESSION 3 LEADERBOARD            ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  🔴 RED TEAM              Current Score: 2,450 points         ║
║     Members: [Names]      Cards Completed: 8                  ║
║                           First-Timer Bonuses: 4              ║
║                                                               ║
║  🔵 BLUE TEAM             Current Score: 2,680 points    ⭐   ║
║     Members: [Names]      Cards Completed: 9                  ║
║                           First-Timer Bonuses: 5              ║
║                                                               ║
║  🟡 YELLOW TEAM           Current Score: 2,180 points         ║
║     Members: [Names]      Cards Completed: 7                  ║
║                           First-Timer Bonuses: 3              ║
║                                                               ║
╠═══════════════════════════════════════════════════════════════╣
║  CURRENT CARD: Medium Prompt (300 pts) - BLUE TEAM's turn    ║
║  Round: Main Game (Card 10 of 13)                             ║
║  Next up: Yellow Team                                         ║
╚═══════════════════════════════════════════════════════════════╝
```

**Google Sheets Formula Setup:**

```
COLUMN A: Team Name
COLUMN B: Round 1 Score
COLUMN C: Round 2 Score  
COLUMN D: Round 3 Score
COLUMN E: First-Timer Bonuses
COLUMN F: Pass Penalties
COLUMN G: TOTAL SCORE

Formula for G2: =SUM(B2:E2)-F2
```

**Download Template:**
[Link to pre-made Google Sheets template]

---

### Whiteboard Template (Backup)

```
╔════════════════════════════════════════════════╗
║     SESSION 3 - LEADERBOARD                    ║
╠════════════════════════════════════════════════╣
║                                                ║
║  RED TEAM:          [ 2,450 ] points           ║
║                                                ║
║  BLUE TEAM:         [ 2,680 ] points  ⭐       ║
║                                                ║
║  YELLOW TEAM:       [ 2,180 ] points           ║
║                                                ║
╠════════════════════════════════════════════════╣
║  Current Card: #10 - Blue Team's Turn          ║
╚════════════════════════════════════════════════╝
```

**Instructions:**
- Use colored markers for team names (red, blue, yellow)
- Erase and update scores after each card
- Put star (⭐) next to leading team
- Keep running totals clear and large

---

## Quick Scoring Checklists

### Prompt Card Quick-Score Checklist

**Print this and keep next to you during gameplay**

```
═══════════════════════════════════════════════════════════
             PROMPT QUALITY QUICK-SCORE CHECKLIST
═══════════════════════════════════════════════════════════

CARD: _______________  TEAM: _______________

Card Base Value: _____ points

────────────────────────────────────────────────────────────
CRITERION 1: SPECIFICITY & CONTEXT (25%)
────────────────────────────────────────────────────────────
□ Provides clear business context
□ Explains WHY they're asking this question
□ Includes relevant constraints (budget, timeline, etc.)
□ Gives AI enough info to provide targeted response

Notes: _________________________________________________

────────────────────────────────────────────────────────────
CRITERION 2: STRATEGIC VALUE (25%)
────────────────────────────────────────────────────────────
□ Asks AI to HELP THINK (not just decide)
□ Goes beyond just getting information
□ Shows business/strategic judgment
□ Helps understand trade-offs or implications

Notes: _________________________________________________

────────────────────────────────────────────────────────────
CRITERION 3: CRITICAL EVALUATION (25%)
────────────────────────────────────────────────────────────
□ Plans to evaluate AI's response (not just accept it)
□ Shows skepticism or critical thinking
□ Sets up follow-up questions
□ Doesn't delegate judgment to AI

Notes: _________________________________________________

────────────────────────────────────────────────────────────
CRITERION 4: ITERATIVE THINKING (25%)
────────────────────────────────────────────────────────────
□ Has follow-up questions planned
□ Shows intention to refine based on AI response
□ Multiple rounds of questioning evident
□ Building toward deeper understanding

Notes: _________________________________________________

────────────────────────────────────────────────────────────
OVERALL RATING
────────────────────────────────────────────────────────────

Check one:

□ EXCEPTIONAL (90-100%)    → Card Value × 1.0
  All 4 criteria strong, sophisticated prompting

□ EXCELLENT (85-89%)       → Card Value × 0.9
  3-4 criteria strong, solid strategic thinking

□ PROFICIENT (75-84%)      → Card Value × 0.8
  2-3 criteria met, competent prompting

□ DEVELOPING (65-74%)      → Card Value × 0.7
  1-2 criteria met, basic approach

□ NEEDS IMPROVEMENT (60-64%) → Card Value × 0.6
  Few/no criteria met, asks AI to decide

□ INSUFFICIENT (<60%)      → 100 points (participation credit)
  Fundamentally flawed prompt

────────────────────────────────────────────────────────────
SCORE CALCULATION
────────────────────────────────────────────────────────────

Base Card Value:           _____ points
× Rating Percentage:       _____ %
= Earned Score:           _____ points

First-Timer Bonus:        _____ points (if applicable)

TOTAL SCORE:              _____ points

────────────────────────────────────────────────────────────
FEEDBACK TO ANNOUNCE
────────────────────────────────────────────────────────────

Brief feedback (1 sentence what was strong, 1 sentence what
could improve):

_____________________________________________________________

_____________________________________________________________

═══════════════════════════════════════════════════════════
```

---

### Debate Quick-Score Checklist

**Print this and keep next to you during gameplay**

```
═══════════════════════════════════════════════════════════
               DEBATE QUICK-SCORE CHECKLIST
═══════════════════════════════════════════════════════════

DEBATE CARD: _______________  TEAM: _______________

Team chose: □ FOR  □ AGAINST

────────────────────────────────────────────────────────────
COMPONENT 1: POSITION CLARITY (50 points max)
────────────────────────────────────────────────────────────

□ Clearly stated FOR or AGAINST                    → 50 pts
□ Position somewhat clear                          → 40 pts  
□ Position unclear or wishy-washy                  → 30 pts

Score: _____ / 50 points

────────────────────────────────────────────────────────────
COMPONENT 2: EVIDENCE & EXAMPLES (75 points max)
────────────────────────────────────────────────────────────

□ Specific examples, data, real cases cited        → 75 pts
□ General examples or reasonable scenarios         → 60 pts
□ Vague assertions, no concrete examples           → 45 pts

Score: _____ / 75 points

────────────────────────────────────────────────────────────
COMPONENT 3: COUNTERARGUMENT ADDRESSED (75 points max)
────────────────────────────────────────────────────────────

□ Addressed strongest opposing argument fairly     → 75 pts
□ Mentioned opposing view and responded            → 60 pts
□ Ignored opposing view or strawman argument       → 45 pts

Score: _____ / 75 points

────────────────────────────────────────────────────────────
COMPONENT 4: LOGIC & REASONING (75 points max)
────────────────────────────────────────────────────────────

□ Clear logical progression, sound reasoning       → 75 pts
□ Generally logical with minor gaps                → 60 pts
□ Flawed logic or emotional appeals only           → 45 pts

Score: _____ / 75 points

────────────────────────────────────────────────────────────
BASE SCORE TOTAL:                        _____ / 275 points
────────────────────────────────────────────────────────────

────────────────────────────────────────────────────────────
PEER VOTE (75 points bonus)
────────────────────────────────────────────────────────────

After presentation, ask opposing teams:
"Did [Team] win this debate?"

Red Team vote:     □ YES   □ NO
Blue Team vote:    □ YES   □ NO  
Yellow Team vote:  □ YES   □ NO

At least ONE opposing team voted YES? → +75 bonus points
All opposing teams voted NO?          → +0 bonus points

Peer Vote Bonus: _____ points

────────────────────────────────────────────────────────────
FINAL SCORE CALCULATION
────────────────────────────────────────────────────────────

Base Score:             _____ / 275
+ Peer Vote Bonus:      _____ / 75
+ First-Timer Bonus:    _____ (if applicable)

TOTAL DEBATE SCORE:     _____ / 350+ points

────────────────────────────────────────────────────────────
FEEDBACK TO ANNOUNCE
────────────────────────────────────────────────────────────

Quick feedback on what was strong and what could improve:

_____________________________________________________________

_____________________________________________________________

═══════════════════════════════════════════════════════════
```

---

## Point Calculation Examples

### Example 1: Medium Prompt Card (Proficient Performance)

**Card:** S3-04: Healthcare AI Transcription (Medium - 300 points)

**Team's Prompt:**
"Our medical clinic wants to use AI transcription for clinical notes. We're concerned about patient privacy, doctor liability, and nurse job security. Can you help us understand the trade-offs of each concern and what questions we should ask the vendor before deciding?"

**Scoring:**
- ✅ Specificity & Context: Good (provides context about concerns)
- ✅ Strategic Value: Good (asks for trade-offs, not decision)
- ⚠️ Critical Evaluation: Weak (doesn't show plan to evaluate AI's answer)
- ⚠️ Iterative Thinking: Weak (no follow-up questions indicated)

**Rating:** Proficient (75-84%) → Use 80%

**Calculation:**
- Base Card Value: 300 points
- × 80% = 240 points
- First-Timer Bonus: +100 points (this student's first presentation)
- **TOTAL: 340 points**

**Feedback Announced:**
"Blue Team scored Proficient - 80%. Strong context about the three concerns and good strategic framing asking for trade-offs. To improve: Show how you'll critically evaluate AI's response and plan follow-up questions. Base score: 240 points, plus first-timer bonus: 100 points. Total: 340 points!"

---

### Example 2: Hard Prompt Card (Exceptional Performance)

**Card:** S4-08: Insurance AI Underwriting Genetics (Hard - 400 points)

**Team's Prompt:**
"As chief underwriting officer, I'm evaluating an AI system that analyzes genetic data for life insurance pricing. Before I make a recommendation to the board, help me think through this: What's the difference between using genetic data and other health predictors we already use (family history, lifestyle)? If competitors adopt this and we don't, how severe is adverse selection risk realistically? What middle-ground approaches exist between 'use all genetic data' and 'ban it entirely'? After you explain those, I want you to challenge your own reasoning—what am I missing by framing the problem this way?"

**Scoring:**
- ✅ Specificity & Context: Excellent (role, context, specific questions)
- ✅ Strategic Value: Excellent (sophisticated strategic thinking)
- ✅ Critical Evaluation: Excellent (explicitly asks AI to challenge itself)
- ✅ Iterative Thinking: Excellent (multiple questions, clear progression)

**Rating:** Exceptional (90-100%) → Use 95%

**Calculation:**
- Base Card Value: 400 points
- × 95% = 380 points
- First-Timer Bonus: +0 (student already presented once)
- **TOTAL: 380 points**

**Feedback Announced:**
"Red Team scored Exceptional - 95%. Sophisticated prompt that asks AI to help you think critically, not decide for you. You questioned assumptions, asked for middle-ground approaches, and even requested AI challenge its own reasoning. Excellent work. 380 points!"

---

### Example 3: Debate Card (Strong Performance with Peer Vote)

**Card:** S3-D1: AI Employee Monitoring (Debate - 350 points)

**Team Position:** AGAINST mandatory monitoring

**Performance:**
- Position Clarity: Clear AGAINST (50/50 pts)
- Evidence/Examples: Cited study on surveillance stress, real company examples (75/75 pts)
- Counterargument: Addressed "employers have right to measure productivity" (75/75 pts)
- Logic & Reasoning: Strong logical flow (75/75 pts)

**Base Score:** 275/275 points

**Peer Vote:**
- Red Team (opponent): Voted YES (this team won)
- Yellow Team (opponent): Voted NO (not convinced)

Result: At least ONE opposing team voted YES → +75 bonus

**Calculation:**
- Base Score: 275 points
- + Peer Vote Bonus: 75 points
- + First-Timer Bonus: 0 (student already presented)
- **TOTAL: 350 points**

**Feedback Announced:**
"Blue Team: Perfect base score - clear position, strong evidence including research study, addressed employer rights concern fairly, solid logic throughout. Red Team voted you won the debate (+75 bonus). Final score: 350 points!"

---

### Example 4: Easy Warm-Up Card (Developing Performance)

**Card:** S3-01: Coffee Shop Inventory (Easy - 100 points warm-up, scored at half value)

**Team's Prompt:**
"Maria should use AI to help with inventory. What AI tools exist for small businesses?"

**Scoring:**
- ❌ Specificity & Context: Weak (no details about Maria's situation)
- ❌ Strategic Value: Weak (asks for tools, not strategic thinking)
- ❌ Critical Evaluation: None evident
- ❌ Iterative Thinking: None evident

**Rating:** Developing (65-74%) → Use 70%

**Calculation (Warm-Up Half-Scoring):**
- Warm-Up Card Value: 100 points
- × 70% = 70 points
- First-Timer Bonus: +100 points (student's first time)
- **TOTAL: 170 points**

**Feedback Announced:**
"Yellow Team, this is developing level - 70%. Good that you're thinking about tools, but your prompt is too generic. Maria needs more context: she has Excel data, no tech staff, is intimidated by technology. Ask AI to help her understand options, not just list tools. With first-timer bonus: 170 points. Great first effort!"

---

### Example 5: Team Passes on a Card

**Card:** S4-09: Content Moderation AI Platform (Hard - 400 points)

**Red Team's Turn:**
"We pass on this card."

**Calculation:**
- Pass Penalty: -100 points
- Card goes to Blue Team (they can accept or pass)

**If ALL Teams Pass:**
- Each team that passed: -100 points
- Card is discarded
- No team receives points
- Move to next card

**Leaderboard Update:**
- Red Team: -100 points (subtract from their total)

---

## Tie-Breaker Rules

### If Teams Are Tied at End of Game

**Tie-Breaker Hierarchy (Apply in Order):**

**1. Head-to-Head Performance**
If two teams tied, compare their performance on cards where both teams competed:
- Which team earned higher average percentage on prompt cards?
- Which team won more debates against each other?

**2. Exceptional Performances**
Count number of Exceptional-rated prompts (90-100%):
- Team with more exceptional performances wins

**3. Participation Equity**
Count number of different students who presented:
- Team that spread participation more evenly wins
- Rewards inclusive teamwork

**4. Most First-Timer Bonuses Earned**
Team that earned more first-timer bonuses wins:
- Shows they encouraged broader participation

**5. Average Score Per Card Attempted**
Calculate: Total Points ÷ Number of Cards Attempted
- Higher average wins
- Rewards quality over quantity

**6. Coin Flip**
If still tied after all criteria:
- Instructor flips coin
- Both teams are co-champions

**Example Tie-Break:**

Final Scores:
- Blue Team: 3,180 points
- Yellow Team: 3,180 points

**Apply Tie-Breakers:**

1. Head-to-Head: Blue Team averaged 85% on prompts, Yellow averaged 82% → **Blue Team wins**

OR if that's also tied:

2. Exceptional Performances: Blue Team had 4 exceptional prompts, Yellow had 2 → **Blue Team wins**

---

## First-Timer Bonus Tracker

### Tracking Sheet (Print and Use During Game)

```
═══════════════════════════════════════════════════════════
           FIRST-TIMER BONUS TRACKER - SESSION 3
═══════════════════════════════════════════════════════════

Instructions: Mark an X when each student presents for the
first time. Add +100 to that card's score.

────────────────────────────────────────────────────────────
RED TEAM
────────────────────────────────────────────────────────────
□ Student 1: ________________  Card: _________ (+100)
□ Student 2: ________________  Card: _________ (+100)
□ Student 3: ________________  Card: _________ (+100)
□ Student 4: ________________  Card: _________ (+100)
□ Student 5: ________________  Card: _________ (+100)
□ Student 6: ________________  Card: _________ (+100)

Red Team First-Timer Bonuses Earned: _____ × 100 = _____ pts

────────────────────────────────────────────────────────────
BLUE TEAM
────────────────────────────────────────────────────────────
□ Student 7: ________________  Card: _________ (+100)
□ Student 8: ________________  Card: _________ (+100)
□ Student 9: ________________  Card: _________ (+100)
□ Student 10: _______________  Card: _________ (+100)
□ Student 11: _______________  Card: _________ (+100)
□ Student 12: _______________  Card: _________ (+100)

Blue Team First-Timer Bonuses Earned: _____ × 100 = _____ pts

────────────────────────────────────────────────────────────
YELLOW TEAM
────────────────────────────────────────────────────────────
□ Student 13: _______________  Card: _________ (+100)
□ Student 14: _______________  Card: _________ (+100)
□ Student 15: _______________  Card: _________ (+100)
□ Student 16: _______________  Card: _________ (+100)
□ Student 17: _______________  Card: _________ (+100)

Yellow Team First-Timer Bonuses Earned: _____ × 100 = _____ pts

════════════════════════════════════════════════════════════
TOTAL FIRST-TIMER BONUSES AWARDED: _____ × 100 = _____ pts
════════════════════════════════════════════════════════════

Notes:
- Only the FIRST time a student presents counts
- Mark the card number where they earned it
- Add +100 to that card's team score immediately
- Announce: "[Student name] earns first-timer bonus!"

═══════════════════════════════════════════════════════════
```

---

## Final Grade Calculation

### Sessions 3-4 Overall Grade Formula

**Total Grade = 50% Game Performance + 50% Reflection Assignment**

---

### PART 1: Game Performance (50% of Sessions 3-4 Grade)

#### Component A: Team Score (30% of overall grade)

**Based on Final Leaderboard Position:**

```
1st Place Team:  100% of 30 points = 30/30 points
2nd Place Team:   90% of 30 points = 27/30 points  
3rd Place Team:   80% of 30 points = 24/30 points
```

**All team members receive the same team score.**

**Example:**
If student is on 2nd place team:
- Team Score = 27/30 points

---

#### Component B: Individual Participation (20% of overall grade)

**Based on Instructor Observations:**

```
═══════════════════════════════════════════════════════════
INDIVIDUAL PARTICIPATION RUBRIC (20 points max)
═══════════════════════════════════════════════════════════

EXCELLENT (19-20 points):
□ Presented at least once (earned first-timer bonus)
□ High-quality contributions to team discussions
□ Strong collaboration and teamwork
□ Fully engaged throughout both sessions
□ Helped quieter team members participate

GOOD (17-18 points):
□ Participated actively even if didn't present
□ Solid contributions to team discussions
□ Good teamwork and collaboration
□ Engaged most of the time
□ Positive team dynamic

PROFICIENT (15-16 points):
□ Some participation in team discussions
□ Adequate contributions
□ Acceptable teamwork
□ Mostly engaged
□ Completed assigned tasks

DEVELOPING (13-14 points):
□ Limited participation
□ Minimal contributions
□ Some teamwork issues or disengagement
□ Inconsistent engagement
□ Did minimum required

NEEDS IMPROVEMENT (Below 13 points):
□ Very minimal participation
□ Weak or no contributions
□ Poor teamwork or significantly disengaged
□ Frequent off-task behavior
□ Did not fulfill role

═══════════════════════════════════════════════════════════
```

**Track During Game:**
- Who presented for their team?
- Who earned first-timer bonus?
- Quality of individual contributions
- Teamwork and engagement observations
- Any issues or exceptional performance

---

### PART 2: Reflection Assignment (50% of Sessions 3-4 Grade)

**Graded separately using Master Rubrics**

See `reflection-assignment.md` for details.

---

### Final Grade Calculation Example

**Student: Alex Martinez**
**Team: Blue Team (2nd Place)**

**Game Performance (50%):**
- Team Score (30%): 2nd Place = 27/30 points
- Individual Participation (20%): Excellent = 19/20 points
- **Game Performance Total: 46/50 points**

**Reflection Assignment (50%):**
- Reflection grade: 45/50 points
- **Reflection Total: 45/50 points**

**FINAL SESSIONS 3-4 GRADE:**
46 + 45 = **91/100 points (91% - A-)**

---

## Instructor Master Scoresheet

### Use This to Track All Scores

```
═══════════════════════════════════════════════════════════
    SESSION 3 - MASTER SCORESHEET
═══════════════════════════════════════════════════════════

CARD #  | TEAM   | BASE PTS | BONUS | PENALTY | TOTAL
─────────────────────────────────────────────────────────
S3-01   | Red    |   170    | +100  |    0    |  270
S3-02   | Blue   |   185    | +100  |    0    |  285
S3-03   | Yellow |   160    | +100  |    0    |  260
S3-04   | Red    |   240    |   0   |    0    |  240
S3-05   | Blue   |   270    | +100  |    0    |  370
S3-06   | Yellow |  PASSED  |   0   |  -100   | -100
S3-06   | Red    |   240    | +100  |    0    |  340
...

════════════════════════════════════════════════════════════

FINAL LEADERBOARD:

Red Team:    _________ points (Place: ____)
Blue Team:   _________ points (Place: ____)
Yellow Team: _________ points (Place: ____)

════════════════════════════════════════════════════════════
```

---

## Scoring Efficiency Tips

### To Score Cards in Under 2 Minutes Each:

1. **Check boxes during presentation** (don't wait until end)
2. **Use percentages, not detailed rubric every time** (Exceptional/Excellent/Proficient)
3. **Have checklists pre-printed and ready**
4. **Write scores immediately, detailed feedback later**
5. **Trust your judgment** - don't agonize over 85% vs. 87%
6. **Focus feedback on 1-2 key points** (what was strong, what could improve)
7. **Keep game energy high** - quick scoring maintains momentum

### Red Flags for Quick Identification:

**Prompts:**
- ❌ "What should I do?" = Asks AI to decide → Developing or lower
- ❌ No context provided = Needs Improvement
- ✅ Multiple follow-up questions planned = Excellent or higher
- ✅ Asks AI to challenge its reasoning = Exceptional

**Debates:**
- ❌ No specific examples = Weak evidence score
- ❌ Ignores opposing view = Weak counterargument score
- ✅ Cites data or real cases = Strong evidence score
- ✅ Addresses strongest opposing argument = Strong counterargument score

---

## Post-Game Grade Entry

### After Session Ends, Enter These Grades:

**Blackboard Grade Entry:**

1. **Team Scores**
   - 1st Place Team members: 30/30
   - 2nd Place Team members: 27/30
   - 3rd Place Team members: 24/30

2. **Individual Participation**
   - Based on your observation notes: 13-20/20

3. **Reflection Assignment** (grade after submitted)
   - Based on reflection rubric: varies/50

**Keep These Records:**
- Final leaderboard screenshot
- First-timer bonus tracker
- Individual participation notes
- Any disputed scores or issues

---

## Success Metrics

### Indicators of Successful Scoring System:

✅ **Game runs on time** (scoring doesn't cause delays)  
✅ **Students understand their scores** (clear feedback)  
✅ **Leaderboard stays accurate** (no calculation errors)  
✅ **First-timer bonuses tracked correctly** (encourages participation)  
✅ **Final grades feel fair** (team effort + individual contribution)  
✅ **Efficient instructor grading** (not overwhelming to administer)

---

*Scoring system materials created: December 3, 2025*  
*For: AI Challenge Card Game - Sessions 3 & 4*  
*Generative AI for Business and Creative Professionals*  
*CT State Norwalk Community College*
