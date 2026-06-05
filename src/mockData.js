export const mockAlerts = [
  { id: '1', keyword: 'React Developer', location: 'Remote', channel: 'discord', dailyCount: 12, active: true },
  { id: '2', keyword: 'Frontend Intern', location: 'New York', channel: 'telegram', dailyCount: 5, active: true },
  { id: '3', keyword: 'Data Analyst', location: 'Remote', channel: 'discord', dailyCount: 8, active: true },
]

export const mockHistory = [
  { id: '1', jobTitle: 'React Developer at TechCorp', platform: 'LinkedIn', timestamp: '2026-06-05T10:30:00Z', status: 'delivered' },
  { id: '2', jobTitle: 'Frontend Intern at StartupX', platform: 'Indeed', timestamp: '2026-06-05T09:15:00Z', status: 'delivered' },
  { id: '3', jobTitle: 'Data Analyst at DataViz', platform: 'Glassdoor', timestamp: '2026-06-04T22:00:00Z', status: 'failed' },
  { id: '4', jobTitle: 'UI Developer at DesignAgency', platform: 'LinkedIn', timestamp: '2026-06-04T18:45:00Z', status: 'delivered' },
  { id: '5', jobTitle: 'Remote React Intern', platform: 'AngelList', timestamp: '2026-06-04T14:20:00Z', status: 'delivered' },
]

export const mockIntegrations = {
  discord: { connected: true, token: 'discord_bot_token_123', webhookUrl: 'https://discord.com/api/webhooks/...' },
  telegram: { connected: false, token: '', botUsername: '' },
}