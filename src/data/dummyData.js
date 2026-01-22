export const documents = [];

export const results = [
  {
    id: "r1",
    title: "Key Findings",
    excerpt: "Projected 15% decrease in wheat, regional vulnerabilities...",
    page: 3,
  },
  {
    id: "r2",
    title: "Recommendations",
    excerpt: "Invest in drought-resistant seeds and irrigation...",
    page: 12,
  },
  {
    id: "r3",
    title: "Methodology",
    excerpt: "Survey of 1200 farms across 8 countries...",
    page: 2,
  },
];

export const sampleChats = [
  {
    id: 1,
    role: "ai",
    text: "Here’s a short summary of the document: the report analyzes recent yield trends and projects a ~15% decline in wheat yields by 2050 under current emission scenarios. It highlights regional hotspots in South Asia and the Sahel where yield losses are expected to be most severe.",
  },
  {
    id: 2,
    role: "user",
    text: "Which specific factors are driving the projected wheat declines?",
  },
  {
    id: 3,
    role: "ai",
    text: "The report cites three main drivers: (1) increased frequency of heatwaves during the growing season, (2) altered rainfall patterns causing more frequent droughts, and (3) reduced access to irrigation in vulnerable regions. See section 2.1 for the climate model projections and section 4 for regional assessments.",
  },
  {
    id: 4,
    role: "user",
    text: "What are the most practical short-term interventions for smallholder farmers?",
  },
  {
    id: 5,
    role: "ai",
    text: "Short-term, the report recommends: 1) targeted distribution of drought-tolerant seed varieties, 2) small-scale water-harvesting and irrigation improvements, and 3) access to microcredit for purchasing inputs. These actions are discussed in the Recommendations (p. 12).",
  },
  {
    id: 6,
    role: "user",
    text: "Can you give a one-paragraph summary I can share with stakeholders?",
  },
  {
    id: 7,
    role: "ai",
    text: "Summary for stakeholders: The report finds that climate change poses a material risk to staple crop production, with modelled declines concentrated in regions already facing food insecurity. Immediate actions—such as scaling drought-tolerant seeds, improving small-scale irrigation, and increasing financial support—can reduce projected losses and strengthen resilience. Further investment in regional adaptation and monitoring is essential to avoid long-term declines in food security.",
  },
];
