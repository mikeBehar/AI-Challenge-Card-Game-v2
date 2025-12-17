# AI CHALLENGE CARD GAME - PREDICTION CARDS

---

## PREDICTION CARD 1: Automated Resume Screening for City Government

**Card Type:** Prediction  
**Industry:** Public Sector / Government Hiring

### Scenario:
A mid-sized city government is implementing an AI system to screen resumes for entry-level positions across all departments (parks, sanitation, administration, public works). The AI was trained on 8 years of resumes from successful hires. The city has historically hired from local high schools and community colleges. The goal is to process 3,000+ applications per year more efficiently and reduce time-to-hire from 6 weeks to 2 weeks.

The system will:
- Automatically score resumes 1-100
- Flag top 15% for human review
- Auto-reject bottom 50%
- Use historical "successful hire" patterns

### Your Team's Task:
**Before deployment, what could go wrong? Identify the TOP 3 risks and explain your reasoning.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Geographic Bias** - The AI learned that "local" candidates (specific zip codes, local schools) were historically successful, systematically penalizing qualified candidates from outside the immediate area, limiting diversity and potentially violating equal opportunity requirements.

2. **Credential Inflation** - Historical data showed successful hires had minimal credentials (high school diploma), so AI penalized candidates with associate's or bachelor's degrees as "overqualified," eliminating upwardly mobile candidates.

3. **Socioeconomic Proxy Variables** - The AI picked up patterns like "gap years" (often due to caregiving or financial hardship) and community college attendance as negative signals, disadvantaging lower-income applicants.

4. **Activity/Experience Bias** - Unpaid internships, volunteer work, and extracurricular activities (more accessible to middle-class students) became positive signals, while paid work during school (typical of working-class students) was neutral or negative.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies 2-3 key risks with clear reasoning about historical bias, proxy variables, or systemic inequity. Explains WHY the training data might be problematic.
- **Good (7-8 points):** Identifies 1-2 risks with reasonable explanation, may miss deeper systemic issues but shows critical thinking.
- **Fair (5-6 points):** Identifies obvious risks (e.g., "bias") but lacks specific reasoning or understanding of mechanisms.
- **Poor (0-4 points):** Generic answers, no specific risks identified, or misunderstands the scenario.

---

## PREDICTION CARD 2: AI-Powered Loan Approval System

**Card Type:** Prediction  
**Industry:** Financial Services

### Scenario:
A regional credit union is deploying an AI system to automate small business loan approvals ($10K-$100K). The AI analyzes: credit scores, business revenue history, industry type, loan purpose, owner demographics (age, years in business), and social media presence of the business. The training data comes from 10 years of loan applications, including both approved and denied loans, plus repayment history. The system promises 48-hour decisions instead of 2-3 weeks.

The credit union serves a diverse community including immigrant-owned businesses, women entrepreneurs, and established family businesses.

### Your Team's Task:
**What are the TOP 3 risks with this system? Explain your reasoning.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Industry Discrimination** - AI learned historical patterns where certain industries (restaurants, salons, retail) had higher default rates, systematically denying loans to these sectors even for strong candidates, perpetuating economic inequality in those fields.

2. **Immigrant/New Business Penalty** - Short credit history and "years in business" became strong negative signals, disadvantaging first-generation immigrants and new entrepreneurs who hadn't had time to build lengthy track records, even when financially sound.

3. **Social Media Bias** - Businesses with professional social media presence (expensive marketing, polished content) scored higher, disadvantaging low-budget operations that relied on word-of-mouth, creating a digital divide proxy for wealth.

4. **Hidden Gender Patterns** - While gender wasn't an explicit variable, the AI learned proxy signals: business names with women's names, certain industry concentrations, part-time operation patterns common among women with caregiving responsibilities.

5. **Repayment vs. Ability Confusion** - Training on "who repaid loans" (vs. "who could have repaid but was denied") created selection bias, making the AI conservative and risk-averse, denying creditworthy applicants from underserved groups.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies 2-3 sophisticated risks involving proxy variables, selection bias, or systemic barriers. Shows understanding of how historical patterns embed discrimination.
- **Good (7-8 points):** Identifies clear risks with solid reasoning, may not reach the deepest level of analysis but demonstrates critical thinking.
- **Fair (5-6 points):** Recognizes some risks but reasoning is superficial or doesn't explain mechanisms clearly.
- **Poor (0-4 points):** Vague concerns without specific risks or reasoning.

