# Case Study 1: AI Hiring at Liberty Regional Bank

## Company Background

**Liberty Regional Bank (LRB)** is a 35-year-old community bank headquartered in Hartford, Connecticut, with 12 branches across Connecticut and Western Massachusetts. The bank has built its reputation on personalized service and deep community roots.

### Key Facts
- **Founded**: 1990
- **Employees**: 487 (including 52 loan officers)
- **Assets**: $2.8 billion
- **Branch Network**: 12 locations (8 CT, 4 MA)
- **Market Position**: #4 in regional market share
- **Primary Business**: Small business loans, residential mortgages, commercial real estate
- **Recent Performance**: Steady but unremarkable; 3% annual growth, industry average profitability

### Competitive Landscape
Liberty Regional faces pressure from multiple directions:
- **National banks**: Aggressive rate competition, superior technology
- **Fintech lenders**: Instant approvals, minimal paperwork, younger demographic appeal
- **Credit unions**: Lower rates due to tax advantages
- **Regional competitors**: Three similar-sized banks fighting for same customer base

### Current Challenges
1. **Loan processing speed**: Average 14 days for small business loan approval vs. 48 hours for fintech competitors
2. **Operational costs**: Loan processing costs 38% higher than industry median
3. **Talent retention**: Lost 8 experienced loan officers to competitors in past 18 months
4. **Customer expectations**: Increasing demand for fast, digital-first experiences
5. **Profitability pressure**: Board demanding 15% cost reduction in lending operations

## The AI Solution: LendSmart™

Six months ago, Liberty Regional's Chief Information Officer and VP of HR jointly proposed piloting **LendSmart™**, an AI-powered loan application screening system from a reputable vendor (FinTech Solutions Inc.).

### What LendSmart™ Promises

**Efficiency Gains**:
- Reduce initial screening time from 3-5 hours to 15 minutes per application
- Allow loan officers to focus on complex cases and customer relationships
- Process 40% more applications with same staff
- Projected annual savings: $1.2 million in labor costs

**Consistency & Risk Management**:
- Eliminate human error in calculating debt-to-income ratios
- Standardized evaluation criteria across all applications
- Flag high-risk applications more reliably
- Reduce default rates by estimated 8-12%

**Customer Experience**:
- Preliminary decisions within 24 hours instead of 5-7 days
- Clear, automated status updates
- Faster time-to-funding for approved loans

### How It Works

1. **Application Intake**: Customer submits online or in-branch application
2. **AI Screening**: LendSmart™ analyzes:
   - Credit score and history
   - Income verification documents
   - Debt-to-income ratio
   - Employment stability
   - Industry risk factors
   - Collateral value (if applicable)
3. **Initial Classification**: Applications categorized as:
   - **Green**: Auto-approve for standard terms
   - **Yellow**: Flag for loan officer review
   - **Red**: Auto-decline or require extensive additional documentation
4. **Human Review**: Loan officers review Yellow/Red applications and all Green loans over $150K

## The Pilot Results

Liberty Regional ran a 90-day pilot with 847 applications. The results were mixed.

### The Good News

**Operational Metrics**:
- Average processing time: Reduced from 14 days to 6 days (57% improvement)
- Loan officer productivity: Up 34%
- Customer satisfaction (approved applicants): 4.6/5.0 (up from 4.1)
- Processing cost per loan: Down 28%
- System accuracy (compared to eventual human decisions): 89%

**Financial Impact**:
- Projected full-year savings if deployed: $1.2M in labor costs
- Potential revenue increase from faster approvals: $400K annually
- ROI: Payback period of 11 months

### The Concerning News

**Disparate Impact Analysis**:

An internal compliance review flagged troubling patterns:

| Demographic Group | Applications | Auto-Decline Rate | Require Extra Documentation | Average Time to Decision |
|------------------|--------------|-------------------|---------------------------|------------------------|
| White applicants | 589 | 12% | 18% | 5.8 days |
| Black applicants | 98 | 23% | 34% | 7.2 days |
| Hispanic applicants | 127 | 19% | 28% | 6.9 days |
| Asian applicants | 33 | 9% | 15% | 5.4 days |

