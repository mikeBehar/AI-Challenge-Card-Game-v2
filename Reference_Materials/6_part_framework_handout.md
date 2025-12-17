# AI Risk Assessment Framework
**Quick Reference for Students**

Use this framework when analyzing AI systems for potential risks and failures.

---

## 1. DATA QUALITY RISKS
**Question:** Is the training data good enough?

### Check for:
- ❓ Is training data representative of all populations?
- ❓ Does historical data contain biases we want to eliminate?
- ❓ Are proxy variables valid for all groups?
- ❓ Is data complete, or does it have gaps?
- ❓ Does selection bias affect what's in the dataset?

**Example Issues:**
- AI trained on mostly male resumes learns to prefer male candidates
- Healthcare data from wealthy patients doesn't represent poor patients
- Crime data reflects police activity, not actual crime rates

---

## 2. TRANSPARENCY & EXPLAINABILITY RISKS
**Question:** Can we understand and verify the AI's decisions?

### Check for:
- ❓ Can the system explain its decisions?
- ❓ Can we audit for fairness and bias?
- ❓ Can users challenge decisions?
- ❓ Is the algorithm a "black box"?
- ❓ Can regulators verify compliance?

**Example Issues:**
- Credit decisions with no explanation
- Hiring rejections users can't appeal
- Medical diagnoses doctors can't verify
- Black box algorithms preventing bias audits

---

## 3. TESTING & VALIDATION RISKS
**Question:** Was it tested thoroughly before deployment?

### Check for:
- ❓ Pre-launch fairness audits across demographics?
- ❓ Testing for edge cases and adversarial inputs?
- ❓ Continuous monitoring post-deployment?
- ❓ Validation that it actually works as intended?
- ❓ Testing of failure modes and safety?

**Example Issues:**
- Launching without testing on diverse groups
- Not testing what happens when system fails
- No monitoring after deployment
- Assuming training performance = real-world performance

---

## 4. GOVERNANCE & OVERSIGHT RISKS
**Question:** Who's responsible and accountable?

### Check for:
- ❓ Clear accountability for AI decisions?
- ❓ Human review for high-stakes or contested decisions?
- ❓ Mechanisms to report and address harms?
- ❓ Appropriate oversight structure?
- ❓ Clear policies for AI use?

**Example Issues:**
- "Algorithm decided" with no human responsibility
- No way to appeal automated decisions
- No process to report when AI causes harm
- Unclear who can fix problems

---

## 5. SCOPE & SAFEGUARDS RISKS
**Question:** Are there appropriate boundaries and safety nets?

### Check for:
- ❓ Clear boundaries on AI's authority and competence?
- ❓ Safety filters and content moderation?
- ❓ Escalation pathways when AI is uncertain?
- ❓ Caps on demographic disparities?
- ❓ Protection for vulnerable populations?

**Example Issues:**
- AI making decisions it's not qualified for
- No safety filters on chatbots
- No way to escalate beyond AI
- No limits on how much one group can be impacted

---

## 6. CONTEXT & EQUITY RISKS
**Question:** Does this worsen existing inequalities?

### Check for:
- ❓ Diverse perspectives in design and testing?
- ❓ Understanding of historical/social context?
- ❓ Consideration of who benefits vs. who bears risks?
- ❓ Impact on marginalized communities?
- ❓ Recognition of systemic causes vs. individual blame?

**Example Issues:**
- All-white design team building facial recognition
- Ignoring that "poverty" isn't "risk"
- Benefits go to wealthy, harms fall on poor
- Treating systemic problems as individual failures

---

## How to Use This Framework

### For Prediction Cards:
Think through relevant categories to identify risks

### For Risk Assessment Cards:
**You must identify risks in ALL 6 categories**

Format your response:
```
1. DATA QUALITY:
   - [Specific risk]: [H/M/L severity]
   - [Specific risk]: [H/M/L severity]

2. TRANSPARENCY & EXPLAINABILITY:
   - [Specific risk]: [H/M/L severity]

[Continue for all 6 categories...]
```

### Severity Ratings:
- **High (H):** Serious harm, clear violation, urgent concern
- **Medium (M):** Significant issue, needs addressing
- **Low (L):** Minor concern, manageable risk

---

## Remember:

✅ Most AI failures involve MULTIPLE categories
✅ Risks often cascade and compound
✅ Context matters - same AI may have different risks in different settings
✅ Absence of obvious bias doesn't mean fairness
✅ Good intentions don't prevent harmful outcomes

---

**Questions?** Ask your instructor or review the [Master Rubric](../Grading/master_rubric_updated.md)
