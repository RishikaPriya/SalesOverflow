import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '@/types/user';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  switchRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: Record<UserRole, User> = {
  manager: {
    id: '1',
    name: 'Executive Account',
    email: 'manager@salesflow.com',
    role: 'manager',
    company: 'SalesFlow Inc',
  },
  sales_rep: {
    id: '2',
    name: 'James Mitchell',
    email: 'james@salesflow.com',
    role: 'sales_rep',
    company: 'SalesFlow Inc',
  },
  sdr: {
    id: '3',
    name: 'Sarah Hong',
    email: 'sarah@salesflow.com',
    role: 'sdr',
    company: 'SalesFlow Inc',
  },
  sysadmin: {
    id: '4',
    name: 'System Admin',
    email: 'admin@salesflow.com',
    role: 'sysadmin',
    company: 'SalesFlow Inc',
  },
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - in production this would hit an API
    const role = email.includes('admin') 
      ? 'sysadmin' 
      : email.includes('manager') 
        ? 'manager' 
        : email.includes('sdr') 
          ? 'sdr' 
          : 'sales_rep';
    
    setUser(mockUsers[role]);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (role: UserRole) => {
    setUser(mockUsers[role]);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
