export type Role = 'user' | 'creator' | 'business' | 'admin';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  role: Role;
  points: number;
  streak: number;
  isPro: boolean;
  joinDate: string;
}

export type CampaignType = 'video' | 'music' | 'live' | 'challenge' | 'poll';

export interface Campaign {
  id: string;
  title: string;
  creatorName: string;
  creatorAvatar: string;
  type: CampaignType;
  reward: number;
  duration: number; // in seconds
  participants: number;
  maxParticipants?: number;
  image: string;
  category: string;
  description: string;
  status: 'active' | 'completed' | 'draft';
}

export interface Reward {
  id: string;
  title: string;
  type: 'cash' | 'airtime' | 'data' | 'giftcard' | 'event';
  points: number;
  image: string;
  description: string;
  value?: string;
}

export interface Transaction {
  id: string;
  type: 'earn' | 'spend';
  amount: number;
  title: string;
  date: string;
  icon?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  date: string;
  type: 'reward' | 'campaign' | 'system' | 'social';
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  tasks: ChallengeTask[];
  reward: number;
  image: string;
}

export interface ChallengeTask {
  id: string;
  title: string;
  completed: boolean;
}
