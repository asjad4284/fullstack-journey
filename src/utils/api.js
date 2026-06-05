const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  const token = localStorage.getItem('token')
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`)
  }

  return response.json()
}

export const api = {
  alerts: {
    list: () => apiCall('/alerts'),
    create: (data) => apiCall('/alerts', { method: 'POST', body: JSON.stringify(data) }),
    update: (id, data) => apiCall(`/alerts/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    delete: (id) => apiCall(`/alerts/${id}`, { method: 'DELETE' }),
  },
  integrations: {
    list: () => apiCall('/integrations'),
    connect: (name) => apiCall(`/integrations/${name}/connect`, { method: 'POST' }),
    disconnect: (name) => apiCall(`/integrations/${name}/disconnect`, { method: 'POST' }),
  },
  notifications: {
    list: () => apiCall('/notifications'),
    markAsRead: (id) => apiCall(`/notifications/${id}/read`, { method: 'PUT' }),
  },
  auth: {
    login: (email, password) => apiCall('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
    register: (email, password) => apiCall('/auth/register', { method: 'POST', body: JSON.stringify({ email, password }) }),
    logout: () => apiCall('/auth/logout', { method: 'POST' }),
  },
}
