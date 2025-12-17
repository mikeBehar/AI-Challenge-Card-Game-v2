/**
 * Case 2: TrendSetters Retail - Pre-Meeting Assignment
 * Google Apps Script to auto-generate the Google Form
 * 
 * INSTRUCTIONS:
 * 1. Go to script.google.com
 * 2. Click "New Project"
 * 3. Delete any existing code and paste this entire script
 * 4. Click the disk icon (Save) or Ctrl+S
 * 5. Click "Run" (play button) - select createCase2Form if prompted
 * 6. Click "Review Permissions" when prompted
 * 7. Click your Google account
 * 8. Click "Advanced" then "Go to Untitled project (unsafe)" 
 * 9. Click "Allow"
 * 10. Check your Google Drive - the form will be there!
 * 
 * After running, UPDATE the Case Study link placeholder with your actual Google Doc URL.
 */

function createCase2Form() {
  // Create the form
  var form = FormApp.create('Case 2: Pre-Meeting Assignment - TrendSetters Retail');
  
  // Form settings
  form.setDescription(
    'TrendSetters Retail - Marketing AI Decision\n' +
    'Due: 24 hours before class\n' +
    'Points: 40 points (10 points per question)\n\n' +
    '📋 IMPORTANT: Review materials BEFORE starting!\n\n' +
    '• Master Grading Rubrics: https://docs.google.com/document/d/12uoe_ugabo38yVBJVQf4ZJcdogFPjL83YenlbXW77j8/edit?usp=sharing\n' +
    '  - See Sections 1, 2, 5, 6 for this assignment\n' +
    '  - Prompt Quality Rubric (Section 1) - You\'ll need this for Question 3\n' +
    '  - Written Analysis Rubric (Section 2) - You\'ll need this for Questions 1, 2, 4\n\n' +
    '• Case Study 2 Materials: [REPLACE WITH YOUR GOOGLE DOC LINK]\n\n' +
    'You are a member of TrendSetters Retail\'s Board of Directors. Read Case Study 2 thoroughly, then answer the following questions to prepare for the board meeting.'
  );
  
  form.setCollectEmail(true);
  form.setAllowResponseEdits(true);
  form.setLimitOneResponsePerUser(false); // Set to true if using CT State accounts
  form.setProgressBar(true);
  
  // ============================================
  // SECTION 1: Student Information
  // ============================================
  form.addPageBreakItem()
    .setTitle('Student Information');
  
  form.addTextItem()
    .setTitle('Full Name')
    .setRequired(true);
  
  // ============================================
  // SECTION 2: Question 1 - Build-vs-Buy Analysis
  // ============================================
  form.addPageBreakItem()
    .setTitle('Question 1: Build-vs-Buy Analysis & Vendor Dependency (10 points)')
    .setHelpText(
      'TrendSetters faces a classic build-vs-buy decision. This case explicitly raises vendor dependency concerns (remember Brad\'s "control your destiny" argument from Case 1).\n\n' +
      'Grading Note: This question assesses Business Acumen (60%) and Ethical Awareness (40%). See Master Rubrics Sections 5 and 6. Strong answers reference specific case details and show practical business thinking.\n\n' +
      'Writing Guide: 400-500 words total across all three parts.'
    );
  
  form.addParagraphTextItem()
    .setTitle('Part A: Organizational Autonomy Analysis')
    .setHelpText(
      'Compare Options 1 (Buy Full Vendor) and 2 (Build Internal) on the dimension of ORGANIZATIONAL AUTONOMY AND CONTROL.\n\n' +
      'What does TrendSetters gain and lose with each option? Be specific about vendor dependency risks.'
    )
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Part B: Brad\'s Principle - Does It Apply Here?')
    .setHelpText(
      'Brad argued in Case 1 that relying on external vendors to fix your critical problems is risky.\n\n' +
      'Does his principle apply here? Why or why not? What\'s different about this situation compared to Case 1\'s Liberty Regional Bank?'
    )
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Part C: Contract Protections')
    .setHelpText(
      'If TrendSetters chooses Option 1 (vendor solution), what specific protections should they negotiate in the contract to reduce lock-in risk?\n\n' +
      'Name at least THREE concrete contractual provisions.'
    )
    .setRequired(true);
  
  // ============================================
  // SECTION 3: Question 2 - Customer Segmentation
  // ============================================
  form.addPageBreakItem()
    .setTitle('Question 2: Customer Segmentation & Generational Divide (10 points)')
    .setHelpText(
      'The case reveals that TrendSetters serves two distinct customer segments with very different attitudes toward AI personalization and privacy:\n\n' +
      '• Under 35: Want speed, convenience, AI recommendations; less concerned about privacy\n' +
      '• 45+: Value in-store experience, skeptical of data collection, privacy-conscious\n\n' +
      'Grading Note: This question assesses Business Acumen (50%), Ethical Awareness (30%), and Prompt Sophistication (20% - if you used AI to understand customer segments). See Master Rubrics Sections 5, 6, and 1.\n\n' +
      'Writing Guide: 350-450 words total across all three parts.'
    );
  
  form.addParagraphTextItem()
    .setTitle('Part A: Best Option for Each Segment')
    .setHelpText(
      'Which option (1-5) is best suited for serving the UNDER-35 segment? Which is best for the 45+ segment?\n\n' +
      'Explain your reasoning with specific features each segment would care about.'
    )
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Part B: Single vs. Multiple Strategies')
    .setHelpText(
      'Is it possible to serve both segments well with a single approach, or does TrendSetters need different strategies for different customers?\n\n' +
      'If different strategies, how would you implement that?'
    )
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Part C: Dee\'s Insight on Generational Expectations')
    .setHelpText(
      'Dee made an excellent point in Case 1 about generational expectations ("30-year-olds working 70 hours a week aren\'t going to the mom-and-pop bank").\n\n' +
      'How does her insight apply to this case? What do younger customers expect from retail AI?'
    )
    .setRequired(true);
  
  // ============================================
  // SECTION 4: Question 3 - AI-Assisted Analysis
  // ============================================
  form.addPageBreakItem()
    .setTitle('Question 3: AI-Assisted Financial & Risk Analysis (10 points)')
    .setHelpText(
      'This question requires you to demonstrate effective AI collaboration for business analysis.\n\n' +
      'Use an AI tool (ChatGPT, Claude, Gemini, or another) to help you understand the financial and risk dimensions of this decision. Show us your prompting skills and critical thinking.\n\n' +
      'IMPORTANT: We grade the quality of YOUR PROMPTS, not the quality of AI\'s answers. We want to see YOUR prompts and your critical evaluation of AI\'s help—not just the AI\'s responses.\n\n' +
      '📋 Review Prompt Quality Rubric (Section 1) in the Master Rubrics before writing your prompts!\n\n' +
      'Grading Note: This question assesses Prompt Sophistication (70%) and AI Collaboration (30%). See Master Rubrics Sections 1 and 3.\n\n' +
      'Writing Guide: 3 prompts + explanations + synthesis = approximately 600-800 words total.'
    );
  
  // Prompt guidance section
  form.addSectionHeaderItem()
    .setTitle('What Makes a Strong Prompt')
    .setHelpText(
      '✅ DO:\n' +
      '• Provide context: "I\'m evaluating 5 options for a $180M retailer..."\n' +
      '• Ask for analysis, not decisions: "Help me understand..." not "What should I do?"\n' +
      '• Request AI to challenge assumptions: "What factors might make Option 2 more expensive than projected?"\n' +
      '• Show iterative thinking: Follow-up questions that build on AI\'s previous answers\n\n' +
      '❌ DON\'T:\n' +
      '• Ask AI to make your decision: "Which option should we choose?"\n' +
      '• Be vague: "Tell me about AI in marketing"\n' +
      '• Just summarize the case: AI should help you understand, not repeat what\'s written\n' +
      '• Accept AI\'s answer without critical evaluation\n\n' +
      'EXAMPLE OF STRONG PROMPT:\n' +
      '"I\'m evaluating whether a mid-size retailer should build internal AI capability ($1.2M Year 1, 18-24 months) vs. buy vendor solution ($850K Year 1, 3 months deployment). Help me think through: What hidden costs might make the \'build\' option even more expensive than projected? Then challenge your own analysis."\n\n' +
      'EXAMPLE OF WEAK PROMPT:\n' +
      '"Compare the costs of the five options."'
    );
  
  // AI Tool Selection
  form.addCheckboxItem()
    .setTitle('Which AI tool(s) did you use for this question?')
    .setChoiceValues(['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot', 'Perplexity', 'Other (specify in your synthesis)'])
    .setRequired(true);
  
  // Prompt 1: Financial Analysis
  form.addSectionHeaderItem()
    .setTitle('PROMPT 1: Financial Analysis');
  
  form.addParagraphTextItem()
    .setTitle('Prompt 1: Your Financial Analysis Prompt')
    .setHelpText('Paste the EXACT prompt you used to analyze financial aspects (costs, ROI, payback period). Include your full prompt text exactly as you typed it.')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 1: Why did you ask this? (2-3 sentences)')
    .setHelpText('What did you hope to learn from this prompt?')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 1: What did you learn? (2-3 sentences)')
    .setHelpText('Summarize the key insights from AI\'s response.')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 1: Critical Evaluation (2-3 sentences)')
    .setHelpText('Did the AI miss anything important? What would you probe deeper on?')
    .setRequired(true);
  
  // Prompt 2: Risk Assessment
  form.addSectionHeaderItem()
    .setTitle('PROMPT 2: Risk Assessment');
  
  form.addParagraphTextItem()
    .setTitle('Prompt 2: Your Risk Assessment Prompt')
    .setHelpText('Paste the EXACT prompt you used to analyze risks (what could go wrong). Include your full prompt text exactly as you typed it.')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 2: Why did you ask this? (2-3 sentences)')
    .setHelpText('What did you hope to learn from this prompt?')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 2: What did you learn? (2-3 sentences)')
    .setHelpText('Summarize the key insights from AI\'s response.')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 2: Critical Evaluation (2-3 sentences)')
    .setHelpText('Did the AI miss anything important? What would you probe deeper on?')
    .setRequired(true);
  
  // Prompt 3: Challenging Assumptions
  form.addSectionHeaderItem()
    .setTitle('PROMPT 3: Challenging Assumptions');
  
  form.addParagraphTextItem()
    .setTitle('Prompt 3: Your "What If" / Assumption-Challenging Prompt')
    .setHelpText('Paste the EXACT prompt you used to challenge assumptions or ask "what if" questions. Include your full prompt text exactly as you typed it.')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 3: Why did you ask this? (2-3 sentences)')
    .setHelpText('What did you hope to learn from this prompt?')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 3: What did you learn? (2-3 sentences)')
    .setHelpText('Summarize the key insights from AI\'s response.')
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Prompt 3: Critical Evaluation (2-3 sentences)')
    .setHelpText('Did the AI miss anything important? What would you probe deeper on?')
    .setRequired(true);
  
  // Synthesis
  form.addSectionHeaderItem()
    .setTitle('AI Collaboration Synthesis');
  
  form.addParagraphTextItem()
    .setTitle('Your Synthesis (150-200 words)')
    .setHelpText(
      'Based on your AI collaboration, address these three questions:\n\n' +
      '1. Which option makes the most financial sense over 3 years?\n' +
      '2. What risks did AI help you identify that weren\'t obvious from reading the case?\n' +
      '3. What did AI get wrong or what assumptions should you question?'
    )
    .setRequired(true);
  
  // ============================================
  // SECTION 5: Question 4 - Your Position
  // ============================================
  form.addPageBreakItem()
    .setTitle('Question 4: Your Position & Decision Rationale (10 points)')
    .setHelpText(
      'You will have 2-3 minutes during the board meeting to advocate for your position. This question helps you prepare.\n\n' +
      'Grading Note: This question assesses Business Acumen (35%), Ethical Awareness (35%), and Prompt Sophistication (30%). See Master Rubrics Sections 5, 6, and 1. Strong answers show integration of business + ethics, not treating them separately. We assess quality of reasoning, not which option you choose.\n\n' +
      'Writing Guide: 500-650 words total across Parts B, C, and D.'
    );
  
  form.addMultipleChoiceItem()
    .setTitle('Part A: Your Vote - Which option are you voting for?')
    .setChoiceValues([
      'Option 1: Buy Full Vendor Solution (CustomerIQ™ Pro)',
      'Option 2: Build Internal AI Capability',
      'Option 3: Hybrid Approach (Vendor + Internal Team)',
      'Option 4: Start Small - Pilot with Vendor',
      'Option 5: Enhanced Manual Personalization (No AI Yet)'
    ])
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Part B: Your Core Argument (200-250 words)')
    .setHelpText(
      'Articulate the strongest case for your position as if making your opening statement to fellow board members.\n\n' +
      'Your argument should:\n' +
      '• Lead with your most compelling reason (business, competitive, risk, or ethical)\n' +
      '• Reference specific case data (numbers, facts, customer insights)\n' +
      '• Acknowledge the main trade-offs and why they\'re acceptable\n' +
      '• Address both business logic AND ethical/privacy considerations\n' +
      '• Be persuasive but respectful of other viewpoints'
    )
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Part C: Anticipating Opposition (200-250 words)')
    .setHelpText(
      'Identify the TWO strongest arguments AGAINST your position. For each objection:\n\n' +
      '1. State the objection clearly (as a smart opponent would make it)\n' +
      '2. Provide your rebuttal (how you would respond during deliberation)\n\n' +
      'This shows you\'ve thought through counterarguments and aren\'t just advocating from one perspective.'
    )
    .setRequired(true);
  
  form.addParagraphTextItem()
    .setTitle('Part D: The Breaking News Factor (100-150 words)')
    .setHelpText(
      'The case mentions that you\'ll receive breaking news about CustomerIQ mid-deliberation (a privacy breach and FTC investigation).\n\n' +
      'BEFORE you know the details, how might this type of news affect your position? Would it:\n' +
      '• Strengthen your current choice?\n' +
      '• Make you reconsider?\n' +
      '• Not change your thinking at all?\n\n' +
      'Explain why. (This tests whether your position is robust to new information or depends on everything going according to plan.)'
    )
    .setRequired(true);
  
  // ============================================
  // SECTION 6: Checklist & Self-Assessment
  // ============================================
  form.addPageBreakItem()
    .setTitle('Submission Checklist & Self-Assessment')
    .setHelpText(
      'Before submitting, verify your work meets the assignment requirements and rubric standards.\n\n' +
      'Remember: If you can\'t honestly say your work meets "Proficient" (80%+) or better on the rubrics, keep refining before submitting!'
    );
  
  form.addCheckboxItem()
    .setTitle('Content Completeness - Confirm you have:')
    .setChoiceValues([
      'Answered all parts of all 4 questions',
      'Included 3 AI prompts with full explanations (Question 3)',
      'Clearly stated my voting position (Question 4)',
      'Referenced specific case data (numbers, facts) not just generalizations'
    ])
    .setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('Rubric Self-Assessment: Honestly, how would you rate your own work?')
    .setChoiceValues([
      '90-100% (A): Exceptional analysis with sophisticated thinking and specific case engagement',
      '80-89% (B): Proficient work with solid reasoning and clear case understanding',
      '70-79% (C): Developing work with basic understanding but room for depth',
      'Below 70%: Needs significant improvement (consider revising before submitting)'
    ])
    .setRequired(true);
  
  form.addCheckboxItem()
    .setTitle('Academic Integrity Confirmation')
    .setChoiceValues([
      'I used AI as a thinking partner, not a replacement for my own thinking',
      'I can explain my answers without looking at notes because they reflect my own analysis',
      'My synthesis is in my own words, not copied from AI responses'
    ])
    .setRequired(true);
  
  // ============================================
  // SECTION 7: Optional Feedback
  // ============================================
  form.addPageBreakItem()
    .setTitle('Optional Feedback (No Points)');
  
  form.addParagraphTextItem()
    .setTitle('Any questions or comments about the assignment or case? (Optional)')
    .setRequired(false);
  
  form.addScaleItem()
    .setTitle('How confident do you feel about your position going into the board meeting?')
    .setBounds(1, 5)
    .setLabels('Not confident', 'Very confident')
    .setRequired(false);
  
  // Set confirmation message
  form.setConfirmationMessage(
    'Thank you for submitting your Case 2 Pre-Meeting Assignment!\n\n' +
    'Your responses have been recorded. You should receive a confirmation email.\n\n' +
    'NEXT STEPS:\n' +
    '• Review the case study one more time before the board meeting\n' +
    '• Be prepared to present your position in 2-3 minutes\n' +
    '• Expect breaking news during deliberations that may change the discussion\n\n' +
    'See you at the board meeting!'
  );
  
  // Log the form URL
  Logger.log('Form created successfully!');
  Logger.log('Form URL: ' + form.getPublishedUrl());
  Logger.log('Edit URL: ' + form.getEditUrl());
  
  // Show URLs in a dialog if running from the script editor
  var ui = SpreadsheetApp.getUi ? SpreadsheetApp.getUi() : null;
  if (ui) {
    ui.alert('Form Created!', 
      'Your form has been created.\n\n' +
      'Form URL (for students): ' + form.getPublishedUrl() + '\n\n' +
      'Edit URL (for you): ' + form.getEditUrl(),
      ui.ButtonSet.OK);
  }
  
  return form;
}
