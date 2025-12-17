/**
 * Case 2: TrendSetters Retail - Company Background Slides
 * Google Apps Script to auto-generate Google Slides presentation
 * 
 * INSTRUCTIONS:
 * 1. Go to script.google.com
 * 2. Click "New Project"
 * 3. Delete any existing code and paste this entire script
 * 4. Click Save (Ctrl+S)
 * 5. Click Run - select createTrendSettersSlides if prompted
 * 6. Authorize when prompted
 * 7. Check your Google Drive for the presentation
 */

function createTrendSettersSlides() {
  // Create the presentation
  var presentation = SlidesApp.create('Case 2: TrendSetters Retail - Company Background');
  
  // Get the default blank slide and remove it later
  var slides = presentation.getSlides();
  
  // ============================================
  // SLIDE 1: Title Slide
  // ============================================
  var slide1 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE);
  slide1.getShapes()[0].getText().setText('Case 2: TrendSetters Retail');
  slide1.getShapes()[1].getText().setText('Marketing AI Decision\n"Style That Fits Your Life"');
  
  // ============================================
  // SLIDE 2: Company Profile
  // ============================================
  var slide2 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide2.getShapes()[0].getText().setText('Company Profile');
  slide2.getShapes()[1].getText().setText(
    '• Founded: 2010 (15 years old) — Portland, Oregon\n' +
    '• Employees: 850 (45 retail locations + e-commerce)\n' +
    '• Revenue: $180M annually (down from $192M peak in 2022)\n' +
    '• Customer Base: 2.3M active customers\n' +
    '• E-commerce: 35% of revenue (growing but still minority)\n' +
    '• Brand Position: "Accessible fashion for conscious consumers"\n' +
    '   — Between fast fashion and premium brands'
  );
  
  // ============================================
  // SLIDE 3: Business Model
  // ============================================
  var slide3 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide3.getShapes()[0].getText().setText('What Made TrendSetters Successful');
  slide3.getShapes()[1].getText().setText(
    '• Sustainable practices: Ethical sourcing, reduced waste\n' +
    '• Personal service: In-store stylists help customers\n' +
    '• Community focus: Local events, fashion workshops\n' +
    '• Quality-to-price ratio: Better than fast fashion, more affordable than premium\n\n' +
    'THE PROBLEM: Growth has stalled as online competitors got better at personalization'
  );
  
  // ============================================
  // SLIDE 4: Marketing Effectiveness Declining
  // ============================================
  var slide4 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide4.getShapes()[0].getText().setText('Problem: Marketing Effectiveness Declining');
  slide4.getShapes()[1].getText().setText(
    '• Email click-through: 2.8% (industry avg: 3.5%)\n' +
    '• Social engagement: Down 22% year-over-year\n' +
    '• Customer acquisition cost: $68/customer (was $48 three years ago)\n' +
    '• Marketing spend: 8.2% of revenue (above 6.5% median)\n\n' +
    '💡 AI PROMPT: "What factors typically cause email marketing effectiveness to decline in retail? What data would help diagnose whether this is a content problem, targeting problem, or timing problem?"'
  );
  
  // ============================================
  // SLIDE 5: Customer Retention Weak
  // ============================================
  var slide5 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide5.getShapes()[0].getText().setText('Problem: Customer Retention is Weak');
  slide5.getShapes()[1].getText().setText(
    '• 68% of customers make only ONE purchase (never return)\n' +
    '• Customer lifetime value: $340 (down from $410)\n' +
    '• Repeat purchase rate: Only 32% within 12 months\n' +
    '• Cart abandonment: 73% (losing $4.2M annually)\n\n' +
    '💡 AI PROMPT: "For a mid-size retailer with 68% single-purchase customers, what are the top 3 interventions that typically improve retention? What does each cost to implement?"'
  );
  
  // ============================================
  // SLIDE 6: Revenue Trends
  // ============================================
  var slide6 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide6.getShapes()[0].getText().setText('Problem: Revenue Trends Are Concerning');
  slide6.getShapes()[1].getText().setText(
    '• Three consecutive quarters of declining revenue\n' +
    '• Same-store sales: Down 6% year-over-year\n' +
    '• E-commerce growth: Slowing (was 25% YoY, now 12%)\n' +
    '• Market share in core demographic (women 25-45): Declining\n\n' +
    '💡 AI PROMPT: "When e-commerce growth slows from 25% to 12% YoY, what are typical causes? How do you distinguish between market saturation vs. competitive loss vs. execution problems?"'
  );
  
  // ============================================
  // SLIDE 7: Why This Is Happening - Customer Feedback
  // ============================================
  var slide7 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide7.getShapes()[0].getText().setText('Customer Research: Why This Is Happening');
  slide7.getShapes()[1].getText().setText(
    'From Q3 2024 Customer Survey:\n\n' +
    '• 64% say emails "aren\'t relevant to me"\n' +
    '• 71% have unsubscribed from at least one list\n' +
    '• 82% say "other retailers know what I like better"\n' +
    '• Competitors using AI show 3-5X higher engagement\n\n' +
    '💡 AI PROMPT: "What does \'Netflix/Spotify-level personalization\' actually mean in retail? What customer data is required to achieve it?"'
  );
  
  // ============================================
  // SLIDE 8: Generational Divide
  // ============================================
  var slide8 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide8.getShapes()[0].getText().setText('The Generational Divide');
  slide8.getShapes()[1].getText().setText(
    'UNDER 35:\n' +
    '• Want speed, convenience, AI recommendations\n' +
    '• Less concerned about privacy\n' +
    '• Expect personalization as baseline\n\n' +
    '45+:\n' +
    '• Value in-store experience\n' +
    '• Skeptical of data collection\n' +
    '• Privacy-conscious\n\n' +
    '💡 AI PROMPT: "Can a single personalization strategy serve both privacy-conscious older customers AND data-comfortable younger customers? What approaches have worked?"'
  );
  
  // ============================================
  // SLIDE 9: Lost in the Middle
  // ============================================
  var slide9 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide9.getShapes()[0].getText().setText('Competitive Position: Lost in the Middle');
  slide9.getShapes()[1].getText().setText(
    '• Fast fashion (Shein, ASOS): Wins on price and trend speed\n' +
    '• Premium brands (Everlane, Reformation): Wins on quality and brand story\n' +
    '• TrendSetters: No longer clearly differentiated\n\n' +
    '💡 AI PROMPT: "What strategies have \'stuck in the middle\' retailers used to successfully differentiate? Is personalization a viable differentiation strategy, or does everyone end up with similar AI?"'
  );
  
  // ============================================
  // SLIDE 10: Board Mandate
  // ============================================
  var slide10 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide10.getShapes()[0].getText().setText('Board Mandate (August Meeting)');
  slide10.getShapes()[1].getText().setText(
    'Directors gave management clear direction:\n\n' +
    '1. Improve customer lifetime value by 20% within 18 months\n' +
    '2. Return to revenue growth by Q2 2026\n' +
    '3. Find sustainable competitive advantage in personalization\n\n' +
    'Budget authorized: Up to $1.2M in technology investment\n\n' +
    'CMO Sarah Chen took this as her mandate to explore AI personalization.'
  );
  
  // ============================================
  // SLIDE 11: The Proposed Solution - CustomerIQ
  // ============================================
  var slide11 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide11.getShapes()[0].getText().setText('Proposed Solution: CustomerIQ™');
  slide11.getShapes()[1].getText().setText(
    'AI-powered marketing personalization platform by Nexus Analytics\n\n' +
    '• Silicon Valley startup, $85M in VC funding\n' +
    '• Serves 120+ mid-market retailers\n' +
    '• Creates detailed customer profiles using ML\n' +
    '• Generates personalized emails, recommendations, ads\n' +
    '• Predicts what customers want before they search\n\n' +
    '💡 AI PROMPT: "What due diligence questions should a board ask about an AI vendor that\'s VC-funded? What risks come with startup vendors vs. established players?"'
  );
  
  // ============================================
  // SLIDE 12: CustomerIQ Data Collection
  // ============================================
  var slide12 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide12.getShapes()[0].getText().setText('CustomerIQ™: Data Collection');
  slide12.getShapes()[1].getText().setText(
    'What data it ingests:\n' +
    '• Purchase history, browsing behavior, email engagement\n' +
    '• Mobile app usage, location data (tracks store visits)\n' +
    '• Social media activity (with permission)\n' +
    '• In-store behavior via facial recognition cameras\n' +
    '• Third-party data from data brokers\n\n' +
    '💡 AI PROMPT: "What are the privacy implications of facial recognition in retail stores? What regulations (CCPA, BIPA, GDPR) apply, and what are the penalties?"'
  );
  
  // ============================================
  // SLIDE 13: CustomerIQ Customer Profiles
  // ============================================
  var slide13 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide13.getShapes()[0].getText().setText('CustomerIQ™: Customer Profiles');
  slide13.getShapes()[1].getText().setText(
    'ML creates profiles for each customer:\n\n' +
    '• Style preferences (bohemian, classic, edgy, minimalist)\n' +
    '• Price sensitivity (discount hunter vs. full-price buyer)\n' +
    '• Channel preferences (mobile vs. desktop, email vs. SMS)\n' +
    '• Engagement patterns (morning browser, evening shopper)\n' +
    '• Life events (moving, new job, pregnancy — inferred from data)\n\n' +
    '💡 AI PROMPT: "What ethical concerns arise when AI infers sensitive life events like pregnancy from purchase data? How have other retailers handled this?"'
  );
  
  // ============================================
  // SLIDE 14: CustomerIQ Personalization Output
  // ============================================
  var slide14 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide14.getShapes()[0].getText().setText('CustomerIQ™: What It Does');
  slide14.getShapes()[1].getText().setText(
    '• Email campaigns: Fully customized per customer\n' +
    '• Website: Dynamic homepage showing predicted preferences\n' +
    '• Product recommendations: Based on "style DNA"\n' +
    '• Dynamic pricing: Adjusts prices by willingness to pay (±15%)\n' +
    '• Predictive engagement: "We miss you" when churn predicted\n\n' +
    '💡 AI PROMPT: "Is dynamic pricing (charging different customers different prices) ethical? What\'s the difference between personalized pricing and price discrimination?"'
  );
  
  // ============================================
  // SLIDE 15: Vendor's Promised Results
  // ============================================
  var slide15 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide15.getShapes()[0].getText().setText('Vendor\'s Promised Results');
  slide15.getShapes()[1].getText().setText(
    'Based on Nexus Analytics case studies:\n\n' +
    '• 40% increase in email click-through (2.8% → 3.9%)\n' +
    '• 25% reduction in customer acquisition cost ($68 → $51)\n' +
    '• 15% increase in average order value ($85 → $98)\n' +
    '• 12% improvement in retention rate\n' +
    '• ROI: "Pays for itself in 8 months"\n\n' +
    '💡 AI PROMPT: "When evaluating vendor-provided ROI projections, what questions should you ask? What factors typically cause actual results to differ from case studies?"'
  );
  
  // ============================================
  // SLIDE 16: Reference Customers
  // ============================================
  var slide16 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide16.getShapes()[0].getText().setText('Reference Customers');
  slide16.getShapes()[1].getText().setText(
    'Nexus Analytics provided these references:\n\n' +
    '• StyleHub (similar size): 38% email CTR improvement, 14% retention increase\n' +
    '• UrbanThreads: Increased customer LTV from $280 to $385 in first year\n' +
    '• FashionForward: Reduced cart abandonment from 71% to 54%\n\n' +
    '💡 AI PROMPT: "What questions should we ask these reference customers to validate claims? What red flags might indicate cherry-picked references?"'
  );
  
  // ============================================
  // SLIDE 17: The Five Options Header
  // ============================================
  var slide17 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE);
  slide17.getShapes()[0].getText().setText('The Board\'s Five Options');
  slide17.getShapes()[1].getText().setText('Each has different costs, timelines, capabilities, and risks');
  
  // ============================================
  // SLIDE 18: Option 1 - Buy Full Vendor
  // ============================================
  var slide18 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide18.getShapes()[0].getText().setText('Option 1: Buy Full Vendor Solution');
  slide18.getShapes()[1].getText().setText(
    'Purchase complete CustomerIQ™ Pro platform\n\n' +
    'FINANCIAL:\n' +
    '• Year 1: $850K | Ongoing: $420K/year | 3-Year Total: $1.69M\n\n' +
    'TIMELINE: 4 months to full deployment\n\n' +
    'PROS: Fast, proven technology, vendor handles everything\n' +
    'CONS: Vendor dependency, data goes to vendor, pricing risk\n\n' +
    '💡 AI PROMPT: "What contract protections should we negotiate to reduce vendor lock-in risk? What exit clauses are standard in enterprise software deals?"'
  );
  
  // ============================================
  // SLIDE 19: Option 2 - Build Internal
  // ============================================
  var slide19 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide19.getShapes()[0].getText().setText('Option 2: Build Internal AI Capability');
  slide19.getShapes()[1].getText().setText(
    'Hire team to build custom personalization system\n\n' +
    'FINANCIAL:\n' +
    '• Year 1: $1.2M | Ongoing: $680K/year | 3-Year Total: $2.56M\n\n' +
    'TIMELINE: 18-24 months to full functionality\n\n' +
    'PROS: Full control, own IP, no vendor dependency\n' +
    'CONS: Execution risk, talent hard to find, competitors advance\n\n' +
    '💡 AI PROMPT: "What\'s the realistic success rate for mid-size companies building internal AI teams? What are the top reasons these projects fail?"'
  );
  
  // ============================================
  // SLIDE 20: Option 3 - Hybrid
  // ============================================
  var slide20 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide20.getShapes()[0].getText().setText('Option 3: Hybrid Approach');
  slide20.getShapes()[1].getText().setText(
    'License CustomerIQ™ + hire internal team to customize\n\n' +
    'FINANCIAL:\n' +
    '• Year 1: $950K | Ongoing: $520K/year | 3-Year Total: $1.99M\n\n' +
    'TIMELINE: 3 months basic, 18+ months full control\n\n' +
    'PROS: Fast start, path to independence, risk mitigation\n' +
    'CONS: Most complex, highest Y1 cost, coordination overhead\n\n' +
    '💡 AI PROMPT: "What are best practices for hybrid vendor+internal technology strategies? What makes them succeed or fail?"'
  );
  
  // ============================================
  // SLIDE 21: Option 4 - Pilot
  // ============================================
  var slide21 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide21.getShapes()[0].getText().setText('Option 4: Start Small - Pilot');
  slide21.getShapes()[1].getText().setText(
    '6-month pilot with limited features and 500K customers\n\n' +
    'FINANCIAL:\n' +
    '• Pilot: $280K | If expand: +$520K | Exit cost: $50K\n\n' +
    'TIMELINE: 6 months pilot + 3 months expansion = 9 months\n\n' +
    'PROS: Test before commitment, lower risk, learn first\n' +
    'CONS: Delayed results, partial picture, competitive gap\n\n' +
    '💡 AI PROMPT: "What metrics should we use to evaluate the pilot\'s success? How do we avoid confirmation bias in interpreting results?"'
  );
  
  // ============================================
  // SLIDE 22: Option 5 - No AI
  // ============================================
  var slide22 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide22.getShapes()[0].getText().setText('Option 5: Enhanced Manual (No AI Yet)');
  slide22.getShapes()[1].getText().setText(
    'Hire marketing specialists, improve with non-AI tools\n\n' +
    'FINANCIAL:\n' +
    '• Year 1: $320K | Ongoing: $320K/year | 3-Year Total: $960K\n\n' +
    'TIMELINE: Immediate improvement, no long implementation\n\n' +
    'PROS: Lowest cost, no privacy concerns, human judgment\n' +
    'CONS: Doesn\'t scale, competitive disadvantage, may not meet board mandate\n\n' +
    '💡 AI PROMPT: "Is there evidence that human-driven personalization can compete with AI-driven approaches at scale? What would success look like?"'
  );
  
  // ============================================
  // SLIDE 23: Financial Comparison
  // ============================================
  var slide23 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide23.getShapes()[0].getText().setText('Financial Comparison');
  slide23.getShapes()[1].getText().setText(
    'Option          | Year 1    | 3-Year Total | Timeline\n' +
    '----------------|-----------|--------------|----------\n' +
    '1. Buy Vendor   | $850K     | $1.69M       | 4 months\n' +
    '2. Build        | $1.2M     | $2.56M       | 18-24 mo\n' +
    '3. Hybrid       | $950K     | $1.99M       | 3-18 mo\n' +
    '4. Pilot        | $280K     | $800K+       | 9 months\n' +
    '5. No AI        | $320K     | $960K        | Immediate\n\n' +
    '💡 AI PROMPT: "Help me calculate risk-adjusted ROI for each option, assuming Option 2 has 40% failure risk and Option 1 has 15% vendor viability risk."'
  );
  
  // ============================================
  // SLIDE 24: Key Decision Factors - Financial
  // ============================================
  var slide24 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide24.getShapes()[0].getText().setText('Key Questions: Financial');
  slide24.getShapes()[1].getText().setText(
    '• Total Cost of Ownership: Which option has best 3-year TCO including opportunity costs?\n\n' +
    '• Time to Payback: How long until each generates enough improvement to cover costs?\n\n' +
    '• Risk-Adjusted ROI: If Option 2 has 40% failure chance, how does that change expected value?\n\n' +
    '• Downside Protection: Which option loses least money if it doesn\'t work?\n\n' +
    '💡 AI PROMPT: "Walk me through how to calculate expected value when there\'s a significant probability of project failure."'
  );
  
  // ============================================
  // SLIDE 25: Key Decision Factors - Competitive
  // ============================================
  var slide25 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide25.getShapes()[0].getText().setText('Key Questions: Competitive');
  slide25.getShapes()[1].getText().setText(
    '• Time Pressure: How much does 6-month or 18-month delay cost in market share?\n\n' +
    '• Sustainable Advantage: Which creates hardest-to-copy competitive moat?\n\n' +
    '• Category Definition: Are we competing on personalization sophistication or brand values?\n\n' +
    '• Fast Follower vs. Leader: Is second-with-better-implementation better than first mover?\n\n' +
    '💡 AI PROMPT: "In retail technology, what\'s the historical evidence for first-mover advantage vs. fast-follower advantage?"'
  );
  
  // ============================================
  // SLIDE 26: Key Decision Factors - Organizational
  // ============================================
  var slide26 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide26.getShapes()[0].getText().setText('Key Questions: Organizational');
  slide26.getShapes()[1].getText().setText(
    '• Can We Recruit AI Talent? Realistically, can TrendSetters hire and keep ML engineers in Portland?\n\n' +
    '• Can We Execute Build? Does organization have capability for 18-month build?\n\n' +
    '• Can We Manage Vendor? Do we have sophistication to negotiate with Nexus Analytics?\n\n' +
    '• Cultural Fit: Does AI-driven personalization align with "conscious consumer" brand?\n\n' +
    '💡 AI PROMPT: "What organizational capabilities are needed to successfully manage an AI vendor relationship? What warning signs indicate a company isn\'t ready?"'
  );
  
  // ============================================
  // SLIDE 27: Key Decision Factors - Privacy/Ethics
  // ============================================
  var slide27 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide27.getShapes()[0].getText().setText('Key Questions: Privacy & Ethics');
  slide27.getShapes()[1].getText().setText(
    '• Facial Recognition: Is tracking customer movement helpful or creepy?\n' +
    '• Third-Party Data: Is buying broker data consistent with "conscious" brand?\n' +
    '• Dynamic Pricing: Is charging different prices fair or discriminatory?\n' +
    '• Data Security: What happens if customer data is breached?\n' +
    '• Informed Consent: Do customers understand what\'s collected?\n\n' +
    '💡 AI PROMPT: "What\'s the business case for and against collecting data that customers might find \'creepy\' if they knew about it?"'
  );
  
  // ============================================
  // SLIDE 28: Vendor Relationship - Case 1 Callback
  // ============================================
  var slide28 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide28.getShapes()[0].getText().setText('Vendor Questions: "Control Your Destiny"');
  slide28.getShapes()[1].getText().setText(
    'Remember Brad\'s principle from Case 1!\n\n' +
    '• Lock-In Risk: If we choose Option 1, can we leave in Year 3?\n' +
    '• Pricing Power: What stops Nexus from tripling fees after we\'re dependent?\n' +
    '• Roadmap Control: What if Nexus kills features we rely on?\n' +
    '• Vendor Viability: What if Nexus runs out of VC money?\n' +
    '• Data Hostage: If we leave, can we take our customer insights?\n\n' +
    '💡 AI PROMPT: "What happened to retailers who became dependent on vendors that later failed or were acquired? What were their options?"'
  );
  
  // ============================================
  // SLIDE 29: Mid-Deliberation Twist Preview
  // ============================================
  var slide29 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE);
  slide29.getShapes()[0].getText().setText('⚠️ Mid-Deliberation Twist');
  slide29.getShapes()[1].getText().setText('Breaking news will be revealed 30 minutes into your board meeting\nBe prepared to adapt your position based on new information');
  
  // ============================================
  // SLIDE 30: Your Task
  // ============================================
  var slide30 = presentation.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
  slide30.getShapes()[0].getText().setText('Your Task as Board Members');
  slide30.getShapes()[1].getText().setText(
    '1. Review the five options carefully\n\n' +
    '2. Use AI tools to understand financial and ethical implications\n\n' +
    '3. Prepare to advocate for your position (2-3 minutes)\n\n' +
    '4. Be ready to respond to counterarguments\n\n' +
    '5. Consider how breaking news might affect your decision\n\n' +
    '6. Vote based on quality of reasoning, not just gut instinct'
  );
  
  // Remove the original blank slide
  slides[0].remove();
  
  // Log success
  Logger.log('Presentation created successfully!');
  Logger.log('Presentation URL: ' + presentation.getUrl());
  
  return presentation;
}
