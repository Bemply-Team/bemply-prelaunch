interface CompanyAvatarProps {
  companyName: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function CompanyAvatar({
  companyName,
  size = "md",
  className = "",
}: CompanyAvatarProps) {
  // Get the first letter of the company name, fallback to "C" if empty
  const initial = companyName?.charAt(0)?.toUpperCase() || "C";

  // Generate a consistent color based on company name
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-pink-500",
      "bg-teal-500",
    ];

    // Simple hash function to get consistent color for same company name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const sizeClasses = {
    sm: "w-5 h-5 text-xs",
    md: "w-6 h-6 text-sm",
    lg: "w-8 h-8 text-base",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]} 
        ${getAvatarColor(companyName)}
        rounded-full 
        flex 
        items-center 
        justify-center 
        text-white 
        font-semibold 
        border-2 
        border-white/50 
        shadow-sm
        ${className}
      `}
    >
      {initial}
    </div>
  );
}
