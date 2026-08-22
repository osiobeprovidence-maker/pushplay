import { Campaign, Reward, Transaction, Notification, Challenge, User } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'Alex Johnson',
  username: '@alexj',
  email: 'alex@example.com',
  avatar: 'https://i.pravatar.cc/150?u=alexj',
  role: 'user',
  points: 12450,
  streak: 7,
  isPro: false,
  joinDate: '2023-01-15T00:00:00Z',
};

export const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: 'c1',
    title: 'New Movie Trailer: The Awakening',
    creatorName: 'Universal Studios',
    creatorAvatar: 'https://i.pravatar.cc/150?u=universal',
    type: 'video',
    reward: 100,
    duration: 120,
    participants: 12450,
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Entertainment',
    description: 'Watch the exclusive new trailer and tell us what you think in the comments.',
    status: 'active'
  },
  {
    id: 'c2',
    title: 'New Afrobeats Release',
    creatorName: 'Burna Boy',
    creatorAvatar: 'https://i.pravatar.cc/150?u=burna',
    type: 'music',
    reward: 75,
    duration: 180,
    participants: 45200,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Music',
    description: 'Listen to the latest drop and rate the track.',
    status: 'active'
  },
  {
    id: 'c3',
    title: 'Artist Live Session & Q&A',
    creatorName: 'Wizkid',
    creatorAvatar: 'https://i.pravatar.cc/150?u=wizkid',
    type: 'live',
    reward: 150,
    duration: 600,
    participants: 8900,
    image: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Live',
    description: 'Join the exclusive live listening session and interact in the chat.',
    status: 'active'
  },
  {
    id: 'c4',
    title: 'Brand Quiz: Tech Knowledge',
    creatorName: 'Samsung',
    creatorAvatar: 'https://i.pravatar.cc/150?u=samsung',
    type: 'poll',
    reward: 50,
    duration: 60,
    participants: 3200,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Technology',
    description: 'Test your knowledge about the latest tech trends.',
    status: 'active'
  }
];

export const MOCK_REWARDS: Reward[] = [
  {
    id: 'r1',
    title: '₦500 Airtime',
    type: 'airtime',
    points: 500,
    image: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Instant recharge for all major networks.',
    value: '₦500'
  },
  {
    id: 'r2',
    title: '5GB Data Bundle',
    type: 'data',
    points: 1200,
    image: 'https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Valid for 30 days on all networks.',
    value: '5GB'
  },
  {
    id: 'r3',
    title: 'Spotify Premium (1 Month)',
    type: 'giftcard',
    points: 3500,
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Ad-free music listening, offline playback, and more.',
    value: '1 Month'
  },
  {
    id: 'r4',
    title: '₦5,000 Cash Withdrawal',
    type: 'cash',
    points: 5000,
    image: 'https://images.unsplash.com/photo-1580519542036-ed47f3e42214?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Direct transfer to your linked bank account.',
    value: '₦5,000'
  }
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', type: 'earn', amount: 75, title: 'Music Campaign: New Afrobeats', date: '2023-10-25T14:30:00Z' },
  { id: 't2', type: 'earn', amount: 150, title: 'Live Session: Wizkid', date: '2023-10-24T20:15:00Z' },
  { id: 't3', type: 'spend', amount: 500, title: 'Redeemed ₦500 Airtime', date: '2023-10-22T09:45:00Z' },
  { id: 't4', type: 'earn', amount: 100, title: 'Video: Movie Trailer', date: '2023-10-20T18:20:00Z' },
  { id: 't5', type: 'earn', amount: 250, title: 'Challenge: Weekend Warrior', date: '2023-10-18T12:00:00Z' },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  { id: 'n1', title: 'Points Earned!', message: 'You earned 75 PP for completing the Afrobeats campaign.', read: false, date: '2023-10-25T14:30:00Z', type: 'reward' },
  { id: 'n2', title: 'New Campaign', message: 'A new campaign matches your interests.', read: false, date: '2023-10-25T10:00:00Z', type: 'campaign' },
  { id: 'n3', title: 'Creator Live', message: 'Your favorite creator is live right now.', read: true, date: '2023-10-24T20:00:00Z', type: 'social' },
  { id: 'n4', title: 'Challenge Almost Complete', message: 'You are 1 task away from finishing the Weekend Warrior challenge!', read: true, date: '2023-10-18T10:00:00Z', type: 'system' },
];

export const MOCK_CHALLENGES: Challenge[] = [
  {
    id: 'ch1',
    title: 'Afrobeats Discovery',
    description: 'Discover new artists and share your thoughts.',
    reward: 500,
    image: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f1be68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tasks: [
      { id: 'task1', title: 'Listen to 3 new songs', completed: true },
      { id: 'task2', title: 'Rate the songs', completed: true },
      { id: 'task3', title: 'Vote for your favorite', completed: false }
    ]
  },
  {
    id: 'ch2',
    title: 'Weekend Binge',
    description: 'Watch 5 trending movie trailers this weekend.',
    reward: 300,
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tasks: [
      { id: 'task1', title: 'Watch Trailer 1', completed: true },
      { id: 'task2', title: 'Watch Trailer 2', completed: false },
      { id: 'task3', title: 'Watch Trailer 3', completed: false },
      { id: 'task4', title: 'Watch Trailer 4', completed: false },
      { id: 'task5', title: 'Watch Trailer 5', completed: false }
    ]
  }
];
