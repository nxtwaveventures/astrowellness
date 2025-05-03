import { z } from 'zod';

// User profile schema for Twintap
export const userProfileSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    dateOfBirth: z.string(),
    birthTime: z.string().optional(),
    birthLocation: z.string().optional(),
    pronouns: z.string().optional(),
    bio: z.string().max(300).optional(),
    interests: z.array(z.string()).optional(),
    avatarUrl: z.string().url().optional(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

// Match schema (friend or flame)
export const matchSchema = z.object({
    id: z.string(),
    userAId: z.string(),
    userBId: z.string(),
    type: z.enum(['friend', 'flame']),
    compatibilityScore: z.number().min(0).max(100),
    createdAt: z.string(),
    status: z.enum(['pending', 'accepted', 'rejected']),
});

// Message schema
export const messageSchema = z.object({
    id: z.string(),
    matchId: z.string(),
    senderId: z.string(),
    content: z.string().max(1000),
    sentAt: z.string(),
});

// Compatibility schema (for advanced reports)
export const compatibilitySchema = z.object({
    id: z.string(),
    userAId: z.string(),
    userBId: z.string(),
    sunScore: z.number().min(0).max(100),
    moonScore: z.number().min(0).max(100),
    risingScore: z.number().min(0).max(100),
    overallScore: z.number().min(0).max(100),
    generatedAt: z.string(),
});

// Types
export type UserProfile = z.infer<typeof userProfileSchema>;
export type Match = z.infer<typeof matchSchema>;
export type Message = z.infer<typeof messageSchema>;
export type Compatibility = z.infer<typeof compatibilitySchema>; 