import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Band1 from "../assets/images/band1.jpg";
import Band2 from "../assets/images/band2.jpg";
import Band3 from "../assets/images/band3.jpg";
import Band4 from "../assets/images/band4.jpg";
import Band5 from "../assets/images/band5.jpg";
import Band6 from "../assets/images/band6.jpg";
import Band7 from "../assets/images/band7.jpg";

function Card({ image, title, details }) {
  return (
    <div className="min-w-[80%] md:min-w-[40%]">
      <img
        src={image}
        alt={title}
        className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
      />
      <h5 className="mt-2">{title}</h5>
      <h6>{details}</h6>
    </div>
  );
}
function Carousel() {
  return (
    <div className="flex">
      <div
        id="previous"
        className="relative -top-8 flex cursor-pointer items-center justify-center p-2 text-5xl"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div
        id="carousel"
        className="mt-4 flex w-full flex-1 snap-x gap-4 overflow-x-auto scroll-smooth pb-5"
      >
        <Card
          image={Band1}
          title={"Corduroy Gary"}
          details={"1st July 9pm - Main Stage"}
        />
        <Card
          image={Band2}
          title={"Corduroy Gary"}
          details={"1st July 9pm - Main Stage"}
        />
        <Card
          image={Band3}
          title={"Corduroy Gary"}
          details={"1st July 9pm - Main Stage"}
        />
        <Card
          image={Band4}
          title={"Corduroy Gary"}
          details={"1st July 9pm - Main Stage"}
        />
        <Card
          image={Band5}
          title={"Corduroy Gary"}
          details={"1st July 9pm - Main Stage"}
        />
        <Card
          image={Band6}
          title={"Corduroy Gary"}
          details={"1st July 9pm - Main Stage"}
        />
        <Card
          image={Band7}
          title={"Corduroy Gary"}
          details={"1st July 9pm - Main Stage"}
        />
      </div>
      <div
        id="next"
        className="relative -top-8 flex cursor-pointer items-center justify-center p-2 text-5xl"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}

function HeadLiners() {
  return (
    <div className="mx-auto mt-20 max-w-screen-lg text-zinc-900">
      <h2>Headliners</h2>
      <p>
        Experience the sonic delight from these made-up artists across 7 days
        that music fans are calling “one of the many gigs that will happen this
        year”
      </p>
      <Carousel />
    </div>
  );
}

export default HeadLiners;