**Additional Concerning Patterns**:
- Applications from predominantly minority zip codes: 2.3x more likely to be auto-declined
- Self-employed applicants in minority communities: 3.1x more likely flagged for extra documentation
- Lower credit scores (580-650 range): Black applicants 41% more likely to be declined than white applicants with identical scores

**Vendor Response**:
FinTech Solutions Inc. investigated and reported:
- The AI model was trained on 15 years of historical lending data (2008-2023)
- Historical data reflects lending patterns that may contain historical bias
- The model is "not using race as an input" - but uses zip codes, employment type, and credit history
- Statistical disparity is "consistent with risk-based lending across the industry"
- Vendor offers to "retrain with fairness constraints" but warns this will reduce profitability by estimated $180K annually

## Stakeholder Positions

### Chief Financial Officer - Sarah Chen
**Position: Deploy as planned**

"We're hemorrhaging money and customers to competitors who already use AI screening. A 12-month delay means losing an additional $1.2M in costs we can't recover. The disparities exist in our current human-based system too - they're just not measured as precisely. At least with LendSmart™ we can track and improve over time. We're a business, not a social services agency. We have fiduciary duty to shareholders."

### VP of Human Resources - Marcus Williams (Black)
**Position: Reject deployment, redesign required**

"This is algorithmic redlining. We're about to automate discrimination that our loan officers have worked hard to overcome through relationship-based lending. Liberty Regional's brand is built on community trust. One discrimination lawsuit or media exposé would cost far more than $1.2M in savings. We need to get this right, even if it takes another year. Our reputation is our competitive advantage."

### Chief Information Officer - Jennifer Martinez
**Position: Deploy with monitoring and phased rollback option**

"The technology works. The efficiency gains are real. But I propose we deploy with strict monitoring: monthly audits, human override capability, and commitment to retrain the model quarterly. We build in a kill switch - if disparities worsen or we face legal issues, we can revert to human-only processing within 48 hours. We can't ignore competitive pressure, but we can be responsible adopters."

### Chief Lending Officer - David Thompson
**Position: Delay 6 months, fix the model first**

"My loan officers are furious. They've spent decades building relationships in minority communities, and now we're going to tell them an algorithm knows better? The vendor's 'fairness constraints' aren't good enough - we need independent audit, explainability for every decline, and community input. Six months to get it right is better than years recovering from a disaster. Plus, our loan officers are already threatening to quit."

### General Counsel - Patricia O'Brien
**Position: Reject entirely, legal risk too high**

"Fair lending laws are complex and enforcement is increasing. The CFPB, DOJ, and state attorneys general are watching AI lending like hawks. Even if we're technically compliant, we're exposed to disparate impact claims. One class-action lawsuit could bankrupt this bank. No efficiency gain is worth that existential risk. We should invest in training loan officers, not replacing their judgment with a black box."

### Head of Marketing - James Park
**Position: Deploy with major community investment offset**

"Here's a different angle: What if we deploy LendSmart™ AND simultaneously launch a $500K financial literacy and credit building program in underserved communities? We transparently explain how the AI works, we help people improve their applications, and we position Liberty Regional as the responsible AI bank. We turn a potential PR disaster into a competitive advantage. The program costs less than half our savings."

## The Data Dilemma

Your board must also grapple with this reality: **Liberty Regional's human loan officers have never been audited for demographic disparities.** 

No one knows if the current system is better or worse than LendSmart™. The AI merely makes bias visible and measurable.

## Regulatory Context

- **Fair Lending Laws**: Equal Credit Opportunity Act (ECOA) prohibits discrimination
- **Disparate Impact**: Lenders can be liable even without intentional discrimination if practices have discriminatory effects
- **AI Guidance**: Federal regulators issued guidance in 2023 that lenders using AI remain responsible for fair lending compliance
- **Industry Trend**: 62% of banks over $1B in assets now use AI in lending; enforcement actions have been rare but are increasing