---

## PREDICTION CARD 3: Predictive Policing Algorithm

**Card Type:** Prediction  
**Industry:** Criminal Justice / Law Enforcement

### Scenario:
A police department implements an AI system to predict where crimes are most likely to occur in the next 24-48 hours. The system analyzes: 15 years of crime reports, arrest data, 911 calls, time of day, weather, local events, and neighborhood characteristics. It generates daily "hot spot" maps showing where to concentrate patrols. The department claims this will help them prevent crime proactively and use limited officer resources more efficiently.

The city has diverse neighborhoods with different income levels, and historically some neighborhoods have received more intensive policing than others.

### Your Team's Task:
**What could go wrong? Identify TOP 3 risks and explain why they concern you.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Feedback Loop of Over-Policing** - Algorithm directs more officers to already-heavily-policed neighborhoods → More arrests/reports in those areas → Algorithm learns those areas are "high crime" → Sends even more officers → Self-reinforcing cycle of over-policing based on enforcement patterns, not actual crime rates.

2. **Report Bias vs. Crime Bias** - Training data reflects where crimes were REPORTED and ENFORCED, not where crimes actually occurred. Wealthier neighborhoods may have equal crime but lower arrest rates due to private security, lawyer intervention, or officer discretion.

3. **Proxy Variable for Race/Class** - "Neighborhood characteristics" and historical patrol patterns serve as proxies for racial and economic demographics, directing resources away from white/wealthy areas even when crime occurs there, perpetuating unequal enforcement.

4. **Minor Crime Amplification** - Areas with high reporting of minor offenses (noise complaints, loitering) get flagged as "high crime," receiving same response as areas with serious violent crime, misallocating resources.

5. **Erosion of Community Trust** - Increased police presence in predicted areas damages community relations, reduces voluntary cooperation and crime reporting, ultimately making communities less safe despite increased enforcement.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies feedback loops, selection bias, or systemic discrimination. Understands difference between "reported crime" and "actual crime."
- **Good (7-8 points):** Recognizes over-policing risks or bias issues with clear reasoning.
- **Fair (5-6 points):** Identifies concerns but doesn't explain mechanisms or systemic nature.
- **Poor (0-4 points):** Generic police concerns without connecting to AI-specific risks.

---

## PREDICTION CARD 4: AI Tutor for Personalized Learning

**Card Type:** Prediction  
**Industry:** Education Technology

### Scenario:
A school district deploys an AI tutoring system for math instruction in grades 6-8. The AI adapts to each student's learning pace, provides personalized practice problems, and recommends intervention for struggling students. It was trained on 5 years of student performance data including: test scores, homework completion rates, time spent on problems, hint usage, and final grades. 

The AI flags students who are "at risk of falling behind" for extra support and adjusts difficulty automatically. Teachers receive weekly reports on student progress and AI recommendations. The district hopes to close achievement gaps and provide every student with personalized attention.

### Your Team's Task:
**What are TOP 3 potential problems with this system? Explain your concerns.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Learning Style Bias** - AI trained on "successful" patterns favors students who learn in conventional ways (fast completion, few hints, linear progress), penalizing students with ADHD, learning disabilities, or different cognitive approaches who may be equally capable but learn differently.

2. **Self-Fulfilling Prophecy** - Students flagged "at risk" early receive easier problems and lower expectations, preventing them from catching up. Students identified as "advanced" get challenging material and accelerate, widening gaps the system claimed to close.

3. **Socioeconomic Proxies** - Homework completion and time-on-task reflect home environment (quiet study space, parental support, internet access), not just ability. System penalizes students from chaotic households or who work after school.

4. **Teaching to the Algorithm** - Students and teachers learn to "game" the system (rushing through problems, using hints strategically), optimizing for AI scores rather than genuine learning, undermining educational goals.

5. **Removal of Human Judgment** - Teachers over-rely on AI recommendations, missing context about student circumstances (family crisis, health issues, motivation factors) that explain performance better than data patterns.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies how AI might reinforce rather than close achievement gaps, recognizes proxy variables or self-fulfilling prophecy dynamics.
- **Good (7-8 points):** Recognizes learning style differences or socioeconomic factors with solid reasoning.
- **Fair (5-6 points):** Generic concerns about student privacy or "what if it's wrong" without deeper analysis.
- **Poor (0-4 points):** No specific risks identified or misunderstands the educational context.

