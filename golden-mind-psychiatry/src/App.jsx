import React, { useState, useEffect } from 'react';
import {
  ClipboardCheck,
  Pill,
  Brain,
  Heart,
  Smile,
  Wind,
  Sun,
  ShieldCheck,
  Video,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  UserCheck,
  Phone,
  Mail,
  Clock,
  Lock,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Calendar,
  Search,
  Activity,
  Award,
  Check
} from 'lucide-react';

/* ============================================================================
   1. PRACTICE DATA & ALL 10 SERVICES (Inlined for zero Vercel path errors)
   ============================================================================ */
const PRACTICE_INFO = {
  name: "Golden Mind Psychiatry PLLC",
  shortName: "Golden Mind Psychiatry",
  tagline: "Your Path to Emotional Well-Being Starts Here",
  email: "info@goldenmindpsychiatry.org",
  phone: "(432) 934-3185",
  fax: "(682) 235-1127",
  hours: "Monday – Friday: 9:00 AM – 5:00 PM",
  locations: [
    {
      title: "Primary Sanctuary Clinic",
      address: "1010 N Belt Line Road, Suite 102 A, Mesquite, TX 75149",
      type: "In-Person & Telehealth"
    },
    {
      title: "Fort Worth Office",
      address: "6801 McCart Ave, #109, Fort Worth, TX 76133",
      type: "Telehealth Only"
    },
    {
      title: "Albuquerque Office",
      address: "1438 Girard Blvd NE, Albuquerque, NM 87106",
      type: "Telehealth Only"
    }
  ],
  heroImage: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=85",
  aboutImage: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1200&q=85",
  aboutParagraph1:
    "Golden Mind Psychiatry PLLC is a compassionate mental health provider dedicated to supporting individuals on their journey to emotional well-being. We believe that quality psychiatric care should be accessible, personalized, and delivered with genuine compassion. Our mission is to help our patients achieve mental health stability and improved quality of life through evidence-based treatment approaches and a commitment to understanding each individual’s unique needs.",
  aboutParagraph2:
    "We offer comprehensive mental health services including psychiatric evaluations, medication management, and specialized treatments for a wide range of conditions. Whether you’re struggling with ADHD, anxiety, depression, mood disorders, PTSD, or bipolar disorder, our experienced team is here to provide expert care. With the convenience of telehealth options, we make it easier for you to access the mental health support you deserve, whenever and wherever you need it."
};

