import React from "react";

function NavbarItem({ icon, name ,isOpen}) {
    
  return (
    <div className="text-white flex items-center gap-4 text-[15px]justify-around cursor-pointer hover:underline underline-offset-8 mb-2">
      {icon} 
      {isOpen ? <h2>{name}</h2> :<h2 className="hidden lg:block">{name}</h2>}
    </div>
  );
}

export default NavbarItem;
