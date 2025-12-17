# AI CHALLENGE CARD GAME - RISK ASSESSMENT CARDS

---

## RISK ASSESSMENT CARD 1: AI-Powered Resume Screening for Healthcare System

**Card Type:** Risk Assessment  
**Industry:** Healthcare / Human Resources  
**Deployment Stage:** Pre-Deployment Evaluation

### Scenario:
A large hospital system (15 hospitals, 50,000 employees) is considering an AI system to screen resumes for nursing positions. They receive 10,000+ applications annually for RN positions. The proposed AI would:

- Analyze resumes and automatically score candidates 0-100
- Flag top 20% for phone screening
- Auto-reject bottom 40% with templated emails
- Consider: education, certifications, years of experience, previous employers, gaps in employment, professional memberships, continuing education

The AI will be trained on 8 years of historical hiring data, including both hired candidates and their performance reviews after 1 year of employment.

### Your Team's Task:
**Using the 6-part AI Evaluation Framework, identify ALL potential risks in each category and rate their severity (High/Medium/Low).**

**Framework Categories:**
1. **Data Quality Risks**
2. **Transparency & Explainability Risks**
3. **Testing & Validation Risks**
4. **Governance & Oversight Risks**
5. **Scope & Safeguards Risks**
6. **Context & Equity Risks**

**Team Response Format:**
```
1. DATA QUALITY:
   - [Risk identified]: [Severity - H/M/L]
   - [Risk identified]: [Severity - H/M/L]

2. TRANSPARENCY & EXPLAINABILITY:
   - [Risk identified]: [Severity - H/M/L]
   
[Continue for all 6 categories...]
```

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Historical gender bias in nursing hiring** [HIGH]: Training data likely reflects historical underrepresentation of men in nursing, AI will learn gender patterns
- **Performance review bias** [HIGH]: 1-year reviews may reflect manager bias, workplace discrimination, or hazing of new nurses, not actual competence
- **Institution prestige bias** [MEDIUM]: AI may overweight candidates from "prestigious" hospital systems, disadvantaging rural or community hospital experience
- **Employment gap penalties** [HIGH]: Gaps often due to caregiving (disproportionately women), medical leave, or economic hardship—AI will penalize legitimate career interruptions
- **Continuing education access inequality** [MEDIUM]: Expensive CE courses signal resources, not necessarily better nursing skills

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Cannot explain rejections to candidates** [HIGH]: Auto-rejected candidates have no insight into decision, cannot improve or appeal
- **Cannot audit for discrimination** [HIGH]: Without explainability, hospital cannot verify compliance with EEO laws
- **Legal liability** [HIGH]: In healthcare, hiring decisions carry legal weight; unexplainable AI decisions create litigation risk

**3. TESTING & VALIDATION RISKS:**
- **No pre-deployment bias testing** [HIGH]: No indication of testing across gender, race, age, or disability status
- **No validation that AI predicts actual job performance** [HIGH]: Training on "who was hired + 1-year reviews" doesn't validate AI predicts good nursing care
- **Insufficient edge case testing** [MEDIUM]: Non-traditional paths to nursing (career changers, international nurses, ADN vs. BSN) may confuse AI

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **No human review of rejections** [HIGH]: 40% auto-rejection means thousands of candidates eliminated without human judgment
- **No mechanism for candidates to appeal** [HIGH]: Healthcare hiring has legal requirements; algorithmic decisions without appeal problematic
- **Unclear accountability** [MEDIUM]: Who is responsible when AI rejects qualified candidate or perpetuates discrimination?

**5. SCOPE & SAFEGUARDS RISKS:**
- **No guardrails for protected classes** [HIGH]: System appears to have no safeguards preventing discrimination based on pregnancy, disability, age
- **No limits on what data AI considers** [MEDIUM]: Could pick up proxy variables (names, schools, zip codes) not explicitly prohibited
- **Auto-rejection percentage too high** [HIGH]: Eliminating 40% without human review is excessive for healthcare roles

**6. CONTEXT & EQUITY RISKS:**
- **Nursing shortage context ignored** [HIGH]: Healthcare faces critical nursing shortage; AI may eliminate diverse candidates systems need
- **Career pathway diversity not considered** [HIGH]: Different paths to nursing (ADN, BSN, international, military, career changers) may be penalized
- **Disability accommodation needs** [MEDIUM]: Nurses with disabilities (invisible conditions, chronic illness) may have "atypical" work histories
- **No diverse perspectives in design** [MEDIUM]: No indication nurses, diversity officers, or legal counsel consulted in design

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 12+ specific risks across all 6 categories with appropriate severity ratings. Shows deep understanding of how risks interact and compound.
- **Good (7-8 points):** Identifies 8-11 risks across most categories with reasonable severity assessments. May miss some subtle risks but demonstrates solid framework application.
- **Fair (5-6 points):** Identifies 5-7 risks, may concentrate in 2-3 categories or miss entire categories. Severity ratings may be inconsistent.
- **Poor (0-4 points):** Identifies fewer than 5 risks, shows superficial understanding, or misapplies framework categories.

---

## RISK ASSESSMENT CARD 2: Predictive Maintenance AI for Public Transit

**Card Type:** Risk Assessment  
**Industry:** Transportation / Public Infrastructure  
**Deployment Stage:** Already Deployed (6 months)

### Scenario:
A city transit authority deployed AI to predict when buses need maintenance. The system analyzes sensor data (engine temperature, brake wear, fluid levels) plus operational data (routes, mileage, driver behavior) to predict failures before they happen. The AI schedules preventive maintenance and flags buses that should be taken out of service.

**Current Results After 6 Months:**
- 30% reduction in unexpected breakdowns
- Maintenance costs down 15%
- However: Buses serving low-income neighborhoods are taken out of service for maintenance more frequently, causing service disruptions
- Buses on "easy" routes (flat terrain, highway) stay in service longer
- Drivers are complaining that their driving style affects bus maintenance scheduling

The AI was trained on 5 years of maintenance records, sensor data, and breakdown incidents.

### Your Team's Task:
**Conduct a post-deployment risk assessment using the 6-part framework. Identify risks that materialized and risks still present. Rate severity.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Historical maintenance bias** [HIGH - MATERIALIZED]: Training data reflects past maintenance priorities; wealthier neighborhoods may have received better/more frequent service
- **Route difficulty as confounding variable** [HIGH - MATERIALIZED]: Low-income areas often have worse roads, causing more wear—AI learns geography, not just mechanical need
- **Driver behavior data bias** [MEDIUM - PRESENT]: Driver "behavior" may reflect route demands (city driving vs. highway), punishing drivers assigned challenging routes
- **Survival bias** [MEDIUM - PRESENT]: Training only on buses that broke down misses buses that were over-maintained, may recommend excessive maintenance

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Drivers cannot challenge assessments** [MEDIUM - MATERIALIZED]: If driving style affects maintenance schedule, drivers deserve explanation and appeal rights
- **Community cannot verify fairness** [HIGH - PRESENT]: Residents in affected neighborhoods cannot audit whether service disruptions are mechanically necessary or algorithmically biased
- **Union concerns** [MEDIUM - PRESENT]: Lack of transparency makes drivers vulnerable to unjust discipline based on AI assessments

