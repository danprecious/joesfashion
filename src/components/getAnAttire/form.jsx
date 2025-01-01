export const GetAnAttireForm = () => {
  return (
    <form className="py-7">
      <div className="my-5">
        <input
          name="clientName"
          id="clientName"
          placeholder="Enter your name..."
          type="text"
          className="py-2 px-3 w-full text-sm rounded-md"
        />
      </div>

      <div className="my-5">
        <textarea
          name="clientMessage"
          id="clientMessage"
          placeholder="Tell us your style and how you want it delivered"
          className="py-2 px-3 w-full text-sm rounded-md"
        />
      </div>

      <div className="flex justify-center my-5">
        <button className="bg-black px-6 text-white py-3 rounded-md">
            Send request
        </button>
      </div>
    </form>
  );
};
