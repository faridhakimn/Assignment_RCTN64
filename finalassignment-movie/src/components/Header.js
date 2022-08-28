
import Search from './Search';

export default function Header() {
  return (
    <div className="flex flex-col bg-Orange items-center justify-around h-16  md:space-y-0 md:mt-0 md:mb-0 md:flex-row">
      <div>
          <div style={{ fontSize: 30 }} className="flex items-center justify-center font-bold text-white">
            FinProH8
          </div>
      </div>
      <div className="flex items-center justify-center ">
        <Search search="search" />
      </div>
    </div>
  );
}