const SERVICES_DATA = [
  {
    id: "psych-eval",
    number: "Service 01",
    shortTitle: "Psychiatric Evaluations",
    title: "Psychiatric Evaluation Services",
    subtitle: "Comprehensive Psychiatric Evaluations",
    iconName: "ClipboardCheck",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Complete mental health assessments to evaluate emotional, behavioral, cognitive, and psychiatric concerns. A thorough evaluation is the foundation of effective, personalized care.",
    longDescription:
      "At Golden Mind Psychiatry PLLC, our initial diagnostic evaluation is an unhurried, deeply collaborative conversation. Rather than rushing through a checklist, we explore your biological health, personal history, lifestyle stressors, and previous treatment experiences to craft a clear, accurate clinical roadmap.",
    col1Title: "Includes",
    col1Items: [
      "Comprehensive diagnostic assessment",
      "Mental health & medical history review",
      "Past medication & efficacy review",
      "Collaborative treatment planning",
      "Personalized clinical recommendations"
    ],
    col2Title: "Available For",
    col2Items: [
      "Children (Ages 6+)",
      "Adolescents & Teens",
      "Adults",
      "Older Adults & Seniors"
    ],
    ctaText: "Schedule an Evaluation",
    timeline: [
      { step: "01", title: "Digital Pre-Intake", desc: "Complete secure history questionnaires from home prior to your session." },
      { step: "02", title: "60-Minute Clinical Interview", desc: "In-depth exploration of symptoms, stressors, sleep, and medical history." },
      { step: "03", title: "Diagnostic Clarity", desc: "Transparent discussion of clinical impressions and differential diagnosis." },
      { step: "04", title: "Tailored Care Plan", desc: "Joint decision on medication, integrative lifestyle steps, and therapy referrals." }
    ],
    selfCheckQuestions: [
      "Have you been experiencing emotional, focus, or mood shifts that interfere with daily life?",
      "Are you unsure whether your current diagnosis or treatment plan truly fits what you're feeling?",
      "Would you value a thorough, compassionate second opinion before starting or changing medication?"
    ],
    faqs: [
      {
        q: "How long does an initial psychiatric evaluation take?",
        a: "Initial evaluations typically last 60 minutes, allowing ample time to review your history, answer questions, and design an individualized treatment plan."
      },
      {
        q: "Will I receive a prescription during my very first evaluation?",
        a: "If clinically indicated and agreed upon together, prescriptions can be sent electronically to your preferred pharmacy at the end of your first visit."
      }
    ]
  },
  {
    id: "medication",
    number: "Service 02",
    shortTitle: "Medication Management",
    title: "Medication Management Services",
    subtitle: "Psychiatric Medication Management",
    iconName: "Pill",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    description:
      "Ongoing medication evaluation and monitoring to improve emotional and mental health stability. We take time to understand your full history before any prescription decision is made, ensuring safe and effective treatment.",
    longDescription:
      "Thoughtful pharmacology requires ongoing partnership. We believe in using the lowest effective dose, minimizing unwanted side effects, and educating you on how each option works so you always feel empowered in your care.",
    col1Title: "Includes",
    col1Items: [
      "Careful dosage titration & adjustments",
      "Proactive side-effect monitoring",
      "Structured symptom tracking",
      "Patient education & pharmacology guidance",
      "Collaborative long-term planning"
    ],
    col2Title: "Conditions Treated",
    col2Items: [
      "Anxiety & Depression",
      "ADHD & Executive Dysfunction",
      "Bipolar Disorder",
      "PTSD & OCD",
      "Mood Disorders & Insomnia",
      "Panic Disorder"
    ],
    ctaText: "Schedule Medication Consult",
    timeline: [
      { step: "01", title: "Baseline Review", desc: "Assess current medications, supplements, lab work, and past sensitivities." },
      { step: "02", title: "Evidence-Based Selection", desc: "Review medication options, benefits, and potential side effects together." },
      { step: "03", title: "30-Day Follow-Up", desc: "Close monitoring during early titration to fine-tune dosing safely." },
      { step: "04", title: "Maintenance & Stability", desc: "Convenient quarterly or bi-monthly check-ins once stability is achieved." }
    ],
    selfCheckQuestions: [
      "Are you currently taking psychiatric medication that feels only partially effective or causes side effects?",
      "Have you been considering medication for anxiety, depression, or focus, but want a conservative, guided approach?",
      "Do you want a provider who coordinates medication with sleep, nutrition, and therapy?"
    ],
    faqs: [
      {
        q: "How often are medication management follow-up visits?",
        a: "When starting or adjusting a medication, we typically meet every 2 to 4 weeks. Once your symptoms are stable, visits move to every 1 to 3 months."
      },
      {
        q: "Do you offer genetic testing (pharmacogenomics) for medications?",
        a: "Yes, when helpful, we can utilize pharmacogenetic testing to see how your body metabolizes specific classes of psychiatric medications."
      }
    ]
  },
  {
    id: "adhd",
    number: "Service 03",
    shortTitle: "ADHD",
    title: "ADHD Services",
    subtitle: "ADHD Evaluations & Treatment",
    iconName: "Brain",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    description:
      "Expert ADHD care for children, teens, and adults — from comprehensive evaluation and accurate diagnosis to personalized treatment that fits your life, school, and work needs.",
    longDescription:
      "ADHD looks different at every stage of life—from classroom restlessness in childhood to chronic overwhelm, time blindness, and burnout in adulthood. Our evaluations look at executive functioning as a whole and pair stimulant or non-stimulant options with practical cognitive scaffolding.",
    col1Title: "Services Include",
    col1Items: [
      "Comprehensive adult ADHD evaluations",
      "Pediatric & teen ADHD assessments",
      "School & workplace accommodation support",
      "Stimulant & non-stimulant management",
      "Focus & executive functioning strategies"
    ],
    col2Title: "Symptoms Addressed",
    col2Items: [
      "Inattention & distractibility",
      "Poor concentration & task paralysis",
      "Chronic disorganization",
      "Hyperactivity & impulsivity",
      "Executive dysfunction & overwhelm"
    ],
    ctaText: "Schedule ADHD Evaluation",
    timeline: [
      { step: "01", title: "Validated Rating Scales", desc: "Standardized executive function and attention screening prior to your visit." },
      { step: "02", title: "Developmental & Clinical History", desc: "Rule out overlapping conditions like anxiety, sleep apnea, or thyroid shifts." },
      { step: "03", title: "Personalized Regimen", desc: "Tailored stimulant, non-stimulant, or behavioral executive function plan." },
      { step: "04", title: "Ongoing Optimization", desc: "Fine-tune coverage for school, career demands, and daily routines." }
    ],
    selfCheckQuestions: [
      "Do you frequently struggle to start or finish tasks even when they are important to you?",
      "Do you experience 'time blindness,' chronic overwhelm, or difficulty organizing daily priorities?",
      "Have focus challenges impacted your academic performance, career growth, or relationships?"
    ],
    faqs: [
      {
        q: "Can adults be diagnosed with ADHD for the first time?",
        a: "Absolutely. Many high-achieving adults compensated for years until career or family demands exceeded their coping bandwidth."
      },
      {
        q: "Do you prescribe both stimulant and non-stimulant options?",
        a: "Yes. We tailor treatment based on your medical profile, anxiety levels, cardiovascular health, and personal preferences."
      }
    ]
  },
  {
    id: "womens-health",
    number: "Service 04",
    shortTitle: "Women's Mental Health",
    title: "Women's Mental Health",
    subtitle: "Women's Emotional Wellness Program",
    iconName: "Heart",
    image: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=1000&q=80",
    description:
      "Specialized psychiatric care for women navigating emotional, hormonal, and life transitions. We understand the unique mental health challenges women face at every stage of life and provide compassionate, evidence-based support.",
    longDescription:
      "Hormonal fluctuations across the reproductive lifespan deeply influence neurotransmitters. Whether you are planning a pregnancy, navigating postpartum anxiety or depression, managing PMDD, or transitioning through perimenopause, we provide judgment-free, specialized care.",
    col1Title: "Services Include",
    col1Items: [
      "Postpartum depression & anxiety treatment",
      "Pregnancy-safe medication planning",
      "Perinatal mood & anxiety support",
      "PMDD (Premenstrual Dysphoric Disorder) care",
      "Perimenopause & menopause mood support",
      "Caregiver stress & burnout recovery"
    ],
    col2Title: "Life Stages Supported",
    col2Items: [
      "Preconception & family planning",
      "Pregnancy & postpartum fourth trimester",
      "Cyclic luteal-phase mood shifts",
      "Perimenopausal transition",
      "High-stress career & family balance"
    ],
    ctaText: "Book Women's Wellness Visit",
    timeline: [
      { step: "01", title: "Cycle & Transition Mapping", desc: "Correlate emotional symptoms with hormonal, reproductive, and life milestones." },
      { step: "02", title: "Risk-Benefit Consultation", desc: "Evidence-based safety review for pregnancy, lactation, or hormone transitions." },
      { step: "03", title: "Integrated Treatment", desc: "Targeted medication, sleep preservation, and nutritional supplementation." },
      { step: "04", title: "Coordinated OB/GYN Care", desc: "Seamless collaboration with your obstetrician, midwife, or primary provider." }
    ],
    selfCheckQuestions: [
      "Do your mood, irritability, or anxiety levels shift predictably before your menstrual cycle?",
      "Are you pregnant, postpartum, or planning pregnancy and want safe mental health guidance?",
      "Have perimenopausal changes affected your sleep quality, cognitive clarity, or emotional resilience?"
    ],
    faqs: [
      {
        q: "Is it safe to take psychiatric medication while pregnant or breastfeeding?",
        a: "Many medications have extensive safety data during pregnancy and lactation. We walk you through current clinical evidence so you can make an informed decision."
      }
    ]
  },
  {
    id: "child-psych",
    number: "Service 05",
    shortTitle: "Child & Adolescent",
    title: "Child & Adolescent Psychiatry",
    subtitle: "Youth Mental Health Services",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80",
    description:
      "Compassionate psychiatric care designed specifically for children and teens. We create a safe, supportive environment where young people can receive expert mental health support while parents remain actively involved in the care journey.",
    longDescription:
      "Early intervention can transform a young person's academic and emotional trajectory. We partner closely with parents, pediatricians, and school counselors—always prioritizing conservative, age-appropriate interventions that help kids and teens thrive.",
    col1Title: "Concerns Treated",
    col1Items: [
      "Pediatric ADHD & focus difficulties",
      "Childhood & teen anxiety",
      "Adolescent depression & withdrawal",
      "Behavioral & impulse concerns",
      "School-related stress & social anxiety",
      "Emotional regulation difficulties"
    ],
    col2Title: "Parent Support Includes",
    col2Items: [
      "Parent behavioral guidance",
      "504 Plan & IEP school documentation",
      "Clear medication education",
      "Family communication strategies"
    ],
    ctaText: "Schedule Youth Consultation",
    timeline: [
      { step: "01", title: "Parent & Teacher Input", desc: "Gather multi-setting perspectives from home and school environments." },
      { step: "02", title: "Youth-Friendly Evaluation", desc: "Warm, age-appropriate conversation where your child feels heard and safe." },
      { step: "03", title: "Family Care Conference", desc: "Review findings together and discuss conservative behavioral and medical options." },
      { step: "04", title: "Growth & School Monitoring", desc: "Track academic progress, emotional growth, and developmental milestones." }
    ],
    selfCheckQuestions: [
      "Has your child or teen shown persistent changes in sleep, grades, friendships, or irritability?",
      "Have teachers mentioned focus, restlessness, or emotional overwhelm in the classroom?",
      "Are you looking for a provider who includes parents as active partners in every decision?"
    ],
    faqs: [
      {
        q: "Are parents present during child and adolescent psychiatric visits?",
        a: "Yes. Parents or legal guardians are integral to the evaluation. For older teens, we also offer brief one-on-one time so they can speak openly."
      }
    ]
  },
  {
    id: "anxiety",
    number: "Service 06",
    shortTitle: "Anxiety & Stress",
    title: "Anxiety & Stress Disorders",
    subtitle: "Calming the Overactive Nervous System",
    iconName: "Wind",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    description:
      "Targeted treatment for chronic worry, panic attacks, social anxiety, and OCD. We help quiet racing thoughts and physical tension so you can reclaim calm, restful sleep, and confidence in daily life.",
    longDescription:
      "When your nervous system is stuck in fight-or-flight, even small daily decisions can feel exhausting. We combine non-habit-forming pharmacological support with practical somatic and cognitive tools to restore a steady baseline of calm.",
    col1Title: "Treatment Includes",
    col1Items: [
      "Comprehensive anxiety & panic evaluation",
      "Non-habit-forming medication management",
      "Acute panic & nervous system regulation",
      "Sleep restoration protocols",
      "CBT-informed coping strategies"
    ],
    col2Title: "Conditions Treated",
    col2Items: [
      "Generalized Anxiety Disorder (GAD)",
      "Panic Disorder & Panic Attacks",
      "Social Anxiety Disorder",
      "Obsessive-Compulsive Disorder (OCD)",
      "High-functioning burnout & chronic stress"
    ],
    ctaText: "Start Anxiety Treatment",
    timeline: [
      { step: "01", title: "Trigger & Somatic Mapping", desc: "Identify physical symptoms (racing heart, insomnia, GI tension) and triggers." },
      { step: "02", title: "Immediate Relief Tools", desc: "Introduce evidence-based physiological regulation and sleep support." },
      { step: "03", title: "Long-Term Stabilization", desc: "Careful titration of first-line anxiety or OCD medications when appropriate." },
      { step: "04", title: "Resilience Building", desc: "Maintain calm through life transitions without emotional blunting." }
    ],
    selfCheckQuestions: [
      "Do racing thoughts or 'what-if' scenarios make it difficult to relax or fall asleep at night?",
      "Do you experience physical tension, chest tightness, restlessness, or sudden panic episodes?",
      "Has avoidance of social or professional situations begun shrinking your daily routine?"
    ],
    faqs: [
      {
        q: "Will anxiety medication make me feel emotionally numb or drowsy?",
        a: "Our goal is never emotional blunting. You should still feel like yourself—just without the constant background alarm of chronic anxiety."
      }
    ]
  },
  {
    id: "depression",
    number: "Service 07",
    shortTitle: "Depression",
    title: "Depression & Mood Disorder Care",
    subtitle: "Compassionate Treatment for Lasting Relief",
    iconName: "Sun",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1000&q=80",
    description:
      "Evidence-based psychiatric care for individuals experiencing persistent sadness, emotional exhaustion, loss of motivation, or mood instability. We look beyond surface symptoms to restore vitality, clarity, and daily fulfillment.",
    longDescription:
      "Depression is more than feeling sad—it can manifest as heavy physical fatigue, brain fog, numbness, or irritability. At Golden Mind Psychiatry PLLC, we evaluate biological contributors, circadian rhythms, and life stressors to build a comprehensive recovery plan.",
    col1Title: "Treatment Approach",
    col1Items: [
      "In-depth mood & bipolar spectrum evaluation",
      "Targeted antidepressant & mood stabilization",
      "Treatment-resistant depression strategies",
      "Biological & nutritional factor review",
      "Supportive therapeutic guidance"
    ],
    col2Title: "Conditions Addressed",
    col2Items: [
      "Major Depressive Disorder (MDD)",
      "Persistent Depressive Disorder (Dysthymia)",
      "Bipolar I & Bipolar II Disorders",
      "Seasonal Affective Disorder (SAD)",
      "Anhedonia & emotional exhaustion"
    ],
    ctaText: "Begin Depression Care",
    timeline: [
      { step: "01", title: "Differential Mood Assessment", desc: "Distinguish unipolar depression from bipolar spectrum or medical fatigue." },
      { step: "02", title: "Personalized Pharmacology", desc: "Select medications tailored to your energy, sleep, and cognitive profile." },
      { step: "03", title: "Behavioral Activation", desc: "Gentle, realistic steps to rebuild momentum, circadian rhythm, and joy." },
      { step: "04", title: "Relapse Prevention", desc: "Long-term wellness planning to protect your emotional stability." }
    ],
    selfCheckQuestions: [
      "Have you lost interest or pleasure in hobbies, relationships, or goals you once cared about?",
      "Are you experiencing persistent low energy, heavy fatigue, or changes in sleep and appetite?",
      "Do you feel weighed down by brain fog, guilt, or a sense of going through the motions?"
    ],
    faqs: [
      {
        q: "How soon do depression treatments start working?",
        a: "Sleep and appetite often improve within the first 1–2 weeks, while full mood elevation typically builds over 4–6 weeks. We support you closely throughout that window."
      }
    ]
  },
  {
    id: "trauma",
    number: "Service 08",
    shortTitle: "Trauma & PTSD",
    title: "Trauma & PTSD Recovery",
    subtitle: "Trauma-Informed Psychiatric Care",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1000&q=80",
    description:
      "Safe, trauma-informed psychiatric treatment for survivors of acute trauma, complex PTSD, and prolonged stress. Every session prioritizes your sense of safety, autonomy, and pacing.",
    longDescription:
      "Unresolved trauma keeps the brain's threat-detection center on high alert, leading to hypervigilance, nightmares, emotional numbness, or sudden reactivity. You never have to recount painful details before you are ready; we focus on stabilizing your nervous system and sleep first.",
    col1Title: "Care Includes",
    col1Items: [
      "Paced, trauma-informed evaluations",
      "Nightmare & sleep-disturbance relief",
      "Hypervigilance & startle stabilization",
      "Grounding & nervous system regulation",
      "Coordination with EMDR / trauma therapists"
    ],
    col2Title: "Symptoms Supported",
    col2Items: [
      "Post-Traumatic Stress Disorder (PTSD)",
      "Complex PTSD (C-PTSD)",
      "Intrusive memories & flashbacks",
      "Trauma-related insomnia & nightmares",
      "Emotional detachment & hyperarousal"
    ],
    ctaText: "Schedule Trauma-Informed Consult",
    timeline: [
      { step: "01", title: "Safety & Autonomy First", desc: "You control the pace—no forced retelling of traumatic events." },
      { step: "02", title: "Sleep & Nervous System Relief", desc: "Address nightmares, nocturnal panic, and hyperarousal early." },
      { step: "03", title: "Coordinated Therapy Support", desc: "Provide neurochemical stability so trauma therapy (like EMDR) is easier to tolerate." },
      { step: "04", title: "Post-Traumatic Growth", desc: "Reclaim agency, restful sleep, and safe connection with others." }
    ],
    selfCheckQuestions: [
      "Do past overwhelming experiences still affect your sleep, nightmares, or sense of safety today?",
      "Do you often feel constantly 'on guard,' easily startled, or emotionally disconnected?",
      "Would you benefit from calming physiological reactivity while working through trauma?"
    ],
    faqs: [
      {
        q: "Do I have to describe my trauma in detail during the first appointment?",
        a: "No. Trauma-informed care means you are always in control. We only need to understand how your symptoms affect you today to begin helping."
      }
    ]
  },
  {
    id: "telehealth",
    number: "Service 09",
    shortTitle: "Telepsychiatry",
    title: "Telepsychiatry Services",
    subtitle: "Convenient, HIPAA-Compliant Virtual Care",
    iconName: "Video",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1000&q=80",
    description:
      "With the convenience of telehealth options, we make it easier for you to access the mental health support you deserve, whenever and wherever you need it—from the privacy of home or office.",
    longDescription:
      "Skip traffic, waiting rooms, and scheduling barriers. Our encrypted, HIPAA-compliant video platform delivers the exact same clinical depth, warmth, and electronic prescribing capabilities as an in-person sanctuary visit.",
    col1Title: "Telehealth Features",
    col1Items: [
      "100% HIPAA-compliant HD video visits",
      "One-click browser access (no downloads needed)",
      "Direct e-prescribing to your local pharmacy",
      "Flexible morning & lunchtime scheduling",
      "Seamless digital intake & messaging portal"
    ],
    col2Title: "Ideal For",
    col2Items: [
      "Busy professionals & remote workers",
      "Parents & caregivers at home",
      "University & college students",
      "Patients in rural or underserved areas",
      "Anyone preferring private care from home"
    ],
    ctaText: "Book a Telehealth Visit",
    timeline: [
      { step: "01", title: "Select Virtual Slot", desc: "Choose a convenient appointment time online or with our care team." },
      { step: "02", title: "Digital Onboarding", desc: "Sign consent forms and complete intake securely on your phone or laptop." },
      { step: "03", title: "One-Click Video Link", desc: "Join your private virtual consultation room right from your email/SMS reminder." },
      { step: "04", title: "Instant Pharmacy Dispatch", desc: "Prescriptions and follow-up summaries are sent immediately after your call." }
    ],
    selfCheckQuestions: [
      "Does commuting or taking half a day off work keep you from prioritizing mental health care?",
      "Do you feel more relaxed opening up from the comfort and privacy of your own home?",
      "Do you have a smartphone, tablet, or computer with a stable internet connection?"
    ],
    faqs: [
      {
        q: "Are telehealth appointments covered by insurance the same as in-person visits?",
        a: "Yes, most major commercial insurance plans cover telepsychiatry evaluations and medication follow-ups at the same rate as in-office visits."
      }
    ]
  },
  {
    id: "holistic",
    number: "Service 10",
    shortTitle: "Holistic & Integrative",
    title: "Holistic & Integrative Psychiatry",
    subtitle: "Whole-Person Mind-Body Wellness",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1000&q=80",
    description:
      "Mental health is deeply interconnected with physical health, sleep, nutrition, and environment. We combine conventional psychiatry with evidence-based integrative protocols to address root causes.",
    longDescription:
      "True emotional well-being isn't achieved by looking at neurotransmitters in isolation. We evaluate vitamin deficiencies (B12, Vitamin D, Iron/Ferritin), thyroid function, gut-brain inflammation, circadian alignment, and evidence-graded nutraceuticals alongside traditional care.",
    col1Title: "Integrative Pillars",
    col1Items: [
      "Functional lab & biomarker review",
      "Evidence-graded nutraceutical guidance",
      "Circadian rhythm & sleep architecture",
      "Gut-brain & nutritional psychiatry",
      "Mind-body stress resilience protocols"
    ],
    col2Title: "Root Factors Explored",
    col2Items: [
      "Vitamin D, B12, Folate & Ferritin levels",
      "Thyroid & metabolic mood contributors",
      "Chronic inflammation & fatigue",
      "Cortisol dysregulation & burnout",
      "Safe supplement-medication interactions"
    ],
    ctaText: "Explore Integrative Care",
    timeline: [
      { step: "01", title: "Whole-Person Audit", desc: "Review sleep, nutrition, movement, stressors, and psychiatric symptoms together." },
      { step: "02", title: "Targeted Lab Work", desc: "Order or review key biomarkers that mimic or worsen anxiety and depression." },
      { step: "03", title: "Synergistic Protocol", desc: "Blend pharmaceutical precision with clinical-grade supplements and lifestyle habits." },
      { step: "04", title: "Sustainable Vitality", desc: "Build long-term metabolic and emotional resilience." }
    ],
    selfCheckQuestions: [
      "Do you want to understand the biological and nutritional root causes behind your mood or fatigue?",
      "Are you taking supplements and want to know which ones actually have clinical evidence?",
      "Do you prefer a balanced approach that blends modern medicine with lifestyle optimization?"
    ],
    faqs: [
      {
        q: "Does holistic psychiatry mean you don't prescribe traditional medications?",
        a: "Not at all! Integrative psychiatry bridges the best of both worlds—using conventional prescriptions when needed while optimizing sleep, nutrients, and lifestyle."
      }
    ]
  }
];

