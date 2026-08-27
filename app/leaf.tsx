export default function Leaf({ size }: { size: number }) {
  return (
    <svg className="leaf" width={size} height={size} viewBox="0 0 64 64">
      <use href="#ivyLeaf" />
    </svg>
  );
}
