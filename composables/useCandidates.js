import { ref } from "vue";

export const useCandidates = () => {
  const candidates = ref([
    {
      candidate_id: "1",
      name: "John Doe",
      skills: ["JavaScript", "Vue.js", "Nuxt"],
      role: "Frontend Developer",
      team: "UI/UX Team",
      appliedDate: "2024-08-01",
      applicationOwner: "Alice Smith",
      rating: 4.3,
      pipelineStage: "Screening",
      pipelineStageNo: 2,
      pipelineStageDate: "2024-08-03",
      reviews: [
        {
          name: "Bob Martin",
          date: "2024-08-02",
          comment: "Strong skills in JS",
        },
        { name: "Sara Lee", date: "2024-08-03", comment: "Good cultural fit" },
      ],
      source: "LinkedIn",
      address: "123 Main St, Springfield, IL",
      email: "john.doe@example.com",
      phone: "+1-555-123-4567",
      website: "https://johndoe.dev",
      currentJob: "Frontend Developer at TechCorp",
      expectedSalary: "$75,000",
      currentSalary: "$65,000",
      highestEducation: "Bachelor's in Computer Science",
      experience: 5,
    },
    {
      candidate_id: "2",
      name: "Jane Roe",
      skills: ["React", "Tailwind", "TypeScript"],
      role: "React Developer",
      team: "Frontend Team",
      appliedDate: "2024-08-05",
      applicationOwner: "Michael Johnson",
      rating: 4.7,
      pipelineStage: "Technical Interview",
      pipelineStageNo: 4,
      pipelineStageDate: "2024-08-08",
      reviews: [
        {
          name: "David Kim",
          date: "2024-08-06",
          comment: "Excellent problem-solving",
        },
        {
          name: "Linda Carter",
          date: "2024-08-07",
          comment: "High potential for leadership",
        },
      ],
      source: "Company Website",
      address: "456 Elm St, Metropolis, NY",
      email: "jane.roe@example.com",
      phone: "+1-555-987-6543",
      website: "https://janeroe.dev",
      currentJob: "React Developer at DevHub",
      expectedSalary: "$85,000",
      currentSalary: "$80,000",
      highestEducation: "Master's in Software Engineering",
      experience: 6,
    },
    {
      candidate_id: "3",
      name: "Sam Smith",
      skills: ["Python", "Django", "REST APIs"],
      role: "Backend Developer",
      team: "Backend Team",
      appliedDate: "2024-08-08",
      applicationOwner: "Robert Brown",
      rating: 3.9,
      pipelineStage: "HR Interview",
      pipelineStageNo: 3,
      pipelineStageDate: "2024-08-11",
      reviews: [
        {
          name: "Emily Davis",
          date: "2024-08-09",
          comment: "Solid backend skills",
        },
        {
          name: "Nancy Wilson",
          date: "2024-08-10",
          comment: "Needs improvement in soft skills",
        },
      ],
      source: "Referral",
      address: "789 Oak St, Gotham, NJ",
      email: "sam.smith@example.com",
      phone: "+1-555-246-1357",
      website: "",
      currentJob: "Backend Developer at DataWorks",
      expectedSalary: "$78,000",
      currentSalary: "$70,000",
      highestEducation: "Bachelor's in Information Technology",
      experience: 4,
    },
    {
      candidate_id: "4",
      name: "Lisa White",
      skills: ["Java", "Spring Boot", "Microservices"],
      role: "Full Stack Developer",
      team: "Development Team",
      appliedDate: "2024-08-11",
      applicationOwner: "Paul Walker",
      rating: 4.5,
      pipelineStage: "Offer",
      pipelineStageNo: 6,
      pipelineStageDate: "2024-08-14",
      reviews: [
        {
          name: "Oliver Jones",
          date: "2024-08-12",
          comment: "Highly recommended",
        },
        {
          name: "Sophia Williams",
          date: "2024-08-13",
          comment: "Strong experience in microservices",
        },
      ],
      source: "Indeed",
      address: "101 Pine St, Star City, CA",
      email: "lisa.white@example.com",
      phone: "+1-555-369-2587",
      website: "https://lisawhite.dev",
      currentJob: "Full Stack Developer at WebTech",
      expectedSalary: "$90,000",
      currentSalary: "",
      highestEducation: "Master's in Computer Science",
      experience: 7,
    },
    {
      candidate_id: "5",
      name: "Tom Brown",
      skills: ["C#", ".NET", "Azure"],
      role: "Software Engineer",
      team: "Cloud Team",
      appliedDate: "2024-08-14",
      applicationOwner: "George Harris",
      rating: 4.0,
      pipelineStage: "Technical Interview",
      pipelineStageNo: 4,
      pipelineStageDate: "2024-08-17",
      reviews: [
        {
          name: "James Clark",
          date: "2024-08-15",
          comment: "Good knowledge of cloud technologies",
        },
        {
          name: "Isabella Lewis",
          date: "2024-08-16",
          comment: "Well-rounded engineer",
        },
      ],
      source: "Recruitment Agency",
      address: "202 Birch St, Central City, TX",
      email: "tom.brown@example.com",
      phone: "+1-555-147-2583",
      website: "",
      currentJob: "Software Engineer at CloudBase",
      expectedSalary: "$85,000",
      currentSalary: "$80,000",
      highestEducation: "Bachelor's in Software Engineering",
      experience: 6,
    },
    {
      candidate_id: "6",
      name: "Alice Blue",
      skills: ["Ruby", "Rails", "PostgreSQL"],
      role: "DevOps Engineer",
      team: "Infrastructure Team",
      appliedDate: "2024-08-17",
      applicationOwner: "Megan Thompson",
      rating: 4.2,
      pipelineStage: "Final Round",
      pipelineStageNo: 5,
      pipelineStageDate: "2024-08-20",
      reviews: [
        {
          name: "Charlotte Miller",
          date: "2024-08-18",
          comment: "Excellent in CI/CD pipelines",
        },
        {
          name: "Liam Martinez",
          date: "2024-08-19",
          comment: "Great team player",
        },
      ],
      source: "LinkedIn",
      address: "303 Cedar St, Coast City, FL",
      email: "alice.blue@example.com",
      phone: "+1-555-789-4561",
      website: "https://aliceblue.dev",
      currentJob: "DevOps Engineer at InfraSolutions",
      expectedSalary: "$92,000",
      currentSalary: "$85,000",
      highestEducation: "Bachelor's in Computer Science",
      experience: 8,
    },
  ]);

  const getCandidatesSize = () => candidates.value.length;
  const getCandidateAtIndex = (index) => candidates.value[index];
  const getCandidateById = (id) =>
    candidates.value.filter((c) => c.candidate_id === id)[0];
  const updateCandidate = (id, updateObj) => {
    const orgIndex = candidates.value.findIndex((c) => c.candidate_id === id);
    const candidate = candidates.value[orgIndex];
    const { name, team, role, rating, appliedDate } = updateObj;

    if (name) {
      candidate.name = name;
    }
    if (team) {
      candidate.team = team;
    }
    if (rating) {
      candidate.rating = rating;
    }
    if (role) {
      candidate.role = role;
    }
    if (appliedDate) {
      candidate.appliedDate = appliedDate;
    }

    candidates.value.splice(orgIndex, 1, candidate);
  };

  const updateCandidateProperty = (id, key, val) => {
    const orgIndex = candidates.value.findIndex((c) => c.candidate_id === id);
    const candidate = candidates.value[orgIndex];
    candidate[key] = val;
    candidates.value.splice(orgIndex, 1, candidate);
  }

  return {
    candidates,
    getCandidateAtIndex,
    getCandidatesSize,
    getCandidateById,
    updateCandidate,
    updateCandidateProperty
  };
};
