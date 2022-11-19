import LayoutFullUser from '../../component/layout';
import Slider from '../../component/slider';
import Event from './events/Event';
import News from './news/News';

const HomePage = () => {
  return (
    <LayoutFullUser>
      <div className="my-[20px]">
        <Slider />
      </div>
      <div className="mx-[20%] mb-[20px] bg-[#F3F4F6] px-[24px] py-[20px]">
        <News />
        <Event />
      </div>
    </LayoutFullUser>
  );
};

export default HomePage;
