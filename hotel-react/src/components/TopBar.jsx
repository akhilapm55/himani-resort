export default function TopBar() {
  return (
    <div className="hidden md:block bg-dark-bg text-white/60 text-[13px] py-2 relative z-[999]">
      <div className="max-w-container mx-auto px-5 flex justify-between items-center">
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">Payment Options</a>
          <a href="#" className="hover:text-accent transition-colors">My Booking</a>
          <a href="#" className="hover:text-accent transition-colors">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-accent transition-colors">Contact</a>
        </div>
        <div className="flex gap-[14px]">
          <a href="#" className="text-accent">EN</a>
          <a href="#" className="hover:text-accent transition-colors">HI</a>
          <a href="#" className="hover:text-accent transition-colors">KN</a>
        </div>
      </div>
    </div>
  );
}