## Financial Projections

### Option 1: Deploy LendSmart™ As-Is
- **Year 1 Impact**: +$1.6M (savings + revenue)
- **Legal Risk**: 15-25% chance of investigation, 5% chance of significant penalty ($2M-$10M)
- **Reputational Risk**: Moderate (containable if addressed quickly)
- **Competitive Position**: Catch up to peers

### Option 2: Deploy with Fairness Constraints
- **Year 1 Impact**: +$1.4M (reduced savings due to model adjustments)
- **Legal Risk**: 8-12% chance of investigation, 2% chance of penalty
- **Reputational Risk**: Low
- **Competitive Position**: Catch up to peers
- **Vendor Timeline**: 3-4 months to retrain model

### Option 3: Delay 6 Months for Independent Audit & Fix
- **Year 1 Impact**: +$600K (only 6 months of savings)
- **Lost Opportunity Cost**: $600K
- **Legal Risk**: 5-8% chance of investigation (better documentation)
- **Reputational Risk**: Very low
- **Competitive Position**: Fall further behind

### Option 4: Reject AI Solution, Invest in Human Training
- **Year 1 Impact**: -$300K (training costs, no savings)
- **Legal Risk**: Unknown (current system never audited)
- **Reputational Risk**: Opportunity for positive PR on "human touch"
- **Competitive Position**: Continue losing ground

### Option 5: Deploy + Community Investment (Marketing's Proposal)
- **Year 1 Impact**: +$1.1M (savings minus community program)
- **Legal Risk**: 8-12% chance of investigation
- **Reputational Risk**: Low (proactive approach)
- **Brand Value**: Potential upside if program succeeds
- **Competitive Position**: Differentiation opportunity

## Your Decision

As a member of Liberty Regional Bank's Board of Directors, you must vote on how to proceed.

**The motion before the board**:
"Resolved: Liberty Regional Bank shall deploy the LendSmart™ AI screening system for all loan applications, subject to [select one approach]."

**Your options**:
1. **Deploy as-is** - Accept vendor's current system, maximum financial benefit
2. **Deploy with fairness constraints** - Require vendor retraining, slightly reduced savings
3. **Deploy with monitoring + community investment** - Marketing's hybrid approach
4. **Delay 6 months** - Independent audit and model fixes before deployment
5. **Reject AI solution** - Continue human-only processing, invest in training

**You must choose one option and prepare to advocate for your position in the board meeting.**

## Questions to Consider

As you prepare your position and AI prompts:

1. **Ethical Framework**: What principles should guide this decision? Efficiency vs. fairness? Individual rights vs. collective welfare? Short-term profit vs. long-term sustainability?

2. **Risk Assessment**: How do you weigh financial opportunity against legal and reputational risk? What's the true cost of a discrimination scandal?

3. **Stakeholder Analysis**: Who benefits and who is harmed under each option? Whose interests should weigh most heavily?

4. **Data & Evidence**: What additional information would you need to be confident in your decision? Is that information obtainable?

5. **Industry Context**: Should Liberty Regional lead, follow, or wait on AI adoption? What's the competitive cost of caution?

6. **Unintended Consequences**: What second-order effects might each option produce? What could go wrong that isn't in the analysis?

7. **AI Governance**: Beyond this decision, what systems should Liberty Regional put in place for responsible AI adoption?

## Preparation Instructions

Before the board meeting:

1. **Read this case thoroughly** and form a preliminary position
2. **Complete the Blackboard pre-meeting assignment** (4 questions)
3. **Submit your AI prompts** - show us how you'd use AI tools to inform your decision
4. **Prepare your advocacy** - you'll have 2-3 minutes to persuade fellow board members
5. **Consider counterarguments** - what will opponents say and how will you respond?

**The board meeting will be held during Session 1. Votes will be cast via Google Form during the live session.**

---

*This case is fictional but based on real AI lending scenarios. All characters and companies are invented for educational purposes.*