**3. TESTING & VALIDATION RISKS:**
- **No geographic equity testing pre-launch** [HIGH - PRESENT]: System launched without testing whether predictions varied by neighborhood/route characteristics
- **No validation of "driver behavior" metrics** [MEDIUM - PRESENT]: Unclear if driver assessments actually predict maintenance needs vs. reflect route difficulty
- **No alternative hypothesis testing** [MEDIUM - PRESENT]: Did anyone test whether geographic disparities reflect road quality rather than bus condition?

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **No human review of disparate impacts** [HIGH - MATERIALIZED]: Six months of geographic disparities went unaddressed; no monitoring system in place
- **No community input mechanism** [HIGH - PRESENT]: Affected neighborhoods have no way to report concerns or request review
- **Inadequate accountability** [MEDIUM - PRESENT]: Transit authority deflects to "algorithm decides" without taking responsibility for equity impacts

**5. SCOPE & SAFEGUARDS RISKS:**
- **No equity guardrails** [HIGH - MATERIALIZED]: System has no mechanism to prevent or flag when one geographic area experiences disproportionate service disruptions
- **Driver evaluation scope creep** [MEDIUM - MATERIALIZED]: System now affects driver assessment, beyond original maintenance prediction purpose
- **No maximum disruption limits** [MEDIUM - PRESENT]: Apparently no cap on how often buses in any area can be removed for maintenance

**6. CONTEXT & EQUITY RISKS:**
- **Public transit is essential service** [HIGH - MATERIALIZED]: Unlike private sector, transit disruptions have civil rights implications for communities dependent on buses
- **Infrastructure inequality ignored** [HIGH - MATERIALIZED]: Poor road conditions in low-income areas cause mechanical wear; AI "solves" this by reducing service rather than addressing root cause
- **Environmental justice issue** [MEDIUM - PRESENT]: Frequent service disruptions compound other inequities (job access, healthcare access, education)
- **No diverse stakeholder input** [HIGH - PRESENT]: No evidence drivers, union, or affected communities were consulted in design or evaluation

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 12+ risks including distinguishing between materialized and ongoing risks. Recognizes infrastructure inequality as root cause. Appropriate severity ratings.
- **Good (7-8 points):** Identifies 8-11 risks with reasonable severity. May not fully distinguish materialized vs. present risks but shows understanding of systemic issues.
- **Fair (5-6 points):** Identifies 5-7 risks, may focus on obvious manifestations without deeper analysis. Inconsistent severity ratings.
- **Poor (0-4 points):** Identifies fewer than 5 risks, accepts efficiency gains without questioning equity impacts, or misapplies framework.

---

## RISK ASSESSMENT CARD 3: AI Curriculum Recommendation System

**Card Type:** Risk Assessment  
**Industry:** Education  
**Deployment Stage:** Pre-Deployment Planning

### Scenario:
A school district (50 schools, 30,000 students, grades 6-12) is planning to deploy an AI system that recommends which academic track each student should follow:
- **Advanced track:** Honors/AP courses, college prep
- **Standard track:** Regular courses, college or vocational options
- **Support track:** Remedial courses, extra tutoring, extended time

The AI will analyze: standardized test scores, grades, attendance, behavior records, teacher evaluations, parent income/education (from lunch program eligibility), previous school quality ratings, and participation in extracurriculars.

Recommendations will be made in spring of 5th grade to place students for 6th grade. Teachers can override recommendations but must justify in writing why they're disregarding the AI.

Training data comes from 10 years of student records showing which track students were in and outcomes (graduation, college enrollment, test scores).

### Your Team's Task:
**Before this system is deployed, conduct comprehensive risk assessment. Identify ALL risks across 6 framework categories with severity ratings.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Self-fulfilling prophecy in training data** [HIGH]: Historical tracking reflects past placements, not student potential—AI learns to replicate rather than improve decisions
- **Socioeconomic proxy variables** [HIGH]: Parent income/education as explicit factors hardwires class-based tracking into algorithm
- **School quality ratings as bias** [HIGH]: Students from under-resourced schools penalized for systemic failures, not personal ability
- **Behavior records reflect bias** [HIGH]: Discipline records show racial and disability bias; AI will learn to track Black and disabled students to lower levels
- **Teacher evaluation subjectivity** [MEDIUM]: Evaluations reflect teacher bias, expectations, and classroom dynamics, not objective ability
- **Extracurricular access inequality** [HIGH]: Expensive activities (music lessons, travel sports) become signals of "advanced track" worthiness

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Life-altering decisions without explanation** [HIGH]: 10-year-olds and families can't understand or challenge track placement
- **Cannot identify discrimination** [HIGH]: Racial/class disparities in tracking undetectable without explainability
- **Teacher override burden** [HIGH]: Requiring written justification to override makes algorithm the default, chilling advocacy for students

**3. TESTING & VALIDATION RISKS:**
- **No validation that tracking improves outcomes** [HIGH]: System assumes tracking is beneficial; no evidence AI will improve rather than perpetuate harm
- **No demographic fairness testing** [HIGH]: Must test for disparate impact by race, class, disability, gender before deployment
- **No testing of long-term impacts** [HIGH]: 5th grade placement affects entire educational trajectory; insufficient validation for such high stakes

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **Age-inappropriate algorithmic decision** [HIGH]: Using AI for 10-year-olds' futures raises ethical questions about consent and development
- **No student/family appeal process** [HIGH]: Families should have meaningful right to challenge placement without teacher having to justify override
- **Inadequate oversight structure** [HIGH]: Who monitors for systematic bias? Who is accountable for outcomes?
- **No sunset clause** [MEDIUM]: System should be evaluated regularly with possibility of discontinuation if harmful

**5. SCOPE & SAFEGUARDS RISKS:**
- **No caps on demographic disparities** [HIGH]: System needs guardrails preventing, e.g., 70% of Black students in support track
- **Permanence of early tracking** [HIGH]: 5th grade placement shapes opportunities through high school; very difficult to escape initial track
- **No consideration of late bloomers** [MEDIUM]: AI based on 5th grade data can't account for developmental differences, late maturation
- **Disability accommodation concerns** [HIGH]: Students with IEPs may be systematically tracked to support level regardless of ability

**6. CONTEXT & EQUITY RISKS:**
- **Tracking perpetuates inequality** [HIGH]: Substantial research shows tracking harms students and widens achievement gaps
- **Reinforces school segregation** [HIGH]: Algorithmic tracking creates segregation within schools even in diverse districts
- **Opportunity hoarding** [HIGH]: Advanced track provides access to resources (better teachers, college counselors, AP courses) denied to others
- **No diverse stakeholder input** [HIGH]: Students, families, civil rights advocates must be consulted before deployment
- **Ignores systemic causes** [HIGH]: Places students from under-resourced schools in lower tracks rather than improving those schools

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 15+ risks with recognition that tracking itself is harmful. Understands self-fulfilling prophecy in training data. Questions premise of system, not just implementation. Appropriate severity ratings.
- **Good (7-8 points):** Identifies 10-14 risks across most categories. Recognizes socioeconomic and racial bias concerns. May not question tracking paradigm but identifies implementation risks.
- **Fair (5-6 points):** Identifies 6-9 risks. May miss systemic issues or accept tracking premise. Inconsistent severity ratings.
- **Poor (0-4 points):** Identifies fewer than 6 risks. Accepts efficiency rationale without questioning equity. Misapplies framework.

---

## RISK ASSESSMENT CARD 4: AI-Powered Fraud Detection for Benefits

**Card Type:** Risk Assessment  
**Industry:** Government / Social Services  
**Deployment Stage:** Already Deployed (1 year)

### Scenario:
A state government deployed AI to detect fraud in unemployment benefits, food assistance (SNAP), and Medicaid. The system flags "suspicious" applications and benefit usage patterns for investigation. It analyzes: application information, bank transactions, employment verification, address changes, purchase patterns (for SNAP), healthcare utilization, social media activity, and cross-references with other government databases.

