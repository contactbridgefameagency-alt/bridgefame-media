
import React from 'react';
import { 
  Zap, 
  BarChart3, 
  Target, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Search
} from 'lucide-react';

export const COLORS = {
  primary: '#ffffff',
  secondary: '#a1a1aa',
  accent: '#3b82f6',
  bg: '#050505',
};

export const SERVICES = [
  {
    title: "Product Launch Amplification",
    description: "Orchestrated creator clusters designed to own the share of voice during critical product releases.",
    icon: <Zap className="w-6 h-6 text-white" />,
    outcome: "Maximized initial velocity & social proof"
  },
  {
    title: "Creator Cluster Campaigns",
    description: "Multi-layered influencer ecosystems targeting specific psychographics across different platforms.",
    icon: <Users className="w-6 h-6 text-white" />,
    outcome: "Omnipresence within target niche"
  },
  {
    title: "Influencer Testing Systems",
    description: "Methodical A/B testing of creator cohorts to identify the highest-converting content styles and personas.",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    outcome: "Reduced CPA & optimized spend"
  },
  {
    title: "Performance Collaborations",
    description: "Data-backed partnerships focused on long-term ROAS rather than one-off vanity metrics.",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
    outcome: "Sustainable, scalable revenue growth"
  }
];

export const PROCESS_STEPS = [
  {
    id: "01",
    title: "Strategic Objectives",
    desc: "We don't just look for 'influencers'. We define your commercial goals—whether it's raw ROAS or market penetration."
  },
  {
    id: "02",
    title: "Psychology Mapping",
    desc: "We map your SKU's features to specific audience pain points, identifying the exact creator personas that bridge that gap."
  },
  {
    id: "03",
    title: "Cluster Engineering",
    desc: "We build 'clusters' of creators rather than random individuals, ensuring your brand story is told from multiple angles simultaneously."
  },
  {
    id: "04",
    title: "Execution & Loop",
    desc: "Rapid deployment followed by rigorous data analysis. We kill what fails and scale what converts."
  }
];

export const TRUST_STATS = [
  { value: "100+", label: "Vetted Creators" },
  { value: "3.4x", label: "Average ROAS" },
  { value: "10M+", label: "Targeted Reach" },
  { value: "12+", label: "D2C Niches" }
];