---

## PREDICTION CARD 5: Automated Content Moderation for Social Platform

**Card Type:** Prediction  
**Industry:** Social Media / Technology

### Scenario:
A regional social media platform (think local community app with 500K users) deploys AI to automatically moderate user-generated content. The AI was trained on millions of flagged posts from larger platforms, plus the company's own moderation decisions from human reviewers over 3 years. 

The system will:
- Auto-delete content flagged as hate speech, harassment, or violence
- Issue warnings for borderline content
- Escalate unclear cases to human reviewers (estimated 5% of posts)
- Work in real-time to remove harmful content within minutes

The platform serves a diverse community including political discussions, local news, community organizing, and social connections.

### Your Team's Task:
**What could go wrong? Identify TOP 3 risks and explain your reasoning.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Context Collapse** - AI trained on other platforms misses local context, cultural references, and community-specific language. Terms acceptable in one community (reclaimed slurs, political satire, local idioms) get flagged as violations, silencing legitimate speech.

2. **Dialect and Language Bias** - AI trained predominantly on Standard American English flags African American Vernacular English (AAVE), regional dialects, immigrant English, or code-switching as "aggressive" or "incoherent," disproportionately censoring minority voices.

3. **False Equivalence** - System treats "both sides" of debates equally, removing marginalized groups' descriptions of their own oppression (calling out racism) at same rate as actual hate speech, claiming "neutrality" while perpetuating harm.

4. **Adversarial Gaming** - Bad actors learn to evade detection through misspellings, emojis, or coded language while the AI catches and removes sincere but emotionally expressed legitimate speech from victims responding to harassment.

5. **Chilling Effect on Organizing** - Over-cautious AI flags posts about protests, activism, or community organizing (using words like "fight," "resist," "action"), suppressing civic engagement and disadvantaging grassroots movements.

6. **No Appeal Process** - Automated decisions at scale mean deleted content disappears instantly with inadequate human review or appeal mechanisms, especially harmful for time-sensitive local organizing or emergency information.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies context sensitivity issues, language/dialect bias, or how "neutral" moderation can perpetuate harm. Shows understanding of power dynamics.
- **Good (7-8 points):** Recognizes cultural or linguistic bias with reasonable explanation.
- **Fair (5-6 points):** Generic concerns about censorship without explaining mechanisms or disproportionate impacts.
- **Poor (0-4 points):** No specific risks or misunderstands content moderation challenges.

---

## PREDICTION CARD 6: AI-Powered Employee Productivity Monitoring

**Card Type:** Prediction  
**Industry:** Human Resources / Workplace Management

### Scenario:
A mid-sized company (400 employees, mix of office and remote workers) implements AI to monitor employee productivity. The system tracks: keystrokes, mouse movements, applications used, emails sent, meeting attendance, and work output. It generates daily productivity scores (0-100) for each employee and flags "low performers" for manager review.

The AI was trained on data from the company's "top performers" (identified by promotions and raises over 5 years). Managers receive weekly dashboards comparing team members and identifying who needs "coaching." The company says this ensures fairness and helps identify training needs.

Employees work in various roles: customer service, software development, design, sales, HR, and administration.

### Your Team's Task:
**What are TOP 3 risks with this system? Explain your concerns.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Role Inappropriateness** - Metrics designed for high-activity roles (customer service: lots of typing/calls) penalize roles requiring deep thinking (software developers solving complex problems may stare at screen for hours, appearing "unproductive").

2. **Disability Discrimination** - System penalizes employees who need breaks (chronic pain, ADHD, disability accommodations), work at different paces, or use assistive technologies that register differently in activity monitoring.

3. **Busy-Work Optimization** - Employees learn to game metrics (keeping emails open, moving mouse, generating activity) rather than doing meaningful work. "Productivity theater" replaces actual productivity.

4. **Caregiving Penalties** - Remote workers with caregiving responsibilities (checking on children, eldercare) show "irregular" patterns compared to office workers, flagged as low performers despite equal or better output quality.

5. **Innovation Suppression** - Experimental work, creative thinking, collaboration time, and risk-taking don't generate measurable "activity," so employees avoid innovation in favor of routine, measurable tasks.

