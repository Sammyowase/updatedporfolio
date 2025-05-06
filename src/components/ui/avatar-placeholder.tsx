import { User } from 'lucide-react';

interface AvatarPlaceholderProps {
  name: string;
  className?: string;
}

export const AvatarPlaceholder = ({ name, className = "" }: AvatarPlaceholderProps) => {
  // Generate a random color based on the name
  const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 40%)`;
  };

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary/10 ${className}`}
      style={{ backgroundColor: stringToColor(name) }}
    >
      {getInitials(name) || <User className="w-6 h-6 text-white" />}
    </div>
  );
}; 