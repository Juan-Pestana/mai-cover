import { create } from 'zustand'

import { IProfiles } from './ClientProfileList'

type State = {
  abstract: string
  experience: string
  training: string
  company_name: string
  offer_name: string
  offer: string
  profile_preview: IProfiles
}

type Action = {
  updateAbstract: (abstract: State['abstract']) => void
  updateExperience: (experience: State['experience']) => void
  updateTraining: (training: State['training']) => void
  updateCompanyName: (company_name: State['company_name']) => void
  updateOfferName: (offer_name: State['offer_name']) => void
  updateOffer: (offer: State['offer']) => void
  updateProfilePreview: (profile_preview: State['profile_preview']) => void
}

export const useStore = create<State & Action>((set) => ({
  abstract: '',
  experience: '',
  training: '',
  company_name: 'OPINATOR',
  offer_name: 'Customer Success Manager',
  offer:
    'Imagine working in a successful high growth technology company for large well-known national and international clients. OPINATOR is a high-tech company that develops and markets a cloud-based platform specialized in Customer Experience and Digital Marketing that are changing the way in which major companies interact with their digital customers worldwide You will join a digital global company with a dynamic culture based on training, transparency, responsibility, attention to detail and customer focus. We are a team eager to learn and grow and face challenges every day. We are growing fast and new opportunities happen every day, it is a perfect environment to develop a successful and exciting digital career. For this position: Your main role will be able to provide business and service support and help customers be successful with OPINATOR service. You will be maintaining ongoing customer relationships and networking, implementing success programs, onboarding and training clients, and minimizing churn. Once trained and with the support of the engineering and design teams and your CSM colleagues, you will be able to understand customer digital requirements and will provide, present and implement solutions efficiently. Responsibilities: Build and maintain strong, active relationships with key clients and stakeholders.Owning overall customer strategy development and execution including both external and internal communications.Handle and resolve customer requests, suggest new solutions and identify new business opportunities for OPINATOR.Help to identify, generate, and facilitate additional revenue leveraging the sales team to close additional commercial opportunities.Deliver customers to the contract renewal cycle in a successful state and support the renewals process to maximize customer retention.Drive forward the customer lifecycle to ensure customer and OPINATOR mutual success. Take full accountability for your accounts in all aspects: Anticipating customer needs and proactively addressing them throughout the customer lifecycle, demonstrating lead time awareness, ensuring a frictionless renewal process, and ultimately positioning your accounts for growth. /n Requirements: Competencies: /n Bachelor Degree or higher education, Previous proven experience in Customer Success or equivalent history of increasing customer satisfaction, adoption, and retention. Social, analytical, excellent interpersonal and written communication skills. Fluent Spanish and English. Additional languages will be of advantage.Experience working with software platforms and digital technology will be of advantage. /n Your personality is best described by: Social abilities, you like to work in a multicultural global team. You like travelling abroad, new experiences and learn from other cultures. You’re excited to work in a fast-paced environment with constant learning opportunities, where things are not always easy, clear or straightforward, but quite challenging instead. Highly organized, with great attention to detail. You like and are proud to work accurately. You’re reliable.Strong determination, resilient and results-oriented personality. /n What we offer: Flexible work environment. Competitive salary package, based on your profile.Really a unique opportunity and the development of a personalized plan for each employee.A fun, easy-going and motivating work environment where you can thrive.',
  profile_preview: {
    id: '',
    abstract: '',
    training: '',
    experience: '',
  },
  updateAbstract: (abstract) => set(() => ({ abstract: abstract })),
  updateExperience: (experience) => set(() => ({ experience: experience })),
  updateTraining: (training) => set(() => ({ training: training })),
  updateCompanyName: (company_name) =>
    set(() => ({ company_name: company_name })),
  updateOfferName: (offer_name) => set(() => ({ offer_name: offer_name })),
  updateOffer: (offer) => set(() => ({ offer: offer })),
  updateProfilePreview: (profile_preview) => set(() => ({ profile_preview })),
}))
