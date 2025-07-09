// Simple tag color mapping
// If a tag isn't listed here, it will use the default gray color
export const tagColors: Record<string, string> = {
  organization:
    "bg-blue-100 text-blue-700 hover:bg-blue-200 border-2 border-blue-300",
  "file management":
    "bg-green-100 text-green-700 hover:bg-green-200 border-2 border-green-300",
  tags: "bg-purple-100 text-purple-700 hover:bg-purple-200 border-2 border-purple-300",
  "professional photography":
    "bg-orange-100 text-orange-700 hover:bg-orange-200 border-2 border-orange-300",
  comparison:
    "bg-pink-100 text-pink-700 hover:bg-pink-200 border-2 border-pink-300",
  onefolder:
    "bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-2 border-indigo-300",
  "analog photography":
    "bg-cyan-100 text-cyan-700 hover:bg-cyan-200 border-2 border-cyan-300",
  software:
    "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 border-2 border-yellow-300",
  design: "bg-red-100 text-red-700 hover:bg-red-200 border-2 border-red-300",
  "digital storage":
    "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border-2 border-emerald-300",
  research:
    "bg-teal-100 text-teal-700 hover:bg-teal-200 border-2 border-teal-300",
  "personal project":
    "bg-violet-100 text-violet-700 hover:bg-violet-200 border-2 border-violet-300",
};

// Default color for tags not in the mapping
export const defaultTagColor =
  "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-300";

export function getTagColor(tagName: string): string {
  return tagColors[tagName.toLowerCase()] || defaultTagColor;
}
