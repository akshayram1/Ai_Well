import aquifer from "../../assets/aquifer.svg";
import "../../fonts.css";

const InfoPage = () => {
  return (
    <div className="font-poppins-400">
      <div className="flex">
        <div className="w-1/2 p-[3em]">
          <h1 className="text-[2em] font-bold">Information of Ground Water:</h1>
          <p className="text-justify py-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            similique quos eaque ducimus voluptatum enim natus, quis tempora eos
            consequatur quam recusandae assumenda id laborum, quod accusantium
            velit veritatis nesciunt quasi veniam nemo fuga? Temporibus earum
            dignissimos ipsam aliquid neque iusto odio, corrupti quasi amet,
            exercitationem quia explicabo harum fugiat tempora atque laudantium
            provident magni quae reiciendis eius adipisci. Magni doloremque
            perferendis vitae officia nesciunt facere aliquam quia tempora fuga
            amet cupiditate dolorum, unde sint, ipsam rerum qui optio architecto
            consectetur! Voluptatibus sit odit, a totam magnam sint molestiae
            dolor cumque quae error fuga nisi ad reiciendis minima mollitia
            tempore.
          </p>
          <h3 className="font-bold">
            Things you should know before digging the well
          </h3>
          <ul className="list-disc">
            <li className="ml-[2em] my-2">Soil Type</li>
            <li className="ml-[2em] my-2">Aquifer type</li>
            <li className="ml-[2em] my-2">Water discharge</li>
          </ul>
        </div>
        <div>
          <img src={aquifer} alt="" className="p-[2em]" />
        </div>
      </div>

      {/* cards */}
      <div>
        <div className="flex flex-col justify-center">
          <div className="flex mb-[2em] w-auto h-[20em] shadow-md p-5  border rounded-xl mx-[4em]">
            <div>
              <h1 className="text-black text-[2em] font-bold my-auto">
                Soil Type
              </h1>
              <div className="flex justify-center">
                <p className="text-black text-[1em] mt-5 mr-5 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  voluptatum, doloremque, quibusdam, voluptatem quas quae
                  voluptates cumque quod nesciunt ipsa laborum. Quisquam, quas
                  voluptatum. Quisquam, quas voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed suscipit repellat animi amet aperiam repellendus soluta. Quo animi ratione recusandae? Beatae neque blanditiis, sed voluptatibus reiciendis modi asperiores soluta natus optio quod. Totam dicta possimus sequi quasi nihil veniam! Ullam optio neque culpa totam nesciunt fugit eos, cum nostrum?
                </p>
              </div>
            </div>

            <img src={aquifer} alt="" width={200} />
          </div>

          <div className="flex mb-[2em] w-auto h-[20em] shadow-md p-5  border rounded-xl mx-[4em]">
            <div>
              <h1 className="text-black text-[2em] font-bold my-auto">
                Aquifer Type
              </h1>
              <div className="flex justify-center">
                <p className="text-black text-[1em] mt-5 mr-5 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  voluptatum, doloremque, quibusdam, voluptatem quas quae
                  voluptates cumque quod nesciunt ipsa laborum. Quisquam, quas
                  voluptatum. Quisquam, quas voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed suscipit repellat animi amet aperiam repellendus soluta. Quo animi ratione recusandae? Beatae neque blanditiis, sed voluptatibus reiciendis modi asperiores soluta natus optio quod. Totam dicta possimus sequi quasi nihil veniam! Ullam optio neque culpa totam nesciunt fugit eos, cum nostrum?
                </p>
              </div>
            </div>

            <img src={aquifer} alt="" width={200} />
          </div>


          <div className="flex mb-[2em] w-auto h-[20em] shadow-md p-5  border rounded-xl mx-[4em]">
            <div>
              <h1 className="text-black text-[2em] font-bold my-auto">
                Water Discharge Level
              </h1>
              <div className="flex justify-center">
                <p className="text-black text-[1em] mt-5 mr-5 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  voluptatum, doloremque, quibusdam, voluptatem quas quae
                  voluptates cumque quod nesciunt ipsa laborum. Quisquam, quas
                  voluptatum. Quisquam, quas voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed suscipit repellat animi amet aperiam repellendus soluta. Quo animi ratione recusandae? Beatae neque blanditiis, sed voluptatibus reiciendis modi asperiores soluta natus optio quod. Totam dicta possimus sequi quasi nihil veniam! Ullam optio neque culpa totam nesciunt fugit eos, cum nostrum?
                </p>
              </div>
            </div>

            <img src={aquifer} alt="" width={200} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoPage;
