export interface District {
  id: string
  name: string
  handle: string
  studentCount: number
  schoolCount: number
  plan: 'basic' | 'district' | 'statewide' | 'national'
  status: 'active' | 'pending' | 'inactive'
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  name: string
  role: 'superintendent' | 'principal' | 'teacher' | 'admin' | 'parent' | 'student'
  districtId: string
  permissions: string[]
  createdAt: Date
  lastLogin?: Date
}

export interface Student {
  id: string
  name: string
  grade: number
  districtId: string
  schoolId: string
  agentId?: string
  parentIds: string[]
  createdAt: Date
}

export interface AIAgent {
  id: string
  type: 'tutor' | 'assistant' | 'coach'
  studentId?: string
  teacherId?: string
  districtId: string
  configuration: Record<string, any>
  isActive: boolean
  createdAt: Date
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number | 'custom'
  period: 'monthly' | 'yearly'
  features: string[]
  maxSchools: number
  maxStudents: number
  support: 'standard' | 'priority' | '24/7'
}

export interface ContactForm {
  name: string
  email: string
  organization?: string
  subject: string
  message: string
  inquiryType?: string
}

export interface DemoRequest {
  firstName: string
  lastName: string
  email: string
  title: string
  district: string
  phone?: string
  studentCount?: string
  timeSlot?: string
  message?: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  category: string
  tags: string[]
  publishedAt: Date
  updatedAt: Date
  featured: boolean
  readTime: string
}

export interface Testimonial {
  id: string
  name: string
  title: string
  district: string
  quote: string
  rating: number
  image?: string
  featured: boolean
}

export interface ComplianceStandard {
  id: string
  name: string
  description: string
  status: 'certified' | 'compliant' | 'in-progress'
  lastAudit: Date
  nextAudit: Date
  documents: string[]
}