const INSURANCE_PLANS = [
  { name: "Aetna", status: "In-Network", type: "Commercial / PPO / HMO" },
  { name: "BlueCross BlueShield (BCBS)", status: "In-Network", type: "PPO / BlueChoice" },
  { name: "Cigna / Evernorth", status: "In-Network", type: "Behavioral Health" },
  { name: "UnitedHealthcare / Optum", status: "In-Network", type: "Commercial Plans" },
  { name: "Humana", status: "In-Network", type: "Select Behavioral Plans" },
  { name: "Medicare", status: "In-Network", type: "Part B & Select Advantage" },
  { name: "Oscar Health", status: "In-Network", type: "Optum Network" },
  { name: "Ambetter", status: "Verify Plan", type: "Marketplace Plans" }
];

const BLOG_POSTS = [
  {
    id: "understanding-high-functioning-anxiety",
    category: "Anxiety & Stress",
    readTime: "5 min read",
    date: "May 2026",
    title: "Understanding High-Functioning Anxiety: When Success Masks Exhaustion",
    excerpt:
      "Many driven individuals appear calm and accomplished on the outside while battling relentless internal pressure, insomnia, and nervous system fatigue.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80",
    content: [
      "On paper, everything looks great: deadlines are met, others rely on you, and your calendar is organized. Yet beneath the surface, high-functioning anxiety often feels like running a marathon on a treadmill that never powers down.",
      "Common signs include difficulty falling asleep because your brain is rehearsing tomorrow's conversations, physical muscle tension in the jaw or shoulders, an inability to enjoy downtime without guilt, and an intense fear of letting others down.",
      "At Golden Mind Psychiatry PLLC, we help patients untangle achievement from nervous system hyperarousal—combining gentle, non-sedating medical support where helpful with practical boundaries and physiological regulation."
    ]
  },
  {
    id: "adult-adhd-executive-function",
    category: "ADHD Care",
    readTime: "6 min read",
    date: "April 2026",
    title: "Why Adult ADHD Often Looks Like Burnout or Chronic Overwhelm",
    excerpt:
      "In adulthood, hyperactivity often turns inward—manifesting as racing thoughts, task paralysis, and emotional exhaustion after years of overcompensating.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80",
    content: [
      "Many adults go decades without an ADHD diagnosis because they performed well in structured school environments. However, when career, parenting, and household logistics multiply, executive functioning bandwidth can hit a wall.",
      "Task paralysis isn't laziness—it's a neurobiological bottleneck in dopamine signaling and working memory prioritization. When everything feels equally urgent, the brain freezes.",
      "A comprehensive evaluation looks at your entire history, rules out overlapping mood or thyroid factors, and creates a tailored plan using stimulant or non-stimulant options alongside executive scaffolding."
    ]
  },
  {
    id: "depression-mind-body-connection",
    category: "Depression & Mood",
    readTime: "5 min read",
    date: "March 2026",
    title: "Beyond Sadness: Recognizing the Physical & Cognitive Signs of Depression",
    excerpt:
      "Depression frequently shows up first in the body—through unrefreshing sleep, heavy limbs, brain fog, and a muted sense of joy.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    content: [
      "Many patients delay seeking psychiatric support because they don't feel 'sad enough.' In clinical practice, depression just as often presents as anhedonia (feeling flat or disconnected), slowed concentration, morning exhaustion, or heightened irritability.",
      "Because mental and physical health are deeply intertwined, effective depression care requires looking at neurotransmitter balance, sleep architecture, vitamin levels, and daily stress load together.",
      "With personalized medication management and compassionate follow-up, lasting emotional vitality and clarity are deeply achievable."
    ]
  }
];

/* ============================================================================
   2. CUSTOM SVG BRAND LOGO COMPONENT
   ============================================================================ */