6. **Psychological Harm** - Constant surveillance creates anxiety, destroys trust, and reduces job satisfaction. Fear of metrics makes employees risk-averse and less collaborative.

7. **Manager Deskilling** - Managers rely on scores rather than actual observation and conversation, losing ability to evaluate work quality, employee wellbeing, or context that explains performance.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies how metrics can't capture meaningful work, recognizes disability/caregiving issues, or understands how surveillance changes behavior counterproductively.
- **Good (7-8 points):** Recognizes gaming behaviors or role-specific measurement problems.
- **Fair (5-6 points):** Generic privacy concerns without explaining impact on work or fairness.
- **Poor (0-4 points):** No specific risks identified.

---

## PREDICTION CARD 7: Algorithmic Bail Decisions

**Card Type:** Prediction  
**Industry:** Criminal Justice

### Scenario:
A county court system implements an AI tool to help judges make bail decisions. The algorithm predicts "flight risk" (likelihood defendant won't appear for trial) and "danger to community" (likelihood of committing new crimes while on bail). It analyzes: criminal history, age, employment status, residence stability, substance use history, family ties, and past court appearances.

Judges receive risk scores (1-10) as one input in their bail decisions. The training data comes from 10 years of county records showing who appeared for trial vs. who fled, and who was arrested for new crimes while on bail. The system aims to reduce overcrowding in jails by safely releasing low-risk defendants while protecting public safety.

The county has significant racial and economic disparities in its criminal justice system.

### Your Team's Task:
**What could go wrong? Identify TOP 3 risks and why they matter.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Socioeconomic Proxies as Risk Factors** - "Employment status" and "residence stability" punish poverty, not risk. Unemployed defendants or those in unstable housing get high-risk scores despite being equally likely to appear for trial if given support.

2. **Arrest vs. Crime Confusion** - "Criminal history" reflects who was arrested and charged (which is racially biased), not who committed crimes. The algorithm learns and perpetuates existing enforcement bias.

3. **Inability to Appear vs. Unwillingness** - System can't distinguish between defendants who would appear with reminders/support (low actual risk) vs. those who actively intend to flee (high risk), treating structural barriers as intentional flight risk.

4. **Age and Family Ties Bias** - Young people and those without traditional family structures (common in marginalized communities) score as higher risk regardless of actual likelihood to appear, perpetuating demographic bias.

5. **Self-Fulfilling Detention** - Defendants detained pretrial lose jobs and housing (the "stability" factors), making them higher risk if re-arrested later, creating feedback loops where bail decisions cause the instability they claim to predict.

6. **Substance Use Stigma** - History of substance use disorder becomes permanent risk mark even for people in recovery, ignoring treatment success and perpetuating stigma.

7. **Automation Bias** - Judges over-rely on algorithmic scores, using them as justification for detention rather than as one input, leading to mathematical veneer on biased decisions.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies how socioeconomic factors serve as proxies for race/class, recognizes difference between arrest history and actual risk, or understands feedback loops.
- **Good (7-8 points):** Recognizes that employment/housing shouldn't determine freedom, with clear reasoning.
- **Fair (5-6 points):** Generic "bias" concerns without explaining mechanisms.
- **Poor (0-4 points):** No specific risks or misunderstands bail system.

---

## PREDICTION CARD 8: AI-Driven Insurance Pricing

**Card Type:** Prediction  
**Industry:** Insurance / Financial Services

### Scenario:
An auto insurance company deploys AI to create "hyper-personalized" pricing. Beyond traditional factors (age, driving record, vehicle type), the AI analyzes: credit score, occupation, education level, neighborhood, shopping behavior (comparing quotes), social media activity, smartphone app usage patterns (how often you check phone while driving app is active), and vehicle telematics data.

The AI was trained on 15 years of claims data to predict accident likelihood and claim costs for each customer. The company promises that safe drivers will pay less while risky drivers pay more, creating "fair" risk-based pricing. Prices can vary significantly—some customers save 40%, others pay 60% more than standard rates.

### Your Team's Task:
**What are TOP 3 potential problems? Explain your reasoning.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Redlining by Algorithm** - Neighborhood data serves as proxy for race and class. Customers in low-income or minority neighborhoods pay more regardless of individual driving behavior, perpetuating geographic discrimination.

2. **Credit Score Discrimination** - Using credit scores punishes financial hardship unrelated to driving ability. People recovering from medical debt, divorce, or job loss pay higher premiums despite being safe drivers, creating poverty trap.

3. **Occupation and Education Bias** - Blue-collar workers and those without college degrees pay more based on correlation patterns, not causation. The AI learns class-based discrimination from historical data.

4. **Privacy Invasion Normalization** - Requiring extensive surveillance (telematics, social media, app usage) to get affordable rates forces customers to surrender privacy or pay penalties, disproportionately harming privacy-conscious customers.

5. **Correlation Without Causation** - AI finds spurious correlations (e.g., people who comparison shop are riskier because they've been denied elsewhere, or certain phone usage patterns correlate with claims) and treats them as predictive without understanding causation.

6. **Adverse Selection Spiral** - Safest drivers opt out of surveillance pricing, leaving only riskier pool in traditional pricing, which raises rates, pushing more people into surveillance system, creating coercive adoption.

7. **Inability to Improve** - Once labeled "high risk" based on neighborhood, credit, or occupation, customers can't meaningfully improve their scores through better driving alone, creating permanent underclass of expensive insurance.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies redlining/discrimination via proxy variables, recognizes privacy coercion, or understands how financial hardship becomes permanent penalty.
- **Good (7-8 points):** Recognizes socioeconomic bias or privacy concerns with solid reasoning.
- **Fair (5-6 points):** Generic privacy concerns without connecting to fairness or discrimination.
- **Poor (0-4 points):** No specific risks identified.

---

## PREDICTION CARD 9: Automated Essay Grading for College Applications

**Card Type:** Prediction  
**Industry:** Education / Admissions

### Scenario:
A state university system (10 campuses, 100K+ applicants annually) deploys AI to help evaluate personal essays in college applications. The AI scores essays on: grammar, vocabulary sophistication, argument structure, originality, and emotional authenticity. It was trained on thousands of essays from admitted students who later succeeded (high GPAs, graduation rates).

Human admissions officers still make final decisions, but AI scores help them prioritize which applications to read carefully. Essays scoring below 60/100 receive only brief review. The system promises consistent evaluation and helps officers manage overwhelming application volumes. The university emphasizes holistic admissions and wants to identify talented students from all backgrounds.

### Your Team's Task:
**What could go wrong? Identify TOP 3 risks and explain why they concern you.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Class-Coded Writing Styles** - AI rewards private school writing instruction, SAT prep course language, and expensive college counselor coaching. Working-class students writing authentically in their own voice get scored lower for lacking "sophisticated vocabulary" they never had access to learn.

2. **Cultural Narrative Bias** - Training on "successful" students' essays teaches AI that certain story arcs (overcoming individual adversity through determination) score higher than others (collective struggle, family obligation, community focus), favoring individualistic American narratives over cultural alternatives.

3. **Adversity Tourism Detection Failure** - AI can't distinguish between genuine hardship and privileged students writing calculated "adversity essays" coached by consultants. Authentic working-class struggles may score lower than polished middle-class renditions of minor challenges.

4. **Grammar as Gatekeeping** - Heavily weighting grammar penalizes students from non-Standard-English-speaking households, immigrant students, or those with learning disabilities, using language convention as proxy for intelligence or potential.

5. **Topic Bias** - Essays about certain topics (international travel, elite extracurriculars, classical music, literature) score higher because they appeared in successful applicants' essays, but those topics reflect access and privilege, not ability.

6. **Loss of Authentic Voice** - Students coached to "write for the algorithm" produce generic high-scoring essays that sound similar, losing the authentic voice and diverse perspectives that holistic admissions claims to value.

7. **Self-Fulfilling Success Definition** - Training on "who succeeded" may encode who fit the existing campus culture, perpetuating homogeneity rather than identifying talent from diverse backgrounds.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies how writing style reflects educational access not potential, recognizes cultural or class bias in narrative expectations, understands self-fulfilling prophecy in "success" definition.
- **Good (7-8 points):** Recognizes grammar/vocabulary as socioeconomic markers with clear reasoning.
- **Fair (5-6 points):** Generic concerns about subjectivity without explaining systematic bias.
- **Poor (0-4 points):** No specific risks identified.

---

## PREDICTION CARD 10: Facial Recognition for Exam Proctoring

**Card Type:** Prediction  
**Industry:** Education Technology

### Scenario:
A university requires all online students to use AI proctoring software for exams. The system uses facial recognition to verify student identity and monitor for cheating by tracking: eye movements, head position, presence of other people in room, and ambient noise. If the AI detects suspicious behavior, it flags the exam for review and may pause the test until a human proctor can investigate.

The software was trained on thousands of hours of exam footage to identify "normal" vs. "suspicious" behavior patterns. It's designed to work on any device with a camera. The university says this maintains academic integrity for online degrees and ensures online credentials have the same value as in-person degrees.

The student body is diverse in age, ability, race, and home environment.

### Your Team's Task:
**What are TOP 3 potential problems with this system? Explain your concerns.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Facial Recognition Bias** - Technology has documented higher error rates for darker skin tones and women. False flags for identity verification disproportionately affect Black students, causing exam interruptions, stress, and accusations they must defend against.

2. **Disability Discrimination** - "Normal" behavior baseline excludes students with: ADHD (who fidget or look away to concentrate), visual impairments (different eye movement patterns), physical disabilities (requiring movement breaks or assistive devices), autism (atypical eye contact or body language).

3. **Home Environment Inequality** - System assumes quiet, private space with good lighting and reliable internet. Penalizes students in: crowded homes (roommates/family visible), poor lighting (basement apartments), unstable internet (rural areas, low-income housing), or who use older devices with poor cameras.

4. **Cultural Behavior Differences** - "Suspicious" patterns may reflect cultural norms: looking upward when thinking (interpreted as reading ceiling notes), talking through problems aloud (interpreted as speaking to someone else), or prayer/meditation during stress (interpreted as suspicious ritual).

5. **Anxiety Amplification** - Surveillance increases test anxiety, especially for students from over-policed communities or those with previous negative experiences with surveillance, creating disparate psychological burden.

6. **False Positives Without Due Process** - Algorithmic flags trigger investigations that assume guilt, requiring students to prove innocence, with life-altering consequences (failing courses, academic probation, expulsion) based on AI misinterpretation.

7. **Privacy Invasion** - Requiring room scans reveals private spaces, economic conditions, and personal lives to institutions, disproportionately invading privacy of students who can't afford dedicated study spaces.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies facial recognition bias, disability discrimination, or home environment inequality with clear reasoning about disparate impacts.
- **Good (7-8 points):** Recognizes technology accuracy issues or environmental factors affecting fairness.
- **Fair (5-6 points):** Generic privacy concerns without connecting to equity or discrimination.
- **Poor (0-4 points):** No specific risks or misunderstands the scenario.

---

## PREDICTION CARD 11: AI-Powered Mental Health Chatbot

**Card Type:** Prediction  
**Industry:** Healthcare / Mental Health

### Scenario:
A health insurance company offers all members free 24/7 access to an AI mental health chatbot as part of their benefits. The chatbot provides: emotional support, coping strategies, mindfulness exercises, and crisis resources. It was trained on thousands of therapy transcripts, self-help materials, and crisis hotline conversations.

The chatbot asks screening questions to assess depression, anxiety, and suicide risk. For high-risk situations, it's supposed to escalate to human crisis counselors. The insurance company markets this as expanding access to mental health support, especially for people who can't afford therapy or live in areas with therapist shortages.

The chatbot operates independently—users don't need to be in therapy to access it, and conversations aren't reviewed by clinicians unless the AI flags a crisis.

### Your Team's Task:
**What could go wrong? Identify TOP 3 risks and explain your reasoning.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **False Crisis Detection** - AI may fail to recognize genuine suicide risk if expressed in culturally specific ways, indirect language, or patterns not in training data. Conversely, may over-flag and traumatize users by escalating normal distress, especially harming users from over-policed communities.

2. **Substitution for Real Care** - Insurance companies reduce coverage for actual therapists while promoting "free" chatbot, creating two-tier system where wealthy get human care and everyone else gets AI, widening rather than closing the treatment gap.

3. **Cultural Incompetence** - Therapeutic approaches trained on Western individualistic therapy transcripts don't translate to collectivist cultures, non-Western coping strategies, or diverse expressions of mental distress. May pathologize normal cultural practices or miss distress expressed differently.

4. **Inability to Handle Complexity** - Chatbot trained on "successful" therapy patterns can't recognize when it's out of depth—keeps offering coping strategies for situations requiring medication, intensive treatment, or crisis intervention, giving false sense of help.

5. **Data Mining Concerns** - Insurance company has financial incentive to analyze chatbot conversations for risk assessment, potentially denying coverage, raising premiums, or sharing data with employers, chilling honest disclosure of mental health struggles.

6. **Reinforcement of Harmful Patterns** - Without therapeutic judgment, chatbot might inadvertently validate distorted thinking, provide strategies that enable avoidance, or miss that user is manipulating conversation to get validation for harmful choices.

7. **Liability and Abandonment** - When chatbot fails (misses crisis, gives harmful advice, can't escalate properly), who is responsible? Users in crisis may have nowhere else to turn if the "safety net" has gaps.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies crisis detection failures, substitution for real care, or cultural incompetence with understanding of mental health complexity.
- **Good (7-8 points):** Recognizes accuracy limitations or data privacy concerns with solid reasoning.
- **Fair (5-6 points):** Generic "AI isn't human" concerns without specific mental health risks.
- **Poor (0-4 points):** No specific risks identified.

---

## PREDICTION CARD 12: Dynamic Pricing Algorithm for Ride-Sharing

**Card Type:** Prediction  
**Industry:** Transportation / Technology

### Scenario:
A ride-sharing company (like Uber/Lyft) enhances its "surge pricing" AI to be more personalized. Beyond time/location/demand, the new algorithm analyzes: your ride history, how often you accept surge prices, your device type (iPhone vs. Android), your battery level, whether you've been comparison shopping other apps, your typical destinations, and your estimated income (based on home/work addresses).

The AI predicts your "willingness to pay" and may show you different prices than other users for the same ride at the same time. The company says this "optimizes" pricing to balance supply and demand while maximizing revenue. Training data comes from millions of users' acceptance/rejection decisions over 5 years.

The service operates in a diverse city with wealthy and low-income neighborhoods, and is often the only transportation option late at night or in areas without good public transit.

### Your Team's Task:
**What are TOP 3 potential problems with this system? Explain your concerns.**

**Team Response:**
[Space for team to write their prediction]

---

### EVALUATION CRITERIA (Hidden from students):
**What Actually Happened / Key Risks:**

1. **Desperation Exploitation** - Low battery level signals urgency/desperation, triggering higher prices when users have fewer alternatives. Punishes users in genuine need (battery died during emergency, late at night in unsafe area) with higher costs.

2. **Wealth-Based Discrimination** - Home address as income proxy means identical rides cost more for wealthier users, which sounds fair, but also means the algorithm learns to charge poor users maximum they'll pay, extracting highest percentage of their income during necessity.

3. **Device Discrimination** - iPhone users charged more than Android users for same ride reflects and reinforces socioeconomic stereotypes, creating "wealth tax" on technology choices unrelated to transportation need.

4. **Comparison Shopping Penalty** - Checking other apps signals price sensitivity, but algorithm responds by raising prices slightly (knowing you're comparison shopping means you're serious about needing a ride), punishing informed consumers.

5. **Geographic Redlining** - Low-income neighborhood residents see higher prices because algorithm learned they have fewer alternatives (worse public transit, less access to personal vehicles), extracting higher prices precisely from communities that can least afford it.

6. **Accept-History Penalty** - Users who've accepted surge prices before (perhaps during emergencies or with no choice) get shown higher prices in future, penalizing past necessity as if it indicated willingness to pay premium.

7. **Monopoly Exploitation** - In late-night hours or areas without good public transit, ride-sharing is only option. Personalized pricing based on "willingness to pay" in these moments is price gouging enabled by algorithm, especially harmful for workers who need late-night transportation.

8. **Opacity and Discrimination** - Users can't see or prove they're being charged differently, making discrimination invisible and unaccountable. Creates justified paranoia about being cheated.

**Scoring Rubric:**
- **Excellent (9-10 points):** Identifies desperation exploitation, wealth-based discrimination, or how algorithm punishes those with fewest alternatives. Understands difference between market demand and exploiting necessity.
- **Good (7-8 points):** Recognizes socioeconomic discrimination or privacy concerns with clear reasoning.
- **Fair (5-6 points):** Generic "unfair pricing" concerns without explaining systematic targeting.
- **Poor (0-4 points):** No specific risks or accepts dynamic pricing premise without critique.

---

**END OF PREDICTION CARDS**