**Results After 1 Year:**
- 40% increase in fraud investigations opened
- 15% decrease in benefits paid (mix of denied applications and terminated benefits)
- Fraud conviction rate unchanged (5% of investigations result in conviction)
- Complaints about benefit terminations up 300%
- Average time to resolve wrongful termination: 3 months
- Investigation patterns show low-income neighborhoods, immigrants, and people with disabilities disproportionately flagged

Training data: 5 years of fraud investigation records, including both confirmed fraud cases and false positives later cleared.

### Your Team's Task:
**Assess risks in this deployed system. Identify what went wrong, what risks remain, and rate severity of each.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **False positive contaminated training** [HIGH - MATERIALIZED]: Training on "investigated cases" includes many false accusations, teaching AI to replicate biased suspicions
- **"Suspicious" reflects poverty, not fraud** [HIGH - MATERIALIZED]: Irregular employment, address instability, variable income are survival patterns of poverty, not fraud indicators
- **Cultural pattern misinterpretation** [HIGH - MATERIALIZED]: Immigrant family practices (money pooling, multiple families per address, cash-based economies) flagged as fraud
- **Disability patterns as "suspicious"** [MEDIUM - MATERIALIZED]: Variable healthcare utilization, caregiver support, adaptive shopping patterns misread as fraud

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Benefit recipients cannot see evidence** [HIGH - MATERIALIZED]: People lose benefits without understanding what triggered investigation
- **Cannot challenge algorithmic suspicion** [HIGH - MATERIALIZED]: 3-month resolution time while benefits terminated; burden of proof reversed
- **Auditing impossible** [HIGH - PRESENT]: Cannot verify if disparate impact reflects actual fraud rates or algorithmic bias

**3. TESTING & VALIDATION RISKS:**
- **No demographic testing pre-deployment** [HIGH - MATERIALIZED]: System launched without verifying equal accuracy across communities
- **False positive rate unknown** [HIGH - PRESENT]: 95% of investigations don't result in conviction—are these false positives? No systematic tracking
- **Harm/benefit analysis absent** [HIGH - PRESENT]: Cost of wrongful benefit termination (hunger, homelessness, health crisis) not measured against fraud prevented

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **Investigation threshold too low** [HIGH - MATERIALIZED]: 40% increase in investigations overwhelms system, suggests AI flagging too aggressively
- **No fast-track restoration for false positives** [HIGH - MATERIALIZED]: 3 months to resolve wrongful termination causes severe harm
- **Accountability vacuum** [MEDIUM - PRESENT]: State deflects responsibility to "algorithm" rather than owning investigation decisions
- **No independent oversight** [HIGH - PRESENT]: No external entity monitoring for civil rights violations

**5. SCOPE & SAFEGUARDS RISKS:**
- **No caps on investigation rates** [HIGH - MATERIALIZED]: 40% increase suggests no guardrails on how many people can be flagged
- **Benefit termination before resolution** [HIGH - MATERIALIZED]: Presumption of guilt rather than innocence; benefits should continue during investigation
- **Social media surveillance scope creep** [MEDIUM - PRESENT]: Unclear what social media activity is deemed "suspicious," potential free speech chilling
- **No vulnerable population protections** [HIGH - MATERIALIZED]: Children, elderly, disabled losing benefits during investigations without special safeguards

**6. CONTEXT & EQUITY RISKS:**
- **Benefits are survival necessities** [HIGH - MATERIALIZED]: Unlike commercial fraud detection, wrong here means hunger, eviction, untreated illness
- **Poverty criminalization** [HIGH - MATERIALIZED]: System treats poverty's manifestations (instability, irregular work) as evidence of criminality
- **Disparate impact on marginalized communities** [HIGH - MATERIALIZED]: Immigrants, disabled, and low-income communities bear brunt of false accusations
- **Fraud narrative vs. error/need** [MEDIUM - PRESENT]: Benefits "errors" often reflect confusion, not fraud; AI cannot distinguish malice from mistake
- **No affected community input** [HIGH - PRESENT]: Benefits recipients not consulted in design; system designed by/for investigators, not those served

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 15+ risks with understanding that high-stakes safety net decisions require much higher accuracy standards than commercial applications. Recognizes poverty criminalization and benefit denials as serious harms. Distinguishes materialized from ongoing risks.
- **Good (7-8 points):** Identifies 10-14 risks including false positive problems and disparate impact. May not fully articulate stakes or systemic issues.
- **Fair (5-6 points):** Identifies 6-9 risks, may focus on process problems without recognizing discriminatory impacts or harm to vulnerable populations.
- **Poor (0-4 points):** Accepts fraud detection premise uncritically. Identifies fewer than 6 risks. Treats wrongful benefit termination as acceptable collateral damage.

---

## RISK ASSESSMENT CARD 5: Sentiment Analysis for Employee Engagement

**Card Type:** Risk Assessment  
**Industry:** Human Resources / Corporate  
**Deployment Stage:** Pre-Deployment Evaluation

### Scenario:
A corporation (5,000 employees across 15 offices) plans to deploy AI to analyze employee sentiment from multiple sources:
- Slack/Teams messages (with employee consent)
- Email subject lines and metadata
- Survey responses (both structured and open-ended)
- Performance review comments
- Exit interview transcripts
- Anonymous feedback systems

The AI will score each employee's engagement level (0-100) and flag employees showing signs of: disengagement, intention to quit, low morale, or conflict with colleagues. Managers will receive monthly "sentiment reports" about their teams with recommendations for intervention.

The goal is to reduce turnover by identifying unhappy employees early and addressing concerns proactively. Training data includes 3 years of messages/surveys correlated with turnover events (who quit).