function BrandLogo({ className = "w-10 h-10" }) {
  return (
    <div className={`inline-flex items-center justify-center shrink-0 overflow-hidden ${className}`}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1300"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full drop-shadow-sm"
      >
        <g
          transform="translate(0.000000,1300.000000) scale(0.100000,-0.100000)"
          fill="#C59B27"
          stroke="none"
        >
          <path d="M258 9503 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z" />
          <path d="M418 9503 c12 -2 32 -2 45 0 12 2 2 4 -23 4 -25 0 -35 -2 -22 -4z" />
          <path d="M543 9503 c26 -2 67 -2 90 0 23 2 2 3 -48 3 -49 0 -68 -1 -42 -3z" />
          <path d="M788 9503 c61 -2 163 -2 225 0 61 1 11 3 -113 3 -124 0 -174 -2 -112 -3z" />
          <path d="M1143 9503 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z" />
          <path d="M1378 9503 c101 -2 263 -2 360 0 97 1 15 2 -183 2 -198 0 -278 -1 -177 -2z" />
          <path d="M2417 9503 c277 -2 729 -2 1005 0 277 1 51 2 -502 2 -553 0 -779 -1 -503 -2z" />
          <path d="M4208 9503 c156 -2 408 -2 560 0 152 1 25 2 -283 2 -308 0 -433 -1 -277 -2z" />
          <path d="M5108 9503 c17 -2 47 -2 65 0 17 2 3 4 -33 4 -36 0 -50 -2 -32 -4z" />
          <path d="M5228 9503 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z" />
          <path d="M5442 9503 c92 -2 245 -2 340 0 95 1 20 3 -167 3 -187 0 -265 -2 -173 -3z" />
          <path d="M2707 8290 c-27 -5 -55 -14 -63 -21 -8 -6 -17 -9 -21 -5 -3 3 0 6 7 6 7 0 11 3 7 6 -7 7 -77 -25 -77 -36 0 -7 -47 -33 -62 -34 -5 -1 -8 -5 -7 -10 2 -23 -73 -37 -86 -16 -3 6 -12 10 -18 10 -7 0 -6 -4 3 -10 12 -8 8 -10 -15 -12 -16 -1 -41 -1 -55 0 -19 1 -22 -1 -10 -8 13 -8 12 -10 -3 -10 -18 0 -58 -19 -68 -33 -3 -5 -9 -8 -13 -8 -11 2 -60 -27 -90 -53 -16 -14 -32 -23 -37 -21 -4 3 -11 0 -15 -6 -4 -8 -3 -9 4 -5 7 4 12 2 12 -3 0 -6 -4 -11 -8 -11 -5 0 -16 -16 -25 -36 -10 -19 -22 -32 -27 -29 -6 4 -7 -1 -3 -11 4 -11 2 -15 -4 -11 -10 6 -113 -39 -113 -49 0 -3 6 -2 13 2 6 3 0 -4 -14 -17 -15 -13 -32 -33 -39 -44 -11 -19 -11 -19 -5 0 3 11 3 16 -2 12 -4 -5 -8 -24 -9 -43 0 -20 -7 -39 -14 -44 -7 -4 -9 -13 -5 -21 6 -9 3 -11 -9 -6 -11 5 -15 3 -10 -5 5 -7 2 -9 -9 -5 -11 4 -14 2 -11 -8 4 -9 -2 -13 -19 -11 -14 2 -24 -2 -24 -10 0 -7 5 -10 11 -7 6 3 2 -3 -9 -14 -12 -11 -27 -23 -35 -26 -12 -4 -13 -6 -1 -6 12 -1 12 -4 -1 -18 -21 -25 -50 -102 -42 -115 4 -6 0 -14 -7 -19 -12 -8 -12 -10 0 -18 7 -5 10 -14 6 -20 -4 -7 -1 -19 7 -28 9 -12 9 -15 1 -9 -9 5 -11 2 -7 -8 3 -9 10 -16 15 -16 5 0 9 -6 9 -13 0 -7 9 -30 21 -51 11 -21 18 -45 14 -54 -4 -12 -3 -13 10 -2 10 8 15 9 15 1 0 -20 4 -26 33 -52 23 -21 25 -28 15 -37 -11 -8 -17 -6 -26 9 -7 11 -9 25 -5 32 4 7 0 6 -10 -2 -15 -12 -17 -12 -11 4 6 14 4 16 -6 10 -8 -5 -11 -4 -7 2 4 6 0 14 -9 17 -8 3 -14 11 -13 18 3 24 -1 41 -8 34 -4 -3 -13 4 -20 16 -7 13 -12 17 -13 10 0 -7 -4 -11 -8 -8 -5 3 -9 0 -10 -7 -1 -7 -6 -35 -11 -63 -6 -35 -5 -73 4 -125 7 -41 10 -80 7 -88 -3 -8 -1 -12 5 -8 7 4 13 -7 17 -29 7 -35 41 -104 78 -157 17 -24 18 -30 6 -45 -12 -15 -11 -16 5 -3 15 12 17 11 17 -3 0 -10 4 -15 9 -12 5 3 12 -2 15 -11 5 -11 10 -13 17 -6 7 7 -2 27 -30 64 -49 64 -97 175 -117 268 -15 71 -17 174 -5 206 7 16 9 15 14 -11 8 -41 76 -126 135 -169 26 -19 87 -50 135 -71 131 -54 223 -135 264 -234 25 -59 87 -150 103 -150 10 0 11 3 4 8 -6 4 -10 15 -8 25 1 9 -2 15 -7 12 -13 -9 -69 84 -62 103 5 11 3 13 -7 7 -8 -5 -11 -3 -8 6 3 8 -2 20 -11 27 -9 8 -10 11 -3 7 6 -3 12 -3 12 0 0 10 -30 65 -36 65 -2 0 0 -9 6 -21 7 -11 9 -23 7 -26 -3 -2 -8 4 -11 14 -8 24 -87 109 -98 106 -4 -2 -8 1 -8 6 0 5 -14 14 -31 21 -22 10 -27 15 -17 22 8 5 2 6 -16 2 -21 -5 -27 -4 -22 5 5 7 0 11 -13 11 -11 0 -23 5 -26 10 -4 6 -16 8 -28 4 -18 -6 -20 -4 -10 7 9 11 5 14 -24 15 -19 1 -40 7 -46 13 -9 9 -8 11 4 6 10 -4 20 -1 24 5 4 7 11 8 18 2 14 -11 58 -22 112 -29 21 -2 43 -7 47 -9 4 -3 8 -1 8 3 0 5 12 13 27 19 22 7 11 9 -52 9 -70 1 -88 5 -145 34 -36 18 -77 44 -91 57 -35 33 -116 180 -124 226 -15 83 52 221 125 255 22 10 40 25 40 33 1 76 65 160 141 187 35 13 52 25 60 45 18 44 122 134 194 168 46 22 87 33 137 37 61 5 80 12 119 40 74 53 148 74 280 80 101 5 124 3 180 -16 l64 -21 53 20 c92 35 241 22 328 -29 19 -12 50 -21 69 -21 19 0 67 -12 107 -27 60 -22 84 -38 135 -90 40 -40 71 -63 85 -63 63 0 180 -81 229 -158 28 -45 79 -91 79 -72 0 7 12 9 34 5 18 -4 36 -3 40 3 3 5 -5 7 -19 4 -15 -2 -25 0 -25 7 0 7 -8 11 -17 9 -10 -2 -17 2 -16 9 2 7 -3 10 -11 7 -14 -5 -49 34 -41 46 2 4 -6 13 -19 20 -14 7 -27 21 -29 32 -4 15 -3 17 8 8 9 -8 15 -8 20 0 3 6 12 7 18 3 8 -5 8 -2 0 9 -7 8 -10 18 -6 22 4 4 -1 4 -11 0 -13 -5 -17 -4 -12 4 4 7 -3 14 -19 18 -22 5 -24 9 -13 22 12 13 11 14 -8 2 -16 -10 -19 -16 -10 -25 6 -7 17 -10 23 -8 7 3 13 -2 13 -10 0 -9 -8 -15 -19 -14 -11 0 -19 6 -18 11 1 6 -5 10 -13 11 -8 0 -26 4 -39 9 -18 6 -21 10 -10 17 10 6 6 9 -13 9 -15 0 -30 5 -33 10 -3 6 -15 10 -26 10 -10 0 -19 6 -19 13 0 8 -4 7 -10 -3 -6 -9 -10 -11 -10 -3 0 7 -7 10 -15 7 -8 -4 -15 -2 -15 4 0 5 -13 24 -29 41 -16 17 -26 31 -23 31 4 1 -8 7 -25 15 -18 8 -33 19 -33 24 0 6 -10 15 -21 22 -15 8 -19 8 -15 0 8 -12 -7 -15 -18 -3 -4 4 -11 7 -14 8 -10 1 -60 22 -84 35 -16 9 -19 8 -13 -2 6 -9 3 -10 -11 -4 -10 4 -27 7 -36 7 -9 0 -19 6 -22 14 -3 7 -12 11 -21 8 -10 -4 -15 0 -15 11 0 9 -5 13 -10 10 -6 -4 -8 -11 -5 -16 3 -5 -1 -6 -9 -3 -9 3 -14 9 -12 13 3 4 -3 7 -12 8 -9 1 -39 7 -67 13 -64 14 -155 5 -213 -20 -28 -13 -48 -17 -52 -11 -19 32 -208 50 -323 31z m1353 -334 c0 -3 -4 -8 -10 -11 -5 -3 -10 -1 -10 4 0 6 5 11 10 11 6 0 10 -2 10 -4z m-2196 -818 c-3 -4 4 -8 15 -8 12 0 21 -5 21 -11 0 -7 -7 -8 -17 -4 -10 4 -24 8 -31 9 -19 3 -35 23 -28 35 5 7 13 7 26 -1 10 -7 16 -16 14 -20z" />
          <path d="M2730 8214 c-52 -10 -56 -15 -23 -29 17 -7 39 -27 48 -44 8 -17 25 -33 38 -35 12 -3 36 -8 52 -11 17 -4 44 -17 61 -30 33 -25 47 -24 37 2 -5 12 -7 12 -14 1 -7 -10 -9 -9 -9 5 0 9 -7 17 -16 17 -11 0 -14 5 -10 16 5 14 4 15 -9 4 -8 -7 -15 -8 -15 -3 0 6 -13 10 -30 11 -35 1 -53 10 -44 23 3 5 0 8 -7 7 -6 -2 -14 3 -17 11 -3 8 0 11 7 7 7 -5 9 -1 4 9 -4 13 -7 14 -14 3 -7 -11 -10 -10 -21 1 -10 10 -10 12 0 7 6 -4 12 -3 12 1 0 11 111 16 126 5 18 -12 35 -50 24 -54 -6 -2 -6 -9 0 -18 7 -11 11 -9 19 12 6 15 23 30 43 37 l33 12 -35 16 c-35 16 -188 26 -240 17z m204 -45 c-6 -11 -24 -2 -24 11 0 5 7 7 15 4 8 -4 12 -10 9 -15z" />
          <path d="M3123 8205 l-32 -13 48 -49 c46 -45 49 -52 56 -116 6 -64 10 -72 61 -129 35 -40 59 -77 66 -104 l12 -43 33 30 c19 16 40 29 47 29 18 0 43 30 51 63 15 57 -3 96 -71 160 -40 38 -64 69 -64 83 0 27 -34 70 -70 89 -36 19 -95 19 -137 0z" />
          <path d="M3305 8198 c29 -17 42 -38 54 -85 6 -24 15 -43 19 -43 14 0 93 -81 102 -106 28 -74 1 -149 -68 -188 -92 -51 -96 -60 -62 -131 28 -57 95 -110 148 -118 65 -8 151 -55 210 -113 l52 -53 15 29 c19 36 19 91 1 134 -14 33 -101 100 -117 90 -5 -3 -9 2 -9 11 0 10 -15 32 -33 50 -27 27 -39 32 -61 28 -22 -5 -27 -3 -21 7 5 9 4 11 -4 6 -6 -4 -9 -11 -6 -16 8 -13 -22 -20 -58 -14 l-32 6 29 -16 c27 -15 34 -15 74 -1 25 8 48 13 50 10 8 -8 -82 -42 -106 -40 -18 2 -20 0 -11 -11 16 -19 33 -18 80 6 38 20 66 19 53 -1 -3 -5 -2 -9 3 -8 20 3 25 -2 13 -16 -11 -13 -10 -14 4 -9 14 6 21 -5 17 -28 0 -4 6 -5 15 -1 13 5 13 7 2 14 -8 5 -9 9 -2 9 6 0 17 -7 24 -15 7 -8 17 -12 23 -8 6 3 7 1 3 -5 -4 -7 -1 -12 9 -12 9 0 22 -14 29 -30 7 -17 14 -28 17 -26 2 2 5 -7 5 -20 2 -19 -1 -22 -11 -14 -7 6 -16 7 -19 2 -9 -16 -61 -7 -60 10 1 11 -5 14 -19 10 -15 -4 -18 -2 -12 8 5 7 4 11 -1 8 -5 -3 -20 -2 -33 3 -20 8 -22 11 -10 27 13 15 12 16 -3 4 -13 -11 -21 -11 -39 -2 -12 7 -39 12 -61 12 -21 -1 -36 3 -33 8 3 5 -4 11 -15 15 -11 4 -18 11 -15 16 3 5 -1 6 -9 3 -11 -4 -14 0 -11 15 2 14 -1 18 -10 15 -17 -7 -47 49 -43 79 3 23 75 70 95 62 7 -2 12 -1 12 3 -3 19 2 32 14 32 7 0 17 12 23 28 21 58 -1 192 -30 175 -6 -4 -5 1 3 10 7 9 11 18 7 18 -32 7 -56 21 -50 30 3 5 -3 6 -12 2 -11 -4 -15 -2 -11 4 4 6 -3 13 -15 17 -22 5 -22 6 -3 21 19 14 19 15 1 8 -13 -4 -17 -3 -12 5 4 7 2 12 -5 12 -7 0 -9 3 -6 7 4 3 1 13 -6 21 -10 13 -9 14 3 9 8 -4 23 -10 33 -13 15 -6 22 -23 18 -47 -1 -5 3 -6 8 -2 6 3 8 12 4 21 -4 12 0 14 23 8 53 -13 75 -24 73 -36 -4 -36 1 -45 26 -40 20 3 33 -4 60 -33 36 -38 45 -58 21 -49 -8 3 -16 1 -19 -3 -3 -5 6 -9 21 -9 24 1 27 -2 25 -29 -3 -35 15 -85 30 -85 6 0 7 -3 4 -6 -11 -11 13 -45 26 -38 7 4 9 4 5 -1 -4 -4 -3 -15 4 -22 9 -11 9 -16 -1 -23 -9 -5 -11 -16 -6 -31 9 -29 51 -80 59 -72 3 3 3 -5 1 -17 -3 -13 -10 -28 -16 -34 -9 -8 -10 -7 -6 6 4 11 2 15 -7 12 -7 -3 -21 2 -29 11 -9 9 -19 16 -22 15 -20 -1 -25 1 -25 13 0 7 -9 18 -19 24 -12 7 -17 19 -15 30 7 26 -32 60 -53 47 -21 -13 -25 -41 -7 -48 10 -4 14 2 14 20 0 16 4 23 11 18 6 -3 9 -17 6 -30 -3 -16 4 -31 19 -45 13 -13 24 -28 24 -35 0 -6 11 -15 24 -18 14 -3 41 -22 62 -41 20 -19 38 -35 40 -35 5 0 24 73 24 93 0 9 -14 32 -31 50 -25 26 -30 38 -26 64 5 26 -1 41 -29 77 -41 54 -48 121 -14 151 28 25 25 38 -16 75 -43 38 -73 51 -179 80 -44 13 -106 33 -137 46 -62 26 -111 34 -73 12z" />
          <path d="M2369 8091 c-38 -12 -159 -74 -159 -82 0 -4 -15 -16 -34 -27 -42 -25 -69 -72 -60 -107 10 -40 65 -81 117 -88 50 -7 107 -39 146 -81 14 -14 30 -26 38 -26 7 0 13 -2 13 -5 0 -7 -40 -50 -41 -44 0 2 -2 15 -3 28 -5 42 -96 101 -155 101 -18 0 -48 7 -69 15 -44 19 -123 13 -159 -11 -32 -20 -40 -11 -20 20 21 32 45 39 96 27 l41 -9 -21 29 c-11 16 -27 29 -34 29 -56 0 -123 -64 -144 -138 -9 -29 -7 -30 25 -36 18 -4 47 -18 63 -31 16 -14 41 -25 55 -25 36 0 94 -31 130 -69 37 -39 60 -42 46 -5 -15 38 -12 66 11 93 23 28 36 22 19 -9 -12 -22 -5 -76 13 -98 7 -9 5 -16 -8 -26 -18 -13 -17 -14 6 -25 22 -11 22 -11 6 2 -25 20 -1 28 33 10 14 -7 36 -13 50 -13 14 0 44 -9 68 -20 l42 -19 1 37 c0 20 4 46 9 57 7 18 9 16 16 -13 5 -24 10 -30 17 -23 20 20 28 11 12 -12 -27 -41 -22 -69 23 -128 46 -62 126 -124 144 -113 7 4 8 3 4 -5 -5 -7 12 -20 49 -37 44 -20 82 -28 169 -35 61 -5 127 -13 146 -19 54 -16 56 -12 13 19 -46 33 -73 67 -73 92 0 11 -13 22 -35 29 -45 15 -69 7 -33 -10 15 -7 25 -16 23 -21 -3 -4 4 -5 15 -2 12 3 20 0 20 -6 0 -7 -4 -9 -10 -6 -16 10 -11 0 15 -31 15 -17 20 -31 14 -33 -6 -2 -14 1 -18 6 -3 5 -40 8 -81 7 -76 -3 -88 1 -185 47 -27 13 -53 23 -57 22 -12 -4 -9 11 5 27 10 12 9 12 -4 2 -14 -10 -22 -8 -47 13 -20 17 -29 32 -26 43 4 12 3 14 -3 4 -12 -16 -26 -2 -42 41 -6 15 -15 27 -21 27 -6 0 -8 5 -5 10 4 6 9 8 13 6 4 -2 7 18 8 44 1 41 -1 48 -17 45 -12 -2 -16 1 -13 10 6 15 -34 31 -46 18 -5 -4 -11 -21 -14 -37 -7 -37 -10 -40 -33 -27 -11 5 -39 12 -63 15 -53 6 -79 28 -60 51 11 13 10 15 -6 9 -10 -4 -16 -4 -12 1 4 4 3 14 -4 22 -8 10 -8 12 4 8 9 -4 18 0 21 9 4 10 1 13 -8 10 -10 -4 -13 0 -10 15 2 12 7 26 10 31 3 6 -1 7 -9 4 -20 -8 -20 0 0 20 8 9 10 16 4 16 -6 0 -13 -7 -16 -15 -4 -8 -12 -15 -19 -15 -8 0 -22 -11 -33 -25 -11 -13 -22 -22 -24 -19 -3 3 -4 -9 -2 -25 3 -23 0 -29 -11 -25 -8 4 -15 9 -15 13 0 13 -77 51 -109 54 -18 2 -37 9 -43 15 -7 7 -18 12 -26 12 -12 0 -12 3 -1 18 11 14 11 15 -1 5 -17 -16 -34 -17 -24 -2 4 7 0 9 -12 5 -15 -5 -19 0 -21 21 -1 19 1 22 8 12 5 -9 9 -10 9 -2 0 8 9 9 32 2 41 -11 47 -11 28 1 -12 8 -10 10 8 10 14 0 21 4 16 11 -5 8 -1 8 14 0 12 -7 31 -7 51 -1 17 5 31 5 31 1 0 -12 94 -31 125 -25 18 3 24 1 20 -6 -4 -6 -14 -9 -22 -6 -8 3 -11 1 -8 -5 4 -5 16 -7 26 -4 11 4 26 1 34 -5 8 -7 15 -9 15 -4 0 11 20 -18 20 -30 0 -5 -8 -2 -17 5 -10 7 -15 9 -11 5 4 -5 3 -15 -2 -21 -8 -10 -3 -12 20 -10 23 2 30 -1 26 -11 -3 -8 3 -18 14 -24 25 -13 30 -13 30 5 0 9 6 12 18 9 14 -5 15 -4 2 5 -13 9 -13 11 0 12 8 1 22 1 30 0 9 0 10 2 3 5 -7 3 -10 11 -7 19 6 16 -13 30 -41 30 -13 0 -19 6 -17 15 2 8 1 12 -3 8 -4 -4 -19 4 -34 18 -14 13 -34 27 -44 30 -9 3 -15 9 -13 13 3 4 -3 8 -12 9 -71 8 -95 13 -117 28 -13 9 -23 20 -20 24 2 4 -2 16 -10 26 -17 23 -19 38 -3 28 7 -4 8 -3 4 4 -4 7 -3 19 2 29 9 15 11 14 23 -5 13 -20 13 -20 79 14 79 40 96 43 79 13 -8 -16 -8 -20 1 -14 7 4 11 1 9 -6 -1 -8 -1 -21 0 -29 1 -18 81 -117 81 -101 0 7 12 0 26 -14 14 -14 30 -23 35 -19 6 3 8 -5 5 -20 -3 -17 0 -23 8 -20 6 2 12 -3 13 -13 3 -33 31 -88 61 -120 17 -17 28 -33 26 -36 -3 -3 9 -11 25 -18 23 -10 30 -19 27 -35 -4 -18 0 -21 22 -18 15 1 31 -1 37 -6 5 -4 35 -11 65 -15 63 -8 119 -29 121 -44 3 -21 4 -26 12 -38 5 -7 5 -19 1 -25 -5 -9 -2 -8 9 1 15 12 17 12 11 -3 -3 -9 -1 -16 6 -16 6 0 8 -5 5 -10 -4 -6 -10 -8 -15 -5 -5 3 -11 2 -14 -3 -2 -4 9 -9 25 -10 16 -1 29 0 29 2 0 3 -9 29 -21 58 -28 73 -52 96 -108 104 -67 10 -132 33 -169 61 -17 13 -37 21 -44 17 -7 -4 -8 -3 -4 5 4 6 -8 29 -28 52 -19 23 -43 61 -53 85 -10 24 -24 45 -31 48 -7 2 -5 3 5 2 9 0 30 -24 47 -52 72 -120 123 -158 247 -183 52 -10 103 -23 114 -27 15 -6 12 1 -12 29 -57 65 -66 93 -67 197 -1 135 -14 150 -194 226 -27 11 -62 39 -90 72 -66 77 -110 95 -183 73z" />
          <path d="M4170 7771 c0 -5 8 -12 18 -15 25 -8 67 -54 58 -63 -3 -4 -26 12 -49 35 -24 23 -46 42 -50 42 -4 0 8 -22 27 -49 18 -28 39 -74 46 -103 10 -39 25 -67 59 -104 47 -52 71 -106 71 -162 0 -17 9 -46 20 -66 27 -45 39 -125 29 -184 -10 -52 -53 -120 -85 -134 -14 -7 -25 -23 -29 -45 -13 -69 -127 -155 -186 -140 -12 3 -34 -3 -52 -14 -18 -10 -42 -19 -54 -19 -14 0 -23 -6 -23 -15 0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 11 -11 15 -39 15 -43 0 -93 19 -155 57 -42 27 -125 57 -134 48 -2 -2 7 -18 21 -34 55 -66 62 -177 15 -249 -28 -41 -98 -82 -178 -103 -34 -9 -52 -21 -73 -51 -31 -44 -90 -75 -161 -84 -25 -4 -46 -12 -46 -19 0 -18 -114 -186 -149 -219 -40 -39 -40 -20 0 25 54 58 116 219 85 219 -7 0 -13 6 -13 14 0 8 6 12 12 10 14 -6 58 49 70 84 8 26 -2 98 -13 88 -3 -4 -5 -24 -4 -44 1 -20 -2 -44 -8 -52 -7 -11 -10 -1 -10 37 0 67 -26 191 -47 223 -9 13 -25 34 -36 45 -19 20 -19 20 -3 -12 9 -18 14 -33 11 -33 -2 0 3 -9 13 -20 9 -11 18 -28 18 -38 1 -9 7 -45 13 -78 6 -34 9 -70 5 -80 -5 -16 -4 -16 5 -4 8 12 11 5 11 -30 0 -49 -13 -72 -36 -63 -17 6 -20 -42 -4 -52 8 -5 7 -12 -2 -23 -11 -13 -11 -14 2 -7 9 5 7 -1 -5 -15 -11 -13 -15 -20 -8 -17 7 5 9 0 6 -14 -5 -16 -8 -18 -15 -7 -7 9 -8 8 -4 -5 9 -27 -12 -61 -28 -48 -7 6 -17 7 -21 3 -5 -4 -1 5 8 20 9 15 17 34 17 43 0 10 5 13 12 9 6 -4 9 -3 5 2 -3 5 1 36 9 69 17 71 26 208 13 199 -5 -3 -9 5 -9 18 1 43 -12 88 -23 81 -6 -4 -8 2 -5 15 4 14 2 20 -5 15 -7 -4 -8 0 -4 11 4 9 3 15 -2 12 -4 -3 -13 6 -20 20 -6 15 -7 23 -1 19 5 -3 10 -1 10 4 0 6 -6 11 -14 11 -20 0 -29 17 -15 26 8 5 9 3 4 -6 -5 -8 -4 -11 3 -6 6 4 8 14 5 23 -4 10 -8 12 -11 5 -5 -15 -42 8 -42 27 0 10 3 11 14 2 10 -8 16 -8 25 3 10 12 6 13 -24 10 -29 -2 -35 0 -35 17 0 10 -3 18 -7 17 -12 -4 -153 134 -153 149 0 7 -7 13 -15 13 -23 0 -37 42 -18 57 12 10 12 12 -4 16 -16 4 -16 5 2 6 17 1 18 3 5 12 -12 9 -12 10 3 5 10 -3 28 -6 38 -6 11 0 18 -3 16 -7 -5 -8 13 -10 142 -12 61 -1 99 -10 119 -26 2 -2 -2 -12 -9 -23 -10 -16 -10 -26 0 -51 8 -17 17 -28 22 -25 5 3 16 -11 25 -31 15 -37 152 -185 170 -185 6 0 19 6 30 14 15 12 17 17 7 27 -10 10 -13 10 -13 1 0 -7 -9 -12 -19 -12 -14 0 -19 6 -16 18 2 12 -3 18 -16 19 -25 2 -101 76 -96 94 2 8 2 10 -1 6 -2 -5 -11 1 -19 12 -8 12 -11 26 -8 31 3 6 -3 21 -13 35 -11 14 -22 20 -24 14 -2 -7 -8 -6 -16 4 -10 12 -10 18 3 31 9 9 13 22 10 28 -4 7 2 3 13 -9 10 -12 25 -21 33 -21 8 1 22 0 33 0 16 -2 16 -4 -5 -22 -13 -10 -18 -19 -11 -20 6 0 12 4 12 9 0 5 14 11 30 13 38 6 38 3 -2 -23 -28 -17 -29 -19 -8 -13 14 4 30 7 37 7 7 0 10 4 7 9 -4 5 3 4 15 -4 12 -7 21 -16 21 -20 0 -4 6 -5 13 -2 8 3 20 -2 27 -11 7 -8 19 -15 27 -15 8 0 11 -4 8 -10 -4 -6 1 -7 11 -3 13 5 15 3 9 -7 -5 -8 -4 -11 2 -7 6 4 18 -2 28 -13 10 -12 13 -20 7 -20 -7 0 -12 6 -13 13 0 6 -4 3 -8 -8 -5 -12 -4 -23 2 -26 5 -4 7 -14 4 -24 -4 -9 -3 -14 2 -10 5 3 15 -1 23 -8 10 -10 18 -10 35 -2 13 7 20 15 15 20 -11 12 41 -17 55 -30 25 -26 53 -81 53 -108 0 -36 -22 -88 -56 -132 -30 -40 -17 -46 34 -15 54 33 77 118 51 187 -11 30 -72 98 -102 114 -12 7 -26 5 -48 -8 -26 -15 -31 -16 -39 -3 -11 17 -4 29 22 39 17 6 5 17 -78 71 -184 118 -269 150 -405 150 -57 0 -108 6 -148 19 l-61 19 -9 -33 c-16 -61 -3 -85 105 -192 57 -57 116 -122 132 -145 101 -148 132 -291 96 -449 -46 -204 -247 -390 -479 -446 -60 -14 -91 -30 -81 -40 1 -1 32 6 69 16 37 11 67 17 67 14 0 -3 7 0 15 7 8 7 21 10 29 7 8 -3 20 1 26 9 7 8 21 14 31 14 11 0 19 5 19 11 0 6 7 8 17 5 10 -4 14 -4 11 0 -4 3 0 13 8 21 8 9 18 13 21 9 3 -3 11 -1 18 4 8 7 11 3 11 -12 -1 -30 28 -34 60 -9 16 13 21 21 12 21 -8 0 -23 6 -33 14 -18 13 -17 15 15 49 31 34 50 39 50 16 0 -6 -6 -7 -12 -3 -8 5 -7 0 2 -11 8 -10 14 -21 12 -24 -2 -3 4 -10 13 -16 18 -11 38 11 30 33 -3 7 1 12 8 11 6 -1 21 -1 32 1 l20 1 -20 9 c-18 8 -18 9 -2 9 10 1 16 4 14 9 -3 4 5 16 16 27 18 18 19 18 14 2 -4 -11 -3 -16 4 -12 6 4 8 13 5 21 -3 8 -1 14 4 14 6 0 10 6 10 13 0 17 44 59 53 50 4 -3 7 1 7 11 0 11 -5 15 -12 10 -7 -4 -4 2 7 13 11 11 23 19 27 16 4 -2 6 2 3 9 -3 7 3 26 13 43 15 25 25 29 63 31 76 3 76 3 60 13 -10 7 -5 11 18 16 17 3 31 11 31 17 0 6 7 8 14 5 10 -4 13 -1 9 9 -3 8 -2 14 3 12 5 -2 10 1 11 5 4 19 56 58 71 52 8 -3 23 2 33 11 10 9 22 13 27 10 14 -8 43 4 36 15 -3 5 2 9 10 9 9 0 26 11 37 24 12 14 26 23 33 22 6 -2 8 -1 4 1 -5 3 -8 9 -8 14 0 6 5 7 12 3 8 -5 9 -2 5 9 -3 10 -2 17 2 17 5 0 16 20 24 45 15 42 15 72 1 119 -5 13 -2 17 7 12 8 -4 5 0 -5 8 -21 17 -30 46 -15 46 6 0 7 5 3 12 -4 7 -3 8 5 4 6 -4 9 -12 6 -17 -3 -5 2 -6 11 -2 13 5 15 3 9 -7 -5 -8 -4 -11 2 -7 5 3 22 -3 39 -14 17 -11 23 -19 14 -19 -24 0 -23 -48 1 -81 22 -32 46 -38 55 -14 4 8 14 15 23 16 13 0 12 2 -3 8 -18 7 -18 8 -2 14 9 4 14 11 11 17 -9 15 36 12 69 -5 20 -11 32 -12 41 -5 30 25 106 56 132 55 15 -1 36 2 46 7 11 6 17 5 17 -2 0 -6 5 -8 10 -5 6 4 8 10 5 15 -3 4 6 7 20 6 13 -2 22 0 20 4 -3 4 9 22 25 39 31 32 47 41 34 19 -4 -7 -3 -10 1 -5 5 4 9 15 10 25 4 40 17 82 27 82 6 0 7 -7 4 -16 -3 -9 -2 -12 5 -9 6 4 8 13 5 20 -6 16 37 58 49 48 4 -5 5 0 2 10 -4 9 -3 17 2 17 8 0 17 19 40 91 13 43 14 59 1 39 -6 -9 -10 -10 -10 -3 0 6 4 14 9 17 9 6 5 21 -24 108 -11 33 -11 37 4 41 11 3 9 5 -6 6 -13 0 -23 6 -23 12 0 6 7 9 14 6 10 -4 13 -1 9 9 -3 7 -9 14 -15 14 -5 0 -6 5 -3 10 3 6 1 10 -5 10 -8 0 -10 9 -6 26 4 14 3 23 -2 20 -4 -2 -13 8 -19 25 -8 20 -8 31 -1 36 7 4 8 1 3 -8 -8 -12 -6 -12 8 0 14 11 17 11 18 0 0 -8 4 -5 8 6 12 29 8 68 -7 71 -7 1 -8 0 -2 -3 19 -9 10 -21 -11 -16 -14 4 -26 0 -34 -11 -11 -15 -13 -15 -19 -1 -4 11 -2 14 7 9 6 -4 8 -3 4 1 -12 14 -38 15 -30 2 3 -7 -3 -3 -15 7 -12 11 -20 21 -18 24 3 2 -2 11 -10 20 -20 19 -2 41 19 23 8 -6 22 -9 31 -5 18 7 21 20 7 29 -6 3 -8 14 -6 25 2 11 -1 19 -8 17 -6 -1 -11 3 -12 10 0 12 -25 42 -25 31 0 -4 -16 9 -35 28 -35 34 -55 43 -55 25z" />
          <path d="M1895 7644 c-5 -1 -22 -5 -37 -8 -62 -14 -117 -173 -85 -247 15 -33 15 -33 16 -7 3 76 28 75 28 -1 1 -33 6 -75 12 -93 19 -59 118 -138 190 -153 45 -9 141 -12 141 -4 0 11 -47 19 -66 12 -12 -4 -15 -3 -10 5 5 8 1 9 -16 3 -16 -6 -32 -3 -56 11 -18 10 -37 16 -43 13 -5 -4 -9 -2 -9 3 0 5 -9 12 -21 15 -14 4 -18 10 -13 18 5 9 2 10 -9 6 -10 -4 -16 -2 -14 5 1 7 -8 17 -21 23 -13 5 -25 21 -28 35 -3 14 -7 35 -10 48 -6 29 14 29 21 -1 4 -13 5 -27 4 -33 -4 -21 2 -34 16 -34 16 0 17 1 19 43 1 16 -2 31 -8 34 -5 4 -6 0 -2 -8 4 -8 1 -5 -8 5 -8 10 -13 22 -11 27 3 4 -5 16 -18 26 -13 10 -22 23 -20 29 2 7 -2 18 -10 25 -7 8 -12 21 -10 29 3 8 -5 4 -16 -10 -24 -29 -28 -10 -5 24 10 17 12 26 4 31 -8 5 -6 14 5 31 8 13 13 24 10 24 -10 0 47 50 59 52 34 4 42 2 54 -17 10 -15 12 -16 8 -2 -6 18 2 22 20 9 6 -4 10 -15 8 -24 -1 -10 3 -21 8 -25 7 -3 8 -1 4 5 -4 7 -1 12 9 12 9 0 14 -3 12 -7 -3 -5 13 -9 36 -11 23 -1 49 -10 59 -19 13 -12 18 -13 18 -3 0 9 6 8 20 -5 11 -10 20 -25 20 -34 0 -13 2 -13 9 -2 7 11 11 10 20 -6 8 -15 7 -25 -4 -39 -10 -13 -14 -14 -12 -4 2 8 2 12 0 8 -3 -4 -4 -10 -4 -13 2 -9 -34 -42 -41 -38 -18 10 -6 -17 13 -31 26 -18 63 -7 97 30 20 21 56 31 87 24 6 -1 20 -3 32 -4 13 0 23 -5 23 -9 0 -5 6 -7 13 -4 15 5 59 -16 76 -37 7 -9 17 -14 21 -11 5 3 6 -4 3 -15 -4 -14 0 -20 10 -20 9 0 24 -13 33 -29 10 -17 20 -28 23 -27 3 2 12 -2 19 -10 7 -8 10 -14 5 -14 -4 0 1 -6 12 -13 16 -13 15 -14 -14 -15 -17 0 -29 3 -26 9 3 5 -1 6 -9 3 -9 -3 -16 -1 -16 6 0 6 -5 8 -11 5 -5 -4 -19 1 -30 11 -11 10 -19 12 -19 6 0 -7 -7 -12 -15 -12 -18 0 -19 -12 -2 -29 10 -10 8 -15 -6 -26 -10 -7 -14 -16 -9 -19 6 -3 12 1 16 9 3 8 10 15 16 15 6 0 8 -4 5 -10 -6 -9 8 -14 28 -11 4 1 15 -5 23 -14 10 -10 35 -15 74 -15 37 0 60 -5 63 -12 4 -9 6 -8 6 2 1 9 9 16 19 16 15 0 17 -11 16 -94 -2 -103 -11 -82 91 -208 29 -36 30 -41 31 -148 0 -91 5 -125 27 -192 43 -133 48 -167 37 -242 -20 -122 -83 -222 -188 -294 -24 -16 -41 -32 -38 -35 2 -3 36 16 75 42 149 100 231 262 231 458 0 157 -47 319 -127 438 -21 30 -56 81 -78 114 -35 51 -40 65 -41 119 l-1 61 -94 0 c-88 0 -96 2 -132 29 -44 34 -42 45 4 21 26 -14 159 -29 159 -18 0 1 -28 31 -62 65 -35 35 -76 81 -93 102 -31 39 -103 70 -191 83 -35 4 -45 1 -75 -24 -53 -47 -99 -66 -99 -43 0 6 6 10 14 10 7 0 22 12 32 28 9 15 26 33 36 40 18 13 17 15 -14 38 -89 64 -106 73 -141 77 -21 2 -48 14 -61 27 -23 20 -79 40 -101 34z" />
        </g>
      </svg>
    </div>
  );
}

