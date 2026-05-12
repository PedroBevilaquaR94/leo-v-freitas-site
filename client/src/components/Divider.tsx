export default function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12 md:py-16">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent/30" />
      <div className="text-accent text-xl tracking-widest">◆ ◆ ◆</div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent/30" />
    </div>
  );
}