### Your Team's Task:
**Conduct pre-deployment risk assessment. Identify ALL risks across the 6 framework categories with severity ratings.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Survivor bias** [HIGH]: Training only on "who quit" misses people who stayed despite unhappiness (couldn't afford to quit, fear, golden handcuffs)
- **Communication style bias** [HIGH]: Introverts, people whose first language isn't English, neurodivergent employees may show "negative sentiment" in text analysis despite being engaged
- **Legitimate criticism as "negative"** [HIGH]: AI may flag employees raising concerns about discrimination, safety, ethics as "disengaged" rather than engaged and caring
- **Context collapse** [MEDIUM]: Sarcasm, humor, cultural references, inside jokes misinterpreted as negative sentiment
- **Private conversation patterns** [MEDIUM]: Some employees are reserved at work, expressive outside work—AI interprets reserve as disengagement

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Employees unaware of scoring** [HIGH]: If employees don't know they're being scored, cannot modify communication or challenge assessments
- **Cannot challenge sentiment score** [HIGH]: Subjective sentiment analysis difficult to contest; employees vulnerable to AI misinterpretation
- **Manager bias reinforcement** [MEDIUM]: Managers with pre-existing negative views may use AI scores to justify their bias

**3. TESTING & VALIDATION RISKS:**
- **No validation that sentiment predicts turnover** [MEDIUM]: Correlation between sentiment and quitting doesn't prove causation or that intervention works
- **No testing across communication styles** [HIGH]: Must test whether AI equally accurately assesses different personality types, cultures, language backgrounds
- **No testing of intervention effectiveness** [MEDIUM]: System assumes flagging and intervention helps; may make things worse if handled poorly

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **"Consent" may be coerced** [HIGH]: Employees may feel unable to refuse monitoring without signaling they have something to hide
- **Scope of monitoring unclear** [HIGH]: Which messages? Personal channels? After hours? Boundaries must be clear
- **No protection for whistleblowers** [HIGH]: Employees reporting misconduct may be flagged as "negative sentiment" and targeted
- **Manager misuse potential** [HIGH]: Sentiment scores could be weaponized in performance reviews, discipline, or layoff decisions

**5. SCOPE & SAFEGUARDS RISKS:**
- **No protection for protected speech** [HIGH]: Union organizing, discrimination complaints, safety concerns may be flagged as "negative"
- **Mental health privacy concerns** [HIGH]: Employees discussing personal struggles (divorce, illness, grief) with colleagues have that scored as "disengagement"
- **No limits on manager action** [MEDIUM]: What can managers do with sentiment scores? Mandatory intervention could feel like ambush
- **Anonymous feedback no longer anonymous** [HIGH]: If "anonymous" feedback is analyzed, may be deanonymized through writing style

**6. CONTEXT & EQUITY RISKS:**
- **Different norms for expressing dissatisfaction** [HIGH]: Some cultures express disagreement indirectly, may be mis-scored; others express directly and penalized
- **Disability concerns** [MEDIUM]: Employees with depression, anxiety may show "negative sentiment" patterns that reflect disability, not job dissatisfaction
- **Power dynamics ignored** [HIGH]: System assumes unhappiness is individual problem to fix, not symptom of bad management, discrimination, or toxic culture
- **Chilling effect on honest communication** [HIGH]: Fear of sentiment scoring makes employees sanitize all communication, destroying trust and authentic feedback
- **No worker input in design** [HIGH]: System designed by management for management's benefit; workers not consulted

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 15+ risks with understanding that workplace surveillance fundamentally alters power dynamics and may backfire. Recognizes protected speech concerns, disability issues, and chilling effects. Questions premise of individual-focused solution to systemic problems.
- **Good (7-8 points):** Identifies 10-14 risks including privacy, communication style bias, and potential for manager misuse. May not fully articulate power dynamics.
- **Fair (5-6 points):** Identifies 6-9 risks, focuses on accuracy concerns without recognizing surveillance and power issues. Inconsistent severity ratings.
- **Poor (0-4 points):** Accepts employee surveillance premise. Identifies fewer than 6 risks. Treats employee monitoring as unproblematic.

---

## RISK ASSESSMENT CARD 6: AI-Generated News Summary Service

**Card Type:** Risk Assessment  
**Industry:** Media / Technology  
**Deployment Stage:** Already Deployed (3 months)

### Scenario:
A news aggregation app uses AI to read hundreds of news sources and generate personalized daily news summaries for users (2-3 paragraphs per topic). The AI selects which stories to cover, summarizes them, and organizes by user interests.

**Current Issues After 3 Months:**
- Users report summaries sometimes contain false information not in source articles
- Political coverage shows bias—conservative users see conservative framing, liberal users see liberal framing
- Local news from smaller outlets rarely appears; summaries dominated by major national sources
- Breaking news sometimes summarized before facts are verified
- Important context from original articles frequently omitted
- Some summaries accidentally combine facts from multiple unrelated articles

AI trained on: millions of news articles, user engagement data (clicks, time spent, shares), and explicit user preference settings (topics, sources, political lean).

### Your Team's Task:
**Conduct post-deployment risk assessment. What's gone wrong? What risks remain? Rate severity.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Training on engagement ≠ training on quality** [HIGH - MATERIALIZED]: Sensational, polarizing content gets clicks; AI learned to favor drama over accuracy
- **Source quality not weighted** [HIGH - MATERIALIZED]: Tabloids, questionable sources treated equally with credible journalism in training data
- **Recency bias** [MEDIUM - MATERIALIZED]: Breaking news valued over accuracy; AI rushes to summarize before verification
- **Filter bubble amplification** [HIGH - MATERIALIZED]: Training on user preferences creates echo chambers, reinforcing existing biases

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Users cannot verify claims** [HIGH - MATERIALIZED]: Summaries don't link to sources or indicate which articles contributed what facts
- **Cannot identify AI errors** [HIGH - MATERIALIZED]: False information presented with same confidence as accurate information
- **Bias invisible to users** [HIGH - MATERIALIZED]: Users don't know they're receiving politically skewed summaries

**3. TESTING & VALIDATION RISKS:**
- **No accuracy validation before launch** [HIGH - MATERIALIZED]: System deployed without systematic fact-checking of AI-generated summaries
- **No testing for factual drift** [HIGH - PRESENT]: As AI combines/summarizes, when do facts become distorted? Not tested
- **No bias auditing** [HIGH - MATERIALIZED]: Political skew not tested or disclosed to users

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **No editorial oversight** [HIGH - MATERIALIZED]: Traditional news has editors; AI summaries have no human review for accuracy
- **No correction mechanism** [HIGH - PRESENT]: When errors are identified, how are they corrected? How do users learn?
- **Accountability gap** [MEDIUM - PRESENT]: Who is responsible for AI-generated misinformation—developers, company, users?

**5. SCOPE & SAFEGUARDS RISKS:**
- **No breaking news restrictions** [HIGH - MATERIALIZED]: AI should not summarize unverified breaking news; needs guardrails
- **No source quality filters** [HIGH - PRESENT]: System needs to distinguish credible journalism from questionable sources
- **No disclosure to users** [HIGH - MATERIALIZED]: Users should know they're reading AI-generated content, not human journalism
- **No limitations on sensitive topics** [MEDIUM - PRESENT]: Some topics (health, elections, emergencies) may require human verification

**6. CONTEXT & EQUITY RISKS:**
- **Local journalism underrepresented** [HIGH - MATERIALIZED]: Small outlets can't compete with major sources in AI training, accelerating local news decline
- **Diverse perspectives missing** [MEDIUM - MATERIALIZED]: Niche publications, community media, non-English sources likely underweighted
- **Democratic discourse concerns** [HIGH - MATERIALIZED]: Personalized, biased summaries undermine shared reality and informed citizenship
- **Journalist labor displacement** [HIGH - PRESENT]: AI summaries may reduce traffic to original journalism, harming news industry further
- **Misinformation amplification** [HIGH - MATERIALIZED]: Even small error rate at scale means thousands exposed to false information daily

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 13+ risks with understanding that news summarization requires higher accuracy standards than other content. Recognizes democratic/civic implications, journalist labor concerns, and filter bubble dangers. Distinguishes materialized from ongoing risks.
- **Good (7-8 points):** Identifies 9-12 risks including accuracy, bias, and source quality concerns. May not fully articulate civic or labor implications.
- **Fair (5-6 points):** Identifies 5-8 risks, focuses on accuracy without recognizing systemic media/democracy issues.
- **Poor (0-4 points):** Accepts AI news summaries as efficiency gain without critique. Identifies fewer than 5 risks.

---

## RISK ASSESSMENT CARD 7: Facial Recognition for Apartment Building Access

**Card Type:** Risk Assessment  
**Industry:** Real Estate / Security  
**Deployment Stage:** Pre-Deployment Planning

### Scenario:
A luxury apartment building (300 units, 600+ residents) is considering replacing key fobs with facial recognition for building access. Residents would register their faces via app, and cameras at all entrances would automatically unlock doors for recognized residents.

**Proposed System Features:**
- Cameras at all building entrances and elevator banks
- Stores facial templates for all residents, guests can be pre-registered
- Logs all entry/exit times with identity
- Can restrict access to certain floors or areas by resident
- Claims 99% accuracy
- Vendor says faster/more convenient than keys, can't be stolen or lost
- Also enables security to review footage and identify anyone in building

Building has diverse residents: families with children, elderly residents, people with various skin tones, some residents wear religious head coverings.

### Your Team's Task:
**Before deployment, assess ALL risks using the 6-part framework with severity ratings.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Training data diversity unknown** [HIGH]: Facial recognition has documented accuracy disparities by race, gender, age—vendor's training data likely not representative
- **"99% accuracy" misleading** [HIGH]: Accuracy varies dramatically by demographic; average may hide 80% accuracy for some groups
- **Children's faces change** [MEDIUM]: Growing children may need frequent re-registration or face lockouts
- **Aging, appearance changes** [MEDIUM]: Weight changes, new glasses, beard, illness may cause recognition failure

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Residents cannot verify accuracy claims** [HIGH]: No way to audit if system works equally well for all demographic groups
- **Cannot challenge false rejections** [MEDIUM]: If system fails to recognize resident, unclear what recourse exists
- **Surveillance scope unclear** [HIGH]: Residents don't know what data is kept, how long, who accesses it, how it's used beyond access control

**3. TESTING & VALIDATION RISKS:**
- **No demographic accuracy testing** [HIGH]: Must test equal accuracy across race, age, gender before deployment
- **No testing with head coverings** [HIGH]: Religious head coverings (hijabs, turbans) may affect recognition—must be tested
- **No testing of edge cases** [MEDIUM]: Injuries, makeup, costumes for residents, lighting conditions, weather effects
- **No failure rate monitoring plan** [MEDIUM]: How will building track and address recognition failures post-deployment?

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **Data retention policy unclear** [HIGH]: How long are entry logs kept? Who can access? What privacy protections?
- **Third-party vendor access** [HIGH]: Does vendor have access to facial data and logs? Can they use for other purposes?
- **Law enforcement access** [HIGH]: Will police be able to access logs or facial data? With what process?
- **No resident consent mechanism** [HIGH]: If facial recognition required for building access, residents have no meaningful choice to opt out
- **No resident oversight** [MEDIUM]: Who ensures system is used only for stated purpose?

**5. SCOPE & SAFEGUARDS RISKS:**
- **No backup access method** [HIGH]: When system fails (power outage, technical glitch, recognition error), residents locked out
- **Guest access complexity** [MEDIUM]: Pre-registration burden for guests, visitors; discriminates against spontaneous visits
- **Disability concerns** [MEDIUM]: Residents with facial differences, scarring, or conditions affecting appearance may face repeated failures
- **Children under age of consent** [MEDIUM]: Parents registering children's biometrics raises ethical questions about consent
- **Stalking/domestic violence** [HIGH]: Entry logs could enable abuse if accessed by perpetrators with resident access

**6. CONTEXT & EQUITY RISKS:**
- **Disparate accuracy impacts** [HIGH]: If system works better for some residents, creates two-tier access: seamless for some, frustrating for others
- **Disability discrimination** [MEDIUM]: Blind or visually impaired residents may have difficulty with registration process or app interface
- **Religious accommodation** [HIGH]: System must work equally well with religious head coverings or violates Fair Housing Act
- **Elderly residents** [MEDIUM]: May have difficulty with app registration or more frequent recognition failures due to aging faces
- **No resident input in decision** [HIGH]: Building management imposing surveillance without resident vote or meaningful consultation
- **Privacy as luxury good** [HIGH]: Wealthy building forcing biometric surveillance normalizes invasive technology

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 15+ risks including documented facial recognition accuracy disparities, Fair Housing implications, privacy concerns, and lack of meaningful consent. Recognizes domestic violence risks and questions whether convenience justifies surveillance.
- **Good (7-8 points):** Identifies 10-14 risks including accuracy disparities, privacy, and backup access needs. May not fully articulate legal or ethical dimensions.
- **Fair (5-6 points):** Identifies 6-9 risks, may focus on convenience problems without recognizing discrimination or privacy implications.
- **Poor (0-4 points):** Accepts biometric surveillance as unproblematic convenience. Identifies fewer than 6 risks.

---

## RISK ASSESSMENT CARD 8: AI-Powered Child Welfare Screening

**Card Type:** Risk Assessment  
**Industry:** Government / Social Services  
**Deployment Stage:** Already Deployed (2 years)

### Scenario:
A county child welfare agency uses AI to screen all child abuse/neglect hotline calls and prioritize which cases warrant investigation. The AI analyzes call transcripts, family history in county databases, prior investigations (substantiated and unsubstantiated), criminal records, school attendance, hospital visits, and public assistance enrollment.

**Results After 2 Years:**
- 50% of calls now handled by AI screening only (no human review)
- Investigation rates down 25% overall
- Reports from mandatory reporters (teachers, doctors) still generate investigations
- Substantiation rate (finding abuse/neglect) essentially unchanged
- However: Racial disparities in investigation rates increased
- Families in poorest neighborhoods much more likely to be investigated
- Two cases of serious abuse were missed by AI screening (children later hospitalized)

Training data: 15 years of hotline calls + investigation outcomes (substantiated, unsubstantiated, or indeterminate).

### Your Team's Task:
**Assess this high-stakes deployed system. What went wrong? What risks remain? Severity ratings critical.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Historical bias in investigations** [HIGH - MATERIALIZED]: Past investigation decisions reflect systemic racism, classism; AI learned to replicate biased human decisions
- **Poverty as proxy for neglect** [HIGH - MATERIALIZED]: Public assistance, hospital ER visits (vs. private doctor), school absences correlate with poverty, not abuse
- **Unsubstantiated calls contaminate data** [HIGH - MATERIALIZED]: Training included unsubstantiated cases (often racially biased calls), teaching AI those patterns
- **Mandatory reporter bias** [MEDIUM - PRESENT]: Teachers/doctors more likely to report families of color; AI learns this pattern as "risk"
- **Missing data on wealthy families** [HIGH - PRESENT]: Abuse in wealthy families happens but is less visible (private schools, private doctors, no public assistance), creating training bias

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Families never know they were screened out** [HIGH - MATERIALIZED]: No investigation means no record, no explanation, no opportunity to understand risk factors
- **Cannot audit for discrimination** [HIGH - PRESENT]: Without explainability, cannot determine if racial disparities reflect bias vs. actual need
- **Workers cannot challenge AI decisions** [MEDIUM - MATERIALIZED]: If call is screened out by AI, difficult for worker who believes risk exists to override

**3. TESTING & VALIDATION RISKS:**
- **No pre-deployment bias testing** [HIGH - MATERIALIZED]: System launched without testing for disparate impact by race, class
- **No validation of screening-out accuracy** [HIGH - MATERIALIZED]: Two missed cases prove system fails dangerously; no systematic tracking of false negatives
- **No comparison to human screening** [MEDIUM - PRESENT]: Unknown if AI screening performs better, worse, or same as human judgment
- **Cost-benefit analysis absent** [HIGH - PRESENT]: Cost of missed abuse vs. cost of over-investigation not systematically evaluated

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **50% no human review is dangerous** [HIGH - MATERIALIZED]: Life-and-death decisions made by algorithm without human judgment for half of calls
- **No fast-track review for errors** [HIGH - MATERIALIZED]: When abuse is missed, family has no recourse or way to trigger review
- **Accountability vacuum** [HIGH - PRESENT]: When AI screening misses abuse, who is responsible? County has deflected blame to "system"
- **No independent oversight** [HIGH - PRESENT]: No external child welfare experts or civil rights organizations monitoring for discrimination

**5. SCOPE & SAFEGUARDS RISKS:**
- **Mandatory reporters still investigated** [MEDIUM - PRESENT]: System recognizes bias in mandatory reporter screening (professionals less likely to be racist), but doesn't fix underlying problem
- **No caps on investigation disparities** [HIGH - MATERIALIZED]: Apparently no guardrails preventing 70% of poor Black families being investigated vs. 5% of wealthy white families
- **No screening for screener bias** [MEDIUM - PRESENT]: Anonymous hotline calls may be weaponized harassment; AI doesn't detect this
- **Life-and-death stakes** [HIGH - MATERIALIZED]: Unlike low-stakes AI applications, errors here cause child death or family separation

**6. CONTEXT & EQUITY RISKS:**
- **Poverty surveillance** [HIGH - MATERIALIZED]: Poor families subjected to much higher scrutiny, surveillance becomes consequence of being poor
- **Family separation as harm** [HIGH - PRESENT]: Over-investigation causes trauma, family separation, even when unsubstantiated—AI doesn't weigh this harm
- **Racial justice crisis** [HIGH - MATERIALIZED]: Increased racial disparities perpetuate long history of child welfare system separating Black families
- **Ignores systemic causes** [HIGH - PRESENT]: System treats poverty indicators (ER visits, school absences) as individual family failure rather than structural inequality
- **No affected family input** [HIGH - PRESENT]: System designed without input from families previously investigated or those in child welfare system

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 15+ risks with understanding that child welfare requires EXTREMELY high accuracy standards and current system is catastrophically flawed. Recognizes that poverty surveillance perpetuates racial injustice. Questions whether AI should be used at all for life-and-death screening. Distinguishes materialized from ongoing risks.
- **Good (7-8 points):** Identifies 10-14 risks including bias, missed cases, and lack of oversight. Recognizes stakes but may not fully articulate systemic problems.
- **Fair (5-6 points):** Identifies 6-9 risks, may focus on accuracy problems without recognizing racial justice dimensions or questioning appropriateness of AI use.
- **Poor (0-4 points):** Accepts AI screening as efficiency gain. Treats investigation reduction as success. Identifies fewer than 6 risks.

---

## RISK ASSESSMENT CARD 9: Dynamic Pricing for Concert Tickets

**Card Type:** Risk Assessment  
**Industry:** Entertainment / E-commerce  
**Deployment Stage:** Pre-Deployment Evaluation

### Scenario:
A major concert venue and ticketing platform plan to implement "AI-powered dynamic pricing" for all events. Beyond traditional supply/demand, the AI will personalize prices based on:
- Browsing history (how many times you viewed event)
- Device type (phone, tablet, laptop)
- Your location when browsing
- Time of day browsing
- Purchase history (what events you've bought before, prices you paid)
- Whether you're using VPN or private browsing
- Social media activity showing interest in artist
- Income estimates based on zip code

The system will show different prices to different users for identical seats. AI trained on millions of ticket purchases to predict each person's "willingness to pay."

The venue hosts mix of events: major artists (Taylor Swift, Beyoncé), comedy, sports, family shows, local community events.

### Your Team's Task:
**Evaluate risks before deployment. Use 6-part framework with severity ratings.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Interest signals as desperation signals** [HIGH]: If you viewed event multiple times or posted excitement on social media, AI charges more, punishing genuine fans
- **Wealth proxy discrimination** [HIGH]: Zip code as income estimate means residents of wealthy areas pay more for identical seats
- **Device discrimination** [MEDIUM]: iPhone users charged more than Android users based on device cost as wealth proxy
- **Purchase history lock-in** [MEDIUM]: If you previously paid high prices (perhaps for special occasion), AI assumes you'll always pay premium

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Price discrimination hidden** [HIGH]: Users don't know they're being charged differently or why
- **Cannot comparison shop effectively** [HIGH]: If clearing cookies/using VPN changes prices, users can't trust any quoted price is fair
- **Creates paranoia and distrust** [MEDIUM]: Fans suspect manipulation even when it's not happening, damages relationship with venue/artists

**3. TESTING & VALIDATION RISKS:**
- **No fairness testing** [HIGH]: No indication of testing whether system discriminates by race (via zip code proxy), disability (via behavior patterns), etc.
- **No testing of backlash** [MEDIUM]: History shows dynamic pricing generates enormous negative publicity—readiness not evident
- **No validation that revenue increases** [MEDIUM]: Assumes personalized pricing maximizes revenue; may drive fans away or to secondary market

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **Legal compliance unclear** [MEDIUM]: Some jurisdictions regulate ticket pricing; personalized pricing may violate laws
- **No price ceiling enforcement** [MEDIUM]: What prevents AI from charging $5000 for $100 seat if it predicts someone will pay?
- **Accountability for pricing errors** [LOW]: If AI makes mistake (charges $5 instead of $500), who bears loss?

**5. SCOPE & SAFEGUARDS RISKS:**
- **No protection for fans** [HIGH]: True fans who engage with artist content, attend multiple shows, express excitement are penalized with highest prices
- **No income-based caps** [HIGH]: No mechanism to ensure low-income fans can access affordable tickets even if they're passionate fans
- **VPN/private browsing penalty** [MEDIUM]: Users protecting privacy may be charged more as "suspicious," punishing privacy protection
- **Family event concerns** [MEDIUM]: Children's shows, family events should perhaps be exempt from aggressive dynamic pricing

**6. CONTEXT & EQUITY RISKS:**
- **Culture access as class privilege** [HIGH]: System makes live events accessible only to wealthy, excluding passionate but lower-income fans
- **Artist-fan relationship damage** [HIGH]: Artists want passionate fans, not just wealthy ones; pricing alienates core fan base
- **Geographic discrimination** [HIGH]: Fans in wealthy zip codes (often whiter, higher income) pay more for same experience
- **Disability concerns** [MEDIUM]: Fans with disabilities may have "unusual" browsing patterns (slower, assistive tech) that affect pricing
- **Community events** [HIGH]: Local community performances shouldn't be subject to aggressive personalized pricing that excludes community members

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 13+ risks with understanding that cultural access shouldn't be purely wealth-based. Recognizes fan engagement penalty, geographic discrimination, and artist-fan relationship damage. Questions whether efficiency justifies exclusion.
- **Good (7-8 points):** Identifies 9-12 risks including price discrimination, fan penalties, and wealth-based access. May not fully articulate cultural access arguments.
- **Fair (5-6 points):** Identifies 5-8 risks, may focus on "fairness" without connecting to broader cultural equity issues.
- **Poor (0-4 points):** Accepts dynamic pricing as market efficiency. Identifies fewer than 5 risks. Treats price discrimination as unproblematic.

---

## RISK ASSESSMENT CARD 10: AI Parole Decision Support

**Card Type:** Risk Assessment  
**Industry:** Criminal Justice  
**Deployment Stage:** Already Deployed (18 months)

### Scenario:
A state prison system uses AI to assess prisoners' readiness for parole. The system generates risk scores (1-100) predicting recidivism risk. Parole boards receive these scores along with traditional case files.

**AI Analyzes:**
- Criminal history (charges, convictions, sentences)
- Prison behavior (disciplinary infractions, program participation)
- Demographics (age at offense, age now, gender)
- Education level
- Employment history before incarceration
- Housing stability before incarceration
- Family connections/support
- Substance use history
- Mental health history
- Past parole/probation outcomes (if applicable)

**Results After 18 Months:**
- Parole grant rates unchanged overall (40% granted, 60% denied)
- But: Racial disparities in parole grants increased significantly
- Risk scores correlate closely with length of original sentence (longer sentences = higher risk scores even for same offense)
- Drug offenses score higher risk than many violent offenses
- No measurable improvement in recidivism rates
- System claims 65% accuracy in predicting recidivism

Training data: 20 years of parole decisions + subsequent recidivism data (re-arrest within 3 years).

### Your Team's Task:
**Assess this deployed criminal justice AI. What went wrong? Ongoing risks? Severity crucial.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Recidivism = re-arrest, not re-offense** [HIGH - PRESENT]: Training on arrests reflects biased policing, not actual criminal behavior
- **Historical sentencing bias** [HIGH - MATERIALIZED]: Longer sentences for Black defendants means algorithm learns race proxy through sentence length
- **Socioeconomic proxies** [HIGH - MATERIALIZED]: Employment, housing, education reflect systemic inequality, not individual risk
- **Criminal history reflects enforcement** [HIGH - PRESENT]: More arrests ≠ more dangerous; reflects who gets policed, charged, convicted
- **Program participation barriers** [MEDIUM - MATERIALIZED]: Prison program access varies by facility, custody level; AI rewards opportunity, not merit
- **Substance use and mental health stigma** [HIGH - MATERIALIZED]: Histories penalize people with medical conditions, discouraging treatment-seeking

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Prisoners cannot challenge scores** [HIGH - MATERIALIZED]: Life-or-death decisions based on opaque algorithm with no meaningful appeal
- **Cannot identify bias sources** [HIGH - PRESENT]: Without explainability, impossible to verify racial disparities stem from which factors
- **Parole boards misunderstand accuracy** [HIGH - PRESENT]: "65% accuracy" likely misinterpreted; doesn't mean 35% error rate in way boards think

**3. TESTING & VALIDATION RISKS:**
- **No pre-deployment bias testing** [HIGH - MATERIALIZED]: Launched without demographic fairness testing
- **"Accuracy" definition problematic** [HIGH - PRESENT]: Accuracy for whom? False negatives (denied parole, wouldn't reoffend) vs. false positives (granted, did reoffend) weighted equally?
- **No validation of causal factors** [MEDIUM - PRESENT]: Does employment prevent recidivism, or do non-recidivists get jobs? Correlation ≠ causation
- **Three-year window arbitrary** [MEDIUM - PRESENT]: Why 3 years? Longer follow-up might show different patterns

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **Parole boards over-rely on scores** [HIGH - PRESENT]: AI score becomes justification for denial, boards lose independent judgment
- **No recidivism improvement** [HIGH - MATERIALIZED]: System deployed to reduce recidivism but shows no improvement—should be discontinued
- **Accountability gap** [HIGH - PRESENT]: When someone denied parole wouldn't have reoffended, who is responsible for lost years?
- **No independent audit** [HIGH - PRESENT]: No external criminal justice or civil rights review of system outcomes

**5. SCOPE & SAFEGUARDS RISKS:**
- **No caps on racial disparity** [HIGH - MATERIALIZED]: System allowed to increase racial inequality without triggering shutdown
- **High-stakes use inappropriate** [HIGH - PRESENT]: Parole is liberty decision; even 65% accuracy means 35% wrongly classified—unacceptable stakes
- **No human override ease** [MEDIUM - PRESENT]: Boards must justify going against AI, creating pro-algorithm bias
- **Drug offense bias uncorrected** [HIGH - MATERIALIZED]: System scores drug offenses as high risk despite lower actual danger; encodes war on drugs bias

**6. CONTEXT & EQUITY RISKS:**
- **Punishment for systemic inequality** [HIGH - MATERIALIZED]: Poor people, those with inadequate education, those who faced employment discrimination penalized for structural factors
- **Mass incarceration perpetuation** [HIGH - MATERIALIZED]: System keeps people imprisoned longer based on social disadvantage, not danger
- **Second-class freedom** [HIGH - PRESENT]: Released people live under algorithmic suspicion, surveillance, forever marked by risk score
- **Ignores incarceration harm** [MEDIUM - PRESENT]: Longer incarceration itself causes trauma, instability, making reintegration harder—algorithm doesn't account for this
- **No input from incarcerated people** [HIGH - PRESENT]: People subject to system had no voice in its design or evaluation

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 15+ risks with understanding that liberty decisions require much higher standards than commercial AI. Recognizes that system perpetuates mass incarceration and punishes systemic inequality. Questions whether AI should be used for parole at all given lack of improvement. Distinguishes materialized from ongoing risks.
- **Good (7-8 points):** Identifies 10-14 risks including bias, socioeconomic proxies, and fairness concerns. May not fully articulate liberty stakes or systemic incarceration critique.
- **Fair (5-6 points):** Identifies 6-9 risks, focuses on accuracy without questioning appropriateness of AI use or recognizing structural inequality.
- **Poor (0-4 points):** Accepts parole AI as efficiency/objectivity improvement. Identifies fewer than 6 risks. Treats racial disparities as acceptable.

---

## RISK ASSESSMENT CARD 11: AI-Powered Inventory Management for Grocery Chain

**Card Type:** Risk Assessment  
**Industry:** Retail  
**Deployment Stage:** Already Deployed (1 year)

### Scenario:
A grocery chain (200 stores across 3 states, mix of urban/suburban/rural) deployed AI to optimize inventory. The system predicts demand and automatically adjusts orders for each store based on:
- Historical sales data by product, store, season
- Local demographics (income, ethnicity, age)
- Weather forecasts
- Local events (sports, concerts, holidays)
- Competitor pricing
- Social media trends

**Results After 1 Year:**
- 20% reduction in food waste (company-wide)
- 12% increase in profit margins
- However: Complaints from stores in low-income neighborhoods about chronic out-of-stock items (fresh produce, meat, dairy)
- These same stores over-stocked with processed foods, sugary drinks
- Stores in wealthy areas have excellent fresh food availability
- Some ethnic specialty items disappeared from diverse neighborhoods' stores
- Customer complaints about food deserts worsening

Training data: 10 years of sales data from all stores, including what was purchased when products were available.

### Your Team's Task:
**Assess this deployed system. What went wrong? What risks remain? Rate severity.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Missing data problem** [HIGH - MATERIALIZED]: Training only on "what sold" misses "what would have sold if stocked"—if low-income stores never stocked fresh produce, AI learns they don't want it
- **Self-fulfilling scarcity** [HIGH - MATERIALIZED]: Past under-stocking in poor neighborhoods created sales data showing "low demand," justifying continued under-stocking
- **Wealth as preference proxy** [HIGH - MATERIALIZED]: AI learned wealthy neighborhoods buy fresh food, poor neighborhoods buy processed food, treating economic constraint as preference
- **Demographic stereotyping** [HIGH - MATERIALIZED]: Using ethnicity to predict product demand reinforces cultural stereotypes, doesn't account for individual variation

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Communities cannot challenge stocking decisions** [HIGH - MATERIALIZED]: Residents can't see why their store doesn't stock fresh produce or ethnic foods
- **Cannot identify discrimination** [HIGH - PRESENT]: Without explainability, impossible to prove system discriminates by neighborhood wealth/demographics
- **Store managers disempowered** [MEDIUM - PRESENT]: Managers who know their communities cannot override AI to stock requested items

**3. TESTING & VALIDATION RISKS:**
- **No nutritional equity testing** [HIGH - MATERIALIZED]: No pre-launch testing of whether system provides equal access to healthy food across neighborhoods
- **No validation of preference vs. constraint** [HIGH - MATERIALIZED]: System assumes past purchases reflect preferences, doesn't test whether price/availability drive choices
- **No testing of ethnic food availability** [MEDIUM - MATERIALIZED]: No testing whether diverse neighborhoods maintain access to cultural foods

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **No mechanism for community input** [HIGH - PRESENT]: Residents cannot request specific products or challenge stocking decisions
- **Profit optimization overrides nutrition** [HIGH - MATERIALIZED]: System maximizes profit, not community health; processed foods have higher margins
- **No oversight for food desert creation** [HIGH - MATERIALIZED]: No external monitoring to ensure system doesn't worsen food access disparities

**5. SCOPE & SAFEGUARDS RISKS:**
- **No minimum fresh food requirements** [HIGH - MATERIALIZED]: System needs guardrails ensuring all stores stock baseline healthy options regardless of "predicted demand"
- **No caps on nutritional disparity** [HIGH - PRESENT]: Nothing prevents wealthy stores having 80% fresh foods while poor stores have 20%
- **Ethnic food protection absent** [MEDIUM - MATERIALIZED]: No safeguards for maintaining cultural food access in diverse communities
- **Store closure risk** [MEDIUM - PRESENT]: Poor-performing stores (due to poor stocking) may be closed, worsening food deserts

**6. CONTEXT & EQUITY RISKS:**
- **Food deserts and health equity** [HIGH - MATERIALIZED]: System worsens existing food access inequality, contributing to diet-related health disparities
- **Economic constraint as preference** [HIGH - MATERIALIZED]: Poor people want healthy food but can't always afford it; AI treats budget constraints as taste
- **Structural racism** [HIGH - MATERIALIZED]: Historically redlined neighborhoods (predominantly Black/Latino) already face food deserts; AI perpetuates this
- **Cultural erasure** [MEDIUM - MATERIALIZED]: Removing ethnic specialty items from diverse neighborhoods is cultural harm
- **Profit extraction from poor communities** [HIGH - PRESENT]: High-margin processed foods stocked in poor neighborhoods while fresh food goes to wealthy areas—predatory business model
- **No community input in design** [HIGH - PRESENT]: Affected communities not consulted before deployment

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 15+ risks with understanding that food access is health equity issue. Recognizes how AI learns to discriminate by treating economic constraint as preference. Connects to food deserts, structural racism, and diet-related health disparities. Questions profit-maximization in essential service.
- **Good (7-8 points):** Identifies 10-14 risks including fresh food disparities, missing data problems, and community impacts. May not fully articulate health equity dimensions.
- **Fair (5-6 points):** Identifies 6-9 risks, recognizes stocking problems but doesn't connect to systemic inequality or health outcomes.
- **Poor (0-4 points):** Accepts efficiency/waste reduction as success. Identifies fewer than 6 risks. Treats unequal stocking as market response rather than discrimination.

---

## RISK ASSESSMENT CARD 12: AI-Powered Early Warning System for Student Dropouts

**Card Type:** Risk Assessment  
**Industry:** Education  
**Deployment Stage:** Pre-Deployment Evaluation

### Scenario:
A large urban school district (80 schools, 50,000 students, grades 6-12) plans to deploy an AI early warning system to identify students at risk of dropping out. The system will analyze:
- Attendance rates and patterns (tardies, absences)
- Grades and grade trends
- Disciplinary records (suspensions, office referrals)
- Standardized test scores
- Course enrollment (regular, honors, AP, remedial)
- Special education status
- English Language Learner status
- Free/reduced lunch eligibility
- Number of school changes/transfers
- Parent engagement (conference attendance, email responses)

Students flagged as "high risk" will receive interventions: mentorship, counseling, academic support. Teachers get alerts about flagged students in their classes.

Training data: 15 years of student records showing who graduated vs. who dropped out.

The district is majority students of color (60% Black, 25% Latino, 10% white, 5% Asian/other) and 70% qualify for free/reduced lunch.

### Your Team's Task:
**Conduct comprehensive pre-deployment risk assessment using 6-part framework with severity ratings.**

**Team Response Format:**
[Use same format as Card 1]

---

### ANSWER KEY (Hidden from students):

**1. DATA QUALITY RISKS:**
- **Discipline data reflects bias** [HIGH]: Substantial research shows Black students disciplined more harshly for same behaviors; AI learns discriminatory patterns
- **Poverty as "risk factor"** [HIGH]: Free lunch, parent conference non-attendance reflect economic barriers (work hours, transportation), not student potential
- **School quality variation ignored** [HIGH]: Students in under-resourced schools have worse outcomes due to systemic failures, not individual risk
- **Special education and ELL bias** [HIGH]: Students with IEPs or learning English treated as "at risk" when they may need support, not intervention
- **Self-fulfilling tracking** [MEDIUM]: Past tracking into remedial courses creates dropout patterns; AI learns to replicate tracking

**2. TRANSPARENCY & EXPLAINABILITY RISKS:**
- **Students/families don't know they're flagged** [HIGH]: Being labeled "at risk" happens without consent or explanation
- **Cannot challenge risk determination** [HIGH]: If flag is wrong or based on biased factors, no appeal process
- **Stigma without transparency** [HIGH]: Teachers seeing alerts may lower expectations without understanding risk factors

**3. TESTING & VALIDATION RISKS:**
- **No validation that interventions help** [HIGH]: System assumes flagging + intervention = lower dropout, but no evidence this works
- **No demographic fairness testing** [HIGH]: Must test whether system disproportionately flags students by race, poverty, disability, language
- **No testing of labeling harm** [MEDIUM]: Being flagged as "at risk" may itself cause harm (stigma, lowered expectations, self-fulfilling prophecy)

**4. GOVERNANCE & OVERSIGHT RISKS:**
- **Student privacy concerns** [HIGH]: Teachers receiving alerts about students' personal/family circumstances (poverty, discipline, special ed status) raises privacy issues
- **No opt-out for families** [MEDIUM]: Parents should be able to decline risk screening for their children
- **Scope of interventions unclear** [MEDIUM]: What happens to flagged students? Helpful support or punitive monitoring?
- **No oversight of disparate outcomes** [HIGH]: Who monitors whether system disproportionately flags Black/Latino students?

**5. SCOPE & SAFEGUARDS RISKS:**
- **No caps on demographic disparities** [HIGH]: System could flag 80% of Black students as "at risk" with no guardrails
- **Stigmatization risk** [HIGH]: Being labeled "at risk" may lower teacher expectations, affecting student outcomes
- **Intervention quality not assured** [MEDIUM]: If interventions are poorly designed or underfunded, flagging causes harm without benefit
- **No protection for legitimate absences** [MEDIUM]: Medical issues, family emergencies, religious observance shouldn't trigger "at risk" status

**6. CONTEXT & EQUITY RISKS:**
- **Individualized vs. systemic solutions** [HIGH]: System treats dropout risk as individual student problem, not systemic failure of schools/society
- **Resource allocation concerns** [HIGH]: Limited intervention resources may go to "predicted dropouts" rather than addressing school quality systemically
- **Poverty criminalization** [HIGH]: Using lunch status, parent availability as "risk factors" punishes students for being poor
- **Ableism and language discrimination** [HIGH]: Special ed and ELL status as risk factors rather than indicators of need for different support
- **Deficit framing** [HIGH]: System labels students as "at risk" rather than identifying how schools fail to serve them
- **No student/family voice** [HIGH]: System designed by adults for students, without student or family input

**SCORING RUBRIC:**
- **Excellent (9-10 points):** Identifies 15+ risks with understanding that dropout prevention requires systemic change, not student surveillance. Recognizes how poverty, discipline bias, and tracking create "risk factors." Questions whether labeling students helps or harms. Distinguishes between identifying students who need support vs. stigmatizing them.
- **Good (7-8 points):** Identifies 10-14 risks including bias in discipline data, poverty proxies, and stigma concerns. May not fully critique individualization of systemic problems.
- **Fair (5-6 points):** Identifies 6-9 risks, recognizes some bias issues but accepts dropout prediction premise without deeper questioning.
- **Poor (0-4 points):** Accepts early warning system as unproblematic intervention. Identifies fewer than 6 risks. Treats dropout as individual failure rather than systemic failure.

---

**END OF RISK ASSESSMENT CARDS**