const ICON_MAP = {
  ClipboardCheck,
  Pill,
  Brain,
  Heart,
  Smile,
  Wind,
  Sun,
  ShieldCheck,
  Video,
  Sparkles
};

/* ============================================================================
   3. MAIN APPLICATION
   ============================================================================ */
export default function App() {
  const [currentPage, setCurrentPage] = useState('services');
  const [activeServiceId, setActiveServiceId] = useState('depression');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  const [careMatcherGoal, setCareMatcherGoal] = useState('depression');
  const [insuranceSearch, setInsuranceSearch] = useState('');
  const [visitTypeCalc, setVisitTypeCalc] = useState('eval');
  const [reimbursePercent, setReimbursePercent] = useState(70);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [telehealthChecks, setTelehealthChecks] = useState({
    wifi: true,
    camera: false,
    space: false,
    idCard: false
  });
  const [selfCheckAnswers, setSelfCheckAnswers] = useState({});
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const [breathingActive, setBreathingActive] = useState(false);
  const [breathPhase, setBreathPhase] = useState('Inhale (4s)');

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Depression & Mood Disorder Care',
    mode: 'Telehealth Video Visit',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (!breathingActive) return;
    const phases = ['Inhale Slowly (4s)', 'Hold Gently (4s)', 'Exhale Completely (6s)'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % phases.length;
      setBreathPhase(phases[idx]);
    }, 4000);
    return () => clearInterval(interval);
  }, [breathingActive]);

  const navigateTo = (page, options = {}) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCurrentPage(page);

    if (options.serviceId) {
      setActiveServiceId(options.serviceId);
      setSelfCheckAnswers({});
      setOpenFaqIndex(0);
    }

    if (options.scrollToAnchor && page === 'services') {
      setTimeout(() => {
        const el = document.getElementById(options.scrollToAnchor);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openDedicatedServicePage = (serviceId) => {
    navigateTo('service-detail', { serviceId });
  };

  const openBookingWithService = (serviceTitle) => {
    setSelectedServiceForBooking(serviceTitle || 'Comprehensive Psychiatric Evaluation');
    setBookingModalOpen(true);
  };

  const activeServiceObj =
    SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[6];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#4A525A]">
      {/* Top Bar */}
      <div className="bg-[#1E252B] text-[#F4EBD0] text-xs py-2 px-4 sm:px-8 border-b border-[#C59B27]/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PRACTICE_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-[#C59B27] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{PRACTICE_INFO.email}</span>
            </a>
            <a
              href={`tel:${PRACTICE_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#C59B27] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>{PRACTICE_INFO.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-[#C59B27]" />
              In-Person &amp; Telehealth Available
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E6DEC8] shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <BrandLogo className="w-12 h-12 transition-transform duration-300 group-hover:scale-105" />
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E252B]">
                Golden Mind <span className="text-[#C59B27]">Psychiatry</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-[#9E7B1C] font-semibold">
                PLLC · Compassionate Care
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#1E252B]">
            <button
              onClick={() => navigateTo('home')}
              className={`py-2 transition-colors ${
                currentPage === 'home'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`py-2 transition-colors ${
                currentPage === 'about'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              About
            </button>

            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => navigateTo('services')}
                className={`flex items-center gap-1 py-2 transition-colors ${
                  currentPage === 'services' || currentPage === 'service-detail'
                    ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                    : 'hover:text-[#C59B27]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-80 z-50 animate-fade-in">
                  <div className="bg-white rounded-2xl shadow-xl border border-[#E6DEC8] p-3">
                    <button
                      onClick={() => navigateTo('services')}
                      className="w-full text-left px-3 py-2.5 rounded-xl bg-[#F4EBD0]/60 hover:bg-[#F4EBD0] text-[#1E252B] font-semibold text-xs uppercase tracking-wider flex items-center justify-between mb-2"
                    >
                      <span>View All 10 Services Hub</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#9E7B1C]" />
                    </button>
                    <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                      {SERVICES_DATA.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => openDedicatedServicePage(service.id)}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-[#F5F0E6] flex items-center justify-between group"
                        >
                          <span className="font-medium text-[#1E252B] group-hover:text-[#9E7B1C]">
                            <span className="text-[#C59B27] font-bold mr-1.5">
                              {service.number.replace('Service ', '')}.
                            </span>
                            {service.shortTitle}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-[#C59B27] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('telehealth')}
              className={`py-2 transition-colors ${
                currentPage === 'telehealth'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Telehealth
            </button>
            <button
              onClick={() => navigateTo('insurance')}
              className={`py-2 transition-colors ${
                currentPage === 'insurance'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Insurance
            </button>
            <button
              onClick={() => navigateTo('blog')}
              className={`py-2 transition-colors ${
                currentPage === 'blog'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => navigateTo('resources')}
              className={`py-2 transition-colors ${
                currentPage === 'resources'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`py-2 transition-colors ${
                currentPage === 'contact'
                  ? 'text-[#C59B27] font-semibold border-b-2 border-[#C59B27]'
                  : 'hover:text-[#C59B27]'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openBookingWithService('Comprehensive Psychiatric Consultation')}
              className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
            >
              <span>Book Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-xl border border-[#E6DEC8] text-[#1E252B]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E6DEC8] px-6 py-5 space-y-3 animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services Hub' },
                { id: 'telehealth', label: 'Telehealth' },
                { id: 'insurance', label: 'Insurance' },
                { id: 'blog', label: 'Blog' },
                { id: 'resources', label: 'Resources' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`text-left px-3 py-2 rounded-xl text-sm font-medium ${
                    currentPage === item.id
                      ? 'bg-[#C59B27] text-white'
                      : 'bg-[#F5F0E6] text-[#1E252B]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pt-2 border-t border-[#E6DEC8]">
              <p className="text-xs font-bold uppercase tracking-wider text-[#9E7B1C] mb-2">
                Individual Service Pages
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {SERVICES_DATA.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => openDedicatedServicePage(s.id)}
                    className="text-left text-xs py-1.5 px-2.5 rounded-lg hover:bg-[#F4EBD0] text-[#1E252B] truncate"
                  >
                    {s.number.replace('Service ', '')}. {s.shortTitle}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => openBookingWithService('Initial Psychiatric Evaluation')}
              className="w-full bg-[#C59B27] text-white font-semibold py-3 rounded-full text-sm flex items-center justify-center gap-2"
            >
              <span>Schedule Your Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Router */}
      <main className="flex-grow">
        {/* 1. SERVICES HUB PAGE */}
        {currentPage === 'services' && (
          <div className="animate-fade-in">
            <header className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> What We Offer
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E252B] leading-tight">
                  Comprehensive Psychiatric Services
                </h1>
                <p className="text-base sm:text-lg text-[#4A525A] leading-relaxed max-w-2xl">
                  We offer a full spectrum of mental health services — each delivered with clinical
                  precision and genuine compassion. Click any service below to explore its dedicated
                  clinical page or jump directly to a specialty section.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => openBookingWithService('Comprehensive Psychiatric Consultation')}
                    className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 text-sm"
                  >
                    <span>Schedule Your Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => openDedicatedServicePage('depression')}
                    className="bg-white hover:bg-[#F4EBD0] text-[#1E252B] border border-[#C59B27] font-semibold px-6 py-3.5 rounded-full transition-all text-sm"
                  >
                    Open Dedicated Depression Page (#depression)
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#E6DEC8] shadow-xl bg-[#F5F0E6]">
                  <img
                    src={PRACTICE_INFO.heroImage}
                    alt="Golden Mind Psychiatry PLLC"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1E252B]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-[#C59B27]/40">
                    <p className="text-xs uppercase tracking-widest text-[#C59B27] font-bold">
                      Golden Mind Psychiatry PLLC
                    </p>
                    <p className="font-serif text-lg font-semibold">
                      Your Path to Emotional Well-Being Starts Here
                    </p>
                  </div>
                </div>
              </div>
            </header>

            {/* Sticky Jump Bar */}
            <nav
              aria-label="Jump to service"
              className="sticky top-20 z-40 bg-[#F5F0E6]/95 backdrop-blur-md border-y border-[#E6DEC8] py-3 px-4 sm:px-8 shadow-sm"
            >
              <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E7B1C] shrink-0 mr-2">
                  Jump To:
                </span>
                {SERVICES_DATA.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      service.id === 'depression'
                        ? 'bg-[#C59B27] text-white border-[#C59B27] shadow-sm'
                        : 'bg-white text-[#1E252B] border-[#E6DEC8] hover:border-[#C59B27] hover:bg-[#F4EBD0]'
                    }`}
                  >
                    {service.shortTitle}
                  </a>
                ))}
              </div>
            </nav>

            {/* Alternating Service Sections 01 - 10 */}
            <div>
              {SERVICES_DATA.map((service, index) => {
                const IconComponent = ICON_MAP[service.iconName] || Sparkles;
                const isEven = index % 2 === 1;

                return (
                  <section
                    key={service.id}
                    id={service.id}
                    className={`py-16 lg:py-24 px-4 sm:px-8 scroll-mt-32 border-b border-[#E6DEC8]/60 ${
                      isEven ? 'bg-[#F5F0E6]' : 'bg-[#FDFBF7]'
                    }`}
                  >
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                      <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative group rounded-3xl overflow-hidden border-2 border-[#E6DEC8] shadow-lg bg-white">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4 bg-[#1E252B]/85 backdrop-blur-md text-[#F4EBD0] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-[#C59B27]/40">
                            {service.number}
                          </div>
                          <button
                            onClick={() => openDedicatedServicePage(service.id)}
                            className="absolute bottom-4 right-4 bg-white/95 hover:bg-[#C59B27] text-[#1E252B] hover:text-white font-semibold text-xs px-4 py-2.5 rounded-full shadow-md transition-all flex items-center gap-1.5"
                          >
                            <span>View Dedicated Page</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div
                        className={`lg:col-span-7 space-y-5 ${
                          isEven ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#F4EBD0] border border-[#C59B27]/30 flex items-center justify-center text-[#9E7B1C]">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                              {service.number}
                            </p>
                            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B]">
                              {service.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-base font-semibold text-[#9E7B1C]">{service.subtitle}</p>
                        <p className="text-[#4A525A] leading-relaxed">{service.description}</p>

                        <div className="grid sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-[#E6DEC8] shadow-sm">
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-3 pb-2 border-b border-[#E6DEC8]">
                              {service.col1Title}
                            </h3>
                            <ul className="space-y-2">
                              {service.col1Items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-[#C59B27] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1E252B] mb-3 pb-2 border-b border-[#E6DEC8]">
                              {service.col2Title}
                            </h3>
                            <ul className="space-y-2">
                              {service.col2Items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <UserCheck className="w-4 h-4 text-[#9E7B1C] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <button
                            onClick={() => openBookingWithService(service.title)}
                            className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all flex items-center gap-2 text-sm"
                          >
                            <span>{service.ctaText}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => openDedicatedServicePage(service.id)}
                            className="bg-white hover:bg-[#F4EBD0] text-[#1E252B] border border-[#C59B27] font-semibold px-5 py-3 rounded-full transition-all text-sm flex items-center gap-2"
                          >
                            <span>Explore Full {service.shortTitle} Page</span>
                            <ChevronRight className="w-4 h-4 text-[#9E7B1C]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. DEDICATED INDIVIDUAL SERVICE PAGE */}
        {currentPage === 'service-detail' && (
          <div className="animate-fade-in">
            <div className="bg-[#F5F0E6] border-b border-[#E6DEC8] py-3 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => navigateTo('services', { scrollToAnchor: activeServiceObj.id })}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E252B] hover:text-[#C59B27]"
                >
                  <ArrowLeft className="w-4 h-4 text-[#C59B27]" />
                  <span>Back to All Services Hub</span>
                </button>
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => openDedicatedServicePage(s.id)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-all ${
                        s.id === activeServiceObj.id
                          ? 'bg-[#C59B27] text-white'
                          : 'bg-white text-[#1E252B] border border-[#E6DEC8] hover:bg-[#F4EBD0]'
                      }`}
                    >
                      {s.number.replace('Service ', '')}. {s.shortTitle}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                  <span>{activeServiceObj.number}</span>
                  <span>·</span>
                  <span>Dedicated Clinical Specialty</span>
                </div>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
                  {activeServiceObj.title}
                </h1>
                <p className="text-lg font-semibold text-[#9E7B1C]">{activeServiceObj.subtitle}</p>
                <p className="text-[#4A525A] leading-relaxed">{activeServiceObj.longDescription}</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => openBookingWithService(activeServiceObj.title)}
                    className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 text-sm"
                  >
                    <span>{activeServiceObj.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="bg-white hover:bg-[#F4EBD0] text-[#1E252B] border border-[#E6DEC8] font-semibold px-6 py-3.5 rounded-full transition-all text-sm"
                  >
                    Ask a Clinical Question
                  </button>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-2 border-[#E6DEC8] shadow-xl">
                  <img
                    src={activeServiceObj.image}
                    alt={activeServiceObj.title}
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
              </div>
            </section>

            {activeServiceObj.timeline && (
              <section className="bg-[#F5F0E6] py-14 px-4 sm:px-8 border-y border-[#E6DEC8]">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center max-w-2xl mx-auto mb-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                      What To Expect
                    </p>
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B] mt-1">
                      Your {activeServiceObj.shortTitle} Care Pathway
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activeServiceObj.timeline.map((item) => (
                      <div
                        key={item.step}
                        className="bg-white p-6 rounded-2xl border border-[#E6DEC8] shadow-sm"
                      >
                        <span className="inline-block px-3 py-1 rounded-full bg-[#F4EBD0] text-[#9E7B1C] font-bold text-xs mb-3">
                          Step {item.step}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#1E252B] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#4A525A]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-6 bg-white p-7 rounded-3xl border border-[#E6DEC8] shadow-sm space-y-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                  Interactive Self-Reflection
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E252B]">
                  Is {activeServiceObj.shortTitle} Care Right for You?
                </h3>
                <div className="space-y-3">
                  {(activeServiceObj.selfCheckQuestions || []).map((q, idx) => {
                    const checked = !!selfCheckAnswers[idx];
                    return (
                      <button
                        key={idx}
                        onClick={() =>
                          setSelfCheckAnswers((prev) => ({ ...prev, [idx]: !prev[idx] }))
                        }
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                          checked
                            ? 'bg-[#F4EBD0]/60 border-[#C59B27] text-[#1E252B]'
                            : 'bg-[#FDFBF7] border-[#E6DEC8] hover:border-[#C59B27]'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                            checked ? 'bg-[#C59B27] text-white' : 'border border-[#C59B27]'
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <span className="text-sm font-medium">{q}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div className="bg-white p-7 rounded-3xl border border-[#E6DEC8] shadow-sm">
                  <h3 className="font-serif text-2xl font-bold text-[#1E252B] mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {(activeServiceObj.faqs || []).map((faq, i) => (
                      <div key={i} className="border border-[#E6DEC8] rounded-2xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaqIndex(openFaqIndex === i ? -1 : i)}
                          className="w-full text-left px-5 py-4 bg-[#FDFBF7] hover:bg-[#F5F0E6] font-semibold text-sm text-[#1E252B] flex items-center justify-between"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-[#C59B27] transition-transform ${
                              openFaqIndex === i ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openFaqIndex === i && (
                          <div className="px-5 py-4 text-sm text-[#4A525A] bg-white border-t border-[#E6DEC8]">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 3. HOME PAGE */}
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            <section className="relative bg-[#1E252B] text-white py-16 lg:py-24 px-4 sm:px-8 border-b-4 border-[#C59B27]">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {['Board-Certified Providers', 'Telehealth Available', 'Evidence-Based Care'].map(
                      (badge) => (
                        <span
                          key={badge}
                          className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/50 text-[#F4EBD0] text-xs font-semibold"
                        >
                          ✓ {badge}
                        </span>
                      )
                    )}
                  </div>
                  <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight text-white">
                    Your Path to <span className="text-[#C59B27]">Emotional Well-Being</span> Starts Here.
                  </h1>
                  <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
                    {PRACTICE_INFO.aboutParagraph1}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => openBookingWithService('Initial Psychiatric Consultation')}
                      className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all flex items-center gap-2"
                    >
                      <span>Schedule Your Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => navigateTo('services')}
                      className="bg-white/10 hover:bg-white/20 text-white border border-[#F4EBD0]/40 font-semibold px-7 py-4 rounded-full transition-all"
                    >
                      Explore All 10 Services
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-3xl overflow-hidden border-2 border-[#C59B27] shadow-2xl">
                    <img
                      src={PRACTICE_INFO.heroImage}
                      alt="Golden Mind Psychiatry PLLC"
                      className="w-full h-80 sm:h-[420px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
              <div className="bg-[#F5F0E6] rounded-3xl p-8 lg:p-12 border border-[#E6DEC8] grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B1C]">
                    Interactive Care Finder
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E252B]">
                    What Support Are You Looking For Today?
                  </h2>
                </div>
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_DATA.slice(0, 7).map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setCareMatcherGoal(s.id)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          careMatcherGoal === s.id
                            ? 'bg-[#C59B27] text-white shadow'
                            : 'bg-white text-[#1E252B] border border-[#E6DEC8]'
                        }`}
                      >
                        {s.shortTitle}
                      </button>
                    ))}
                  </div>
                  {(() => {
                    const matched =
                      SERVICES_DATA.find((s) => s.id === careMatcherGoal) || SERVICES_DATA[6];
                    return (
                      <div className="bg-white p-6 rounded-2xl border border-[#E6DEC8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-xs font-bold text-[#C59B27] uppercase">
                            {matched.number}
                          </span>
                          <h3 className="font-serif text-2xl font-bold text-[#1E252B]">
                            {matched.title}
                          </h3>
                          <p className="text-sm text-[#4A525A] mt-1">{matched.description}</p>
                        </div>
                        <button
                          onClick={() => openDedicatedServicePage(matched.id)}
                          className="shrink-0 bg-[#1E252B] hover:bg-[#C59B27] text-white text-xs font-semibold px-5 py-3 rounded-full transition-colors flex items-center gap-1.5"
                        >
                          <span>Open Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 4. ABOUT PAGE */}
        {currentPage === 'about' && (
          <div className="animate-fade-in">
            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14 lg:py-20 grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                  About {PRACTICE_INFO.name}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B] leading-tight">
                  Illuminating the Path to Emotional Well-Being &amp; Stability.
                </h1>
                <div className="space-y-4 text-base sm:text-lg text-[#4A525A] leading-relaxed bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DEC8] shadow-sm">
                  <p>{PRACTICE_INFO.aboutParagraph1}</p>
                  <p>{PRACTICE_INFO.aboutParagraph2}</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => openBookingWithService('Initial Psychiatric Consultation')}
                    className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all flex items-center gap-2 text-sm"
                  >
                    <span>Book an Appointment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigateTo('services')}
                    className="bg-white hover:bg-[#F4EBD0] text-[#1E252B] border border-[#C59B27] font-semibold px-6 py-3.5 rounded-full transition-all text-sm"
                  >
                    Explore Our Services
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border-2 border-[#E6DEC8] shadow-xl bg-white">
                  <img
                    src={PRACTICE_INFO.aboutImage}
                    alt="About Golden Mind Psychiatry PLLC"
                    className="w-full h-96 sm:h-[460px] object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 5. TELEHEALTH PAGE */}
        {currentPage === 'telehealth' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-14 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                HIPAA-Compliant Virtual Care
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
                Accessible Telepsychiatry Wherever You Are
              </h1>
              <p className="text-[#4A525A] leading-relaxed">
                With the convenience of telehealth options, Golden Mind Psychiatry PLLC makes it
                easier for you to access psychiatric evaluations, medication management, and
                specialized treatment from the comfort of your home.
              </p>
              <button
                onClick={() => openBookingWithService('Telepsychiatry Video Consultation')}
                className="bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold px-7 py-3.5 rounded-full shadow-md transition-all inline-flex items-center gap-2 text-sm"
              >
                <span>Book a Virtual Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="lg:col-span-5 bg-white p-7 rounded-3xl border border-[#E6DEC8] shadow-sm space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                Interactive Telehealth Readiness Check
              </h2>
              {[
                { key: 'wifi', label: 'Stable internet or cellular connection' },
                { key: 'camera', label: 'Smartphone, tablet, or computer with camera & mic' },
                { key: 'space', label: 'Private, quiet, well-lit space for your conversation' },
                { key: 'idCard', label: 'Photo ID and current medication list handy' }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() =>
                    setTelehealthChecks((prev) => ({ ...prev, [item.key]: !prev[item.key] }))
                  }
                  className={`w-full text-left p-3.5 rounded-2xl border flex items-center gap-3 text-sm ${
                    telehealthChecks[item.key]
                      ? 'bg-[#F4EBD0]/60 border-[#C59B27] text-[#1E252B] font-medium'
                      : 'bg-[#FDFBF7] border-[#E6DEC8]'
                  }`}
                >
                  <CheckCircle2
                    className={`w-5 h-5 ${
                      telehealthChecks[item.key] ? 'text-[#C59B27]' : 'text-gray-300'
                    }`}
                  />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 6. INSURANCE PAGE */}
        {currentPage === 'insurance' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-12">
            <div className="max-w-3xl space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-xs font-bold uppercase tracking-widest">
                Transparent Coverage
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
                Insurance &amp; Self-Pay Investment
              </h1>
            </div>
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 bg-white p-7 rounded-3xl border border-[#E6DEC8] space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                    Accepted Insurance Carriers
                  </h2>
                  <div className="relative">
                    <Search className="w-4 h-4 text-[#C59B27] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Filter insurer..."
                      value={insuranceSearch}
                      onChange={(e) => setInsuranceSearch(e.target.value)}
                      className="pl-9 pr-4 py-2 rounded-full border border-[#E6DEC8] text-xs"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {INSURANCE_PLANS.filter((p) =>
                    p.name.toLowerCase().includes(insuranceSearch.toLowerCase())
                  ).map((plan) => (
                    <div
                      key={plan.name}
                      className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E6DEC8] flex items-center justify-between"
                    >
                      <div>
                        <p className="font-semibold text-sm text-[#1E252B]">{plan.name}</p>
                        <p className="text-xs text-[#4A525A]">{plan.type}</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#F4EBD0] text-[#9E7B1C] text-[11px] font-bold">
                        {plan.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 bg-[#F5F0E6] p-7 rounded-3xl border border-[#E6DEC8] space-y-5">
                <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                  Self-Pay &amp; Superbill Estimator
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setVisitTypeCalc('eval')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold ${
                      visitTypeCalc === 'eval'
                        ? 'bg-[#C59B27] text-white'
                        : 'bg-white text-[#1E252B]'
                    }`}
                  >
                    Initial Evaluation ($275)
                  </button>
                  <button
                    onClick={() => setVisitTypeCalc('followup')}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold ${
                      visitTypeCalc === 'followup'
                        ? 'bg-[#C59B27] text-white'
                        : 'bg-white text-[#1E252B]'
                    }`}
                  >
                    Medication Follow-Up ($150)
                  </button>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="10"
                  value={reimbursePercent}
                  onChange={(e) => setReimbursePercent(Number(e.target.value))}
                  className="w-full accent-[#C59B27]"
                />
                {(() => {
                  const baseFee = visitTypeCalc === 'eval' ? 275 : 150;
                  const estBack = Math.round((baseFee * reimbursePercent) / 100);
                  return (
                    <div className="bg-white p-5 rounded-2xl border border-[#E6DEC8] space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Upfront Rate:</span>
                        <span className="font-bold">${baseFee}</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#C59B27]">
                        <span>Estimated Net Cost ({reimbursePercent}% Reimbursed):</span>
                        <span>${baseFee - estBack}</span>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* 7. BLOG PAGE */}
        {currentPage === 'blog' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-14 space-y-10">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E252B]">
              Mental Wellness Articles &amp; Guides
            </h1>
            {selectedBlogPost ? (
              <article className="bg-white p-8 rounded-3xl border border-[#E6DEC8] max-w-4xl mx-auto space-y-5">
                <button
                  onClick={() => setSelectedBlogPost(null)}
                  className="text-xs font-bold text-[#9E7B1C] flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to All Articles
                </button>
                <h2 className="font-serif text-3xl font-bold text-[#1E252B]">
                  {selectedBlogPost.title}
                </h2>
                <img
                  src={selectedBlogPost.image}
                  alt={selectedBlogPost.title}
                  className="w-full h-72 object-cover rounded-2xl"
                />
                <div className="space-y-4 text-[#4A525A]">
                  {(selectedBlogPost.content || []).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ) : (
              <div className="grid md:grid-cols-3 gap-8">
                {BLOG_POSTS.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-3xl overflow-hidden border border-[#E6DEC8] shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
                      <div className="p-6 space-y-3">
                        <span className="text-xs font-bold text-[#C59B27] uppercase">
                          {post.category}
                        </span>
                        <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                          {post.title}
                        </h2>
                        <p className="text-sm text-[#4A525A]">{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <button
                        onClick={() => setSelectedBlogPost(post)}
                        className="text-xs font-bold text-[#9E7B1C] flex items-center gap-1"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 8. RESOURCES PAGE */}
        {currentPage === 'resources' && (
          <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 py-14 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E6DEC8] text-center space-y-5">
              <Activity className="w-10 h-10 text-[#C59B27] mx-auto" />
              <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                Interactive Nervous System Breath Pacer
              </h2>
              <div className="py-6">
                <div
                  className={`w-36 h-36 rounded-full mx-auto flex items-center justify-center border-4 border-[#C59B27] bg-[#F4EBD0]/50 transition-all duration-1000 ${
                    breathingActive ? 'scale-110' : 'scale-100'
                  }`}
                >
                  <span className="text-xs font-bold text-[#1E252B] px-3">
                    {breathingActive ? breathPhase : 'Ready'}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setBreathingActive(!breathingActive)}
                className="bg-[#C59B27] text-white text-xs font-bold px-6 py-3 rounded-full"
              >
                {breathingActive ? 'Pause Exercise' : 'Start Guided Breathing'}
              </button>
            </div>

            <div className="bg-[#1E252B] text-white p-8 rounded-3xl border border-[#C59B27]/40 space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#C59B27]">
                24/7 Immediate Crisis Support
              </h2>
              <p className="text-sm text-gray-300">
                Call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline, or email us
                for non-urgent scheduling at{' '}
                <a href={`mailto:${PRACTICE_INFO.email}`} className="text-[#C59B27] underline">
                  {PRACTICE_INFO.email}
                </a>
                .
              </p>
            </div>
          </div>
        )}

        {/* 9. CONTACT & BOOKING PAGE */}
        {currentPage === 'contact' && (
          <div className="animate-fade-in">
            <header className="bg-[#1E252B] text-white py-14 px-4 sm:px-8 border-b-4 border-[#C59B27]">
              <div className="max-w-7xl mx-auto space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#C59B27]">
                  {PRACTICE_INFO.name}
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold">
                  Contact &amp; Appointment Request
                </h1>
                <p className="text-gray-300 text-sm sm:text-base">
                  Reach out directly at{' '}
                  <a
                    href={`mailto:${PRACTICE_INFO.email}`}
                    className="text-[#C59B27] underline font-semibold"
                  >
                    {PRACTICE_INFO.email}
                  </a>{' '}
                  or submit a secure request below.
                </p>
              </div>
            </header>

            <section className="max-w-7xl mx-auto px-4 sm:px-8 py-14 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white p-7 rounded-3xl border border-[#E6DEC8] space-y-4 text-sm">
                  <h2 className="font-serif text-2xl font-bold text-[#1E252B]">
                    Direct Practice Contact
                  </h2>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#C59B27]" />
                    <a href={`mailto:${PRACTICE_INFO.email}`} className="font-semibold text-[#1E252B]">
                      {PRACTICE_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#C59B27]" />
                    <span>{PRACTICE_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#C59B27]" />
                    <span>{PRACTICE_INFO.hours}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#E6DEC8] shadow-sm">
                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-[#F5F0E6] border border-[#C59B27] text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#C59B27] mx-auto" />
                    <h3 className="font-serif text-3xl font-bold text-[#1E252B]">Request Received</h3>
                    <p className="text-sm text-[#4A525A]">
                      Thank you, <strong>{contactForm.name}</strong>. We will respond from{' '}
                      <strong>{PRACTICE_INFO.email}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Full Name *"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E6DEC8] text-sm"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E6DEC8] text-sm"
                      />
                    </div>
                    <textarea
                      rows={4}
                      placeholder="How can we support you?"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E6DEC8] text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold py-3.5 rounded-full text-sm"
                    >
                      Submit Consultation Request
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1E252B] text-gray-300 pt-14 pb-8 px-4 sm:px-8 border-t-4 border-[#C59B27]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-11 h-11" />
              <span className="font-serif text-xl font-bold text-white">
                Golden Mind <span className="text-[#C59B27]">Psychiatry</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-gray-400">
              {PRACTICE_INFO.name} is a compassionate mental health provider dedicated to supporting
              individuals on their journey to emotional well-being.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C59B27] mb-4">
              Practice Pages
            </h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('about')} className="hover:text-[#C59B27]">About Us</button></li>
              <li><button onClick={() => navigateTo('services')} className="hover:text-[#C59B27]">All 10 Services Hub</button></li>
              <li><button onClick={() => navigateTo('telehealth')} className="hover:text-[#C59B27]">Telehealth Psychiatry</button></li>
              <li><button onClick={() => navigateTo('insurance')} className="hover:text-[#C59B27]">Insurance &amp; Fees</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C59B27] mb-4">
              Individual Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button onClick={() => openDedicatedServicePage(s.id)} className="hover:text-[#C59B27]">
                    {s.shortTitle}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => openDedicatedServicePage('depression')}
                  className="text-[#C59B27] font-semibold hover:underline"
                >
                  Depression Care (#depression)
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#C59B27] mb-4">
              Connect
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-xs text-gray-400">{PRACTICE_INFO.hours}</p>
              <p><a href={`tel:${PRACTICE_INFO.phone}`} className="hover:text-[#C59B27]">{PRACTICE_INFO.phone}</a></p>
              <p>
                <a href={`mailto:${PRACTICE_INFO.email}`} className="text-[#F4EBD0] hover:text-[#C59B27] underline">
                  {PRACTICE_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <p>© {new Date().getFullYear()} {PRACTICE_INFO.name}. All rights reserved.</p>
          <p>If you are in crisis, call or text <strong className="text-[#C59B27]">988</strong>.</p>
        </div>
      </footer>

      {/* Quick Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 border-2 border-[#C59B27] shadow-2xl space-y-5 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#9E7B1C]">
                  {PRACTICE_INFO.name}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1E252B]">
                  Schedule Consultation
                </h3>
              </div>
              <button onClick={() => setBookingModalOpen(false)} className="p-2 rounded-full hover:bg-[#F5F0E6]">
                <X className="w-5 h-5 text-[#1E252B]" />
              </button>
            </div>
            <p className="text-xs text-[#4A525A]">
              Selected Service: <strong className="text-[#1E252B]">{selectedServiceForBooking}</strong>
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setBookingModalOpen(false);
                  setContactForm((prev) => ({ ...prev, service: selectedServiceForBooking }));
                  navigateTo('contact');
                }}
                className="w-full bg-[#C59B27] hover:bg-[#9E7B1C] text-white font-semibold py-3.5 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Complete Online Booking Form</span>
              </button>
              <a
                href={`mailto:${PRACTICE_INFO.email}?subject=Consultation Request: ${encodeURIComponent(
                  selectedServiceForBooking
                )}`}
                className="w-full bg-[#F5F0E6] hover:bg-[#F4EBD0] text-[#1E252B] font-semibold py-3.5 rounded-full text-sm flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#9E7B1C]" />
                <span>Email {PRACTICE_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
