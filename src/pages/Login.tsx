import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Zap, ArrowRight } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    }
    
    setIsLoading(false);
  };

  const quickLogin = async (role: string) => {
    setIsLoading(true);
    await login(`${role}@salesflow.com`, 'password');
    navigate('/dashboard');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
              <Zap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">SalesFlow</h1>
              <p className="text-sm text-muted-foreground">Lead Management System</p>
            </div>
          </div>

          {/* Welcome Text */}
          <div>
            <h2 className="text-3xl font-bold text-foreground">Welcome back</h2>
            <p className="text-muted-foreground mt-2">
              Sign in to access your dashboard and manage your leads.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base"
              disabled={isLoading}
            >
              Sign In
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          {/* Quick Login Buttons */}
          <div className="space-y-3">
            <p className="text-sm text-center text-muted-foreground">Quick demo access</p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() => quickLogin('manager')}
                disabled={isLoading}
              >
                Manager
              </Button>
              <Button
                variant="outline"
                onClick={() => quickLogin('sales')}
                disabled={isLoading}
              >
                Sales Rep
              </Button>
              <Button
                variant="outline"
                onClick={() => quickLogin('sdr')}
                disabled={isLoading}
              >
                SDR
              </Button>
              <Button
                variant="outline"
                onClick={() => quickLogin('admin')}
                disabled={isLoading}
              >
                Sys Admin
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary/20 via-card to-background items-center justify-center p-12">
        <div className="max-w-lg text-center">
          <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8">
            <Zap className="w-12 h-12 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Supercharge Your Sales Pipeline
          </h3>
          <p className="text-muted-foreground text-lg">
            AI-powered lead intelligence, real-time analytics, and seamless team collaboration — all in one platform.
          </p>
        </div>
      </div>
    </div>
  );
}
