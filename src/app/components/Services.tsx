import { FaRegHeart, FaRegLightbulb, FaRegStar } from "react-icons/fa";
const Services = () => {
  return (
    <section>
      <div className=" max-w-[1160px] mx-auto py-32">
        {/*serivces-head*/}
        <div className="mx-auto text-center  text-[#5a748e] w-[769px]">
          <h1 className="text-[44px] font-semibold">
            Beautiful. Clean. Responsive.
          </h1>
          <p className="text-[22px] mt-4 mb-20">
            REEN is a high-quality solution for those who want a beautiful
            website in no time. It's fully responsive and will adapt itself to
            any mobile device. iPad, iPhone, Android, it doesn't matter. Your
            content will always looks its absolute best.
          </p>
        </div>
        {/*services-content*/}
        <div className="grid grid-cols-3">
          {/* service-1 */}
          <div className="grid grid-cols-[auto,1fr] gap-7  ">
            <div className="mt-1">
              <FaRegHeart size={50} className="text-[#00bc9c]" />
            </div>
            <div>
              <h1 className="mb-2 text-[#506a85] text-[26px] font-semibold">
                Passion
              </h1>
              <p className="text-[#73879c] text-[16px] text-ellipsis">
                Magnis modipsae que lib voloratati
                <br />
                andigen daepeditem quiate re porem
                <br />
                aut labor.Laceaque quiae sitiorem rest <br /> non restibusaes
                maio es dem tumquam
                <br />
                core posae volor remped modis volor.
              </p>
            </div>
          </div>
          {/* service-2 */}
          <div className="grid grid-cols-[auto,1fr] gap-7  ">
            <div className="mt-1">
              <FaRegLightbulb size={50} className="text-[#00bc9c]" />
            </div>
            <div>
              <h1 className="mb-2 text-[#506a85] text-[26px] font-semibold">
                Creativity
              </h1>
              <p className="text-[#73879c] text-[16px] text-ellipsis">
                Magnis modipsae que lib voloratati
                <br />
                andigen daepeditem quiate re porem
                <br />
                aut labor.Laceaque quiae sitiorem rest <br /> non restibusaes
                maio es dem tumquam
                <br />
                core posae volor remped modis volor.
              </p>
            </div>
          </div>
          {/* service-3 */}
          <div className="grid grid-cols-[auto,1fr] gap-7  ">
            <div className="mt-1">
              <FaRegStar size={50} className="text-[#00bc9c]" />
            </div>
            <div>
              <h1 className="mb-2 text-[#506a85] text-[26px] font-semibold">
                Quality
              </h1>
              <p className="text-[#73879c] text-[16px] text-ellipsis">
                Magnis modipsae que lib voloratati
                <br />
                andigen daepeditem quiate re porem
                <br />
                aut labor.Laceaque quiae sitiorem rest <br /> non restibusaes
                maio es dem tumquam
                <br />
                core posae volor remped modis volor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
